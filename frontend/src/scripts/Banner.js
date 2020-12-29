import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import '../styles/Banner.css'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data[Math.floor(Math.random() * request.data.length - 1)])
            return request
        }fetchData()
    }, [])
    function trancate(str, n) {
        return str?.length > 150 ? str.substr(0, n-1) + '...' : str
    }
    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${movie?.moviePoster})`,
                backgroundPosition: 'center center'
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.movieTitle}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">playlist</button>  
                </div>
                <h1 className="banner__description">{trancate(movie.movieDescription, 150)}</h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
