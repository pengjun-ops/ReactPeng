import React, { Component, Fragment } from "react";
import {Link, withRouter} from "react-router-dom";
//antd
import {UserOutlined,FundOutlined,LineChartOutlined,AlignLeftOutlined,BarChartOutlined,FireFilled } from "@ant-design/icons";
import { Menu } from "antd";

//路由
import Router from "../../router/index";

const { SubMenu } = Menu;

class AsideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
    };
  }

  // 无子级菜单处理
  renderMenu = ({ title, key ,icon}) => {
    if (icon == 'user'){
      return (<Menu.Item key={key} icon={<UserOutlined />} onClick={()=>{
        window.location.href = key;
      }}>
        {title}
      </Menu.Item>)
    }
    else if (icon == 'bar'){
      return (<Menu.Item key={key}   icon={<BarChartOutlined />}onClick={()=>{
        window.location.href = key;
      }}>
        <Link to={key}>{title}</Link>
      </Menu.Item>)
    }
    else if (icon == 'all'){
      return (<Menu.Item key={key}   icon={<FundOutlined/>}onClick={()=>{
        window.location.href = key;
      }}>
        <Link  to={key}>{title}</Link>
      </Menu.Item>)
    }
    else {
      return (
          <Menu.Item key={key} icon={<LineChartOutlined/>}onClick={()=>{
            window.location.href = key;
          }}>
            <Link  to={key}>
              {title}</Link>
          </Menu.Item>
      );
    }
  };

  // 子级判断处理(递归)
  renderSubMenu = ({ title, key, child }) => {
    return (
      <SubMenu key={key} icon={<AlignLeftOutlined />} title={title}>
        
        {child &&
          child.map((item) => {
            return item.child && item.child.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenu(item);
          })}
      </SubMenu>
    );
  };

  render() {
    return (
      <Fragment>
        <div style = {{color:'#08c',fontSize:14,padding:20}}><FireFilled  style={{marginRight:10, fontSize: '20px', color: '#08c' }}/>苏州燃气</div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          theme="dark"
        >
          {Router &&
            Router.map((firstItem) => {
              return firstItem.child && firstItem.child.length > 0
                ? this.renderSubMenu(firstItem)
                : this.renderMenu(firstItem);
            })}
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(AsideMenu)
