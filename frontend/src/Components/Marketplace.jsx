import React, { Component } from 'react';
import SeedComponent from './SeedComponent';
import Modal from 'react-modal';

/*
	____TODOS____
	will display progress of current tree

	____data needed____
	user seeds
	progress of seeds
*/

class Marketplace extends Component {
	constructor() {
		super();

		this.seeds = [
			{ name: 'cactus', cost: 5, image: 'cactus' },
			{ name: 'tree', cost: 1, image: 'tree' },
			{ name: 'pine_tree', cost: 3, image: 'pine_tree' },
			{ name: 'tall_tree', cost: 4, image: 'tall_tree' }
		];

		this.state = {
			showModal: false,
			seed: null
		}
	}

	handleOpenModal = seed => {
		this.setState({
			showModal: true,
			seed: { ...seed, paymentAmount: seed.cost }
		})
	}

	handleCloseModal = () => {
		this.setState({
			showModal: false,
			seed: null
		})
	}

	handleSubmit = () => {

	}

	handlePaymentChange = e => {
		this.setState({
			seed: { ...this.state.seed, paymentAmount: e.target.value }
		})
	}

	render() {
		console.log(this.state)
		return (
			<div>
				{this.seeds.map(seed => (
					<SeedComponent
						seed={seed}
						handleOpenModal={this.handleOpenModal}
					/>
				))}
				{this.state.seed &&
					<Modal 
	          isOpen={this.state.showModal}
	          contentLabel="Minimal Modal Example"
	        >
	          <button onClick={this.handleCloseModal}>Close</button>
	          <form onSubmit={this.handleSubmit} >
	          	Donation: $<input type='number' min='0.00' step='0.01' value={this.state.seed.paymentAmount} onChange={this.handlePaymentChange}/>
	          	<input type='submit' value='buy' />
	          	<input type='submit' value='gift' />
	          </form>
	        </Modal>
	      }
			</div>
		)
	}
}

export default Marketplace;