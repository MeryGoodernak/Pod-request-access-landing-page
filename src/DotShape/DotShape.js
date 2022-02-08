import shapeAdrs from './images/bg-pattern-dots.svg';
import './Dotshape.css';

function shape(){
    return(
        <div className="dot-shape">
            <img src={shapeAdrs} alt="Design shape" />
        </div>
    )
}

export default shape;