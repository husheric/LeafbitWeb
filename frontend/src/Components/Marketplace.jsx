import React, { Component } from 'react';
import SeedComponent from './SeedComponent';
import Purchase from './Purchase';
import Modal from 'react-modal';
import '../stylesheets/marketplace.css';

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
			{ displayName: 'Cactus', name: 'cactus', cost: 5, image: 'cactus' },
			{ displayName: 'Apple Tree', name: 'tree', cost: 1, image: 'tree' },
			{ displayName: 'Pine Tree', name: 'pine_tree', cost: 3, image: 'pine_tree' },
			{ displayName: 'Tall Tree', name: 'tall_tree', cost: 4, image: 'tall_tree' }
		];

		this.state = {
			// showModal: false,
			// seed: {},
			activeSeed: {}
		}
	}

	// Opens modal
	// handleOpenModal = seed => {
	// 	this.setState({
	// 		showModal: true,
	// 		seed: { ...seed, paymentAmount: seed.cost }
	// 	})
	// }

	// Closes modal 
	// handleCloseModal = () => {
	// 	this.setState({
	// 		showModal: false,
	// 		seed: null
	// 	})
	// }

	// Handles Buy and Gift buttons 
	// handleButton = (name) => {
	// 	console.log(name);
	// }

	// Prevents form from refreshing on enter 
	// handleSubmit = e => {
	// 	e.preventDefault();
	// }

	// handlePaymentChange = e => {
	// 	this.setState({
	// 		seed: { ...this.state.seed, paymentAmount: e.target.value }
	// 	})
	// }

	// When user chooses a plant 
	toggleActive = (seed) => {
		const { activeSeed } = this.state;
		if (!activeSeed.name) {
			this.setState({
				activeSeed: seed
			})
		} else {
			this.setState({
				activeSeed: {}
			})
		}
	}

	// When user clicks next 

	render() {
		console.log(this.state)
		const { activeSeed } = this.state;

		return (
			<div className="marketplace-container">
				<h1>Choose one:</h1>
				{this.seeds.map(seed => (
					<SeedComponent
						seed={seed}
						activeSeed={activeSeed}
						toggleActive={this.toggleActive}
					// handleOpenModal={this.handleOpenModal}
					/>
				))}
				<button>Next</button>
				{/* {seed &&
					<Modal
						isOpen={this.state.showModal}
						contentLabel="PurchaseModal"
						className="purchase-modal"
						onRequestClose={this.handleCloseModal}
					>
						<Purchase
							seed={seed}
							handleCloseModal={this.handleCloseModal}
							handleSubmit={this.handleSubmit}
							handlePaymentChange={this.handlePaymentChange}
							handleButton={this.handleButton} />
					</Modal>
				} */}
			</div>
		)
	}
}

export default Marketplace;