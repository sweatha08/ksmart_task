import React, { Component } from 'react';
import axios from 'axios';
import '../Firstpage/Firstpage.css';
import Chart from 'react-google-charts';

class Firstpage extends Component {
        state={
         imageurl:'https://api.jikan.moe/v3/search/anime',
         image: [],
         category : ""
          };
   onTextChange = (event)=> {
     const values =event.target.value;
   
    
     this.setState({[event.target.name]:values},() =>{
   if (values==="")
   {
     this.setState({img:[]});
   }
   else{
     axios.get(`${this.state.imageurl}/?&q=${
       this.state.category
     }`)
     .then(res=> this.setState({image:res.data.imgurl}))
     .catch(err=>console.log(err));
     console.log(this.state.category)
   }
 });
};
  render(){
    return(
        <div className="title">
            <h1>ANIME MAZE</h1>
            <form>
            <div className="label"><label for="label" >Select Anime  </label></div>
               <div className="drop">
               <select  value={this.state.category} onChange={this.onTextChange}>
                   <option value = "val">Howl no Ugoku Shiro</option>
                   <option value ="val">Death Note</option>
                   <option value ="val"> Ookami Kodomo no Ame to Yuki</option> 
                   <option value= "val">Kimetsu no Yaiba</option>
                   <option value="">Ping Pong the Animation</option>
               </select>
               </div>
              
               </form>
               <div>
                   <div className="left">  
                   <div className="flex">
                       <p className="flex1"></p>
                       <p className="flex1"></p>
                       <p className="flex1"></p>
                       <p className="flex1"></p>
                       <p className="flex1"></p>
                       <p className="flex1"></p>
                       <p className="flex1"></p>
                       <p className="flex1"></p>
                       <p className="flex1"></p>
                   </div>
                   </div>
                   <div className="right">
                       <div className="piechart">
                       <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Anime Detais</div>}
  data={[
    ['Episode', 'Hours per Day'],
    ['Work', 9],
    ['Eat', 2],
    ['Type', 4],
    ['Rated', 5],
    ['Member', 5],
  ]}
  options={{
    title: 'My Daily Activities',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
                       </div>
                   </div>
               </div>
            </div>
           
    );
  }
}
export default Firstpage;