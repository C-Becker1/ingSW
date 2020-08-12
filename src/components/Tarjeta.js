import React from 'react';

class Tarjeta extends React.Component {

    toggleEstado = () => {
        if (this.state.estado == 'OCUPADO') { 
            this.setState({estado: 'DISPONIBLE', color: "#21a900", botonText: 'Ingresar Paciente'});
        }
        else {
            this.setState({estado: 'OCUPADO', color: "#c60300", botonText: 'Desocupar Cama'})
        } 

        
    }

    toggleColor = (estado) => {
        if (estado) {
            this.color =  "#21a900"
        } else {

            this.color = "#c60300"
        }
    }
    


    constructor(props) {
        super(props);
        this.state = {
            estado: this.props.estado,
            botonText: this.props.botonText,
            color: this.props.initColor
            //color: this.toggleColor(this.state.estado)
        }
    }

    



    render() {
        if (this.props.tipo == 'sala') {
            return (
                <div className="col-md-4">
                    <div className="card mb-4 shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: DISPONIBLE"><title>?</title><rect width="100%" height="100%" fill={this.props.colorSala}/><text x="20%" y="50%" fill="#eceeef" dy=".3em">SALA DE RECUPERACIÓN {this.props.nombreSala}</text></svg>
                            <div className="card-body">
                                <p className="card-text">Camas disponibles {this.props.camasDisponibles}/{this.props.camasTotales}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <p><a href={this.props.salaNumero} role="button" className="btn btn-sm btn-outline-secondary">{this.props.botonText}</a></p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            )
        }
        if (this.props.tipo == 'cama') {
            return (
                <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: DISPONIBLE"><title>?</title><rect width="100%" height="100%" fill={this.state.color}/><text x="38%" y="50%" fill="#eceeef" dy=".3em">{this.state.estado}</text></svg>
                        <div className="card-body">
                            <p className="card-text"> 
                                {this.props.nombreCama}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <p><a role="button" onClick={this.toggleEstado} className="btn btn-sm btn-outline-secondary">{this.state.botonText}</a></p>

                                </div>
                            </div>
                        </div>
                </div>
            </div>
            )
        }
    }


} export default Tarjeta