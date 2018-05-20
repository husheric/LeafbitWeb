import React, { Component } from 'react';

class ProfileActivity extends Component {
    render() {
        const { location, date, treeImg } = this.props.activity

        return (
            <div>
                <h1>{location}</h1>
                <h3>{date}</h3>
                <img src={treeImg} alt="tree" />
                <p>Pinned Tree</p>
            </div>
        )
    }
}

export default ProfileActivity;