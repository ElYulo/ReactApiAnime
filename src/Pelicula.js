export default function Pelicula(props) {
    
    return (
        <div className="movie-item-style-2">
            
            <img src={props.img}  width="175" height="175" />
            <div className="mv-item-infor">
                <h6>
                    
                    <a href="moviesingle.html">{props.anime}</a>
                    </h6>
                    <h2>{props.titulo}</h2>
                <p className="describe">{props.descripcion}</p>
                <p className="run-time"> Categoria:     
                <span>{props.categoria} </span>     
                <span>{props.fecha}</span></p>
                <p>StartDate: <a href="#">{props.date}</a></p>
                <p>Estado: <a href="#">{props.estado}</a> </p>
            </div>
        </div>
    )
}
//
