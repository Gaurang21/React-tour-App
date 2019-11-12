import React from 'react';
import ReactDOM from "react-dom";
import up_tours from "../customer/tours.json";
class Tour_mgmt extends React.Component {
constructor(props) {
    super(props);
    this.state = {item: up_tours , Name:"" , Date: ""};
    }
    NameAdd(event){
      this.setState({Name:event.target.value})
    }
    DateAdd(event){
      this.setState({Date:event.target.value})
    }
    AddTour(event){
      let q = {Name: this.state.Name, Date: this.state.Date};
      this.setState({item: this.state.item.concat(q)});
    }
    delChoice(i)
    {
      console.log(i);
      let new_item = this.state.item.filter(function(item, index){
    if(index === i.i)
      return false;
    else
      return true;
    })
    this.setState({item: new_item});
    }
render()
{
var add = <form id="form">
  <label>Name:</label><input type="text" onChange={this.NameAdd.bind(this)} /><br></br>
  <label>Date(s):</label><input type="text" onChange={this.DateAdd.bind(this)}/><br></br>
  <input type="button" value="AddTour" onClick={this.AddTour.bind(this)}/>
  </form>
//var button = <input type="button" value="Delete" onClick={this.delChoice.bind(this)}/>;

var tableData = this.state.item.map((index,i)=>
            (<tr key={i}><td><input type="button" value="Delete" onClick={this.delChoice.bind(this,{i})}/></td><td>{index.Name}</td><td>{index.Date}</td></tr>));
//let table=[];
return <div><h1>This is the Tours Page</h1>
      <fieldset>
      <legend>Add Tours</legend>{add}
      </fieldset>
      <h2>Upcoming Tours</h2>
      <table id="tour_table">
      <thead><tr><td></td><td>Name</td><td>Date</td></tr></thead>
      <tbody>{tableData}</tbody>
      </table>
      </div>
}
}
ReactDOM.render(<Tour_mgmt />, document.getElementById("root"));
export default Tour_mgmt;
