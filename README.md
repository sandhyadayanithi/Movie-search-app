# 🎬 Movie Search App

A sleek and interactive React-based movie discovery application that lets you search for movies, explore popular titles, and build your personal favorites collection.

## ✨ Features

- **Search Movies**: Real-time movie search powered by The Movie Database (TMDb) API
- **Popular Movies**: Browse trending and popular movies
- **Favorites Management**: Save your favorite movies with persistent storage
- **Detailed Movie Info**: View comprehensive details including synopsis, ratings, genres, and release dates
- **Responsive Design**: Fully responsive grid layout that adapts to all screen sizes
- **Smooth Interactions**: Hover effects and animations for enhanced user experience

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDb API Key ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd movie-search-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_KEY=your_tmdb_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **React 19.2.0** - UI library with latest features
- **Vite 7.2.4** - Lightning-fast build tool
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **TMDb API** - Movie data source

## 📁 Project Structure

```
movie-search-app/
├── src/
│   ├── components/
│   │   ├── Card.jsx              # Movie card with hover effects
│   │   ├── CardDetails.jsx       # Modal with detailed movie info
│   │   ├── Favourites.jsx        # Favorites page component
│   │   └── Popular.jsx           # Search and popular movies page
│   ├── contexts/
│   │   └── FavoritesContext.jsx  # Global state for favorites
│   ├── assets/
│   │   └── genres.js             # Genre ID to name mapping
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Tailwind imports
├── .env                          # Environment variables (API key)
├── package.json
└── vite.config.js
```

## 🎯 How to Use

1. **Search for Movies**: Type a movie name in the search bar and click "Search"
2. **Browse Popular**: View trending movies on the main page
3. **View Details**: Hover over a movie card and click "Details" for more information
4. **Add to Favorites**: Click the star icon to save movies to your favorites
5. **Manage Favorites**: Switch to the "Favourites" tab to view your saved movies

## 🔑 Key Features Explained

### Context API for State Management
The app uses React Context to manage favorites across components, ensuring a single source of truth for your saved movies.

### Local Storage Persistence
Your favorites are automatically saved to browser localStorage, so they persist even after closing the browser.

### Responsive Grid Layout
The movie grid adapts seamlessly:
- 2 columns on mobile
- 3 columns on medium screens (md)
- 4 columns on large screens (lg)
- 5 columns on extra-large screens (xl)

### Dynamic API Integration
- Fetches popular movies on initial load
- Searches movies based on user input
- Displays real-time results from TMDb

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Styling
The app uses Tailwind CSS. Modify utility classes in components or extend the Tailwind configuration for custom styles.

### API Endpoints
To add more features, explore the [TMDb API documentation](https://developers.themoviedb.org/3) for additional endpoints.

## 🐛 Known Limitations

- Movies without posters may not display correctly
- Search is case-sensitive based on TMDb's API behavior
- Duplicate favorites prevention is based on movie ID only

## 🔮 Future Enhancements

- [ ] Remove from favorites functionality
- [ ] Movie categories/filters (by genre, year, rating)
- [ ] Pagination for search results
- [ ] User authentication
- [ ] Watch later list
- [ ] Movie trailers integration
- [ ] Dark/light theme toggle

## 📄 License

This project is open source and available under the MIT License.
