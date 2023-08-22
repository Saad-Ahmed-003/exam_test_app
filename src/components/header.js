import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const Header = () => {

    return (
        <nav className="navbar bg-dark text-center" data-bs-theme="dark">
            <div className="container-fluid text-center">
              <span className="navbar-brand text-center">Navbar</span>
            </div>
        </nav>
    );
};

export default Header;
