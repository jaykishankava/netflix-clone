import React from 'react'
import { IoMdSearch } from "react-icons/io";
import "./Header.css"



function Header() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 header">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid ps-5 pe-5 pb-3 pt-3 ">
                                <a className="navbar-brand" href="#">
                                    <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" style={{ width: "150px", height: "45px" }} />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item-1">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Tv Series</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Movies</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-3">
                                        <input type="text" id="disabledTextInput" className="form-control" placeholder="search Movies...." />
                                    </div>
                                <div className="icon mb-3 ms-2" style={{fontSize:'40px'}}>
                                    <IoMdSearch />
                                </div>
                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header