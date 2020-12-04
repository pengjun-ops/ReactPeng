import React, { Component } from "react";
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class GasChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const dataAxis=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
        const data = [{"year": "2006", "user": 104890},{"year": "2007", "user": 120713},{"year": "2008", "user": 138779},{"year": "2009", "user": 159814},{"year": "2010", "user": 177153},{"year": "2011", "user": 190670},{"year": "2012","user": 201987},{"year": "2013","user": 222087},{"year": "2014","user": 242207},{"year": "2015","user": 253289},{"year": "2016","user": 271961},{"year": "2017","user": 282833},{"year": "2018","user": 284816}];
        const yMax = 500;
        const dataShadow = [];

        for (let i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        };
        const myChart = echarts.init(document.getElementById('line-chart'));
        myChart.setOption({
            title: { text: '06-18年用户总数变化',
                subtext: '-Total Change ', //副标题文本，'\n'指定换行
                x:'center',
                link:'/user',
                padding:[0,15,0,0],
                textStyle: {
                    fontSize:18,
                    fontWeight:'normal',
                    color:'#9aa8d4',
                }
            },
            xAxis: {
                data: data.map(function (item) {
                    return item["year"];
                }),
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        color: 'rgba(0,0,0,0.05)'
                    },
                    barGap: '-100%',
                    barCategoryGap: '40%',
                    data: data.map(function (item) {
                        return item["user"];
                    }),
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                    },
                    data: data.map(function (item) {
                        return item["user"];}),
                }
            ]
        });
        let zoomSize = 6;
        myChart.on('click', function (params) {
            myChart.dispatchAction({
                type: 'dataZoom',
                startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
            });
        });
    }


    render() {
        return (
            <div id="line-chart" style = {{width:'100%' ,height:'100%'}}/>
        );
    }
}