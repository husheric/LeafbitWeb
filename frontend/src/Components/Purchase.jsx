import React, { Component } from 'react';

class Purchase extends Component {

    render() {
        const { seed, handleCloseModal, handleSubmit, handleButton, handlePaymentChange } = this.props;

        return (
            <div>
                <button onClick={handleCloseModal}>Close</button>
                <form onSubmit={handleSubmit}>
                    <p>
                        Donation: $<input
                            type='number'
                            min='0.00'
                            step='0.01'
                            value={seed.paymentAmount}
                            onChange={handlePaymentChange} /></p>
                    <button onClick={() => this.props.handleButton('buy')}>Buy</button>
                    <button onClick={() => this.props.handleButton('gift')}>Gift</button>
                </form>
            </div>
        )
    }
}

export default Purchase;