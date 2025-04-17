import estilo from './Card.module.css';

export function Card({element, onOpenModal }) {
    return (
        <div className={estilo.container}>
            <h3>{element.title}</h3>
            <img
                src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                onClick={() => onOpenModal(element)}

                alt={element.title || 'Poster do filme'}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/500x750?text=Imagem+Indisponível')} // Fallback para imagem ausente
            />
            {/* <p>{element.overview}</p> */}
            <p>{element.release_date}</p>
            <p>{element.language}</p>
        </div>
    );
}