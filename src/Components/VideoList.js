import React, { Component } from 'react';
import VideoListItem from './VideoListItem';
import {List} from 'antd';

export default class VideoList extends Component {
  state = {
    data: [],
  }
  render() {
    if(this.props.videos === 0) {
      return(
        <List
          style={{ "width": "40%"}}
          size={"large"}
          header={<div>Video Suggestions</div>}
          bordered
          dataSource={ this.state.data }
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      )
    }
    const videoItems = this.props.videos.map((video, index) => {
      return(
        <VideoListItem
          key={index}
          video={video}
          onUserSelected={ this.props.onVideoSelect.bind( this, [ index ]) }
        />
      )
    })
    return (
      <div>
        <ul style={{ "listStyle":"none" ,"width":"50%", "padding": "5px", "marginBottom": "3px", "borderRadius": "5px" }}>
          {videoItems}
        </ul>
      </div>
    )
  }
}
