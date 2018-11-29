import React from "react";
import moment from "moment";



const BookDisplay = props => (

  <div
    style={{ height: 300, clear: "both", paddingTop: 5, textAlign: "center" }}
    className="BookDisplay"
  >
    <div>
      <h3
        className="timestamp">Date:{moment(props.timestamp*1000).format("MM/DD/YYYY")}</h3>
        
    </div>
    <div>
      <h3
        className="satellite_id">Satellite Id #:{props.satellite_id}</h3>
    </div>
    <div>
      <h3
        className="collection">Collection:{props.collection}</h3>
    </div>
  </div>

);

export default BookDisplay;