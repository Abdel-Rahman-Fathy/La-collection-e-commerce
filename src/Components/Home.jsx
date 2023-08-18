import React from 'react'
import Products from './Products'
export default function
    () {
    return (
        <>
            <div className="card text-bg-dark border-0 rounded-0">
                <img src='/image/bg.webp' className="card-img vh-100" alt="bg" />
                <div className="card-img-overlay mt-5 ">
                    <div className='container mt-5'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVEALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRINDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </>
    )
}
