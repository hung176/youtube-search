import React, { Component } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Button } from 'antd';
const {Option} = AutoComplete;

export default class SearchBar extends Component {
  state = {
    videos: [],
  }
  componentDidUpdate( prevProps ) {
    console.log(prevProps.video)
    if( this.props.video && prevProps.video !== this.props.video ) {
        this.setState({ videos: this.props.videos })
    }
  } 
  onSelect = ( value, option ) => {
    
    let val = parseInt(option.key, 10); // parseInt(string, radix- he thap phan: 10, nhi phan-2)
    this.props.handleSearch( val );
  };
  render() {
    return (
      <div style={{ "textAlign": "center", "padding": "35px" }}>
        <AutoComplete
          size={"large"}
          style={{ width: 400 }}
          onSelect={ this.onSelect }
          onChange={ this.props.onChange }
          placeholder="Search Video"
        >
        
        { this.state.videos.map((video, index)  => <Option key={ index } value={video.snippet.title}>{ video.snippet.title }</Option> ) }
        </AutoComplete>
        <Button style={{"marginLeft": "5px"}} size="large"><SearchOutlined />Search</Button>
      </div>
    )
  }
}
