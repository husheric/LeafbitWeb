import React, { Component } from 'react';
import '../stylesheets/tree-progress.css';

class TreeProgress extends Component {
    render() {
        return (
            <div className="tree-progress">
                <h1>Watch your tree grow here :)</h1>
                <div className="img-container">
                    <img src="./assets/healthy_growing.png" alt="groot" />
                </div>
            </div>
        )
    }
}

export default TreeProgress;