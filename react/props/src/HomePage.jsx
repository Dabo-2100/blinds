import Product from "./components/Product";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProducts(res.data);
        })
    }, [])
    return (
        <div className="col-12 container d-flex flex-wrap gap-3">
            <div className="col-12">
                <button className="btn btn-primary" onClick={() => setIsDark(!isDark)}>Toggle Mode</button>
            </div>
            {
                products.map((el, index) => {
                    return (
                        <Product
                            key={el.id}
                            imgUrl={el.image}
                            price={el.price}
                            name={el.title}
                            id={el.id}
                            isDark = {isDark}
                        />
                    )
                })
            }
        </div>
    )
}
