import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center allign-items borders rounded p-3">
                <div className='spinner-border text-primary'
                style={{ width: '3rem', height: '3rem' }}
                    role='status'>
                    <span className='visually-hidden'>Carregando...
                    </span>
                </div>
            </div>
        )
    }
}

export default Loading