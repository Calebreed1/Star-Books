import React, { Component } from "react";
import Nav from "../../components/Nav";
import BookDisplay from "../../components/BookDisplay";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";





class BookApp extends Component {
    state ={
        data: [],
        collection: []
        };

    componentWillMount() {
        fetch("https://api.myjson.com/bins/jscxu")
        .then(response => response.json())
        .then(json => console.log(json));
    }


      componentDidMount() {    
        var that = this;
        var url = "https://api.myjson.com/bins/jscxu"
      
        fetch(url)
        .then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then(function(data) {
          that.setState({ 
              timestamp: data.timestamp,
              satellite_id: data.satellite_id,
          });
    
        });
    };
  
        
          
      

    render() {

  
            return <div>
                <Nav />
                <Jumbotron>
                    <BookDisplay
                        timestamp={this.state.timestamp}
                        satellite_id={this.state.satellite_id}
                        collection={this.state.collection}
                        
                    />
                </Jumbotron>
                <Footer />
            </div>
    }


};
export default BookApp;

