import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            <a className="nav-link text-light" href="#">Features</a>
                            <a className="nav-link text-light" href="#">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar