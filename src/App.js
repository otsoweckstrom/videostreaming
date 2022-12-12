import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'
import Header from './components/Header'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from '@mui/material'

function App() {
    const [country, setCountry] = useState('')
    const [MovieList, setMovieList] = useState([])

    const handleCountryClick = (country) => {
        setCountry(country)

        setMovieList([])
        Axios.get('http://localhost:3001/api/get/' + country).then(
            (response) => {
                setMovieList(response)
            }
        )
    }

    const handleBackClick = () => {
        setCountry('')
    }

    return (
        <div className="App">
            <div className="headercontainer">
                <Header></Header>
            </div>
            {country !== '' && (
                <Button
                    className="backbutton"
                    onClick={() => handleBackClick()}
                >
                    Takaisin
                </Button>
            )}
            {country === '' && (
                <div className="Buttons">
                    <Button onClick={() => handleCountryClick('finland')}>
                        Finland
                    </Button>
                    <Button onClick={() => handleCountryClick('spain')}>
                        Spain
                    </Button>
                    <Button onClick={() => handleCountryClick('usa')}>
                        USA
                    </Button>
                </div>
            )}
            <img src="images/placeholder2.jpg"></img>

            {country !== '' && (
                <div className="movielist">
                    {MovieList.data?.length > 0 &&
                        MovieList.data.map((val) => {
                            return (
                                <div className="movie">
                                    <Card sx={{ width: 220 }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="./images/placeholder.jpg"
                                            alt="movieposter"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                {val.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {console.log(val)}
                                                {val.summary}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            )
                        })}
                </div>
            )}
        </div>
    )
}

export default App
