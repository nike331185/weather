import React, { Component } from 'react';

class GoogleMap extends Component{
    componentDidMount(){
      new google.maps.Map(this.refs.map,{
        zoom: 12, //放大倍數
        center:{
          lat:this.props.lat,  //經緯度
          lng:this.props.lon
        }
      });
    }

    render() {
      //
      return <div ref="map" />
    }
}

export default GoogleMap;
