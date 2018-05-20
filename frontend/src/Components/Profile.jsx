import React, { Component } from 'react';
import ProfileActivity from './ProfileActivity';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            activities: []
        }
    }

    render() {
        const { activities } = this.state;

        return (
            <div className="profile-container">
                <div className="profile-header">
                    <img src="" alt="profile img" />
                    <h1>Name</h1>
                    <h3>Location</h3>
                </div>
                <div className="profile-activity">
                    <h1>My Activities</h1>
                    {activities.map(activity => <ProfileActivity activity={activity} />)}
                </div>
            </div>
        )
    }
}

export default Profile;