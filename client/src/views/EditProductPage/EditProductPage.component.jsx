import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editProduct, deleteProduct } from "../../services/products.service";

export default function EditProductPage(props){
    const location = useLocation();
    const {product} = location.state;
    const navigate = useNavigate();

    let [productTitle, setProductTitle] = useState(product.name);
    let [productPrice, setProductPrice] = useState(product.price);
    let [productDescription, setProductDescription] = useState(product.description);


    let sendForm = (event) => {
        event.preventDefault();
        editProduct(product._id, {
            name: productTitle,
            price: productPrice,
            description: productDescription
        }).then((response) => {
            navigate("/")
        }).catch((err) =>{
            console.log(err)
            console.log("Fail");
        })
    }

    return (
    <div>
        <h1>Editar producto</h1>
        <form onSubmit={sendForm}>
            <div>
                <label>Title</label>
                <input 
                    type="text" 
                    value={productTitle}  
                    onChange={(event) => {
                        setProductTitle(event.target.value);
                    }}/>
            </div>
            <div>
                <label>Price</label>
                <input 
                    type="number"
                    value={productPrice}  
                    onChange={(event) => {
                        setProductPrice(parseInt(event.target.value));
                    }}/>
            </div>
            <div>
                <label>Description</label>
                <input 
                    type="text" 
                    value={productDescription}  
                    onChange={(event) => {
                        setProductDescription(event.target.value);
                    }}/>
            </div>
            <button type="submit">Edit</button>
        </form>
        <button onClick={()=> {
                                deleteProduct(product._id)
                                    .then((data) => {
                                        navigate("/");
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    });
                            }}>Eliminar</button>
    </div>)
    
}