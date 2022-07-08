import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/" className="nav-link noocotitle" aria-current="page">Nooco</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/barchart" className="nav-link" aria-current="page">Bar Chart</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/piechart" className="nav-link" aria-current="page">Pie Chart</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/tableau" className="nav-link" aria-current="page">Tableau</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Header