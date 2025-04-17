import axios from "axios";
// import estilo from "./Lista.modules.css";
import React, {useState, useEffect} from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";



const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Serie(){
    const[movies, setMovies] = useState([]);
    const [SelectedMovie, setSelectedMovie] = useState(null);

    // Parmetros () -> Scripts {} -> Dependencias [] \\   
    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR`)
            .then(response =>{
                console.log(response.data.results);
                setMovies(response.data.results);

            })
            .catch(error => {
                console.error('Erro ao buscar filme', error);
            });
    }, []);

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };
    return(
        <div>
            <figure>
                {movies.map(element =>(
                    <Card key={element.id} element={element} onOpenModal={handleOpenModal} />
                ))}
            </figure>
            {/* {SelectedMovie && (
                <Modal element={SelectedMovie} onClose={handleCloseModal} getGenreNames={getGenreNames} />
            )} */}
        </div>
    );
}