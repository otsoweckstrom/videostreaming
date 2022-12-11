import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'
import Header from './components/Header'
import Country1 from './pages/Country1'
import Country2 from './pages/Country2'
import Country3 from './pages/Country3'

function App() {
    const [country, setCountry] = useState('')
    const [MovieList, setMovieList] = useState([])

    const handleFinlandClick = () => {
        setCountry('finland')
        setMovieList([])
        Axios.get('http://localhost:3001/api/get/finland').then((response) => {
            setMovieList(response)
        })
        console.log(MovieList)
    }
    const handleSpainClick = () => {
        setCountry('spain')
        setMovieList([])
        Axios.get('http://localhost:3001/api/get/spain').then((response) => {
            setMovieList(response)
        })
        console.log(MovieList)
    }
    const handleUSAClick = () => {
        setCountry('usa')
        setMovieList([])
        Axios.get('http://localhost:3001/api/get/usa').then((response) => {
            setMovieList(response)
        })
        console.log(MovieList)
    }

    return (
        <div className="App">
            <div>
                <Header></Header>
            </div>
            <div className="Buttons">
                <button onClick={() => handleFinlandClick()}>Finland</button>
                <button onClick={() => handleSpainClick()}>Spain</button>
                <button onClick={() => handleUSAClick()}>USA</button>
            </div>
            <div className="movielist">
                {country === 'finland' && (
                    <div className="movielist">
                        {MovieList.data?.length > 0 &&
                            MovieList.data.map((val) => {
                                return (
                                    <div>
                                        <h1>Title: {val.title}</h1>
                                    </div>
                                )
                            })}
                        <h1 className="movietitle">Title</h1>
                        <h1 className="movietitle">Title</h1>
                    </div>
                )}
                {country === 'spain' && (
                    <div>
                        {MovieList.data?.length > 0 &&
                            MovieList.data.map((val) => {
                                return (
                                    <div>
                                        <h1>Title: {val.title}</h1>
                                    </div>
                                )
                            })}
                        <h1>Title</h1>
                    </div>
                )}
                {country === 'usa' && (
                    <div>
                        {MovieList.data?.length > 0 &&
                            MovieList.data.map((val) => {
                                return (
                                    <div>
                                        <h1>Title: {val.title}</h1>
                                    </div>
                                )
                            })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
