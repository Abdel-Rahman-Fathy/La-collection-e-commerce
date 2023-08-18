import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Products() {
    const [Data, setData] = useState([])
    const [filter, setfilter] = useState(Data)
    const [loading, setloading] = useState(false);
    let componentMount = true;
    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            const res = await fetch("https://fakestoreapi.com/products")
            if (componentMount) {
                setData(await res.clone().json())
                setfilter(await res.json())
                setloading(false)

            }
            return componentMount = false;

        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <div className="vh-100 d-flex align-items-center justify-content-center">
                <i className='fa-solid fa-spinner fa-spin fs-2 '></i>
            </div>
        )
    }
    const filterProduct = (call) => {
        const updateList = Data.filter((x) => x.category === call);
        setfilter(updateList);

    }
    const ShowProduct = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center my-5 ">
                    <button className="btn btn-outline-dark me-2" onClick={() => { setfilter(Data) }}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("men's clothing") }}>Men's clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("women's clothing") }} >Women's clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("jewelery") }}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("electronics") }}>Electronic</button>
                </div>
                {filter.map((product, i) => <div key={i} className="col-md-3">
                    <div className="card">
                        <img src={product.image} className="card-img-top px-4" alt={product.title} height='250px' />
                        <div className="card-body text-center">
                            <h5 className="card-title text-decoration-none">{product.title.substring(0, 12)}</h5>
                            <p className="card-text lead fw-bold">${product.price}</p>
                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                        </div>
                    </div>
                </div >


                )
                }


            </>
        )
    }
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row gy-3 justify-content-center ">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}
