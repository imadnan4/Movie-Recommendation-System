# Movie Recommendation System

A content-based movie recommendation system with a modern web interface. The backend is built with Python and Flask, using a pre-processed movie dataset and cosine similarity to recommend movies. The frontend is built with React, TypeScript, and Tailwind CSS. Movie posters and details are fetched live from the [TMDB API](https://www.themoviedb.org/documentation/api).

### Key Highlights
- 🎯 Content-based movie recommendations (CountVectorizer + cosine similarity)
- 🎬 Movie posters, trailers, cast, and similar movies via the TMDB API
- 🎨 Modern, responsive UI with a dark theme
- 🚀 Fast search and real-time results
- 📱 Mobile-friendly design

## How It Works

1. The backend loads `backend/data/processed_movies.csv`, which contains pre-processed movie data with a `combined_features` column (genres, keywords, cast, etc.).
2. A `CountVectorizer` converts the combined features into a feature matrix and computes pairwise cosine similarity across all movies.
3. When a movie title is submitted, the backend returns the 5 most similar movies based on cosine similarity.
4. For each recommended movie, the backend fetches the poster image from the TMDB API.
5. The frontend (React + TypeScript) calls the Flask API at `http://localhost:5000/recommend` and displays the results. Clicking a movie card fetches full details (overview, cast, trailer, similar movies) via the `/api/movie/<id>` endpoint.

## Project Structure

```
.
├── backend/
│   ├── data/
│   │   └── processed_movies.csv      # Pre-processed movie dataset
│   └── movie_recommender_api.py      # Flask API server
├── frontend/
│   ├── src/
│   │   ├── components/               # React UI components
│   │   ├── hooks/                    # Custom hooks (recommendations, movie details)
│   │   ├── types/                    # TypeScript type definitions
│   │   └── App.tsx                   # Root component
│   ├── package.json
│   └── vite.config.ts
├── notebooks/
│   └── Project Movie Recommender(Rule-Based).ipynb  # Jupyter notebook for exploration
└── requirements.txt                  # Python dependencies
```

## Technologies Used

**Frontend**
- React 18
- TypeScript
- Tailwind CSS
- Vite
- lucide-react (icons)

**Backend**
- Python 3.8+
- Flask
- Flask-CORS
- Pandas
- scikit-learn (CountVectorizer, cosine similarity)
- NumPy
- Requests (TMDB API calls)

## Prerequisites

- Python 3.8+
- Node.js and npm
- Git

## Installation and Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Movie-Recommendation-System
```

### 2. Backend Setup

Create and activate a virtual environment:
```bash
# Using venv
python -m venv venv

# On Windows
.\venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

Install Python dependencies:
```bash
pip install -r requirements.txt
```

Start the Flask server:
```bash
cd backend
python movie_recommender_api.py
```
The backend will start at: **http://localhost:5000**

### 3. Frontend Setup

Open a new terminal, then:
```bash
cd frontend
npm install
npm run dev
```
The frontend will start at: **http://localhost:5173**

## Usage

1. Open your browser and go to http://localhost:5173
2. Type a movie title in the search bar and press **Get Recommendations**
3. The system returns 5 similar movies with posters fetched from TMDB
4. Click the **info** button on any movie card to see overview, cast, trailer, and similar movies

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/recommend` | Returns 5 recommended movies + poster URLs for a given `movie_title` |
| `GET`  | `/api/movie/<id>` | Returns full movie details (overview, cast, genres, trailer, similar movies) from TMDB |

**Example request to `/recommend`:**
```json
POST http://localhost:5000/recommend
Content-Type: application/json

{ "movie_title": "The Dark Knight" }
```

## Troubleshooting

- **Port conflicts**: Make sure ports `5000` (Flask) and `5173` (Vite) are free
- **Movie not found**: The movie title must exactly match a title in `processed_movies.csv`
- **Missing packages**: Re-run `pip install -r requirements.txt` (backend) or `npm install` (frontend)
- **Python version**: Python 3.8 or higher is required

## Development Notes

- The Flask backend runs in debug mode by default (`app.run(debug=True)`)
- The Vite dev server supports hot module replacement
- Use `Ctrl+C` to stop either server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License

Copyright (c) 2025 Adnan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Note

This is a development setup. For production deployment, additional configuration and security measures are required (e.g., move the TMDB API key to an environment variable, disable Flask debug mode, add HTTPS). 
