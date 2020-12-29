import React, { useState, useEffect } from 'react'
import axios from './axios'
import '../styles/Row.css'
import Youtube from 'react-youtube'

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([''])
    const [trailer, setTrailer] = useState('')
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data)
            return request
        } fetchData()
    }, [fetchUrl])

    const handleClick = (movie) => {
        if (trailer) {
            setTrailer('');
        } else {
            const trailerParms = new URLSearchParams(new URL(movie?.movieTrailer).search);
            setTrailer(trailerParms.get('v'))
        }
    }
    const opts = {
        height: "390",
        width: '100%',
        playVars: {
            autoplay : 1
        }
    }
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        onClick={() => handleClick(movie)}
                        key = {movie.id}
                        src={movie.moviePoster}
                        className="row__poster"
                        alt={movie.movieTitle}
                    />
                ))}
            </div>
            {trailer && <Youtube videoId={trailer} opts={opts} />}
        </div>
    )
}

export default Row
