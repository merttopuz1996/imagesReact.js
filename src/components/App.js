import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar'
import './app.css'
import axios from 'axios'
import ImageList from './image/ImageList'
class  App extends Component
{
  state ={
    images :[]
  };
  

  onSearchImage = async(search) =>{

    console.log('App:'+search);
   const result = await axios.get('https://api.unsplash.com/search/photos',{
     params:{
       query :search
     },
     headers:{
      Authorization: 'Client-ID 9iiePdPa2NsbwD9E-Ud4HzHt991hdab1qyuPMDN3tRg'
     }
   })
   
   this.setState({
     images :result.data.results
   });
  }
  render(){
  
  return(
    <div className="app-container">
     <SearchBar onSearchImage ={this.onSearchImage}/>
     {/* {this.state.images.length} adet veri bulundu */}
    <ImageList Images ={this.state.images} />
    </div>
  )
  }
};

export default App;
