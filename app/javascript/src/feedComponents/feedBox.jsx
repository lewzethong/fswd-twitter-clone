
import React from "react";
import { postTweet } from "../../utils/request";

export default class FeedBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userTweet: "",
      image: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.countChar = this.countChar.bind(this);
    this.postUserTweet = this.postUserTweet.bind(this)
    this.fileChange = this.fileChange.bind(this)
  }

  handleChange(event) {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  fileChange(event) {
    this.setState({
      [event.target.name]: event.target.files[0]
    })
  }

  postUserTweet (event) {
    event.preventDefault();
    
    postTweet(this.state.userTweet, this.state.image, (data)=>{
      console.log(data)
    })
  }

  countChar () {
    var char = $('.post-input').val().length;
    $('.post-char-counter').text(140-char);
    if(char > 0 && char <= 140) {
      $("#post-tweet-btn").removeAttr('disabled');
    } else {
      $("#post-tweet-btn").attr('disabled','disabled');
    }
  }

  render () {
    const { userTweet } = this.state

    return (
      <>
        <form onSubmit={this.postUserTweet}>
          <div className="post-tweet-box p-2">
            <textarea type="text" className="form-control post-input" rows="3" placeholder="What's happening?" value={userTweet} onKeyUp={this.countChar} onChange={this.handleChange} name="userTweet" required></textarea>
            <div className="pull-right">
              <label id="upload-image-btn" htmlFor="image-select">Upload image</label>
              <img id="image-preview" src="" alt="image preview" style={{display: "none"}}/>
              <input type="file" id="image-select" name="image" accept="image/*" onChange={this.fileChange} />
              <span className="post-char-counter">140</span>
              <button className="btn btn-primary" disabled id="post-tweet-btn">Tweet</button>
            </div>
          </div>
        </form>
      </>
    )
  }
}

