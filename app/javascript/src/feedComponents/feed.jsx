import React from 'react'
import ReactDOM from 'react-dom'
import FeedNav from './feedNav';
import ProfileCard from './profileCard';
import TrendCard from './trendCard';
import { authenticate } from "../../utils/request";


import './feed.scss';
import FeedBox from './feedBox';


class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profileName: ""
    }
  } 

  componentDidMount () {
    this.getUserName();
  }

  getUserName = () => {
    authenticate((data) => {
      this.setState({
        profileName: data.username
      })
    })
  }

  render () {
    return (
      <>
        <FeedNav  />
        <div className='main container'>
          <div className='row'>
            <div className='col-3 profile-trends'>
              <ProfileCard name={this.state.profileName}/>
              <TrendCard/>
            </div>
            <div className='col-7 tweet-box'>
              <FeedBox/>
            </div>
          </div>
        </div>
      </>
    )
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})