import React from 'react';

import Navbar from './Navbar'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial)
import Tarjeta from './Tarjeta';
import Container from './container';

//bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
//import 'mdbreact/dist/css/mdb.css';

class Sala3 extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
        estado: this.props.estado,
        camasDisponibles: this.props.botonText,
        camasTotales: this.props.camasTotales,
        color: this.props.initColor
        //color: this.toggleColor(this.state.estado)
    }
}




	render() {

 		return(
 			<>
			<Navbar />
			<main role="main" className="flex-shrink-0 mt-5">

				<section className="text-center">
     				<div className="container">
       					<h1 style={{padding: "20px"}} className="jumbotron-heading">Sala B01</h1>
    				</div>
 				</section>

				<div className='container'>
          <div className='row'>
						<Tarjeta tipo='cama' botonText='Desocupar Cama' estado='OCUPADO' initColor="#c60300" nombreCama='CAMA B01-1' />
						<Tarjeta tipo='cama' botonText='Ingresar Paciente' estado='DISPONIBLE' initColor="#21a900" nombreCama='CAMA B01-4' />
						<Tarjeta tipo='cama' botonText='Ingresar Paciente' estado='DISPONIBLE' initColor="#21a900" nombreCama='CAMA B01-4' />
					</div>
				</div>
				
				<div className='container'>
          <div className='row'>
						<Tarjeta tipo='cama' botonText='Ingresar Paciente' estado='DISPONIBLE' initColor="#21a900" nombreCama='CAMA B01-4' />
						<Tarjeta tipo='cama' botonText='Ingresar Paciente' estado='DISPONIBLE' initColor="#21a900" nombreCama='CAMA B01-5' />
						<Tarjeta tipo='cama' botonText='Ingresar Paciente' estado='DISPONIBLE' initColor="#21a900" nombreCama='CAMA B01-6' />
					</div>
				</div>

			</main>
			</>

		)

	}
} export default Sala3;
