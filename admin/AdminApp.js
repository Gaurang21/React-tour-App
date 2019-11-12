import Home from "../guest/home.js"
import About from "../guest/ab.js"
import Tour_mgmt from "./AdminTour.js"
import image from "../images/India.jpg";
import image2 from "../images/image2.jpg";
import React from "react";
import ReactDOM from "react-dom";
class AdminApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "Admin", showing:"Home"}; // We will have "user" and "admin" roles too.
    }
    HomeHandler(event) {
    this.setState({showing: "Home"});
  }
  AboutHandler(event) {
  this.setState({showing: "About"});
   }
   CustHandler(event) {
   this.setState({showing: "Cust"});
    }
    OutHandler() {
    this.props.out_to_index();
     }
     TourmgmtHandler(event) {
     this.setState({showing: "Tourmgmt"});
      }
    // Renders component based on current state and props
    render() {
          let contents="";
              switch (this.state.showing) {
              case "Home":
                contents = <Home></Home>;
                break;
              case "About":
                contents = <About></About>;
                break;
              case "Tourmgmt":
                contents = <Tour_mgmt></Tour_mgmt>;
                break;
              default:
                contents = <h2>Yet to be Implemented!!!</h2>;
              }
        return <div><h1>Hindustan Tours</h1>
<nav>
        <ul><li> <h4> <b>Our Guests are Equivalent to God</b></h4></li>
              <li><a onClick={this.HomeHandler.bind(this)}>Home</a></li>
              <li><a onClick={this.CustHandler.bind(this)}>Customer Management</a></li>
	            <li><a onClick={this.TourmgmtHandler.bind(this)}>Tour Management</a></li>
              <li><a onClick={this.AboutHandler.bind(this)}>About</a></li>
              <li><a onClick={this.OutHandler.bind(this)}>Log Out</a></li>
        </ul>
</nav>
      <main>
      {contents}
</main>
 </div>;
    }
}
//ReactDOM.render(<AdminApp />, document.getElementById("root"));
export default AdminApp;
