import { Link } from "react-router-dom"

import {FaStar} from 'react-icons/fa'

const imageURL = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
        <img src={imageURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average ? movie.vote_average.toFixed(1) : "Sem avaliação"}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}> Detalhes</Link>}
    </div>
  )
}

export default MovieCard