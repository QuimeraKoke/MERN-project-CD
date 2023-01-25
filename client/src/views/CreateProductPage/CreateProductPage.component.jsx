import "./style.css"
import CreateProduct from "../../components/CreateProduct/CreateProduct.component"
import ListProducts from "../../components/ListProducts/ListProduct.component"
import { useState } from "react"

export default function CreateProductPage(props){
    const [render, setRender] = useState();
        
    return (
        <div className="container">
            <div>
                <h1>Product Creation Framework</h1>
            </div>
           <CreateProduct callback={setRender}/>
           <hr />
           <ListProducts render={render}/>
        </div>
    )
}