import pookieBear from '../../assets/IMG_4803.jpg'
import './Card.css'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={pookieBear} alt="Project 1"></img>
            <h2 className="card-title"> Project Name </h2>
            <p className="card-desc">Hurr durr text here for now</p>
        </div>
    );
}

export default Card