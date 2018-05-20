import React, { Component } from 'react';

class ProfileActivity extends Component {
    render() {
        const { location, date, treeImg } = this.props.activity

        return (
            <div className="ind-activity">
                <h1>{location}</h1>
                <h3>{date}</h3>
                <div className="img-container">
                    <img src={treeImg} alt="tree" />
                    <p>Pinned Tree</p>
                </div>
            </div>
        )
    }
}

export default ProfileActivity;