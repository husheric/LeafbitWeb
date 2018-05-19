import React, { Component } from 'react';
import cactus from '../images/cactus.png';
import pine_tree from '../images/pine_tree.png';
import tall_tree from '../images/tall_tree.png';
import tree from '../images/tree.png';

/*
	____TODOS____
	displays seeds in marketplace

	____data needed____
	seed info - price, name, image
*/

const style = {
	border: '5px solid black',
	width: '350px',
	height: '350px'
}

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
			<div style={style} onClick={() => handleOpenModal(seed)} >
				<img src={seedDict[seed.image]} />
				<h1>{seed.name}</h1>
				<h2>${seed.cost}</h2>
			</div>
		)
	}
}

export default SeedComponent;