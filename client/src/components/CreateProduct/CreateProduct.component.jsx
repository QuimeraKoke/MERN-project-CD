import { useState } from "react"
import { createProduct } from "../../services/products.service";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./style.css"


export default function CreateProduct(props){
    let [productTitle, setProductTitle] = useState("");
    let [productPrice, setProductPrice] = useState(1);
    let [productDescription, setProductDescription] = useState("");
    let [errorTitle, setErrorTitle] = useState("");
    let [errorPrice, setErrorPrice] = useState("");
    let [errorDescription, setErrorDescription] = useState("");
    let navigate = useNavigate();
    const MySwal = withReactContent(Swal)

    let sendForm = (event) => {
        event.preventDefault();
        createProduct({
            name: productTitle,
            price: productPrice,
            description: productDescription
        }).then((response) => {
            console.log("Done");
            setProductDescription("");
            setProductTitle("");
            setProductPrice(1);
            props.callback(Math.random())
            MySwal.fire({
                title:"Su producto se ha creado satisfactoriamente",
                icon:"success"
            })
        }).catch((err) =>{
            console.log(err.response.data.error.errors)
            const {name, price, description} = err.response.data.error.errors;
            if (name){
                setErrorTitle(name.message)
            }
            if (price){
                setErrorPrice(price.message)
            }
            if (description){
                setErrorDescription(description.message)
            }
            console.log("Fail");
        })
    }

    return (<form onSubmit={sendForm}>
        <div>
            <label>Title</label>
            <input 
                type="text" 
                value={productTitle}  
                onChange={(event) => {
                    setProductTitle(event.target.value);
                }}/>
            <small style={{color: "red"}}>{errorTitle}</small>
        </div>
        <div>
            <label>Price</label>
            <input 
                type="number"
                value={productPrice}  
                onChange={(event) => {
                    setProductPrice(parseInt(event.target.value));
                }}/>
            <small style={{color: "red"}}>{errorPrice}</small>
        </div>
        <div>
            <label>Description</label>
            <input 
                type="text" 
                value={productDescription}  
                onChange={(event) => {
                    setProductDescription(event.target.value);
                }}/>
            <small style={{color: "red"}}>{errorDescription}</small>
        </div>
        <button type="submit">Create</button>
    </form>)
}