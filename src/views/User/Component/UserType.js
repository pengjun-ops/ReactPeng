import React, { Component } from "react";
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class GasChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('UserType'));
        // 绘制图表
        myChart.setOption({
            title: { text: '用户情况',
                subtext: '-User Situation', //副标题文本，'\n'指定换行
                link:'/User',
                padding:[0,80,0,80],
                x:'left',
                textStyle: {
                    fontSize:18,
                    fontWeight:'normal',
                    color:'#9aa8d4',
                }
            },
            grid: {
                top: "10%",
            },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
            legend: {
                orient: 'vertical',
                left: '80%',  //图例距离左的距离
                y: 'center',  //图例上下居中
                data: ["家庭","公用","工商","工业","营业"],
                textStyle:{
                    color: '#ffffff'//字体颜色
                },
            },

                series: [
                    {
                        name: '用气种类',
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: [
                            {value: 535, name: '公用'},
                            {value: 45, name: '工商'},
                            {value: 32, name: '工业'},
                            {value: 70654, name: '家庭瓶装气',itemStyle: {
                                    normal:{
                                        color: "rgba(226,38,0,0.84)"
                                    }
                                },},
                            {value: 54, name: '院校、福利'},
                            {value: 4, name: '燃气批砖'},
                            {value: 2247, name: '营业'},
                            {value: 504569, name: '家庭',itemStyle: {
                                    normal:{
                                        color: '#073dff',
                                    }
                                },},

                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
    )

    };


    render() {
        return (
            <div id="UserType" style = {{width:'100%' ,height:'100%'}}/>
        );
    }
}