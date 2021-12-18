import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(movie){
    const id = movie.id
    const medium_cover_image = movie.medium_cover_image
    const title = movie.title
    const summary = movie.summary
    const genres = movie.genres

    return (
        <div>
            <img src={medium_cover_image} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres !== undefined ? genres.map(
                    g => <li>{g}</li>
                    ):null}
            </ul>
        </div>
    )}

Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
export default Movie;