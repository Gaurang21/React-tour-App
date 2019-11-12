import GuestApp from "./GuestApp.js"
import CustomerApp from "../customer/CustomerApp.js"
import AdminApp from "../admin/AdminApp.js"
import image from "../images/India.jpg";
import image2 from "../images/image2.jpg";
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show:"guest", user:""}; // We will have "user" and "admin" roles too.

    }
    GuestHandler(event) {
    this.setState({show: "guest"});
  }
  CustomerHandler(event) {
  this.setState({show: "customer"});
  }
  AdminHandler(event) {
 this.setState({show: "admin"});
 }
 sendtoindex(role,user){
   console.log(role)
   this.setState({show :role,user : user});
 }
 out_to_index()
 {
   this.setState({show :"guest",user :"undef" });
 }
    // Renders component based on current state and propss
    render() {
      let contents = null;

      switch (this.state.show) {
      case "guest":
        contents = <GuestApp sendtoindex={this.sendtoindex.bind(this)}></GuestApp>;
        break;
      case "customer":
        contents = <CustomerApp out_to_index={this.out_to_index.bind(this)}></CustomerApp>;
        break;
      case "admin":
        contents = <AdminApp out_to_index={this.out_to_index.bind(this)}></AdminApp>;
        break;
      }
        return <div>

      <h1 id="admin">Admin Page</h1>
      {contents}
      <h1 id="admin"></h1>

    </div>;
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
