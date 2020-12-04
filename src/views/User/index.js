import React, { Component } from "react";
import UserState from "./Component/UserState";
import UserType from "./Component/UserType";
import UserChange from "./Component/UserChange";
import '../../app.scss';

export default class GasChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <div className = "container">
                <div id="container">
                    <div id="flexCon">
                        <div className="flex-row">
                        <div className="flex-cell flex-cell-lc" style={{paddingLeft:0}}>
                                <div className="chart-wrapper">
                                    <div className="chart-div" id="gasChart">
                                        <div className="chart-loader"><UserChange/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="flex-row">
                                <div className="flex-cell flex-cell-l" style={{paddingBottom:0}}>
                                    <div className="chart-wrapper">
                                        <div className="chart-div" id="csrcChart">
                                            <div className="chart-loader"><UserState /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-cell flex-cell-r" style={{paddingBottom:0}}>
                                    <div className="chart-wrapper">
                                        <div className="chart-div" id="csrcChart">
                                            <div className="chart-loader"><UserType/></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        );
    }
}