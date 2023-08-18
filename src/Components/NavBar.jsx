import React from 'react'
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3  ">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        LA COLLECTION
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div className="buttons">
                            <NavLink to="/" className="btn btn-outline-dark ">
                                <i className="fa-solid fa-right-to-bracket pe-2"></i>
                                Login
                            </NavLink>
                            <NavLink to="/" className="btn btn-outline-dark ms-2 ">
                                <i className="fa-solid fa-user-plus pe-2"></i>
                                Register
                            </NavLink>
                            <NavLink to="/" className="btn btn-outline-dark ms-2">
                                <i className="fa-solid fa-cart-shopping pe-2"></i>
                                Cart(0)
                            </NavLink>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
