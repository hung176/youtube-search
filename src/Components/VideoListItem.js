import React, { Component } from 'react'

export default class VideoListItem extends Component {
  render() {
    const video = this.props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li onClick={ () => this.props.onUserSelected() } style={{"display": "flex","marginBottom": "15px"}}>
        <img src={imageUrl} alt={video.snippet.title} />
        <span style={{ "color": "#000","marginLeft": "20px","fontWeight": "bold"}}>{video.snippet.title}</span>
      </li>
    )
  }
}
