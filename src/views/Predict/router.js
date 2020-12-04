import React, { Component } from "react";
import "../../app.scss";
import PredictChart from './Index';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <div id="container" style={{top:0}}>
                <div id="flexCon">
                    <div className="flex-row">
                        <div className="flex-cell flex-cell-l">
                            <div className="chart-wrapper">
                                <div className="chart-div" id="rankChart">
                                    <div className="chart-loader">
                                        <PredictChart/>
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