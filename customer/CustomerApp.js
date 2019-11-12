import Home from "../guest/home.js"
import About from "../guest/ab.js"
import image from "../images/India.jpg";
import image2 from "../images/image2.jpg";
import Upcoming_tours from "./tours.js"
import React from "react";
import ReactDOM from "react-dom";
class CustomerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "Customer", showing:"Home"};
    }
    HomeHandler(event) {
    this.setState({showing: "Home"});
  }
  AboutHandler(event) {
  this.setState({showing: "About"});
   }
   UpcomingHandler(event) {
   this.setState({showing: "upcoming"});
    }
    ToursHandler(event) {
    this.setState({showing: "Tours"});
     }
     OutHandler(event) {
       this.props.out_to_index();
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
              case "upcoming":
                contents = <Upcoming_tours></Upcoming_tours>
                break;
              default:
                contents = <h2>Yet to be Implemented!!!</h2>;
              }
        return <div><h1>Hindustan Tours</h1>
<nav>
        <ul><li> <h4> <b>Our Guests are Equivalent to God</b></h4></li>
              <li><a onClick={this.HomeHandler.bind(this)}>Home</a></li>
              <li><a onClick={this.ToursHandler.bind(this)}>MyTours</a></li>
	            <li><a onClick={this.UpcomingHandler.bind(this)}>Upcoming Tours</a></li>
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
//ReactDOM.render(<CustomerApp />, document.getElementById("root"));
export default CustomerApp;
