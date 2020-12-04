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
        const myChart = echarts.init(document.getElementById('chart'));
        // 绘制图表
        myChart.setOption({
            title: { text: '用户状态分布',
                subtext: '-User State', //副标题文本，'\n'指定换行
                link:'/User',
                x:'center',
                textStyle: {
                    fontSize:18,
                    fontWeight:'normal',
                    color:'#9aa8d4',
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 20,
                textStyle:{
                    color: '#ffffff'//字体颜色
                },
                data: ['正常使用', '在用', '待开通', '其他', '注销']
            },

            visualMap: {
                show: false,
                min: 10000,
                max: 410000,
                inRange: {
                    colorLightness: [0, 0.5]
                }
            },
            series: [
                {
                    name: '用户类型',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        {value: 31867, name: '正常使用'},
                        {value: 403909, name: '在用'},
                        {value: 89950, name: '待开通'},
                        {value: 9128, name: '其他'},
                        {value: 11243, name: '注销'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    },
                    itemStyle: {
                        color: '#ff2b00',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        });
    }


    render() {
        return (
            <div id="chart" style = {{width:'100%' ,height:'100%'}}/>
        );
    }
}