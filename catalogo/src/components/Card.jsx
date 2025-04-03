import estilo from './Card.module.css';

export function Card({ movie }) {
    return (
        <div className={estilo.container}>
            <h3>{movie.title}</h3>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title || 'Poster do filme'}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/500x750?text=Imagem+Indisponível')} // Fallback para imagem ausente
            />
            {/* <p>{movie.overview}</p> */}
            <p>{movie.release_date}</p>
            <p>{movie.language}</p>
        </div>
    );
}