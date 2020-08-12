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

	render() {

 		return(
 			<>
			<Navbar />
			<main role="main" className="flex-shrink-0 mt-5">

				<section className="text-center">
     				<div className="container">
       					<h1 style={{padding: "20px"}} className="jumbotron-heading">Sala B02</h1>
    				</div>
 				</section>

				<div className='container'>
                	<div className='row'>
						<Tarjeta tipo='cama' botonText='Desocupar Cama' estado='OCUPADO' initColor="#c60300" nombreCama='CAMA B02-1' />
            <Tarjeta tipo='cama' botonText='Desocupar Cama' estado='OCUPADO' initColor="#c60300" nombreCama='CAMA B02-2' />
            <Tarjeta tipo='cama' botonText='Desocupar Cama' estado='OCUPADO' initColor="#c60300" nombreCama='CAMA B02-3' />
					</div>
				</div>
				
				<div className='container'>
          <div className='row'>
            <Tarjeta tipo='cama' botonText='Desocupar Cama' estado='OCUPADO' initColor="#c60300" nombreCama='CAMA B02-4' />
            <Tarjeta tipo='cama' botonText='Desocupar Cama' estado='OCUPADO' initColor="#c60300" nombreCama='CAMA B02-5' />
            <Tarjeta tipo='cama' botonText='Ingresar Paciente' estado='DISPONIBLE' initColor="#21a900" nombreCama='CAMA B03-6' />
					</div>
				</div>

			</main>
			</>

		)

	}
} export default Sala3;
