import estilos from './Modal.module.css'

export function Modal({ movie, onClose, getGenreNames }){
    if (!movie){
        return null;
    }

    console.log(movie);
    // const runtime = movie.runtime ? `${movie.runtime} minutos` : "Duração não disponível";
    return(

        <div className={estilos.modalback}>
        <div className={estilos.modalContainer}>
            <div className={estilos.modalHeader}>
                <h2>{movie.title}</h2>
                <button onClick={onClose}>X</button>
            </div>
            <div className={estilos.modalContent}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className={estilos.modalImage} // Aqui adicionamos a classe da imagem
                />
                <ul className={estilos.movieDetails}>
                    <li>{`Generos: ${getGenreNames(movie.genre_ids)}`}</li>
                    <li>{`Lançamento: ${movie.release_date}`}</li>
                    <li>{`Origem: ${movie.original_language}`}</li>
                </ul>
            </div>
        </div>
    </div>
    
    )
}