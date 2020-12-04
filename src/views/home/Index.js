import React, { Component } from "react";
import "../../app.scss";
import {UserOutlined,StockOutlined,GoldenFilled,DashboardFilled } from "@ant-design/icons";
import UserChange  from "../User/Component/UserChange";
import GasChart from '../Gas/Index';
import PredictChart from '../Predict/Index'
import {withRouter} from "react-router-dom";
import Location from '../Loaction/Index';

class Index extends Component {
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
              <div className="flex-cell flex-cell-l">
                <div className="chart-wrapper">
                  <div className="chart-div" id="rankChart">
                    <div className="chart-loader">
                      <PredictChart/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-cell flex-cell-c" style={{paddingRight:0}}>
                <div className="chart-wrapper">
                  <h3 className="chart-title">统计数据</h3>
                  <div className="chart-div chart-done">
                    <table className="data-t">
                      <tbody><tr>
                        <th><UserOutlined className = "icon" style = {{color: "#fb0065"}}/></th>
                        <td>
                          <p><span id="listedCompany" >284816</span></p>
                          <p>1.总用户数</p>
                        </td>
                        <th><DashboardFilled className = "icon" style = {{color: "#0086fb"}}/></th>
                        <td>
                          <p><span id="listedSecurity">115962365</span></p>
                          <p>2.用气总量</p>
                        </td>
                      </tr>
                      <tr>
                        <th><GoldenFilled className = "icon" style = {{color: "#8BB730"}}/></th>
                        <td>
                          <p><span id="totalMarket">317705</span></p>
                          <p>3.用气均值</p>
                        </td>
                        <th><StockOutlined className = "icon" style = {{color: "#6538e8"}}/></th>
                        <td>
                          <p><span id="circulationMarket">558112</span></p>
                          <p>峰值用量变化(天)</p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex-cell flex-cell-r" style={{paddingLeft:0}}>
                <div className="chart-wrapper">
                  <div className="chart-div" id="gasChart">
                    <div className="chart-loader"><UserChange/></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-cell flex-cell-lc" style={{paddingBottom:0}}>
                <div className="chart-wrapper">
                  <div className="chart-div" id="trendChart">
                    <div className="chart-loader"><GasChart/></div>
                  </div>
                </div>
              </div>
              <div className="flex-cell flex-cell-r" style={{paddingBottom:0}}>
                <div className="chart-wrapper">
                  <div className="chart-div" id="csrcChart">
                    <div className="chart-loader"><Location/></div>
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
export default withRouter(Index);