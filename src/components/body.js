import React from 'react';
import Navbar from './Navbar';
import Container from './container';
import Tarjeta from './Tarjeta.js';
//Necesito tener la conexión con la base de datos para saber cuántas salas mostrar



class Body extends React.Component {
    render() {
        return(
            <>
            <Navbar/>
            
            <main role="main" className="flex-shrink-0 mt-5">

				<section className="text-center">
     				<div className="container">
       					<h1 style={{padding: "20px"}} className="jumbotron-heading">Salas de Recuperación</h1>
    				</div>
 				</section>
            </main>

            <div className='container'>
                <div className='row'>
                    <Tarjeta tipo='sala' salaNumero='#/sala1' nombreSala='B01' botonText='Ver sala' camasDisponibles='5' camasTotales='6' colorSala="#21a900"/> 
                    <Tarjeta tipo='sala' salaNumero='#/sala2' nombreSala='B02' botonText='Ver sala' camasDisponibles='1' camasTotales='6' colorSala="#F4D004"/>
                    <Tarjeta tipo='sala' salaNumero='#/sala3' nombreSala='B03' botonText='Ver sala' camasDisponibles='3' camasTotales='6' colorSala="#c60300"/>
                </div>
            </div>
            </>
        )
    }
}
export default Body