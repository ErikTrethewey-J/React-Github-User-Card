import React from 'react';
import axios from 'axios';
import './App.css'
import FollowerCard from './Components/FollowerCard'
import GithubCard from './Components/GithubCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
      followerInfo: []
    }
  }
  componentDidMount() {

    axios.get("https://api.github.com/users/ErikTrethewey-J")
      .then(res => {
        this.setState({
          ...this.state,
          userInfo: res.data
        })
        console.log(res.data)
      })
      .catch(err => console.log(err))
    axios.get("https://api.github.com/users/ErikTrethewey-J/followers")
      .then(res => {
        this.setState({
          ...this.state,
          followerInfo: res.data
        })
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="cards">
          <GithubCard
            userInfo={this.state.userInfo}
          />
          {this.state.followerInfo && this.state.followerInfo.map(follower => {

            return (<FollowerCard followerInfo={follower} />
            )
          })

          }
        </div>
      </div>
    )
  }
}


export default App;
