import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

export default function ProductPage(props){
    const location = useLocation();
    const {product} = location.state;

    return (
        <>
            {product && 
            <div>
                <h1>{product.name}</h1>
                <h3>Price: ${product.price}</h3>
                <h3>Description: {product.description}</h3>
                <Link to="edit" state={{product}}>Editar</Link>
            </div> }
        </>

    )
}