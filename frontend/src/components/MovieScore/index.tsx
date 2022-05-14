import MoviesStars from "components/MovieStars";
import './styles.css'

type Props = {
    score: number;
    count: number;
}

function MoviesScore( {score,count} : Props) {
    

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MoviesStars score={score} />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}
export default MoviesScore;