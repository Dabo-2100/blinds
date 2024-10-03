import { useNavigate } from "react-router-dom"
import "./Products.scss";
export default function Product(props) {
    const navigate = useNavigate();
    return (
        <div className={"card myProduct " + props.className} style={{ width: "18rem" }}>
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className={`card-title ${props.isDark ? 'dark' : null}`}>{props.name}</h5>
                <p className="card-text">Price : {props.price}$</p>
                <a href="#" className="btn btn-primary" onClick={() => navigate('products')}>Go somewhere</a>
            </div>
        </div>
    )
}
