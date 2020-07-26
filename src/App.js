import React, { Component } from 'react'
import './App.css';
import { notification } from 'antd';
import { SmileOutlined, SearchOutlined } from '@ant-design/icons';
import SearchBar from './Components/SearchBar';
import YTsearch from 'youtube-api-search';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      search: true,
      selectedVideo: {},
    };
    // this.welcome();
  }
  // welcome = () => {
  //   notification.open({
  //     placement: 'topRight',
  //     top: 30,
  //     duration: 3,
  //     rtl: true,
  //     message: 'Hey, nice to see you here',
  //     description: 'Let us start by searching some videos',
  //     icon: <SmileOutlined style={{ color: '#108ee9' }} />
  //   })
  // }
  render() {
    return (
      <div>
        <div>
          <h1>YTSearch<SearchOutlined /></h1>
          <SearchBar/>
        </div>
      </div>
    )
  }
}

