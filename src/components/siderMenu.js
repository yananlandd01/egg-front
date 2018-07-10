import React from 'react';
import {Menu} from 'antd';
import siderConfig from '../config/menu';
import {createGUId} from '../utils/tool';
import {Link} from 'dva/router';

const {SubMenu} = Menu;

// add the key of siderMenu
const addSiderMenu = siderConfig => {
  return siderConfig.map ((item, index) => {
    item.key = createGUId ();
    item.children && addSiderMenu (item.children);
    return item;
  });
};
const siderMenu = addSiderMenu (siderConfig);
// change config to component
const createSubMenu = siderMenu => {
  return siderMenu.map ((item, index) => {
    return (
      <SubMenu key={item.key} title={<span>{item.title}</span>}>
        {item.children &&
          item.children.map ((item, index) => {
            return (
              <Menu.Item key={item.key}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            );
          })}
      </SubMenu>
    );
  });
};

const getkey = (options, siderMenu) => {
  let key = null;
  siderMenu.map ((item, index) => {
    if (item.path === options) {
      key = item.key;
      console.log (key);
    } else {
      item.children
        ? getkey (options, item.children)
            ? (key = getkey (options, item.children))
            : null
        : null;
    }
  });
  return key;
};

export default class CreateMenu extends React.Component {
  state = {
    selectedKeys: [siderMenu[0].children[0].key.toString ()],
    openKeys: [siderMenu[0].key],
  };

  onOpenChange = openKeys => {
    console.log (openKeys);
    this.setState ({openKeys: openKeys});
  };

  onSelect = options => {
    this.setState ({
      openKeys: [options.keyPath[1]],
    });
  };

  componentWillMount () {
    const firstPath = this.props.history.location.pathname.split ('/')[1];
    const secondPath = this.props.history.location.pathname;
    const openKeys = getkey (`/${firstPath}`, siderMenu);
    const selectedKeys = getkey (secondPath, siderMenu);
    this.setState ({
      selectedKeys: [selectedKeys],
      openKeys: [openKeys],
    });
    console.log (this.state);
  }
  render () {
    const {selectedKeys, openKeys} = this.state;
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        openKeys={openKeys}
        onClick={this.onSelect}
        onOpenChange={this.onOpenChange}
        style={{height: '100%', borderRight: 0}}
      >
        {createSubMenu (siderConfig)}
      </Menu>
    );
  }
}
