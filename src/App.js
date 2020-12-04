import React, { Component } from "react";
import { Switch, Route,BrowserRouter,} from "react-router-dom";
import "./app.scss";
import LayoutAside from "./views/home/components/aside";
import { Layout} from "antd";
import ContainerMain from "./components/containerMain/index";
const { Sider } = Layout;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


    handleClick=(event, index)=> {
        this.props.onClick();
    }

    render() {
    return (
      <div className="container">
        <BrowserRouter>
            <div className="titleBar">
                <header id="header">
                    <h3 className="header-title">WELCOME TO 燃气数据可视化</h3>
                </header>
                <Sider className="layout-side">
                    <LayoutAside />
                </Sider>
            </div>
            <div className="layout-main">
                    <ContainerMain/>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}
