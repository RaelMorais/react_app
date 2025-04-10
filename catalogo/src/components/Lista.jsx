import axios from "axios";
// import estilo from "./Lista.modules.css";
import React, {useState, useEffect} from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";



const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Lista(){
    const[movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [SelectedMovie, setSelectedMovie] = useState(null);

    // Parmetros () -> Scripts {} -> Dependencias [] \\   
    useEffect(() => {
        axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR`)
            .then(response =>{
                console.log(response.data.results);
                setMovies(response.data.results);

            })
            .catch(error => {
                console.error('Erro ao buscar filme', error);
            });

        axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
            .then(response => {
                setGenres(response.data.genres); // Salva a lista de gêneros
            })
            .catch(error => {
                console.error('Erro ao carregar gêneros', error);
            });
    }, []);

    const getGenreNames = (genreIds) => {
        return genreIds
          .map((id) => {
            const genre = genres.find((genre) => genre.id === id);
            return genre ? genre.name : null; // Retorna o nome do gênero ou null
          })
          .filter((name) => name) // Filtra os gêneros que não têm nome (caso haja algum ID inválido)
          .join(", "); // Junta os nomes dos gêneros com vírgula
      };

      
    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };
    return(
        <div>
            <figure>
                {movies.map(movie =>(
                    // <Card key={movie.id}
                    // movie={movie}
                    // onOpenModal={handleOpenModal}
                    // ></Card>
                    <Card key={movie.id} movie={movie} onOpenModal={handleOpenModal} />
                ))}
            </figure>
            {SelectedMovie && (
                <Modal movie={SelectedMovie} onClose={handleCloseModal} getGenreNames={getGenreNames} />
            )}
        </div>
    );
}