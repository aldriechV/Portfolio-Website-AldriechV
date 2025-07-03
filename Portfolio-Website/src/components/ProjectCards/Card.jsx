import './Card.css'

function Card(){
    return(
        <div className="card">
            <h2 className="card-title"> Real Time Traffic Data Analysis System </h2>
            <p className="card-desc">A real time Traffic Data Analysis System that allowed users to find and discover critical traffic insights, enhancing decision making in traffic management in real time.</p>
            <div className ="button-container">
                <button className="card-button"> More</button>
                <button className="card-button"> Link</button>
            </div>
        </div>
    );
}

export default Card