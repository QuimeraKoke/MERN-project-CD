import { useEffect } from "react";
import { useState } from "react";
import { deleteProduct, getProducts } from "../../services/products.service";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './style.css'

export default function ListProducts(props){
    const [products, setProducts] = useState([])
    const MySwal = withReactContent(Swal)

    const fetchProducts = ()=>{
        getProducts()
            .then((data)=> {
                setProducts(data.data.result);
            })
            .catch((err)=>{
                console.log(err);
            })
        }

    useEffect(() =>{
        MySwal.showLoading();
        setTimeout(()=>{
            MySwal.hideLoading();
        }, 2000)
        fetchProducts();
    }, [props.render]);
    
    return (
        <div>
            <h1>All products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre producto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((product, index)=> 
                    <tr key={`${index}-row`}>
                        <td key={`${index}-name`}>{product.name}</td>
                        <td key={`${index}-action`}>
                            <button>
                                <Link state={{product: product}} to={product._id}>Editar</Link>
                            </button>
                            <br />
                            <button onClick={()=> {
                                MySwal.fire({
                                    title:"Desea eleminar el producto: " + product.name,
                                    icon:"warning",
                                    showConfirmButton: true,
                                    confirmButtonText: "Eliminar",
                                    cancelButtonText: "Cancelar",
                                    showCancelButton: true
                                }).then((value) => {
                                    if (value.isConfirmed){
                                        deleteProduct(product._id)
                                            .then((data) => {
                                                fetchProducts();
                                                MySwal.fire({
                                                    title: "El producto ha sido elimnido",
                                                    icon:"success"
                                                })
                                            })
                                            .catch((err)=>{
                                                console.log(err)
                                            });
                                    }
                                })
                                
                            }}>Eliminar</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}