import React, { Component } from 'react';
import ProfileActivity from './ProfileActivity';
import '../stylesheets/profile.css';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            activities: [
                {
                    location: 'Empire State Building, NYC',
                    date: 'May 9, 2018',
                    treeImg: './assets/pine_tree.png'
                },
                {
                    location: 'Highline Park, NYC',
                    date: 'April 22, 2018',
                    treeImg: './assets/tall_tree.png'
                },
                {
                    location: 'Gantry Plaza, LIC',
                    date: 'February 17, 2018',
                    treeImg: './assets/cactus.png'
                }
            ]
        }
    }

    render() {
        const { activities } = this.state;

        return (
            <div className="profile-container" data-aos="fade-up">
                <div className="profile-header">
                    <div className="header-left">
                        <img src="./assets/healthy_growing.png" alt="profile img" />
                    </div>
                    <div className="header-right">
                        <h1>Yueran</h1>
                        <h3>New York, USA</h3>
                        <h3>24 years old</h3>
                    </div>
                </div>
                <div className="profile-activity">
                    <h1 className="title">My Activities</h1>
                    {activities.map(activity => <ProfileActivity activity={activity} />)}
                </div>
            </div>
        )
    }
}

export default Profile;