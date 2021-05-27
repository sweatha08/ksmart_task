import React, { Component } from 'react';
import './index.css'

class MainPage extends Component {
        constructor() {
          super();
          this.state = {
            images: []
          };
    
  }
    
  render(){
    return(
        <div className="head">
            <h1>ANIME MAZE</h1>
            <div className="search">
            <form>
               <label for="name" >Select Anime  </label>
               <select  value={this.state.category} onChange={this.handleChange}>
                   <option> </option>
                   <option value = "title"onChange={this.HandleChange}>pokemon</option>
                   <option onChange={this.HandleChange}></option>
               </select>
            </form>

            </div>
           
        </div>
    );
  }
}

export default MainPage;