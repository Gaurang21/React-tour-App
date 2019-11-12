import Home from "./home.js"
import Upcoming_tours from "../customer/tours.js"
import About from "./ab.js"
import Login from "./login.js"
import React from "react";
import ReactDOM from "react-dom";
class GuestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "Guest", showing: "Home"};
    }
    HomeHandler(event) {
    this.setState({showing: "Home"});
  }
  AboutHandler(event) {
  this.setState({showing: "About"});
   }
   LoginHandler(event) {
   this.setState({showing: "Login"});
//  this.setState({Email: event.currentTarget.value});
//  this.setState({Password: event.currentTarget.value});
    }
    ToursHandler(event) {
    this.setState({showing: "Tours"});
     }
     NewsHandler(event) {
     this.setState({showing: "News"});
      }
      sendtoguest(role,user){
        console.log(role);
        this.props.sendtoindex(role,user);
      }
    render() {
        let contents="";
            switch (this.state.showing) {
            case "Home":
              contents = <Home></Home>;
              break;
            case "About":
              contents = <About></About>;
              break;
            case "Login":
              contents = <Login sendtoguest={this.sendtoguest.bind(this)}></Login>
              break;
            case "Tours":
              contents = <Upcoming_tours></Upcoming_tours>
              break;
            default:
              contents = <h2>Yet to be Implemented!!!</h2>;
            }
        return <div><h1>Hindustan Tours</h1>
<nav>
        <ul><li> <h4> <b>Our Guests are Equivalent to God</b></h4></li>
              <li><a onClick={this.HomeHandler.bind(this)}>Home</a></li>
              <li><a onClick={this.LoginHandler.bind(this)}>Login</a></li>
	            <li><a onClick={this.ToursHandler.bind(this)}>Upcoming Tours</a></li>
	            <li><a onClick={this.NewsHandler.bind(this)}>Newsletter</a></li>
              <li><a onClick={this.AboutHandler.bind(this)}>About</a></li>
        </ul>
</nav>
<main>
{contents}
</main> </div>;
    }
}
ReactDOM.render(<GuestApp />, document.getElementById("root"));
export default GuestApp;
