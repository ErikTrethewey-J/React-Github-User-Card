import React from 'react'

class FollowerCard extends React.Component {
    render() {
        const { followerInfo } = this.props;
        return (
                <div className="card">
                <img className="img" src={followerInfo.avatar_url} alt={followerInfo.avatar_url} />
                <div className="card-info">
                    <h1 className="name">{followerInfo.name}</h1>
                    <p className="username">Username: {followerInfo.login}</p>
                    <p>Locations: {followerInfo.location}</p>
                    <p>Profile: {followerInfo.profile}</p>
                    <p>Followers: {followerInfo.followers}</p>
                    <p>Following: {followerInfo.following}</p>
                    <p>Bio: {followerInfo.bio}</p>
                </div>
            </div>
        )
    }
}

export default FollowerCard;