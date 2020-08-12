import React from 'react'

class ContainerTitle extends React.Component {
    render() {
        return (
            <section class='text-center'>
                <h1 class='jumbotron-heading'>
                    {this.props.title}
                </h1>
            </section>
        )
    }
}

export default ContainerTitle