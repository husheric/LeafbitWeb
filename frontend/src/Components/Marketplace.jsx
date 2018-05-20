import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
			{ displayName: 'Willow Tree', name: 'willow_tree', cost: 'FREE', image: 'cactus' },
			{ displayName: 'Apple Tree', name: 'tree', cost: 1, image: 'tree' },
			{ displayName: 'Pine Tree', name: 'pine_tree', cost: 3, image: 'pine_tree' },
			{ displayName: 'Tall Tree', name: 'tall_tree', cost: 4, image: 'tall_tree' },
			{ displayName: 'Cactus', name: 'cactus', cost: 5, image: 'cactus' }
		];

		this.state = {
			// showModal: false,
			// seed: {},
			activeSeed: {},
			formSubmitted: false
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
		this.setState({ activeSeed: seed })
	}

	// When user clicks next 
	handleNext = () => {
		// Save the user's seed choice to database and switch pages 
		this.setState({ formSubmitted: true })
	}

	render() {
		const { activeSeed, formSubmitted } = this.state;
		console.log(this.state);

		if (formSubmitted) {
			return <Redirect to="/" />
		}

		return (
			<div className="marketplace-container" data-aos="fade-up">
				<h1 className="title">Choose one</h1>
				{this.seeds.map(seed => (
					<SeedComponent
						seed={seed}
						activeSeed={activeSeed}
						toggleActive={this.toggleActive}
					/>
				))}
				<button onClick={this.handleNext}>Next</button>
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