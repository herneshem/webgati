import React, { Component } from 'react'
import Imag from './Imagmult'


class cards extends Component {
    render(){

        return (
            
            <div className="contenedor">  

            {/*COMPONENTE DEL MENU   */}
            {/*<Principal></Principal> */}
            {/*COMPONENTE DEL MENU   */}    

                <div className="tarjeta1 mx-auto">
                    <div className="card mb-3 " >
                        <div className="row g-0" >
                            <div className="col-md-4">
                               <img src={Imag.im2}></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Lista de Mascotas</h5>
                                    <p className="card-text">Lista de mascotas adoptables.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                    <button className="btn" >Vamos</button></p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tarjeta2 mx-auto">


                    <div className="card mb-3 " >
                        <div className="row g-0" >
                            <div className="col-md-4">
                                <img src={Imag} alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Casos especiales</h5>
                                    <p className="card-text">Mascotas que necesitan mucho cuidado.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="tarjeta2 mx-auto">


                    <div className="card mb-3 " >
                        <div className="row g-0" >
                            <div className="col-md-4">
                                <img src={Imag} alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Finales Felices</h5>
                                    <p className="card-text">Encontraron su hogar.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        )
    }


}
export default cards



// class menu extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <nav className="navbar navbar-expand-lg navbar-light navbar navbar-dark bg-primary mx-auto">
//                     <div className="container-fluid">
                        

                        
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                     <a className="navbar-brand" aria-current="page" href="">Casa</a>
//                                 </li>

//                                 <li className="nav-item">
//                                     <a className="navbar-brand" aria-current="page" href="">Album</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="navbar-brand" aria-current="page" href="">Consejos</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="navbar-brand" aria-current="page" href="">Veterinario</a>
//                                 </li>

//                                 <li className="nav-item dropdown">
//                                     <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Dropdown </a>
//                                 </li>

//                             </ul>
//                             <form className="d-flex">
//                                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
//                                 <button className="btn btn-success" type="submit">Search</button>
//                             </form>
                        
//                     </div>
//                 </nav>

//             </Fragment>




//         )

//     }

// } export default menu


