import React from 'react';

class GithubCard extends React.Component {
    render() {
        const { userInfo } = this.props;
        return (
            <div className="card">
                <img className="img" src={userInfo.avatar_url} alt={userInfo.avatar_url} />
                <div className="card-info">
                    <h1 className="name">{userInfo.name}</h1>
                    <p className="username">Username: {userInfo.login}</p>
                    <p>Locations: {userInfo.location}</p>
                    <p>Profile: {userInfo.profile}</p>
                    <p>Followers: {userInfo.followers}</p>
                    <p>Following: {userInfo.following}</p>
                    <p>Bio: {userInfo.bio}</p>
                </div>
            </div>
        )
    }
}

export default GithubCard;
