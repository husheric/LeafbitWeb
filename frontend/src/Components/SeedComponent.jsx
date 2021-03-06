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

const seedDict = {
	cactus: cactus,
	pine_tree: pine_tree,
	tall_tree: tall_tree,
	tree: tree
}

class SeedComponent extends Component {
	render() {
		const { seed, activeSeed, toggleActive } = this.props;

		// If seed's name equals active seed's name, add class 
		const activeClass = seed.name === activeSeed.name ? `active` : null;

		return (
			<div className={`seed-container seed-${activeClass}`} onClick={() => toggleActive(seed)} >
				<div className="seed-img-container">
					<img src={seedDict[seed.image]} alt="tree" />
				</div>
				<h1 className="name">{seed.displayName}</h1>
				<h1 className="cost">{typeof seed.cost === 'number' ? '$' + seed.cost : seed.cost } </h1>
			</div>
		)
	}
}

export default SeedComponent;