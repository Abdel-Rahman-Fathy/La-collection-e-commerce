import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    const { id } = useParams();
    const [Product, setProduct] = useState([])
    const [loading, setloding] = useState(false)
    useEffect(() => {
        const getProduct = async () => {
            setloding(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setloding(false);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <div className="vh-100 d-flex align-items-center justify-content-center">
                <i className='fa-solid fa-spinner fa-spin fs-2 '></i>
            </div>
        )
    }
    return (
        <>
            {loading ? <Loading /> : <div className="container mt-5">
                <div className="row  mt-5 ">
                    <div className="col-md-3 border border-1 py-5 shadow-lg">
                        <img className='w-100' src={Product.image} alt={Product.title} width="350px" height='300px' />
                    </div>
                    <div className=' offset-1 col-md-8 d-flex align-items-center'>
                        <ul className='list-unstyled fs-2'>
                            <li> <strong>Title : </strong> {Product.title} </li>
                            <li> <strong>Price : </strong>$ {Product.price} </li>
                            <li> <strong>Rate : </strong> {Product?.rating?.count} </li>
                            <button className='btn btn-outline-dark me-3 px-4' >Add Cart</button>
                            <button className='btn btn-dark px-4' >Buy Now</button>
                        </ul>

                    </div>
                </div>
            </div>


            }


        </>
    )
}
