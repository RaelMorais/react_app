import axios from "axios";
// import estilo from "./Lista.modules.css";
import React, {useState, useEffect} from "react";
import { Card } from "./Card";



const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';





export function Lista(){
    const[movies, setMovies] = useState([])
    // Parmetros () -> Scripts {} -> Dependencias [] \\   
    useEffect(() => {
        axios.get(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            .then(response =>{
                console.log(response.data.results);
                setMovies(response.data.results);

            })
            .catch(error => {
                console.error('Erro ao buscar filme', error);
            });
    }, []);

    return(
        <div>
            <figure>
                {movies.map(movie =>(
                    <Card key={movie.id}
                    movie={movie}
                    ></Card>
                ))}
            </figure>
        </div>
    );
}