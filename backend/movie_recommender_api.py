from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)  # Enabling Cross-Origin Resource Sharing

# Load data and compute similarity matrix
movies = pd.read_csv("data/processed_movies.csv")
vectorizer = CountVectorizer(max_features=5000, stop_words='english')
vector = vectorizer.fit_transform(movies['combined_features']).toarray()
similarity = cosine_similarity(vector)

# TMDB API Key and Base URL
TMDB_API_KEY = "e8d8a2fe1fce1f0e6a5357b4c7feb0f0"
TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

def fetch_poster(movie_title):
    search_url = "https://api.themoviedb.org/3/search/movie"
    params = {
        'api_key': TMDB_API_KEY,
        'query': movie_title
    }
    response = requests.get(search_url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        if data['results']:
            poster_path = data['results'][0].get('poster_path')
            if poster_path:
                return f"{TMDB_IMAGE_BASE_URL}{poster_path}"
    return ""

def recommend(movie_title):
    try:
        # Find the movie index
        movie_index = movies[movies['title'] == movie_title].index[0]
    except IndexError:
        return [], []  # Return empty lists if movie isn't found

    # Fetch recommendations
    distances = similarity[movie_index]
    movies_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:6]

    recommendations = []
    recommended_movies_poster = []
    for i in movies_list:
        recommended_movie_title = movies.iloc[i[0]].title
        recommendations.append(recommended_movie_title)
        recommended_movies_poster.append(fetch_poster(recommended_movie_title))

    return recommendations, recommended_movies_poster

def fetch_movie_details(movie_id):
    url = f"https://api.themoviedb.org/3/movie/{movie_id}"
    params = {
        'api_key': TMDB_API_KEY,
        'append_to_response': 'credits,videos,similar'
    }
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        return {
            'overview': data.get('overview', ''),
            'runtime': data.get('runtime', 0),
            'genres': [g['name'] for g in data.get('genres', [])],
            'cast': [
                {
                    'id': c['id'],
                    'name': c['name'],
                    'character': c['character'],
                    'profile_path': f"{TMDB_IMAGE_BASE_URL}{c['profile_path']}" if c['profile_path'] else None
                }
                for c in data.get('credits', {}).get('cast', [])[:10]
            ],
            'similar_movies': [
                {
                    'id': m['id'],
                    'title': m['title'],
                    'poster_path': f"{TMDB_IMAGE_BASE_URL}{m['poster_path']}" if m['poster_path'] else None
                }
                for m in data.get('similar', {}).get('results', [])[:5]
            ],
            'trailer_key': next(
                (v['key'] for v in data.get('videos', {}).get('results', []) 
                 if v['site'] == 'YouTube' and v['type'] == 'Trailer'),
                None
            )
        }
    return {}

@app.route('/api/movie/<int:movie_id>', methods=['GET'])
def get_movie_details(movie_id):
    details = fetch_movie_details(movie_id)
    return jsonify(details)

@app.route('/recommend', methods=['POST'])
def get_recommendations():
    data = request.json
    movie_title = data.get('movie_title')
    recommendations, posters = recommend(movie_title)
    return jsonify({"recommendations": recommendations, "posters": posters})

if __name__ == '__main__':
    app.run(debug=True)