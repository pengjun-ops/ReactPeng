import React, { Component } from "react";
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markLine';



export default class GasChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const real =  [{'date': '2020-01-01', 'gas': '525068.0'}, {'date': '2020-01-02', 'gas': '493177.0'}, {'date': '2020-01-03', 'gas': '450651.0'}, {'date': '2020-01-04', 'gas': '460882.0'}, {'date': '2020-01-05', 'gas': '490504.0'}, {'date': '2020-01-06', 'gas': '414559.0'}, {'date': '2020-01-07', 'gas': '454691.0'}, {'date': '2020-01-08', 'gas': '489583.0'}, {'date': '2020-01-09', 'gas': '491657.0'}, {'date': '2020-01-10', 'gas': '483425.0'}, {'date': '2020-01-11', 'gas': '504067.0'}, {'date': '2020-01-12', 'gas': '520060.0'}, {'date': '2020-01-13', 'gas': '500436.0'}, {'date': '2020-01-14', 'gas': '513237.0'}, {'date': '2020-01-15', 'gas': '515952.0'}, {'date': '2020-01-16', 'gas': '517135.0'}, {'date': '2020-01-17', 'gas': '519694.0'}, {'date': '2020-01-18', 'gas': '467570.0'}, {'date': '2020-01-19', 'gas': '386720.0'}, {'date': '2020-01-21', 'gas': '486731.0'}, {'date': '2020-01-22', 'gas': '455506.0'}, {'date': '2020-01-23', 'gas': '453091.0'}, {'date': '2020-01-24', 'gas': '432098.0'}, {'date': '2020-01-25', 'gas': '385614.0'}, {'date': '2020-01-26', 'gas': '406179.0'}, {'date': '2020-01-27', 'gas': '416202.0'}, {'date': '2020-01-28', 'gas': '433103.0'}, {'date': '2020-01-29', 'gas': '432740.0'}, {'date': '2020-01-30', 'gas': '440727.0'}, {'date': '2020-01-31', 'gas': '428680.0'}, {'date': '2020-02-01', 'gas': '393678.0'}, {'date': '2020-02-02', 'gas': '407295.0'}, {'date': '2020-02-03', 'gas': '404218.0'}, {'date': '2020-02-04', 'gas': '396678.0'}, {'date': '2020-02-05', 'gas': '401445.0'}, {'date': '2020-02-06', 'gas': '414471.0'}, {'date': '2020-02-07', 'gas': '413070.0'}, {'date': '2020-02-08', 'gas': '415291.0'}, {'date': '2020-02-09', 'gas': '417027.0'}, {'date': '2020-02-10', 'gas': '379173.0'}, {'date': '2020-02-11', 'gas': '383048.0'}, {'date': '2020-02-12', 'gas': '373977.0'}, {'date': '2020-02-13', 'gas': '354896.0'}, {'date': '2020-02-14', 'gas': '343090.0'}, {'date': '2020-02-15', 'gas': '400890.0'}, {'date': '2020-02-16', 'gas': '437092.0'}, {'date': '2020-02-17', 'gas': '401687.0'}, {'date': '2020-02-18', 'gas': '391949.0'}, {'date': '2020-02-19', 'gas': '393449.0'}, {'date': '2020-02-20', 'gas': '384975.0'}, {'date': '2020-02-21', 'gas': '366946.0'}, {'date': '2020-02-22', 'gas': '368339.0'}, {'date': '2020-02-23', 'gas': '372331.0'}, {'date': '2020-02-24', 'gas': '330612.0'}, {'date': '2020-02-25', 'gas': '311747.0'}, {'date': '2020-02-26', 'gas': '340256.0'}, {'date': '2020-02-27', 'gas': '338282.0'}, {'date': '2020-02-28', 'gas': '334269.0'}, {'date': '2020-02-29', 'gas': '354539.0'}, {'date': '2020-03-01', 'gas': '385478.0'}, {'date': '2020-03-02', 'gas': '371811.0'}, {'date': '2020-03-03', 'gas': '367306.0'}, {'date': '2020-03-04', 'gas': '373810.0'}, {'date': '2020-03-05', 'gas': '375871.0'}, {'date': '2020-03-06', 'gas': '352154.0'}, {'date': '2020-03-07', 'gas': '357572.0'}, {'date': '2020-03-08', 'gas': '367659.0'}, {'date': '2020-03-09', 'gas': '337858.0'}, {'date': '2020-03-10', 'gas': '358072.0'}, {'date': '2020-03-11', 'gas': '347279.0'}, {'date': '2020-03-12', 'gas': '333511.0'}, {'date': '2020-03-13', 'gas': '334368.0'}, {'date': '2020-03-14', 'gas': '352148.0'}, {'date': '2020-03-15', 'gas': '357951.0'}, {'date': '2020-03-16', 'gas': '323950.0'}, {'date': '2020-03-17', 'gas': '314680.0'}, {'date': '2020-03-18', 'gas': '300978.0'}, {'date': '2020-03-19', 'gas': '300493.0'}, {'date': '2020-03-20', 'gas': '295686.0'}, {'date': '2020-03-21', 'gas': '292025.0'}, {'date': '2020-03-22', 'gas': '313213.0'}, {'date': '2020-03-23', 'gas': '295146.0'}, {'date': '2020-03-24', 'gas': '297546.0'}, {'date': '2020-03-25', 'gas': '292497.0'}, {'date': '2020-03-26', 'gas': '288480.0'}, {'date': '2020-03-27', 'gas': '302718.0'}, {'date': '2020-03-28', 'gas': '339777.0'}, {'date': '2020-03-29', 'gas': '370297.0'}, {'date': '2020-03-30', 'gas': '358731.0'}, {'date': '2020-03-31', 'gas': '348262.0'}, {'date': '2020-04-01', 'gas': '349999.0'}, {'date': '2020-04-02', 'gas': '340605.0'}, {'date': '2020-04-03', 'gas': '326316.0'}, {'date': '2020-04-04', 'gas': '351964.0'}, {'date': '2020-04-05', 'gas': '361294.0'}, {'date': '2020-04-06', 'gas': '378278.0'}, {'date': '2020-04-07', 'gas': '256485.0'}, {'date': '2020-04-08', 'gas': '319407.0'}, {'date': '2020-04-09', 'gas': '311412.0'}, {'date': '2020-04-10', 'gas': '298536.0'}, {'date': '2020-04-11', 'gas': '326573.0'}, {'date': '2020-04-12', 'gas': '355187.0'}, {'date': '2020-04-13', 'gas': '325323.0'}, {'date': '2020-04-14', 'gas': '325587.0'}, {'date': '2020-04-15', 'gas': '315829.0'}, {'date': '2020-04-16', 'gas': '299241.0'}, {'date': '2020-04-17', 'gas': '285852.0'}, {'date': '2020-04-18', 'gas': '300034.0'}, {'date': '2020-04-19', 'gas': '334543.0'}, {'date': '2020-04-20', 'gas': '306730.0'}, {'date': '2020-04-21', 'gas': '314633.0'}, {'date': '2020-04-22', 'gas': '314849.0'}, {'date': '2020-04-23', 'gas': '312300.0'}, {'date': '2020-04-24', 'gas': '295883.0'}, {'date': '2020-04-25', 'gas': '316003.0'}, {'date': '2020-04-26', 'gas': '293681.0'}, {'date': '2020-04-27', 'gas': '290669.0'}, {'date': '2020-04-28', 'gas': '296364.0'}, {'date': '2020-04-29', 'gas': '292284.0'}, {'date': '2020-04-30', 'gas': '275072.0'}, {'date': '2020-05-01', 'gas': '274160.0'}, {'date': '2020-05-02', 'gas': '270438.0'}, {'date': '2020-05-03', 'gas': '259245.0'}, {'date': '2020-05-04', 'gas': '255400.0'}, {'date': '2020-05-05', 'gas': '262568.0'}, {'date': '2020-05-06', 'gas': '268768.0'}, {'date': '2020-05-07', 'gas': '261009.0'}, {'date': '2020-05-08', 'gas': '264285.0'}, {'date': '2020-05-09', 'gas': '249561.0'}, {'date': '2020-05-10', 'gas': '286041.0'}, {'date': '2020-05-11', 'gas': '262456.0'}, {'date': '2020-05-12', 'gas': '267462.0'}, {'date': '2020-05-13', 'gas': '264440.0'}, {'date': '2020-05-14', 'gas': '262914.0'}, {'date': '2020-05-15', 'gas': '253340.0'}, {'date': '2020-05-16', 'gas': '264011.0'}, {'date': '2020-05-17', 'gas': '272062.0'}, {'date': '2020-05-18', 'gas': '255058.0'}, {'date': '2020-05-19', 'gas': '254414.0'}, {'date': '2020-05-20', 'gas': '252629.0'}, {'date': '2020-05-21', 'gas': '254388.0'}, {'date': '2020-05-22', 'gas': '244403.0'}, {'date': '2020-05-23', 'gas': '253447.0'}, {'date': '2020-05-24', 'gas': '266623.0'}, {'date': '2020-05-25', 'gas': '243163.0'}, {'date': '2020-05-26', 'gas': '253672.0'}, {'date': '2020-05-27', 'gas': '250048.0'}, {'date': '2020-05-28', 'gas': '247746.0'}, {'date': '2020-05-29', 'gas': '240332.0'}, {'date': '2020-05-30', 'gas': '260165.0'}, {'date': '2020-05-31', 'gas': '276152.0'}, {'date': '2020-06-01', 'gas': '254223.0'}, {'date': '2020-06-02', 'gas': '250885.0'}, {'date': '2020-06-03', 'gas': '250369.0'}, {'date': '2020-06-04', 'gas': '245865.0'}, {'date': '2020-06-05', 'gas': '242007.0'}, {'date': '2020-06-06', 'gas': '252339.0'}, {'date': '2020-06-07', 'gas': '265338.0'}, {'date': '2020-06-08', 'gas': '249439.0'}, {'date': '2020-06-09', 'gas': '250421.0'}, {'date': '2020-06-10', 'gas': '247981.0'}, {'date': '2020-06-11', 'gas': '247298.0'}, {'date': '2020-06-12', 'gas': '236323.0'}, {'date': '2020-06-13', 'gas': '242335.0'}, {'date': '2020-06-14', 'gas': '249981.0'}, {'date': '2020-06-15', 'gas': '237439.0'}, {'date': '2020-06-16', 'gas': '239747.0'}, {'date': '2020-06-17', 'gas': '243390.0'}, {'date': '2020-06-18', 'gas': '244942.0'}, {'date': '2020-06-19', 'gas': '238671.0'}, {'date': '2020-06-20', 'gas': '250452.0'}, {'date': '2020-06-21', 'gas': '271958.0'}, {'date': '2020-06-22', 'gas': '256384.0'}, {'date': '2020-06-23', 'gas': '261542.0'}, {'date': '2020-06-24', 'gas': '252743.0'}, {'date': '2020-06-25', 'gas': '262104.0'}, {'date': '2020-06-26', 'gas': '246844.0'}, {'date': '2020-06-27', 'gas': '254288.0'}, {'date': '2020-06-28', 'gas': '250093.0'}, {'date': '2020-06-29', 'gas': '250208.0'}, {'date': '2020-07-01', 'gas': '243902.0'}, {'date': '2020-07-02', 'gas': '245104.0'}, {'date': '2020-07-03', 'gas': '239115.0'}, {'date': '2020-07-04', 'gas': '240789.0'}, {'date': '2020-07-05', 'gas': '256250.0'}, {'date': '2020-07-06', 'gas': '249518.0'}, {'date': '2020-07-07', 'gas': '246508.0'}, {'date': '2020-07-08', 'gas': '241674.0'}, {'date': '2020-07-09', 'gas': '243764.0'}, {'date': '2020-07-10', 'gas': '234272.0'}, {'date': '2020-07-11', 'gas': '242440.0'}, {'date': '2020-07-12', 'gas': '249698.0'}, {'date': '2020-07-13', 'gas': '240019.0'}, {'date': '2020-07-14', 'gas': '239355.0'}, {'date': '2020-07-15', 'gas': '243342.0'}, {'date': '2020-07-16', 'gas': '248935.0'}, {'date': '2020-07-17', 'gas': '244690.0'}, {'date': '2020-07-18', 'gas': '249910.0'}, {'date': '2020-07-19', 'gas': '252924.0'}, {'date': '2020-07-20', 'gas': '243309.0'}, {'date': '2020-07-21', 'gas': '245559.0'}, {'date': '2020-07-22', 'gas': '239541.0'}, {'date': '2020-07-23', 'gas': '237935.0'}, {'date': '2020-07-24', 'gas': '227642.0'}, {'date': '2020-07-25', 'gas': '227448.0'}, {'date': '2020-07-26', 'gas': '237940.0'}, {'date': '2020-07-27', 'gas': '223391.0'}, {'date': '2020-07-28', 'gas': '230261.0'}, {'date': '2020-07-29', 'gas': '229474.0'}, {'date': '2020-07-30', 'gas': '227067.0'}, {'date': '2020-07-31', 'gas': '224338.0'}, {'date': '2020-08-01', 'gas': '220198.0'}, {'date': '2020-08-02', 'gas': '220159.0'}, {'date': '2020-08-03', 'gas': '214853.0'}, {'date': '2020-08-04', 'gas': '217267.0'}, {'date': '2020-08-05', 'gas': '219123.0'}, {'date': '2020-08-06', 'gas': '214962.0'}, {'date': '2020-08-07', 'gas': '207864.0'}, {'date': '2020-08-08', 'gas': '214251.0'}, {'date': '2020-08-09', 'gas': '221319.0'}, {'date': '2020-08-10', 'gas': '213831.0'}, {'date': '2020-08-11', 'gas': '215835.0'}, {'date': '2020-08-12', 'gas': '213500.0'}, {'date': '2020-08-13', 'gas': '209062.0'}, {'date': '2020-08-14', 'gas': '201123.0'}, {'date': '2020-08-15', 'gas': '207518.0'}, {'date': '2020-08-16', 'gas': '211971.0'}, {'date': '2020-08-17', 'gas': '204013.0'}, {'date': '2020-08-18', 'gas': '206892.0'}, {'date': '2020-08-19', 'gas': '205064.0'}, {'date': '2020-08-20', 'gas': '206993.0'}, {'date': '2020-08-21', 'gas': '204647.0'}, {'date': '2020-08-23', 'gas': '140515.0'}, {'date': '2020-08-24', 'gas': '141694.0'}, {'date': '2020-08-25', 'gas': '210708.0'}, {'date': '2020-08-26', 'gas': '212270.0'}, {'date': '2020-08-27', 'gas': '207588.0'}, {'date': '2020-08-28', 'gas': '199647.0'}, {'date': '2020-08-29', 'gas': '194684.0'}, {'date': '2020-08-30', 'gas': '198506.0'}, {'date': '2020-08-31', 'gas': '297117.0'}, {'date': '2020-09-01', 'gas': '220162.0'}, {'date': '2020-09-02', 'gas': '222108.0'}, {'date': '2020-09-03', 'gas': '221338.0'}, {'date': '2020-09-04', 'gas': '215820.0'}, {'date': '2020-09-05', 'gas': '227443.0'}, {'date': '2020-09-06', 'gas': '241888.0'}, {'date': '2020-09-07', 'gas': '224836.0'}, {'date': '2020-09-08', 'gas': '222628.0'}, {'date': '2020-09-09', 'gas': '222964.0'}, {'date': '2020-09-10', 'gas': '234772.0'}, {'date': '2020-09-11', 'gas': '223348.0'}, {'date': '2020-09-12', 'gas': '236493.0'}, {'date': '2020-09-13', 'gas': '248283.0'}, {'date': '2020-09-14', 'gas': '239005.0'}, {'date': '2020-09-15', 'gas': '243569.0'}, {'date': '2020-09-16', 'gas': '243963.0'}, {'date': '2020-09-17', 'gas': '250203.0'}, {'date': '2020-09-18', 'gas': '247322.0'}, {'date': '2020-09-19', 'gas': '255082.0'}, {'date': '2020-09-20', 'gas': '272475.0'}, {'date': '2020-09-21', 'gas': '255164.0'}, {'date': '2020-09-22', 'gas': '252683.0'}, {'date': '2020-09-23', 'gas': '259688.0'}, {'date': '2020-09-24', 'gas': '261226.0'}, {'date': '2020-09-25', 'gas': '251469.0'}, {'date': '2020-09-26', 'gas': '272663.0'}, {'date': '2020-09-27', 'gas': '258720.0'}, {'date': '2020-09-28', 'gas': '253462.0'}, {'date': '2020-09-29', 'gas': '251011.0'}, {'date': '2020-09-30', 'gas': '239546.0'}, {'date': '2020-10-01', 'gas': '258260.0'}, {'date': '2020-10-02', 'gas': '228841.0'}, {'date': '2020-10-03', 'gas': '231133.0'}, {'date': '2020-10-04', 'gas': '241883.0'}, {'date': '2020-10-05', 'gas': '254290.0'}, {'date': '2020-10-06', 'gas': '258538.0'}, {'date': '2020-10-07', 'gas': '269176.0'}, {'date': '2020-10-08', 'gas': '286398.0'}, {'date': '2020-10-09', 'gas': '269863.0'}, {'date': '2020-10-10', 'gas': '258799.0'}, {'date': '2020-10-11', 'gas': '291748.0'}, {'date': '2020-10-12', 'gas': '271811.0'}, {'date': '2020-10-13', 'gas': '273996.0'}, {'date': '2020-10-14', 'gas': '276889.0'}, {'date': '2020-10-15', 'gas': '278429.0'}, {'date': '2020-10-16', 'gas': '280452.0'}, {'date': '2020-10-17', 'gas': '295395.0'}, {'date': '2020-10-18', 'gas': '315186.0'}, {'date': '2020-10-19', 'gas': '296576.0'}, {'date': '2020-10-20', 'gas': '294191.0'}, {'date': '2020-10-21', 'gas': '298466.0'}, {'date': '2020-10-22', 'gas': '302110.0'}, {'date': '2020-10-24', 'gas': '309789.0'}, {'date': '2020-10-25', 'gas': '257545.0'}, {'date': '2020-10-26', 'gas': '247301.0'}, {'date': '2020-10-27', 'gas': '439064.0'}, {'date': '2020-10-28', 'gas': '302614.0'}, {'date': '2020-10-29', 'gas': '304809.0'}, {'date': '2020-10-30', 'gas': '295572.0'}, {'date': '2020-10-31', 'gas': '300425.0'}, {'date': '2020-11-01', 'gas': '316876.0'}];
        const preview =[{'date': '2020-01-01', 'gas': '403943.75'}, {'date': '2020-01-02', 'gas': '408138.88'}, {'date': '2020-01-03', 'gas': '386497.88'}, {'date': '2020-01-04', 'gas': '388089.25'}, {'date': '2020-01-05', 'gas': '403488.22'}, {'date': '2020-01-06', 'gas': '427077.94'}, {'date': '2020-01-07', 'gas': '433520.88'}, {'date': '2020-01-08', 'gas': '434291.56'}, {'date': '2020-01-09', 'gas': '429813.88'}, {'date': '2020-01-10', 'gas': '419856.9'}, {'date': '2020-01-11', 'gas': '417077.78'}, {'date': '2020-01-12', 'gas': '426832.2'}, {'date': '2020-01-13', 'gas': '444547.44'}, {'date': '2020-01-14', 'gas': '424638.38'}, {'date': '2020-01-15', 'gas': '422592.25'}, {'date': '2020-01-16', 'gas': '425066.2'}, {'date': '2020-01-17', 'gas': '435520.4'}, {'date': '2020-01-18', 'gas': '441042.8'}, {'date': '2020-01-19', 'gas': '444650.84'}, {'date': '2020-01-21', 'gas': '431174.12'}, {'date': '2020-01-22', 'gas': '415707.06'}, {'date': '2020-01-23', 'gas': '431443.5'}, {'date': '2020-01-24', 'gas': '442333.78'}, {'date': '2020-01-25', 'gas': '440613.44'}, {'date': '2020-01-26', 'gas': '432556.38'}, {'date': '2020-01-27', 'gas': '426804.84'}, {'date': '2020-01-28', 'gas': '406682.9'}, {'date': '2020-01-29', 'gas': '409129.8'}, {'date': '2020-01-30', 'gas': '431041.84'}, {'date': '2020-01-31', 'gas': '441423.94'}, {'date': '2020-02-01', 'gas': '434134.88'}, {'date': '2020-02-02', 'gas': '408254.25'}, {'date': '2020-02-03', 'gas': '391682.94'}, {'date': '2020-02-04', 'gas': '407465.28'}, {'date': '2020-02-05', 'gas': '424741.1'}, {'date': '2020-02-06', 'gas': '427952.3'}, {'date': '2020-02-07', 'gas': '417340.9'}, {'date': '2020-02-08', 'gas': '411896.3'}, {'date': '2020-02-09', 'gas': '405310.5'}, {'date': '2020-02-10', 'gas': '412637.25'}, {'date': '2020-02-11', 'gas': '408406.94'}, {'date': '2020-02-12', 'gas': '418027.3'}, {'date': '2020-02-13', 'gas': '425650.16'}, {'date': '2020-02-14', 'gas': '431605.47'}, {'date': '2020-02-15', 'gas': '426806.3'}, {'date': '2020-02-16', 'gas': '416834.62'}, {'date': '2020-02-17', 'gas': '405203.72'}, {'date': '2020-02-18', 'gas': '398634.78'}, {'date': '2020-02-19', 'gas': '404087.72'}, {'date': '2020-02-20', 'gas': '408104.88'}, {'date': '2020-02-21', 'gas': '408783.38'}, {'date': '2020-02-22', 'gas': '411059.94'}, {'date': '2020-02-23', 'gas': '396613.84'}, {'date': '2020-02-24', 'gas': '382498.8'}, {'date': '2020-02-25', 'gas': '391292.6'}, {'date': '2020-02-26', 'gas': '403650.44'}, {'date': '2020-02-27', 'gas': '406606.44'}, {'date': '2020-02-28', 'gas': '403746.44'}, {'date': '2020-02-29', 'gas': '399022.56'}, {'date': '2020-03-01', 'gas': '380983.03'}, {'date': '2020-03-02', 'gas': '374473.62'}, {'date': '2020-03-03', 'gas': '386722.12'}, {'date': '2020-03-04', 'gas': '397787.7'}, {'date': '2020-03-05', 'gas': '394202.88'}, {'date': '2020-03-06', 'gas': '391149.47'}, {'date': '2020-03-07', 'gas': '394074.8'}, {'date': '2020-03-08', 'gas': '376936.56'}, {'date': '2020-03-09', 'gas': '369214.5'}, {'date': '2020-03-10', 'gas': '382532.94'}, {'date': '2020-03-11', 'gas': '396555.56'}, {'date': '2020-03-12', 'gas': '384615.7'}, {'date': '2020-03-13', 'gas': '375252.34'}, {'date': '2020-03-14', 'gas': '374137.3'}, {'date': '2020-03-15', 'gas': '361014.5'}, {'date': '2020-03-16', 'gas': '359994.12'}, {'date': '2020-03-17', 'gas': '356795.03'}, {'date': '2020-03-18', 'gas': '354222.06'}, {'date': '2020-03-19', 'gas': '332455.25'}, {'date': '2020-03-20', 'gas': '332427.62'}, {'date': '2020-03-21', 'gas': '339233.53'}, {'date': '2020-03-22', 'gas': '329537.38'}, {'date': '2020-03-23', 'gas': '318252.94'}, {'date': '2020-03-24', 'gas': '333324.12'}, {'date': '2020-03-25', 'gas': '365521.28'}, {'date': '2020-03-26', 'gas': '381960.06'}, {'date': '2020-03-27', 'gas': '362766.25'}, {'date': '2020-03-28', 'gas': '336691.44'}, {'date': '2020-03-29', 'gas': '337229.88'}, {'date': '2020-03-30', 'gas': '341095.44'}, {'date': '2020-03-31', 'gas': '346709.84'}, {'date': '2020-04-01', 'gas': '349012.25'}, {'date': '2020-04-02', 'gas': '358493.06'}, {'date': '2020-04-03', 'gas': '337669.75'}, {'date': '2020-04-04', 'gas': '333800.06'}, {'date': '2020-04-05', 'gas': '336302.66'}, {'date': '2020-04-06', 'gas': '347024.75'}, {'date': '2020-04-07', 'gas': '337918.7'}, {'date': '2020-04-08', 'gas': '338683.8'}, {'date': '2020-04-09', 'gas': '325089.56'}, {'date': '2020-04-10', 'gas': '312447.25'}, {'date': '2020-04-11', 'gas': '318365.7'}, {'date': '2020-04-12', 'gas': '325624.88'}, {'date': '2020-04-13', 'gas': '325268.7'}, {'date': '2020-04-14', 'gas': '321418.44'}, {'date': '2020-04-15', 'gas': '319218.12'}, {'date': '2020-04-16', 'gas': '305130.44'}, {'date': '2020-04-17', 'gas': '297156.12'}, {'date': '2020-04-18', 'gas': '300120.66'}, {'date': '2020-04-19', 'gas': '304645.62'}, {'date': '2020-04-20', 'gas': '299294.4'}, {'date': '2020-04-21', 'gas': '298646.44'}, {'date': '2020-04-22', 'gas': '303026.2'}, {'date': '2020-04-23', 'gas': '286244.38'}, {'date': '2020-04-24', 'gas': '283671.2'}, {'date': '2020-04-25', 'gas': '286864.75'}, {'date': '2020-04-26', 'gas': '297384.9'}, {'date': '2020-04-27', 'gas': '295262.06'}, {'date': '2020-04-28', 'gas': '294655.44'}, {'date': '2020-04-29', 'gas': '294124.75'}, {'date': '2020-04-30', 'gas': '278685.6'}, {'date': '2020-05-01', 'gas': '283149.25'}, {'date': '2020-05-02', 'gas': '291783.44'}, {'date': '2020-05-03', 'gas': '303572.12'}, {'date': '2020-05-04', 'gas': '292231.88'}, {'date': '2020-05-05', 'gas': '288012.28'}, {'date': '2020-05-06', 'gas': '284038.62'}, {'date': '2020-05-07', 'gas': '281109.62'}, {'date': '2020-05-08', 'gas': '278843.66'}, {'date': '2020-05-09', 'gas': '278870.38'}, {'date': '2020-05-10', 'gas': '275608.7'}, {'date': '2020-05-11', 'gas': '269086.3'}, {'date': '2020-05-12', 'gas': '265863.94'}, {'date': '2020-05-13', 'gas': '269737.4'}, {'date': '2020-05-14', 'gas': '258874.69'}, {'date': '2020-05-15', 'gas': '257032.06'}, {'date': '2020-05-16', 'gas': '259536.78'}, {'date': '2020-05-17', 'gas': '264226.72'}, {'date': '2020-05-18', 'gas': '260560.69'}, {'date': '2020-05-19', 'gas': '261467.25'}, {'date': '2020-05-20', 'gas': '266387.38'}, {'date': '2020-05-21', 'gas': '254211.84'}, {'date': '2020-05-22', 'gas': '250319.53'}, {'date': '2020-05-23', 'gas': '251186.55'}, {'date': '2020-05-24', 'gas': '257157.16'}, {'date': '2020-05-25', 'gas': '253099.11'}, {'date': '2020-05-26', 'gas': '254846.34'}, {'date': '2020-05-27', 'gas': '258894.67'}, {'date': '2020-05-28', 'gas': '249425.5'}, {'date': '2020-05-29', 'gas': '245764.45'}, {'date': '2020-05-30', 'gas': '250321.44'}, {'date': '2020-05-31', 'gas': '258013.36'}, {'date': '2020-06-01', 'gas': '256521.62'}, {'date': '2020-06-02', 'gas': '257169.92'}, {'date': '2020-06-03', 'gas': '258890.34'}, {'date': '2020-06-04', 'gas': '249043.58'}, {'date': '2020-06-05', 'gas': '241299.27'}, {'date': '2020-06-06', 'gas': '242498.72'}, {'date': '2020-06-07', 'gas': '248193.47'}, {'date': '2020-06-08', 'gas': '246103.1'}, {'date': '2020-06-09', 'gas': '251357.6'}, {'date': '2020-06-10', 'gas': '242725.33'}, {'date': '2020-06-11', 'gas': '240674.94'}, {'date': '2020-06-12', 'gas': '237426.12'}, {'date': '2020-06-13', 'gas': '239024.33'}, {'date': '2020-06-14', 'gas': '243148.53'}, {'date': '2020-06-15', 'gas': '243331.88'}, {'date': '2020-06-16', 'gas': '240772.28'}, {'date': '2020-06-17', 'gas': '242082.45'}, {'date': '2020-06-18', 'gas': '235653.1'}, {'date': '2020-06-19', 'gas': '230919.0'}, {'date': '2020-06-20', 'gas': '235381.45'}, {'date': '2020-06-21', 'gas': '240221.95'}, {'date': '2020-06-22', 'gas': '240248.25'}, {'date': '2020-06-23', 'gas': '240481.77'}, {'date': '2020-06-24', 'gas': '242851.38'}, {'date': '2020-06-25', 'gas': '232986.94'}, {'date': '2020-06-26', 'gas': '229364.62'}, {'date': '2020-06-27', 'gas': '232134.47'}, {'date': '2020-06-28', 'gas': '237127.61'}, {'date': '2020-06-29', 'gas': '234707.62'}, {'date': '2020-07-01', 'gas': '234504.31'}, {'date': '2020-07-02', 'gas': '237783.25'}, {'date': '2020-07-03', 'gas': '228404.9'}, {'date': '2020-07-04', 'gas': '226401.36'}, {'date': '2020-07-05', 'gas': '229505.69'}, {'date': '2020-07-06', 'gas': '235030.88'}, {'date': '2020-07-07', 'gas': '231643.83'}, {'date': '2020-07-08', 'gas': '232174.75'}, {'date': '2020-07-09', 'gas': '236150.25'}, {'date': '2020-07-10', 'gas': '226506.19'}, {'date': '2020-07-11', 'gas': '224066.31'}, {'date': '2020-07-12', 'gas': '226390.17'}, {'date': '2020-07-13', 'gas': '231569.44'}, {'date': '2020-07-14', 'gas': '229992.5'}, {'date': '2020-07-15', 'gas': '230940.0'}, {'date': '2020-07-16', 'gas': '232854.75'}, {'date': '2020-07-17', 'gas': '222557.23'}, {'date': '2020-07-18', 'gas': '218142.75'}, {'date': '2020-07-19', 'gas': '219900.89'}, {'date': '2020-07-20', 'gas': '223833.03'}, {'date': '2020-07-21', 'gas': '221975.25'}, {'date': '2020-07-22', 'gas': '222832.81'}, {'date': '2020-07-23', 'gas': '224995.95'}, {'date': '2020-07-24', 'gas': '214986.19'}, {'date': '2020-07-25', 'gas': '209919.42'}, {'date': '2020-07-26', 'gas': '211005.06'}, {'date': '2020-07-27', 'gas': '214925.28'}, {'date': '2020-07-28', 'gas': '212208.25'}, {'date': '2020-07-29', 'gas': '211771.0'}, {'date': '2020-07-30', 'gas': '214318.77'}, {'date': '2020-07-31', 'gas': '205493.92'}, {'date': '2020-08-01', 'gas': '201539.2'}, {'date': '2020-08-02', 'gas': '205301.38'}, {'date': '2020-08-03', 'gas': '211752.34'}, {'date': '2020-08-04', 'gas': '213374.75'}, {'date': '2020-08-05', 'gas': '212018.6'}, {'date': '2020-08-06', 'gas': '210844.4'}, {'date': '2020-08-07', 'gas': '200248.2'}, {'date': '2020-08-08', 'gas': '198694.56'}, {'date': '2020-08-09', 'gas': '204875.5'}, {'date': '2020-08-10', 'gas': '209372.48'}, {'date': '2020-08-11', 'gas': '207574.94'}, {'date': '2020-08-12', 'gas': '208325.5'}, {'date': '2020-08-13', 'gas': '212246.42'}, {'date': '2020-08-14', 'gas': '205795.27'}, {'date': '2020-08-15', 'gas': '202144.45'}, {'date': '2020-08-16', 'gas': '199431.56'}, {'date': '2020-08-17', 'gas': '197168.34'}, {'date': '2020-08-18', 'gas': '191129.53'}, {'date': '2020-08-19', 'gas': '191852.12'}, {'date': '2020-08-20', 'gas': '196179.39'}, {'date': '2020-08-21', 'gas': '193239.44'}, {'date': '2020-08-23', 'gas': '196624.5'}, {'date': '2020-08-24', 'gas': '204363.12'}, {'date': '2020-08-25', 'gas': '211171.44'}, {'date': '2020-08-26', 'gas': '210338.72'}, {'date': '2020-08-27', 'gas': '209820.64'}, {'date': '2020-08-28', 'gas': '212496.03'}, {'date': '2020-08-29', 'gas': '205825.67'}, {'date': '2020-08-30', 'gas': '205348.62'}, {'date': '2020-08-31', 'gas': '209402.03'}, {'date': '2020-09-01', 'gas': '215560.17'}, {'date': '2020-09-02', 'gas': '214764.06'}, {'date': '2020-09-03', 'gas': '218186.28'}, {'date': '2020-09-04', 'gas': '223939.83'}, {'date': '2020-09-05', 'gas': '217144.88'}, {'date': '2020-09-06', 'gas': '215207.56'}, {'date': '2020-09-07', 'gas': '216426.27'}, {'date': '2020-09-08', 'gas': '220351.69'}, {'date': '2020-09-09', 'gas': '219148.94'}, {'date': '2020-09-10', 'gas': '219702.03'}, {'date': '2020-09-11', 'gas': '223788.1'}, {'date': '2020-09-12', 'gas': '216665.1'}, {'date': '2020-09-13', 'gas': '214754.38'}, {'date': '2020-09-14', 'gas': '218608.67'}, {'date': '2020-09-15', 'gas': '224799.72'}, {'date': '2020-09-16', 'gas': '222773.27'}, {'date': '2020-09-17', 'gas': '227482.77'}, {'date': '2020-09-18', 'gas': '219715.02'}, {'date': '2020-09-19', 'gas': '222285.56'}, {'date': '2020-09-20', 'gas': '223217.05'}, {'date': '2020-09-21', 'gas': '229359.55'}, {'date': '2020-09-22', 'gas': '237376.8'}, {'date': '2020-09-23', 'gas': '238906.44'}, {'date': '2020-09-24', 'gas': '237244.47'}, {'date': '2020-09-25', 'gas': '238937.56'}, {'date': '2020-09-26', 'gas': '233923.08'}, {'date': '2020-09-27', 'gas': '231462.03'}, {'date': '2020-09-28', 'gas': '236200.1'}, {'date': '2020-09-29', 'gas': '240006.56'}, {'date': '2020-09-30', 'gas': '238340.1'}, {'date': '2020-10-01', 'gas': '230231.72'}, {'date': '2020-10-02', 'gas': '230519.22'}, {'date': '2020-10-03', 'gas': '221945.16'}, {'date': '2020-10-04', 'gas': '234406.3'}, {'date': '2020-10-05', 'gas': '243347.25'}, {'date': '2020-10-06', 'gas': '230988.77'}, {'date': '2020-10-07', 'gas': '233642.5'}, {'date': '2020-10-08', 'gas': '233486.22'}, {'date': '2020-10-09', 'gas': '239972.25'}, {'date': '2020-10-10', 'gas': '240741.5'}, {'date': '2020-10-11', 'gas': '240652.92'}, {'date': '2020-10-12', 'gas': '233943.5'}, {'date': '2020-10-13', 'gas': '230370.12'}, {'date': '2020-10-14', 'gas': '233714.12'}, {'date': '2020-10-15', 'gas': '240154.69'}, {'date': '2020-10-16', 'gas': '241580.03'}, {'date': '2020-10-17', 'gas': '248889.36'}, {'date': '2020-10-18', 'gas': '242785.48'}, {'date': '2020-10-19', 'gas': '242004.44'}, {'date': '2020-10-20', 'gas': '242265.66'}, {'date': '2020-10-21', 'gas': '238459.5'}, {'date': '2020-10-22', 'gas': '239777.06'}, {'date': '2020-10-24', 'gas': '272753.25'}, {'date': '2020-10-25', 'gas': '279850.78'}, {'date': '2020-10-26', 'gas': '282417.9'}, {'date': '2020-10-27', 'gas': '254660.97'}, {'date': '2020-10-28', 'gas': '259941.38'}, {'date': '2020-10-29', 'gas': '268918.0'}, {'date': '2020-10-30', 'gas': '274237.25'}, {'date': '2020-10-31', 'gas': '283668.8'}, {'date': '2020-11-01', 'gas': '268390.22'}];
        const myChart = echarts.init(document.getElementById('predict'));
        // 绘制图表
        myChart.setOption({
            title: { text: '预测数据(2020)',
                subtext: '-Forecast data', //副标题文本，'\n'指定换行
                link:'/predict',
                x:'center',
                padding:this.props.show ?[0,15,0,0]:[0,0,0,0],
                textStyle: {
                    fontSize:18,
                    fontWeight:'normal',
                    color:'#9aa8d4',
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['实际数据', '预期数据'],
                orient: 'vertical',
                x: 'left',
                y: 'top',
                textStyle: {
                    color: '#fff'          // 图例文字颜色
                }

            },
            axisLabel: {
                color: '#ffffff',
                fontSize:'1px'
            },
            xAxis: {
                data: real.map(function (item) {
                    return item["date"];
                }),
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color:'#fff',
                        width:'1'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },

            yAxis: {
                scale:true,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color:'#fff',
                        width:'1'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '2020-09-01'
            }, {
                type: 'inside',
            }],
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },

            series: [{
                orient:'horizontal',
                top: '10%',
                left:'10%',
                name: '实际数据',
                symbol:'none',
                type: 'line',
                data: real.map(function (item) {
                    return item["gas"];
                }),
                markLine: {
                    symbol:'none',
                    silent: true,
                    lineStyle:{               //警戒线的样式  ，虚实  颜色
                        type:"dashed",
                        color:"#6d6d6d",
                    },
                    data: [{
                        yAxis: 300000
                    }, {
                        yAxis: 400000
                    }, {
                        yAxis: 500000
                    },
                        {
                            yAxis: 600000
                        },
                    ]
                },
                itemStyle: {
                    normal: {
                        color: "#ff2b00"
                    }
                }
            },
                {
                    name: '预期数据',
                    type: 'line',
                    symbolSize:0,   //拐点圆的大小
                    data: preview.map(function (item) {
                        return item["gas"];
                    }),
                    itemStyle: {
                        normal:{
                            color: "rgba(13,87,255,0.81)"
                        }
                    }


                },
            ]
        });
    }



    render() {
        return (
            <div id="predict" className="chart-loader"/>
        );
    }
}