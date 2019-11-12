import React from 'react';
import up_tours from "./tours.json";
function Upcoming_tours(){
//let len = Object.keys(up_tours).length;
var tableData = up_tours.map(function(index){
              return <tr><td>{index.Name}</td><td>{index.Date}</td></tr>
            });

//let table=[];
return <div><h1>This is the Tours Page</h1>
      <table id="tour_table">
      <thead><tr><td>Name</td><td>Date</td></tr></thead>
      <tbody>{tableData}</tbody>
      </table>
      </div>
}
export default Upcoming_tours;
