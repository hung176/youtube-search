import React, { Component } from 'react';
import { AutoComplete, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';



export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <AutoComplete
          size={"large"}
          style={{ width: 400 }}
          onSelect={ this.onSelect }
          onChange={ this.props.onChange }
          placeholder="Search Video"
        >
        </AutoComplete>
        <Button style={{"marginLeft": "5px"}} size="large"><SearchOutlined />Search</Button>
      </div>
    )
  }
}
