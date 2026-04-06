import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Movie = () => {
    const [movie, setMovie] = useState(null);
    const [title, setTitle] = useState("Guardians of the Galaxy");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Initial fetch on component mount
    useEffect(() => {
        fetchMovie("Guardians of the Galaxy");
    }, []);

    const fetchMovie = async (searchTitle = title) => {
        if (!searchTitle) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchTitle)}&apikey=19e1aa33`);
            const data = await response.json();

            if (data.Response === "True") {
                setMovie(data);
            } else {
                setMovie(null);
                setError(data.Error);
            }
        } catch (err) {
            console.error("Error fetching movie:", err);
            setError("Failed to fetch movie data.");
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        fetchMovie();
    }

    return (
        <div>

            <h1>Movie Explorer</h1>
            <Link to="/">Home</Link>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Search for movies..."
                />
                <button type="submit">Search</button>
            </form>

            {loading ? (
                <div>Searching for movies...</div>
            ) : error ? (
                <div>
                    <strong>Error:</strong> {error}
                </div>
            ) : movie && movie.Search ? (
                <div>
                    {movie.Search.map(m => (
                        <div key={m.imdbID}>
                            {m.Poster !== "N/A" ? (
                                <img src={m.Poster} alt={m.Title} />
                            ) : (
                                <div>No Poster</div>
                            )}
                            <h3>{m.Title}</h3>
                            <div>
                                <span>{m.Year}</span>
                                <span>{m.Type.toUpperCase()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    Start typing to search for your favorite films.
                </div>
            )}
        </div>
    )
}

export default Movie

