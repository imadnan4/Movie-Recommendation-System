# Movie Recommendation System

A sophisticated movie recommendation system that combines the power of machine learning with a modern web interface. This project uses the TMDB Movies Dataset to provide personalized movie recommendations based on user preferences and viewing history. The system features a React-based frontend with TypeScript and Tailwind CSS for a beautiful, responsive UI, and a Python backend that implements advanced recommendation algorithms.

### Key Highlights
- 🎬 Access to 930,000+ movies from TMDB dataset
- 🎯 Personalized movie recommendations
- 🎨 Modern, responsive UI with dark mode
- 🚀 Fast and efficient search functionality
- 📱 Mobile-friendly design
- 🔄 Real-time updates and suggestions

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

MIT License

Copyright (c) 2024 Adnan

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
This is a development setup. For production deployment, additional configuration and security measures are required. 