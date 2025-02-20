# Movie Recommendation System

A modern movie recommendation system with a beautiful React frontend and Python backend.

## Dataset

The main dataset file `TMDB_movie_dataset_v11.csv` is too large for GitHub. You can download it from [Kaggle: TMDB Movies Dataset 2023 (930k+ movies)](https://www.kaggle.com/datasets/asaniczka/tmdb-movies-dataset-2023-930k-movies) and place it in the `backend/data/` directory.

Note: You'll need a Kaggle account to download the dataset. After downloading, place the file in the `backend/data/` directory.

## Project Structure

- `frontend/`: React-based frontend with TypeScript and Tailwind CSS
- `backend/`: Python-based backend API
- `notebooks/`: Jupyter notebooks for data analysis and model development
- `Demo files/`: Project demo and screenshots

## Setup Instructions

1. Clone the repository
2. Download the dataset file and place it in `backend/data/`
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
4. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```
6. Start the backend:
   ```bash
   cd backend
   python movie_recommender_api.py
   ```

## Features

- Modern, responsive UI
- Real-time movie recommendations
- Detailed movie information with posters and trailers
- Similar movies suggestions
- Search functionality

## Technologies Used

- Frontend:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite

- Backend:
  - Python
  - FastAPI
  - Pandas
  - Scikit-learn

## Demo

Check out the demo video in the `Demo files/` directory to see the system in action.

## Prerequisites
1. Python 3.8+ (Anaconda is optional but recommended)
2. Node.js and npm
3. Git

## Installation and Setup

### Clone the Repository
```bash
git clone <repository-url>
cd movie-recommender
```

### Backend Setup
1. Create and activate a virtual environment (choose one method):
   ```bash
   # Using venv (Python's built-in virtual environment)
   python -m venv venv
   
   # On Windows
   .\venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate

   # Or using Anaconda (if installed)
   conda create -n movie-recommender python=3.8
   conda activate movie-recommender
   ```

2. Install Python dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. Run the backend server:
   ```bash
   python movie_recommender_api.py
   ```
   The backend server will start at: http://127.0.0.1:5000

### Frontend Setup
1. Open a new terminal window
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The frontend will start at: http://localhost:5173

## Usage
1. Open your web browser
2. Go to http://localhost:5173
3. Start exploring movie recommendations!

## Features
- Movie recommendations based on user preferences
- Interactive user interface
- Real-time search and filtering
- Personalized recommendations

## Troubleshooting
- **Port Conflicts**: Make sure ports 5000 and 5173 are available
- **Package Issues**: 
  - Backend: Verify virtual environment is activated and requirements are installed
  - Frontend: Run `npm install` if modules are missing
- **Python Version**: Ensure you're using Python 3.8 or higher

## Development
- Backend runs in debug mode by default
- Frontend hot-reloads for development
- Use `Ctrl+C` to stop either server

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## License
[Add your license here]

## Note
This is a development setup. For production deployment, additional configuration and security measures are required. 