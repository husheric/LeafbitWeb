import React, { Component } from 'react';
import cactus from '../images/cactus.png';
import pine_tree from '../images/pine_tree.png';
import tall_tree from '../images/tall_tree.png';
import tree from '../images/tree.png';

const imageDict = {
	cactus,
	pine_tree,
	tall_tree,
	tree
}

class TreeMarker extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<img src={imageDict[this.props.marker.tree]} width='18px' height='18px' />
			</div>
		)
	}
}

export default TreeMarker;