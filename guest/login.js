import React from 'react';
import ReactDOM from "react-dom";
class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {Email:"", Password:""};
      }
      EmailChange(event){
        this.setState({Email:event.target.value})
      }
      PassChange(event){
          this.setState({Password:event.target.value})
      }
      handleLogin(event){
        switch (this.state.Email) {
        case "admin@email.org":
          this.props.sendtoguest("admin",{name:"Gaurang_Admin",id:"zs9267"});
          break;
        case "cust@email.org":
          this.props.sendtoguest("customer",{name:"Gaurang_Customer",id:"zs9267"});
          break;
                }
      }
    render()
    {
    return <form id="form">
      <label>Email:</label><input type="text" onChange={this.EmailChange.bind(this)}/><br></br>
      <label>Password:</label><input type="Password" onChange={this.PassChange.bind(this)}/><br></br>
      <input type="button" onClick={this.handleLogin.bind(this)} value="Signup"/>
      </form>
    }
}
ReactDOM.render(<Login />, document.getElementById("root"));
export default Login;
