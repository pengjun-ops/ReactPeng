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

export default class RangeChart extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }


    componentDidMount() {
        const predict_range = [{'date': '2020-01-01', 'real': '525068.0', 'low': '334409.96715502813', 'high': '536287.8758486509'}, {'date': '2020-01-02', 'real': '493177.0', 'low': '332897.5475938171', 'high': '529059.4601416066'}, {'date': '2020-01-03', 'real': '450651.0', 'low': '341985.8552043736', 'high': '534927.8951889202'}, {'date': '2020-01-04', 'real': '460882.0', 'low': '321589.33915263787', 'high': '511666.5008671284'}, {'date': '2020-01-05', 'real': '490504.0', 'low': '313815.4626103379', 'high': '496785.8134904355'}, {'date': '2020-01-06', 'real': '414559.0', 'low': '289105.048027657', 'high': '450243.56329138577'}, {'date': '2020-01-07', 'real': '454691.0', 'low': '288115.67269410193', 'high': '437940.51714755595'}, {'date': '2020-01-08', 'real': '489583.0', 'low': '280681.26895903423', 'high': '425321.4296704829'}, {'date': '2020-01-09', 'real': '491657.0', 'low': '353318.3308918625', 'high': '543212.4883171469'}, {'date': '2020-01-10', 'real': '483425.0', 'low': '353490.5596879348', 'high': '544218.1612109542'}, {'date': '2020-01-11', 'real': '504067.0', 'low': '358762.6114864573', 'high': '552596.5996311828'}, {'date': '2020-01-12', 'real': '520060.0', 'low': '345671.28279921785', 'high': '533841.4508701265'}, {'date': '2020-01-13', 'real': '500436.0', 'low': '354442.3252670616', 'high': '545762.3699693605'}, {'date': '2020-01-14', 'real': '513237.0', 'low': '354235.5910137519', 'high': '545055.2468880862'}, {'date': '2020-01-15', 'real': '515952.0', 'low': '358119.3652896881', 'high': '547651.5736021176'}, {'date': '2020-01-16', 'real': '517135.0', 'low': '359277.0293498039', 'high': '551197.2182763368'}, {'date': '2020-01-17', 'real': '519694.0', 'low': '366595.8577125333', 'high': '561910.506070286'}, {'date': '2020-01-18', 'real': '467570.0', 'low': '337873.6165947914', 'high': '524135.6866086945'}, {'date': '2020-01-19', 'real': '386720.0', 'low': '327366.5257719457', 'high': '507998.65434002876'}, {'date': '2020-01-21', 'real': '486731.0', 'low': '368738.6286975667', 'high': '564696.8515912145'}, {'date': '2020-01-22', 'real': '455506.0', 'low': '360295.2089794092', 'high': '554453.1484454125'}, {'date': '2020-01-23', 'real': '453091.0', 'low': '361137.6376295909', 'high': '551432.7866747081'}, {'date': '2020-01-24', 'real': '432098.0', 'low': '363207.45763063803', 'high': '555203.0153110847'}, {'date': '2020-01-25', 'real': '385614.0', 'low': '377097.21752518043', 'high': '575605.8295042366'}, {'date': '2020-01-26', 'real': '406179.0', 'low': '339026.08692691475', 'high': '528456.5101102963'}, {'date': '2020-01-27', 'real': '416202.0', 'low': '373547.0358012207', 'high': '569072.5375758633'}, {'date': '2020-01-28', 'real': '433103.0', 'low': '379106.35448594764', 'high': '577893.1592517272'}, {'date': '2020-01-29', 'real': '432740.0', 'low': '376639.84112271667', 'high': '574262.80308301'}, {'date': '2020-01-30', 'real': '440727.0', 'low': '374841.19939070195', 'high': '571598.8385090306'}, {'date': '2020-01-31', 'real': '428680.0', 'low': '359638.0232942924', 'high': '550239.6022909656'}, {'date': '2020-02-01', 'real': '393678.0', 'low': '355141.38911524415', 'high': '546766.0131303892'}, {'date': '2020-02-02', 'real': '407295.0', 'low': '373338.03302304074', 'high': '567786.7615585998'}, {'date': '2020-02-03', 'real': '404218.0', 'low': '365010.3379222788', 'high': '557274.23821567'}, {'date': '2020-02-04', 'real': '396678.0', 'low': '358719.3005708419', 'high': '549543.4636459053'}, {'date': '2020-02-05', 'real': '401445.0', 'low': '366685.4942939207', 'high': '557962.4967217073'}, {'date': '2020-02-06', 'real': '414471.0', 'low': '363015.8269771226', 'high': '553143.4335209653'}, {'date': '2020-02-07', 'real': '413070.0', 'low': '369801.7310894057', 'high': '563747.0560468435'}, {'date': '2020-02-08', 'real': '415291.0', 'low': '365667.0161742009', 'high': '558792.478334114'}, {'date': '2020-02-09', 'real': '417027.0', 'low': '340180.10940763354', 'high': '528154.6769065037'}, {'date': '2020-02-10', 'real': '379173.0', 'low': '342806.94181136787', 'high': '525564.2602967396'}, {'date': '2020-02-11', 'real': '383048.0', 'low': '336448.8038821891', 'high': '516840.0509278625'}, {'date': '2020-02-12', 'real': '373977.0', 'low': '335568.2580443844', 'high': '518323.3677029088'}, {'date': '2020-02-13', 'real': '354896.0', 'low': '341134.7404918596', 'high': '525806.3357796073'}, {'date': '2020-02-14', 'real': '343090.0', 'low': '340223.83820940927', 'high': '525948.8349602744'}, {'date': '2020-02-15', 'real': '400890.0', 'low': '343894.5800906196', 'high': '532529.4077227861'}, {'date': '2020-02-16', 'real': '437092.0', 'low': '359478.629573144', 'high': '550231.9609440342'}, {'date': '2020-02-17', 'real': '401687.0', 'low': '353404.7736290246', 'high': '544494.0854728073'}, {'date': '2020-02-18', 'real': '391949.0', 'low': '350474.6752689481', 'high': '542088.8521300852'}, {'date': '2020-02-19', 'real': '393449.0', 'low': '352344.74568536505', 'high': '543958.5942073762'}, {'date': '2020-02-20', 'real': '384975.0', 'low': '350841.8479588069', 'high': '542311.1675673723'}, {'date': '2020-02-21', 'real': '366946.0', 'low': '328804.86008673534', 'high': '515586.09395680577'}, {'date': '2020-02-22', 'real': '368339.0', 'low': '324516.0944234319', 'high': '509842.1292872429'}, {'date': '2020-02-23', 'real': '372331.0', 'low': '348176.59987733513', 'high': '539104.8464553282'}, {'date': '2020-02-24', 'real': '330612.0', 'low': '340503.5831447281', 'high': '529799.0589473397'}, {'date': '2020-02-25', 'real': '311747.0', 'low': '344783.7821417451', 'high': '534076.0044021085'}, {'date': '2020-02-26', 'real': '340256.0', 'low': '339412.39283311367', 'high': '527523.1315222234'}, {'date': '2020-02-27', 'real': '338282.0', 'low': '341494.30168379843', 'high': '529323.5641949251'}, {'date': '2020-02-28', 'real': '334269.0', 'low': '316421.2216119878', 'high': '499502.55111666024'}, {'date': '2020-02-29', 'real': '354539.0', 'low': '309869.39344750345', 'high': '492448.2148443982'}, {'date': '2020-03-01', 'real': '385478.0', 'low': '329222.29851187766', 'high': '513523.16907740384'}, {'date': '2020-03-02', 'real': '371811.0', 'low': '320602.02340087295', 'high': '502417.12799078226'}, {'date': '2020-03-03', 'real': '367306.0', 'low': '323148.38286973536', 'high': '505311.7060272321'}, {'date': '2020-03-04', 'real': '373810.0', 'low': '318422.0903965831', 'high': '499124.961121805'}, {'date': '2020-03-05', 'real': '375871.0', 'low': '324595.94052906334', 'high': '506645.41955688596'}, {'date': '2020-03-06', 'real': '352154.0', 'low': '309208.74527705833', 'high': '490550.71318645775'}, {'date': '2020-03-07', 'real': '357572.0', 'low': '310530.60874916613', 'high': '493620.7437122166'}, {'date': '2020-03-08', 'real': '367659.0', 'low': '322259.21066762134', 'high': '504573.77876614034'}, {'date': '2020-03-09', 'real': '337858.0', 'low': '316079.5698269196', 'high': '497191.34216000885'}, {'date': '2020-03-10', 'real': '358072.0', 'low': '312148.60426387936', 'high': '492066.50568596274'}, {'date': '2020-03-11', 'real': '347279.0', 'low': '311479.4491251707', 'high': '491178.7363873869'}, {'date': '2020-03-12', 'real': '333511.0', 'low': '309479.9235460907', 'high': '488213.6549858898'}, {'date': '2020-03-13', 'real': '334368.0', 'low': '280238.27978008986', 'high': '451521.63826369494'}, {'date': '2020-03-14', 'real': '352148.0', 'low': '279286.3948049173', 'high': '451391.9741579518'}, {'date': '2020-03-15', 'real': '357951.0', 'low': '278981.30805887654', 'high': '443831.27925543487'}, {'date': '2020-03-16', 'real': '323950.0', 'low': '268144.23641444', 'high': '428092.31340347975'}, {'date': '2020-03-17', 'real': '314680.0', 'low': '268338.73257305473', 'high': '429305.55632291734'}, {'date': '2020-03-18', 'real': '300978.0', 'low': '228466.4827748239', 'high': '376105.48411972076'}, {'date': '2020-03-19', 'real': '300493.0', 'low': '215438.6130859293', 'high': '359746.07671574503'}, {'date': '2020-03-20', 'real': '295686.0', 'low': '207772.04373979568', 'high': '350000.82221216336'}, {'date': '2020-03-21', 'real': '292025.0', 'low': '207775.6256211698', 'high': '349890.79875595495'}, {'date': '2020-03-22', 'real': '313213.0', 'low': '208542.44672534615', 'high': '351763.9137715399'}, {'date': '2020-03-23', 'real': '295146.0', 'low': '202985.63535758108', 'high': '344783.244859539'}, {'date': '2020-03-24', 'real': '297546.0', 'low': '195827.5737705268', 'high': '335504.26176383346'}, {'date': '2020-03-25', 'real': '292497.0', 'low': '254103.6196160242', 'high': '415484.09096657485'}, {'date': '2020-03-26', 'real': '288480.0', 'low': '255059.5043587312', 'high': '417802.4636859745'}, {'date': '2020-03-27', 'real': '302718.0', 'low': '247806.7318583429', 'high': '401814.37798444927'}, {'date': '2020-03-28', 'real': '339777.0', 'low': '240630.85041145235', 'high': '392197.14589098096'}, {'date': '2020-03-29', 'real': '370297.0', 'low': '237030.40295220912', 'high': '387681.7068347186'}, {'date': '2020-03-30', 'real': '358731.0', 'low': '234728.38749108464', 'high': '384736.56457287073'}, {'date': '2020-03-31', 'real': '348262.0', 'low': '223396.62817987055', 'high': '370401.964860674'}, {'date': '2020-04-01', 'real': '349999.0', 'low': '232826.19953834638', 'high': '383415.9846082553'}, {'date': '2020-04-02', 'real': '340605.0', 'low': '241401.134000957', 'high': '394716.40245744586'}, {'date': '2020-04-03', 'real': '326316.0', 'low': '237881.12962757424', 'high': '400330.40453115106'}, {'date': '2020-04-04', 'real': '351964.0', 'low': '234845.60455905274', 'high': '395089.63449662924'}, {'date': '2020-04-05', 'real': '361294.0', 'low': '232631.79292676598', 'high': '392055.3033885658'}, {'date': '2020-04-06', 'real': '378278.0', 'low': '225890.03550241888', 'high': '379874.04121145606'}, {'date': '2020-04-07', 'real': '256485.0', 'low': '213547.85730457678', 'high': '361302.702662915'}, {'date': '2020-04-08', 'real': '319407.0', 'low': '211039.01804310828', 'high': '357228.3125998527'}, {'date': '2020-04-09', 'real': '311412.0', 'low': '221000.08089948073', 'high': '364191.997424338'}, {'date': '2020-04-10', 'real': '298536.0', 'low': '215872.34907132387', 'high': '358304.42916068435'}, {'date': '2020-04-11', 'real': '326573.0', 'low': '214361.6010547541', 'high': '361117.2507547699'}, {'date': '2020-04-12', 'real': '355187.0', 'low': '214186.59630061686', 'high': '361361.08732931316'}, {'date': '2020-04-13', 'real': '325323.0', 'low': '212151.66979395598', 'high': '355750.8462310508'}, {'date': '2020-04-14', 'real': '325587.0', 'low': '213929.08887882903', 'high': '364265.27674745023'}, {'date': '2020-04-15', 'real': '315829.0', 'low': '212736.5910223499', 'high': '361819.2099570632'}, {'date': '2020-04-16', 'real': '299241.0', 'low': '210663.7861201577', 'high': '351855.9084248319'}, {'date': '2020-04-17', 'real': '285852.0', 'low': '209719.54249191657', 'high': '350309.1923494637'}, {'date': '2020-04-18', 'real': '300034.0', 'low': '210599.55104751512', 'high': '350888.8303028308'}, {'date': '2020-04-19', 'real': '334543.0', 'low': '211683.75669045', 'high': '349542.13245319575'}, {'date': '2020-04-20', 'real': '306730.0', 'low': '209050.17841012776', 'high': '345710.7431923561'}, {'date': '2020-04-21', 'real': '314633.0', 'low': '207354.81425773352', 'high': '344431.08622244'}, {'date': '2020-04-22', 'real': '314849.0', 'low': '206954.12112801522', 'high': '343993.6489596255'}, {'date': '2020-04-23', 'real': '312300.0', 'low': '209041.34310273826', 'high': '344923.2964212671'}, {'date': '2020-04-24', 'real': '295883.0', 'low': '210236.8855583854', 'high': '345771.4859306589'}, {'date': '2020-04-25', 'real': '316003.0', 'low': '210415.29309982806', 'high': '345126.74728331715'}, {'date': '2020-04-26', 'real': '293681.0', 'low': '209687.00706943497', 'high': '344431.17576947436'}, {'date': '2020-04-27', 'real': '290669.0', 'low': '204374.21137028188', 'high': '339218.5235037394'}, {'date': '2020-04-28', 'real': '296364.0', 'low': '201858.11879903078', 'high': '337297.8291639015'}, {'date': '2020-04-29', 'real': '292284.0', 'low': '208171.48321103305', 'high': '343053.3454008959'}, {'date': '2020-04-30', 'real': '275072.0', 'low': '207683.5712698549', 'high': '342233.48260337114'}, {'date': '2020-05-01', 'real': '274160.0', 'low': '206418.21197642386', 'high': '340609.42773933336'}, {'date': '2020-05-02', 'real': '270438.0', 'low': '193320.30158215947', 'high': '330181.7054379359'}, {'date': '2020-05-03', 'real': '259245.0', 'low': '194399.86570381373', 'high': '330904.9768344052'}, {'date': '2020-05-04', 'real': '255400.0', 'low': '194578.92992350832', 'high': '331001.8368765637'}, {'date': '2020-05-05', 'real': '262568.0', 'low': '195815.72371298075', 'high': '332763.3464383334'}, {'date': '2020-05-06', 'real': '268768.0', 'low': '205844.93186249584', 'high': '342057.6122279018'}, {'date': '2020-05-07', 'real': '261009.0', 'low': '204126.64366930723', 'high': '341741.7499887273'}, {'date': '2020-05-08', 'real': '264285.0', 'low': '204055.811965134', 'high': '341691.7827435583'}, {'date': '2020-05-09', 'real': '249561.0', 'low': '204329.37815508246', 'high': '341044.4770812318'}, {'date': '2020-05-10', 'real': '286041.0', 'low': '205188.04466749355', 'high': '341054.5063490793'}, {'date': '2020-05-11', 'real': '262456.0', 'low': '206182.2256918922', 'high': '340756.9714029357'}, {'date': '2020-05-12', 'real': '267462.0', 'low': '203001.18669254705', 'high': '337602.16968465596'}, {'date': '2020-05-13', 'real': '264440.0', 'low': '203502.6799339354', 'high': '337482.2960546687'}, {'date': '2020-05-14', 'real': '262914.0', 'low': '204473.10114521906', 'high': '337811.20231184736'}, {'date': '2020-05-15', 'real': '253340.0', 'low': '204298.57397526503', 'high': '337690.6123055853'}, {'date': '2020-05-16', 'real': '264011.0', 'low': '204082.4969813712', 'high': '337361.40755829215'}, {'date': '2020-05-17', 'real': '272062.0', 'low': '206213.0000226982', 'high': '339693.1227858104'}, {'date': '2020-05-18', 'real': '255058.0', 'low': '207426.27279114723', 'high': '340066.05633487925'}, {'date': '2020-05-19', 'real': '254414.0', 'low': '203951.37027406693', 'high': '336947.84950463846'}, {'date': '2020-05-20', 'real': '252629.0', 'low': '206168.43544860184', 'high': '339779.23718384653'}, {'date': '2020-05-21', 'real': '254388.0', 'low': '208880.03904485703', 'high': '341704.140234299'}, {'date': '2020-05-22', 'real': '244403.0', 'low': '208529.96983855963', 'high': '341403.5009909645'}, {'date': '2020-05-23', 'real': '253447.0', 'low': '210746.0201467052', 'high': '343437.412631236'}, {'date': '2020-05-24', 'real': '266623.0', 'low': '211350.9999107942', 'high': '343315.0316842869'}, {'date': '2020-05-25', 'real': '243163.0', 'low': '210267.12260698527', 'high': '341524.68797745556'}, {'date': '2020-05-26', 'real': '253672.0', 'low': '205878.66124543548', 'high': '336591.422458902'}, {'date': '2020-05-27', 'real': '250048.0', 'low': '206746.10336721316', 'high': '338130.25839524716'}, {'date': '2020-05-28', 'real': '247746.0', 'low': '209264.37491630018', 'high': '340841.80229347944'}, {'date': '2020-05-29', 'real': '240332.0', 'low': '208368.75532771274', 'high': '340141.30569274724'}, {'date': '2020-05-30', 'real': '260165.0', 'low': '209775.7481804788', 'high': '341415.32119949907'}, {'date': '2020-05-31', 'real': '276152.0', 'low': '209369.44343660772', 'high': '340895.41111804545'}, {'date': '2020-06-01', 'real': '254223.0', 'low': '209042.92510034516', 'high': '340396.1565525159'}, {'date': '2020-06-02', 'real': '250885.0', 'low': '195530.00897537172', 'high': '328048.0384013951'}, {'date': '2020-06-03', 'real': '250369.0', 'low': '197090.93318019062', 'high': '329362.8873558119'}, {'date': '2020-06-04', 'real': '245865.0', 'low': '202470.3220238909', 'high': '334338.5683196373'}, {'date': '2020-06-05', 'real': '242007.0', 'low': '202229.6792935729', 'high': '333517.78020275757'}, {'date': '2020-06-06', 'real': '252339.0', 'low': '202785.22909469903', 'high': '333859.2827427685'}, {'date': '2020-06-07', 'real': '265338.0', 'low': '203077.15242668986', 'high': '333827.52339458466'}, {'date': '2020-06-08', 'real': '249439.0', 'low': '191407.93511651643', 'high': '322440.2449220717'}, {'date': '2020-06-09', 'real': '250421.0', 'low': '192661.4294278957', 'high': '322954.4836913496'}, {'date': '2020-06-10', 'real': '247981.0', 'low': '193863.5088170506', 'high': '324446.06864256784'}, {'date': '2020-06-11', 'real': '247298.0', 'low': '207023.43053260446', 'high': '338072.8288972154'}, {'date': '2020-06-12', 'real': '236323.0', 'low': '207349.5309827067', 'high': '338890.96045207605'}, {'date': '2020-06-13', 'real': '242335.0', 'low': '208367.88970638067', 'high': '340046.56493040174'}, {'date': '2020-06-14', 'real': '249981.0', 'low': '209642.44249533862', 'high': '341833.20735981315'}, {'date': '2020-06-15', 'real': '237439.0', 'low': '210120.86245087534', 'high': '342025.3454465233'}, {'date': '2020-06-16', 'real': '239747.0', 'low': '204272.90382541716', 'high': '334409.28062776476'}, {'date': '2020-06-17', 'real': '243390.0', 'low': '205899.67494949698', 'high': '335904.0892722197'}, {'date': '2020-06-18', 'real': '244942.0', 'low': '212567.19788236544', 'high': '343645.161750935'}, {'date': '2020-06-19', 'real': '238671.0', 'low': '212174.65353277326', 'high': '344142.20748961717'}, {'date': '2020-06-20', 'real': '250452.0', 'low': '212897.1190059334', 'high': '344748.9781943932'}, {'date': '2020-06-21', 'real': '271958.0', 'low': '212865.98648699', 'high': '345121.04612213'}, {'date': '2020-06-22', 'real': '256384.0', 'low': '213412.67113171518', 'high': '345663.2235661261'}, {'date': '2020-06-23', 'real': '261542.0', 'low': '210142.47313516587', 'high': '341436.54384664074'}, {'date': '2020-06-24', 'real': '252743.0', 'low': '210731.9612623118', 'high': '341976.9601989612'}, {'date': '2020-06-25', 'real': '262104.0', 'low': '216634.3047866337', 'high': '348926.7055350989'}, {'date': '2020-06-26', 'real': '246844.0', 'low': '215447.328997273', 'high': '347999.8937295452'}, {'date': '2020-06-27', 'real': '254288.0', 'low': '215737.96882177144', 'high': '348382.82669745013'}, {'date': '2020-06-28', 'real': '250093.0', 'low': '218981.98923527822', 'high': '351276.7182066366'}, {'date': '2020-06-29', 'real': '250208.0', 'low': '220955.27753329277', 'high': '352517.09387748316'}, {'date': '2020-07-01', 'real': '243902.0', 'low': '216985.41870833188', 'high': '347450.37342873216'}, {'date': '2020-07-02', 'real': '245104.0', 'low': '216394.3187345676', 'high': '347224.83429820836'}, {'date': '2020-07-03', 'real': '239115.0', 'low': '180887.6659551151', 'high': '308196.7742418349'}, {'date': '2020-07-04', 'real': '240789.0', 'low': '180937.55857775547', 'high': '308184.4466001056'}, {'date': '2020-07-05', 'real': '256250.0', 'low': '180393.2767784521', 'high': '307252.23212347925'}, {'date': '2020-07-06', 'real': '249518.0', 'low': '179666.78168874606', 'high': '306763.7232020721'}, {'date': '2020-07-07', 'real': '246508.0', 'low': '179363.3217138294', 'high': '306239.3954669237'}, {'date': '2020-07-08', 'real': '241674.0', 'low': '179244.03013956547', 'high': '306312.5852430016'}, {'date': '2020-07-09', 'real': '243764.0', 'low': '178996.46243859082', 'high': '306142.74436784536'}, {'date': '2020-07-10', 'real': '234272.0', 'low': '178622.36477807537', 'high': '305050.56903885305'}, {'date': '2020-07-11', 'real': '242440.0', 'low': '177234.65438670665', 'high': '304617.81807083637'}, {'date': '2020-07-12', 'real': '249698.0', 'low': '176459.66957789846', 'high': '303606.68280793354'}, {'date': '2020-07-13', 'real': '240019.0', 'low': '176988.28064619005', 'high': '303484.1227669157'}, {'date': '2020-07-14', 'real': '239355.0', 'low': '175782.30596104078', 'high': '302663.7823852077'}, {'date': '2020-07-15', 'real': '243342.0', 'low': '176424.79100801796', 'high': '304807.41899157315'}, {'date': '2020-07-16', 'real': '248935.0', 'low': '174183.80185080506', 'high': '300169.59898836166'}, {'date': '2020-07-17', 'real': '244690.0', 'low': '175619.00201939233', 'high': '301640.4985746443'}, {'date': '2020-07-18', 'real': '249910.0', 'low': '174250.40991985798', 'high': '300164.4052603692'}, {'date': '2020-07-19', 'real': '252924.0', 'low': '174359.0304725282', 'high': '299493.5487280078'}, {'date': '2020-07-20', 'real': '243309.0', 'low': '174999.0828250721', 'high': '300043.2182738781'}, {'date': '2020-07-21', 'real': '245559.0', 'low': '175486.39778602123', 'high': '301035.100924395'}, {'date': '2020-07-22', 'real': '239541.0', 'low': '172700.17166113853', 'high': '297203.47287146375'}, {'date': '2020-07-23', 'real': '237935.0', 'low': '172692.6646347586', 'high': '296340.65734646097'}, {'date': '2020-07-24', 'real': '227642.0', 'low': '175393.88077502884', 'high': '299459.78949605674'}, {'date': '2020-07-25', 'real': '227448.0', 'low': '176624.6599886939', 'high': '300718.22381883115'}, {'date': '2020-07-26', 'real': '237940.0', 'low': '177984.67049743608', 'high': '302088.83072663844'}, {'date': '2020-07-27', 'real': '223391.0', 'low': '178685.0029286053', 'high': '302853.5624000132'}, {'date': '2020-07-28', 'real': '230261.0', 'low': '181196.72261967883', 'high': '305499.7966611907'}, {'date': '2020-07-29', 'real': '229474.0', 'low': '180771.7323946394', 'high': '304949.85847421736'}, {'date': '2020-07-30', 'real': '227067.0', 'low': '180124.75507143885', 'high': '303915.8290195316'}, {'date': '2020-07-31', 'real': '224338.0', 'low': '182250.5419689566', 'high': '306440.24946497753'}, {'date': '2020-08-01', 'real': '220198.0', 'low': '182697.8294055499', 'high': '306964.5772001259'}, {'date': '2020-08-02', 'real': '220159.0', 'low': '187095.57380966097', 'high': '312073.3250569999'}, {'date': '2020-08-03', 'real': '214853.0', 'low': '188277.9976247754', 'high': '316320.9289335124'}, {'date': '2020-08-04', 'real': '217267.0', 'low': '189733.65929071233', 'high': '317532.5301573202'}, {'date': '2020-08-05', 'real': '219123.0', 'low': '187031.9804907646', 'high': '314565.4190230444'}, {'date': '2020-08-06', 'real': '214962.0', 'low': '186150.31531503052', 'high': '314654.1899830997'}, {'date': '2020-08-07', 'real': '207864.0', 'low': '191478.4384815637', 'high': '319619.93122611195'}, {'date': '2020-08-08', 'real': '214251.0', 'low': '191292.67315879837', 'high': '319857.0816220902'}, {'date': '2020-08-09', 'real': '221319.0', 'low': '191541.85270639136', 'high': '320242.4025109112'}, {'date': '2020-08-10', 'real': '213831.0', 'low': '192772.87071214803', 'high': '321365.14322762936'}, {'date': '2020-08-11', 'real': '215835.0', 'low': '192693.60666223988', 'high': '321699.63124994934'}, {'date': '2020-08-12', 'real': '213500.0', 'low': '190890.81591763347', 'high': '320193.3307360858'}, {'date': '2020-08-13', 'real': '209062.0', 'low': '191537.46490170807', 'high': '320175.6004232839'}, {'date': '2020-08-14', 'real': '201123.0', 'low': '194315.66164251044', 'high': '323464.51375001296'}, {'date': '2020-08-15', 'real': '207518.0', 'low': '194876.46486965194', 'high': '324021.5261527002'}, {'date': '2020-08-16', 'real': '211971.0', 'low': '195862.19862380996', 'high': '324989.49974504486'}, {'date': '2020-08-17', 'real': '204013.0', 'low': '196892.6461971216', 'high': '326073.854633037'}, {'date': '2020-08-18', 'real': '206892.0', 'low': '197287.22027949244', 'high': '326125.2247817442'}, {'date': '2020-08-19', 'real': '205064.0', 'low': '195939.86575160548', 'high': '323591.1631055996'}, {'date': '2020-08-20', 'real': '206993.0', 'low': '197536.45952510834', 'high': '326225.09957405925'}, {'date': '2020-08-21', 'real': '204647.0', 'low': '199243.58418801427', 'high': '328570.6348938793'}, {'date': '2020-08-23', 'real': '140515.0', 'low': '199093.4436604157', 'high': '328740.5653160699'}, {'date': '2020-08-24', 'real': '141694.0', 'low': '198963.06317839772', 'high': '328490.31120406464'}, {'date': '2020-08-25', 'real': '210708.0', 'low': '199110.27850287408', 'high': '328503.95220229775'}, {'date': '2020-08-26', 'real': '212270.0', 'low': '200079.17741457373', 'high': '329668.4815350473'}, {'date': '2020-08-27', 'real': '207588.0', 'low': '199052.58036373928', 'high': '327893.4802201018'}, {'date': '2020-08-28', 'real': '199647.0', 'low': '199299.04365129024', 'high': '327668.0604856238'}, {'date': '2020-08-29', 'real': '194684.0', 'low': '200737.2287210226', 'high': '329167.9136130139'}, {'date': '2020-08-30', 'real': '198506.0', 'low': '201766.3629378304', 'high': '330896.0221309699'}, {'date': '2020-08-31', 'real': '297117.0', 'low': '200990.58713021874', 'high': '330747.2546578981'}, {'date': '2020-09-01', 'real': '220162.0', 'low': '211962.09872223064', 'high': '346815.78344528377'}, {'date': '2020-09-02', 'real': '222108.0', 'low': '206906.0045215562', 'high': '338665.8093587011'}, {'date': '2020-09-03', 'real': '221338.0', 'low': '207459.6738349609', 'high': '338391.31784939766'}, {'date': '2020-09-04', 'real': '215820.0', 'low': '208007.88077927008', 'high': '343343.0002080165'}, {'date': '2020-09-05', 'real': '227443.0', 'low': '209194.85656863078', 'high': '342740.3785158321'}, {'date': '2020-09-06', 'real': '241888.0', 'low': '209385.97978895158', 'high': '342977.8274019249'}, {'date': '2020-09-07', 'real': '224836.0', 'low': '210005.28707853705', 'high': '343661.4294621758'}, {'date': '2020-09-08', 'real': '222628.0', 'low': '210702.08240184933', 'high': '344060.27195318416'}, {'date': '2020-09-09', 'real': '222964.0', 'low': '211478.15669957548', 'high': '344849.3305708915'}, {'date': '2020-09-10', 'real': '234772.0', 'low': '210838.46253516898', 'high': '344272.9163107611'}, {'date': '2020-09-11', 'real': '223348.0', 'low': '211893.14750577882', 'high': '345442.1319383085'}, {'date': '2020-09-12', 'real': '236493.0', 'low': '214133.31581517681', 'high': '348031.77247377485'}, {'date': '2020-09-13', 'real': '248283.0', 'low': '213887.8673940152', 'high': '347471.32743477076'}, {'date': '2020-09-14', 'real': '239005.0', 'low': '214415.56806745753', 'high': '348140.6019695252'}, {'date': '2020-09-15', 'real': '243569.0', 'low': '215371.6020552218', 'high': '349437.0042348653'}, {'date': '2020-09-16', 'real': '243963.0', 'low': '210021.04735658318', 'high': '343132.5646772869'}, {'date': '2020-09-17', 'real': '250203.0', 'low': '211438.6664574258', 'high': '344050.15313830227'}, {'date': '2020-09-18', 'real': '247322.0', 'low': '214001.2339395061', 'high': '347891.78061006963'}, {'date': '2020-09-19', 'real': '255082.0', 'low': '221589.98691278696', 'high': '357181.2705578059'}, {'date': '2020-09-20', 'real': '272475.0', 'low': '221522.28935481608', 'high': '357472.56706055626'}, {'date': '2020-09-21', 'real': '255164.0', 'low': '219924.65086591244', 'high': '355424.0592536852'}, {'date': '2020-09-22', 'real': '252683.0', 'low': '220978.85825233907', 'high': '357937.0176787339'}, {'date': '2020-09-23', 'real': '259688.0', 'low': '222644.6718833968', 'high': '359743.360455703'}, {'date': '2020-09-24', 'real': '261226.0', 'low': '226773.4169963114', 'high': '365032.1575496495'}, {'date': '2020-09-25', 'real': '251469.0', 'low': '224310.54521247745', 'high': '361627.69869959354'}, {'date': '2020-09-26', 'real': '272663.0', 'low': '224542.80037057772', 'high': '361852.3423597738'}, {'date': '2020-09-27', 'real': '258720.0', 'low': '220223.17082943395', 'high': '356318.4550328031'}, {'date': '2020-09-28', 'real': '253462.0', 'low': '218079.50437405705', 'high': '353281.01962754875'}, {'date': '2020-09-29', 'real': '251011.0', 'low': '225685.6891700253', 'high': '363118.6568215713'}, {'date': '2020-09-30', 'real': '239546.0', 'low': '227189.66146099567', 'high': '364707.87788924575'}, {'date': '2020-10-01', 'real': '258260.0', 'low': '230562.4505099021', 'high': '368955.54146378115'}, {'date': '2020-10-02', 'real': '228841.0', 'low': '232659.194319278', 'high': '370183.4103988297'}, {'date': '2020-10-03', 'real': '231133.0', 'low': '228678.5003031604', 'high': '365521.26345128566'}, {'date': '2020-10-04', 'real': '241883.0', 'low': '216560.2792382352', 'high': '365367.8992304504'}, {'date': '2020-10-05', 'real': '254290.0', 'low': '213433.77438281104', 'high': '359930.6928515695'}, {'date': '2020-10-06', 'real': '258538.0', 'low': '210558.9862409532', 'high': '355830.3341485448'}, {'date': '2020-10-07', 'real': '269176.0', 'low': '210872.0725220628', 'high': '355984.62368873507'}, {'date': '2020-10-08', 'real': '286398.0', 'low': '229312.37391033396', 'high': '380210.7977586463'}, {'date': '2020-10-09', 'real': '269863.0', 'low': '222403.70081395283', 'high': '370985.7816756442'}, {'date': '2020-10-10', 'real': '258799.0', 'low': '235527.38582960516', 'high': '387604.9351772666'}, {'date': '2020-10-11', 'real': '291748.0', 'low': '233910.43503029272', 'high': '385535.62260941416'}, {'date': '2020-10-12', 'real': '271811.0', 'low': '239216.27590977773', 'high': '391619.2093312666'}, {'date': '2020-10-13', 'real': '273996.0', 'low': '242201.14720586687', 'high': '394494.7436984107'}, {'date': '2020-10-14', 'real': '276889.0', 'low': '238455.63355097175', 'high': '391458.94998878613'}, {'date': '2020-10-15', 'real': '278429.0', 'low': '245795.565164797', 'high': '399443.6500989646'}, {'date': '2020-10-16', 'real': '280452.0', 'low': '253410.6151171662', 'high': '412481.81769680977'}, {'date': '2020-10-17', 'real': '295395.0', 'low': '241616.76325967908', 'high': '397337.3844549358'}, {'date': '2020-10-18', 'real': '315186.0', 'low': '247724.408284761', 'high': '402964.81858379394'}, {'date': '2020-10-19', 'real': '296576.0', 'low': '250143.84975693375', 'high': '406422.46837225556'}, {'date': '2020-10-20', 'real': '294191.0', 'low': '255116.39657455683', 'high': '411206.7873236686'}, {'date': '2020-10-21', 'real': '298466.0', 'low': '255589.89144320413', 'high': '410687.80256156996'}, {'date': '2020-10-22', 'real': '302110.0', 'low': '268320.2261859551', 'high': '428628.99862936884'}, {'date': '2020-10-24', 'real': '309789.0', 'low': '269744.9493515231', 'high': '429818.4220376685'}, {'date': '2020-10-25', 'real': '257545.0', 'low': '162236.5409989655', 'high': '292588.2784189321'}, {'date': '2020-10-26', 'real': '247301.0', 'low': '269597.94297012687', 'high': '434186.34727934'}, {'date': '2020-10-27', 'real': '439064.0', 'low': '267605.2826636806', 'high': '428944.02509622276'}, {'date': '2020-10-28', 'real': '302614.0', 'low': '251772.53121774644', 'high': '414129.4831289053'}, {'date': '2020-10-29', 'real': '304809.0', 'low': '271299.9933010861', 'high': '432781.1752162725'}, {'date': '2020-10-30', 'real': '295572.0', 'low': '270180.4762776047', 'high': '442392.6762995422'}, {'date': '2020-10-31', 'real': '300425.0', 'low': '289299.4546392374', 'high': '461798.7723023221'}, {'date': '2020-11-01', 'real': '316876.0', 'low': '278954.7125896737', 'high': '444943.15493198484'}];
        const myChart = echarts.init(document.getElementById('range'));
        console.log(predict_range.map(function (item) {
            return item["real"]}))
        // 绘制图表
        myChart.setOption({
            title: {
                text: '区间预测数据(2020)',
                x:'center',
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
                data: ['实际数据'],
                orient: 'vertical',
                x: 'left',
                y: 'top',
                textStyle: {
                    color: '#fff'          // 图例文字颜色
                }

            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            axisLabel: {
                color: '#ffffff',
                fontSize:'1px'
            },

            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: predict_range.map(function (item) {
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
                    },
                    itemStyle: {
                        normal: {
                            color: "#FF1A00"
                        }
                    }
                }
            ],
            dataZoom: [{
                show:false,
                startValue: '2020-10-01'
            }, {
                type: 'inside',
            }],
            yAxis: [
                {
                    type: 'value',
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
                }
            ],
            series: [
                {
                    name: '实际数据',
                    symbol:'none',
                    type: 'line',
                    label: {
                        normal: {
                            show: false,
                            position: 'top'
                        }
                    },
                    data: predict_range.map(function (item) {
                        return item["real"];
                    }),

                },
                {
                    name: '预测数据—max',
                    symbol:'none',
                    type: 'line',
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#188df0'},
                                {offset: 0.1, color: '#188df0'},
                                {offset: 0.3, color: '#188df0'},
                                {offset: 1, color: 'transparent'}
                            ]
                        )
                    },
                    data: predict_range.map(function (item) {
                        return item["high"];
                    }),
                    itemStyle: {
                        normal:{
                            color: "transparent"
                        }
                    }
                },
                {
                    name: '预测数据—min',
                    symbol:'none',
                    type: 'line',
                    areaStyle: {
                        color: '#281e2f',

                    },
                    data: predict_range.map(function (item) {
                        return item["low"];
                    }),
                    itemStyle: {
                        normal:{
                            color: "transparent"
                        }
                    }
                }
            ]



        })

    }

    render() {
        return (
            <div id="range" className="chart-loader"/>
        );
    }
}