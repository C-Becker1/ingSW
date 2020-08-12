import React from 'react';
import ContainerTitle from './containerTitle'
import Navbar from './Navbar'

class Container extends React.Component {


    render() {
        return (
            <>
            <Navbar/>
            <ContainerTitle title='Salas de Recuperación' />
            </>
        )
    }
}
export default Container