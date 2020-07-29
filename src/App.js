import React, { Component } from 'react'
import './App.css';
import { notification } from 'antd';
import { SmileOutlined, SearchOutlined } from '@ant-design/icons';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import YTSearch from 'youtube-api-search';
import dotenv from 'dotenv';
dotenv.config();

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = 'AIzaSyAmc3qU6gWHFK99CYjUG9mBMw5m7iIFNkc';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      search: true,
      selectedVideo: {},
    };
    // this.welcome();
    //this.videoSearch()
  }
  welcome = () => {
    notification.open({
      placement: 'topRight',
      top: 30,
      duration: 3,
      rtl: true,
      message: 'Hey, nice to see you here',
      description: 'Let us start by searching some videos',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />
    })
  }

  videoSearch = term => {
    // neu khong co term thi khong thay doi ket qua tim kiem khi thay doi input 'a', sang 'ab' hay 'abc'
    // term la gia tri input, vi du danh search la a thi console.log(term) la a.
      // fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyD8aYQqU-uJBBtM4n8GkhxMuK2XmWI6vh0')
      //   .then(res => res.json())
      //   .then(data => {
      //     // console.log(data)
      //     this.setState({videos: data.items, selectedVideo: data.items[0]})
      //   })
    YTSearch({key: API_KEY, term}, videos => { 
      this.setState({videos, selectedVideo: videos[0]});
    })
  }

  handleChange = (value) => {
    setTimeout( () => {
      if( value === ''){
        this.setState({ videos: [], selectedVideo: null });
        return;
      }

      if( this.state.search ) {
        this.videoSearch( value );
      }

      setTimeout( () => {
        this.setState({ search: true });
      }, 5000);

    }, 2000);

  };
  
  render() {
    return (
      <div style={{ "display": "flex", "flexDirection": "column"  }}>
        <div style={{ "display": "flex", "justifyContent": "center"}}>
          <h1 style={{"color":"#FF0000","marginLeft":"35px","marginTop":"20px"}}>YouTube Search<SearchOutlined /></h1>
          <SearchBar 
            videos={ this.state.videos } 
            video={ this.state.selectedVideo }
            handleSearch={ (video) => { this.setState({ selectedVideo: this.state.videos[video], search: false })}}
            onChange={ this.handleChange }
          />
        </div>

        <div style={{ "display" : "flex", "justifyContent":"center"}}>
          <VideoDetail  video={ this.state.selectedVideo }/>
          <VideoList
            style={{ "marginLeft" : "30px"}}
            videos={this.state.videos}
            onVideoSelect={ ( userSelected ) => { this.setState({ selectedVideo: this.state.videos[ userSelected ] }) }}
          />
          
        </div>
      </div>
    )
  }
}

