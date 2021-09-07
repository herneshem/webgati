import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './components/Principal'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

const contenedor = document.getElementById('root')


ReactDOM.render(<Principal/>, contenedor)  // render pide QUE y DONDE,en este caso el QUE es el módulo

reportWebVitals();
