import React, { Component } from "react";
// layout组件
import LayoutAside from "./components/aside";
import ContainerMain from "../../components/containerMain/index";
// css
import "../../app.scss";
// antD
import { Layout } from "antd";
import {BrowserRouter, Switch} from "react-router-dom";
const { Sider, Header, Content } = Layout;

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="titleBar">
                        <div id="header">
                            <h3 className="header-title">燃气数据可视化</h3>
                        </div>
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