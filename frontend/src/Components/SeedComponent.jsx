import React, { Component } from 'react';
import cactus from '../images/cactus.png';
import pine_tree from '../images/pine_tree.png';
import tall_tree from '../images/tall_tree.png';
import tree from '../images/tree.png';
import '../stylesheets/marketplace.css';

/*
	____TODOS____
	displays seeds in marketplace

	____data needed____
	seed info - price, name, image
*/

// const style = {
// 	border: '5px solid black',
// 	width: '350px',
// 	height: '350px'
// }

const seedDict = {
	cactus: cactus,
	pine_tree: pine_tree,
	tall_tree: tall_tree,
	tree: tree
}

class SeedComponent extends Component {
	render() {
		const { seed, handleOpenModal } = this.props;
		return (
			<div className="seed-container" onClick={() => handleOpenModal(seed)} >
				<div className="seed-img-container">
					<img src={seedDict[seed.image]} />
				</div>
				<h1 className="name">{seed.displayName}</h1>
				<h1 className="cost">${seed.cost}</h1>
			</div>
		)
	}
}

export default SeedComponent;