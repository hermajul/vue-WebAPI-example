<template>
    <v-container>
    <v-layout row wrap>
        <v-flex xs12 sm8 md6 lg6 xl4 offset-xs0 offset-sm2 offset-md3 offset-xl4>
        <v-card v-if="currentPosition !== null">
            <v-toolbar flat>
                <v-toolbar-title>Geolocation</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row wrap align-center my-2>
                <v-flex xs12 class="text-xs-center title"> <div id="viewDiv"></div></v-flex>
            </v-layout>
        </v-card>
        <v-card v-else>
            <v-toolbar flat>
                <v-toolbar-title>Not working</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            potential causes:
            <ul>
                <li>Your browser does not support this function. Check <a href="https://caniuse.com/#search=geolocation">https://caniuse.com/#search=geolocation</a> to find out which browsers are supported.</li>
                <li>Only works on secure (https) servers</li>
                <li>Geolocation is disabled. Check <a href="http://waziggle.com/BrowserAllow.aspx">http://waziggle.com/BrowserAllow.aspx</a> to find out how to enable it.</li>
            </ul>  
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>



<script>

import * as Leaflet from 'leaflet';

export default {
  data () {
    return {
      currentPosition: {
          coords: {
              latitude: null,
              longitude: null,
          }
      },
      marker: null,
      map: null,
      updateInterval: null
    }
  },
  methods: {
    update : function () {
      this.updateInterval = setInterval(() => {
        try{
          navigator.geolocation.getCurrentPosition((val) => {
            const curr = this._data.currentPosition.coords;  
            this.leaflet(val.coords.latitude, val.coords.longitude);
            curr.latitude = val.coords.latitude;
            curr.longitude = val.coords.longitude; 
          },
          () => {
            this._data.currentPosition = null;
          })
        }catch(e){
          this._data.currentPosition = null;
        }
      }, 1000);
    },
    leaflet: function (lat, long) {
            if(this._data.currentPosition.coords.latitude !== lat || this._data.currentPosition.coords.longitude !== long){
                if(this._data.marker !== null){
                    this._data.map.removeLayer(this._data.marker._leaflet_id)
                }
                
                this._data.marker = Leaflet.marker([lat, long]);
                this._data.marker.addTo(this._data.map)
                    .bindPopup('your current position');
                    console.log(this._data.marker)
            }            
            
    },
    leafletInit: function () {
            const layer = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });
            this._data.map = Leaflet.map('viewDiv');
            this._data.map.setView([51.2498313,11.1660518], 3);

            this._data.map.addLayer(layer);    
    },
  },
  created () {
    this.update();
  },
  mounted () {
    this.leafletInit();
  },
  destroyed () {
      clearInterval(this.updateInterval);
  }
};
</script>
  
<style>
#viewDiv { 
    height: 350px;
    z-index: 1;
}
</style>


