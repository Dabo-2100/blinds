import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
    const params = useParams();
    const [myProduct, setMyProduct] = useState({});
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
            setMyProduct(res.data)
        })
    }, []);

    return (
        <div>
            <img src={myProduct.image} height={200} />
            <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <td>{myProduct.title}</td>
                    </tr>
                    <tr>
                        <th>Product Desc</th>
                        <td>{myProduct.description}</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
