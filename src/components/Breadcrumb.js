import React from 'react';
import menuConfig from '../config/menu';
import {Breadcrumb} from 'antd';
export default class AppComponent extends React.Component {
  render () {
    console.log (this.props.currentRoute);
    return (
      <Breadcrumb style={{margin: '16px 0'}}>
        {this.props.currentRoute.map (item => {
          return (
            <Breadcrumb.Item key={item.path}>{item.breadCrumb}</Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    );
  }
}
