import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-white p-3" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Home </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">About</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
