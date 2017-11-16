/*
 * @Author: october.yan 
 * @Date: 2017-10-7 09:01:30 
 */
import './index.less';
import classnames from 'classnames';
import { Component } from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { Layout, Menu, Icon, Tooltip, Tree } from 'antd';
const { Header, Sider, Content } = Layout;

class HeaderBar extends Component {
  render() {
    const {collapsed, toggle} = this.props;
    return (
      <header className="page-header">
          <div className="header-core">
            <a className="logo">
                API常见问题
            </a>
            <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu> 
          </div> 
      </header>
    );
  }
}

const mapStateToProps = state => ({
    collapsed: state.header.collapsed
});
const mapDispatchToProps = dispatch => ({
  toggle: () => {
    dispatch(toggleSlide())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);