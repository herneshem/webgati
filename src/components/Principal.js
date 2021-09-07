import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Album from '../Pages/Abum'
import Inicio from './Inicio.js'
import Consejos from '../Pages/Consejos.jsx'
import Veterinario from '../Pages/Veterinario'
import Canguro from '../Pages/Canguro'
import '../css/modulos.css'
import Img from '../components/Imagmult'


class Principal extends React.Component {
    render() {
        return (
            <Router>

                <nav className="navbar  navbar-expand-lg  navbar-warning bg-light mx-auto mt-3 ">

                    <div className="container-fluid ">
                        <ul className="navbar-nav me-auto pt-5 pb-0 ">
                            <li className="nav-item ">
                                <Link to="/" className="navbar-brand" aria-current="page"></Link>

                            </li>

                            <li className="nav-item pt-5">
                                <Link to="/Inicio" className="navbar-brand fw-light" aria-current="page" >Casa</Link>
                            </li>
                            <li className="nav-item pt-5">
                                <Link to="/Album" className="navbar-brand" aria-current="page">Album</Link>
                            </li>
                            <li className="nav-item pt-5">
                                <Link to="/Consejos" className="navbar-brand" aria-current="page">Consejos</Link>
                            </li>
                            <li className="nav-item pt-5">
                                <Link to="Veterinario" className="navbar-brand " aria-current="page" href="">Veterinario</Link>
                            </li>

                            <li className="nav-item pt-5">
                                <Link to="Canguro" className="navbar-brand" aria-current="page" href="">Canguro</Link>
                            </li>

                            {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown </a>
                                </li> */}

                        </ul>
                        {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-success" type="submit">Search</button>
                            </form> */}
                        <div className="img">
                            <img src={Img.im1}></img>
                        </div>
                    </div>
                </nav>
                <div className="bg">

                   
                </div>

                

                <Switch>
                    
                    <Route path="/Inicio">
                        <Inicio />
                    </Route>
                    <Route path="/Album">
                        <Album />
                    </Route>
                    <Route path="/Consejos">
                        <Consejos />
                    </Route>
                    <Route path="/Veterinario">
                        <Veterinario />
                    </Route>
                    <Route path="/Canguro">
                            <Canguro/>
                    </Route>
                </Switch>

            </Router>




        )

    }

} export default Principal

// class cards extends Component {
//     render() {

//         return (

//             <div className="contenedor">  

//             {/*COMPONENTE DEL MENU   */}
//             <Menu></Menu> 
//             {/*COMPONENTE DEL MENU   */}    

//                 <div className="tarjeta1 mx-auto">
//                     <div className="card mb-3 " >
//                         <div className="row g-0" >
//                             <div className="col-md-4">
//                                <a><img src={Imag.im2} alt="..."></img></a> 
//                             </div>
//                             <div className="col-md-8">
//                                 <div className="card-body">
//                                     <h5 className="card-title">Lista de Mascotas</h5>
//                                     <p className="card-text">Lista de mascotas adoptables.</p>
//                                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
//                                     <button className="btn" onClick={()=>pulsar()}>Vamos</button></p>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="tarjeta2 mx-auto">


//                     <div className="card mb-3 " >
//                         <div className="row g-0" >
//                             <div className="col-md-4">
//                                 <img src={Imag} alt="..."></img>
//                             </div>
//                             <div className="col-md-8">
//                                 <div className="card-body">
//                                     <h5 className="card-title">Casa especiales</h5>
//                                     <p className="card-text">Mascotas que necesitan mucho cuidado.</p>
//                                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="tarjeta2 mx-auto">


//                     <div className="card mb-3 " >
//                         <div className="row g-0" >
//                             <div className="col-md-4">
//                                 <img src={Imag} alt="..."></img>
//                             </div>
//                             <div className="col-md-8">
//                                 <div className="card-body">
//                                     <h5 className="card-title">Finales Felices</h5>
//                                     <p className="card-text">Encontraron su hogar.</p>
//                                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>




//             </div>
//         )
//     }


// }
// export default cards

