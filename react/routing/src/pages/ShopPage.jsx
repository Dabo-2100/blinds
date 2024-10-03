import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function ShopPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProducts(res.data);
        })

    }, [])

    return (
        <div className="col-12 d-flex">
            <div className="col-12 container d-flex flex-wrap gap-2">
                {
                    products.map((el, index) => {
                        return (
                            <div key={index} className="card" style={{ width: "18rem" }}>
                                <img src={el.image} className="card-img-top" style={{ height: "18rem", objectFit: "contain" }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{el.category}</h5>
                                    <p className="card-text">Price : {el.price} $</p>
                                    <Link to={`${el.id}`} className="btn btn-primary">
                                        Go somewhere
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
