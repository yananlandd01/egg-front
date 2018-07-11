import React from 'react';
import {Layout, Menu} from 'antd';
import CreateMenu from './siderMenu';
import {withRouter} from 'dva/router';
import Breadcrumb from './Breadcrumb';
import {connect} from 'dva';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

class AllOverLayout extends React.Component {
  render () {
    const {system} = this.props;
    console.log (system);
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{background: '#fff'}}>
            <CreateMenu history={this.props.history} />
          </Sider>
          <Layout style={{padding: '0 24px 24px'}}>
            <Breadcrumb
              currentRoute={system.currentRoute}
              history={this.props.history}
            />
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect (({system}) => {
  return {
    system: system,
  };
}) (withRouter (AllOverLayout));
