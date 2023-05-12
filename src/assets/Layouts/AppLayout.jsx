import { Link } from "react-router-dom";


import dogo from '../images/dogo.png';
const AppLayout = (props) => {
return (
<>
    <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={dogo} width='50'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li  className="nav-item">
                        <Link className={'nav-link'} aria-current="page" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Recipes/">Recipes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ToDo/">To Do</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/BrydeRov">
                            <i className="bi bi-github"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div className='p-3' style={{marginTop: '75px'}}>
        {props.content}
    </div>
</>
)
}

export default AppLayout;