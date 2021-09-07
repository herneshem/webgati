
//  abreviatura ra
import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/modulos.css'
import Imag from '../components/Imagmult'

class Album extends React.Component {
    render() {
        return (
            <Fragment>
                <div class=" cardcaso mb-1 mt-4 mx-auto">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Imag.im2} alt="..."></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class=" cardcaso mb-1 mx-auto ">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Imag.im2} alt="..."></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class=" cardcaso mb-1 mx-auto ">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={Imag.im2} alt="..."></img>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>



                
            </Fragment>

        )

    }



}
export default Album