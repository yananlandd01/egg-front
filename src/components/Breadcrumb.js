import React from 'react';
import menuConfig from '../config/menu';
import {Breadcrumb} from 'antd';
export default class AppComponent extends React.Component {
  componentWillMount () {
    console.log (this.props.history.location.pathname);
  }
  render () {
    return (
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
