import React, { Component } from "react";

//asideMenu
import AsideMenu from "../../../components/asideMenu/index";

export default class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close:false
    };
  }


  render() {
    return <AsideMenu/>;
  }
}
