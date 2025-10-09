import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center allign-items borders rounded p-3">
                <div className='spinner-border text-primary mb-4'
                style={{ width: '3rem', height: '3rem' }}
                    role='status'>
                    <span className='visually-hidden'>Carregando...
                    </span>
                </div> 
                   <p>{this.props.texto}</p>
            </div>
        )
    }
}

Loading.defaultProps = {
    texto: 'Aguarde...'
}

export default Loading