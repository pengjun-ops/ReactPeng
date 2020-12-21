import React, { Component, Fragment } from "react";
import { Switch,Route,BrowserRouter,withRouter } from "react-router-dom";
//组件
import Home from "../../views/home/Index";
import User from "../../views/User/index";
import Gas from "../../views/Gas/router";
import Predict from '../../views/Predict/router';
import Location from '../../views/Loaction/router';

class ContainerMain extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact  render={() => {{
                            document.title = 'Gas iDataV';
                            return <Home/>}}} path="/" />
                        <Route  render={() => {{
                            document.title = 'Gas iDataV';
                            return <Home/>}}} path="/home" />
                        <Route  render={() => {
                            document.title = "Gas";
                            return <Gas/>}} path="/gas" />
                        <Route  render={() =>{
                            document.title = "User";
                            return <User/>
                        }} path="/user" />
                        <Route  render={() => {
                            document.title = "Predict";
                            return <Predict/>} }path="/predict" />
                        <Route  render={() =>{
                            document.title = "Location";
                            return  <Location/>}} path="/location" />

                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default withRouter(ContainerMain)