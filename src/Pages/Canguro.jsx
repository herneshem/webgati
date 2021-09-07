import React, { Fragment } from 'react'
import Gatitos from '../components/Imagmult'

class Canguro extends React.Component {

    render() {

        const ocultar = ()=>{
            
         document.getElementById('lusa').style.visibility="visible"
         document.getElementById('pelu').style.visibility="hidden"
        }
        const ocultar2 = ()=>{
            
            document.getElementById('pelu').style.visibility="visible"
            document.getElementById('lusa').style.visibility="hidden"
           }
        return (
            <Fragment>
                <div className="container">

                    <div className="completo" id="lusa">
                        <div className="gatitos">
                            <img src={Gatitos.im5} alt="" />
                            <img src={Gatitos.im6} alt="" />
                        </div>

                        <div className="gatitos2">
                            <img src={Gatitos.im7} alt="" />
                        </div>
                        

                        <div class="overlay">
                            <h3>Luna-Simba</h3>
                            <h5>Lunatica-Patón</h5>
                        </div>

                    </div>

                     {/* segundo slide */}

                     <div className="completo2" id="pelu">
                        <div className="gatitos">
                            <img src={Gatitos.im5} alt="" />
                            <img src={Gatitos.im6} alt="" />
                        </div>

                        <div className="gatitos2">
                            <img src={Gatitos.im7} alt="" />
                        </div>

                        <div class="overlay">
                            <h3>Pelusona</h3>
                            
                        </div>
                    </div>

                     {/* tercer slide */}

                     <div className="completo3">
                        <div className="gatitos">
                            <img src={Gatitos.im5} alt="" />
                            <img src={Gatitos.im6} alt="" />
                        </div>

                        <div className="gatitos2">
                            <img src={Gatitos.im7} alt="" />
                        </div>

                        <div class="overlay">
                            <h3>Misterio</h3>
                            
                        </div>
                    </div>
                      

                    <div className="varbajo ">
                    
                        <ul className="uls">
                            <li className="lis" id="uno"  onClick={ocultar}><a href="#completo">1</a></li>
                            <li className="lis" id="dos" onClick={ocultar2}><a href="">2</a></li>
                            <li className="lis"><a href="">3</a></li>
                        </ul>
                    </div>


                </div>

                
            </Fragment>


        )


    }
}
export default Canguro