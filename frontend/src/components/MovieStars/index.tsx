import { ReactComponent as StarFull } from '../../assest/img/star-full.svg';
import { ReactComponent as StarHalf } from '../../assest/img/star-half.svg';
import { ReactComponent as StarEmpty } from '../../assest/img/star-empty.svg';
import './styles.css';
function MoviesStars(){
    return(
        <div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
</div>
    )
}
export default MoviesStars;