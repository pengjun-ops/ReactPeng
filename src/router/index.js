
const routerList = [
  {
    title: "列表",
    icon: "home",
    key: "/home",
    path:"/",
    child: [
      {
        title: "数据总览",
        icon: "all",
        key: "/home",
      },
      {
        title: "燃气数据",
        icon: "bar",
        key: "/gas",

      },
      {
        title: "地理信息",
        icon: "inform",
        key: "/location",
      },
      {
        title: "用户信息",
        icon: "user",
        key: "/user",
      },
      {
        title: "负荷预测",
        icon: "predict",
        key: "/predict",
      },
    ],
  },

];

export default routerList;
