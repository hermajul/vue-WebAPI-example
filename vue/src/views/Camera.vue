<template>
    <v-container>
    <v-layout row wrap>
        <v-flex xs12 sm8 md6 lg6 xl4 offset-xs0 offset-sm2 offset-md3 offset-xl4>
        <v-card v-if="number > 0 && error ===null">
            <v-toolbar flat>
                <v-toolbar-title>Camera</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row wrap align-center my-2>
                <v-flex xs8 offset-xs2>
                    <video id="video" srcObject="this._data.videoSrc" autoplay width="100%"></video>
                </v-flex>
            </v-layout>
            <br>
            <div>
                <v-btn
                    color="blue-grey"
                    class="white--text"
                    @click="toggle"
                    v-if="number >= 2"
                >
                toggle camera 
                <v-icon right dark v-if="!front">camera_front</v-icon>
                <v-icon right dark v-else>camera_rear</v-icon>
                </v-btn>
            </div>
        </v-card>
        <v-card v-else>
            <v-toolbar flat>
                <v-toolbar-title>Not supported</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            Your browser does not support this function.
            Check <a href="https://caniuse.com/#feat=stream">https://caniuse.com/#feat=stream</a> to find out which browsers are supported.
            Or you blocked this function.
            <br>
            <p v-if="error!==null">{{error.name}}: {{error.message}}</p>
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import getUserMedia from 'get-user-media-promise';

export default {
  data () {
    return {
        videoSrc: null,
        error: null,
        front: false,
        number: 0,
    }
  },
  methods: {
    toggle : function () {
        this._data.front = !this._data.front;
        this.videostream();  
    },
    videostream : function () {
        if(getUserMedia.isSupported) {
            // count number of video devices
            navigator.mediaDevices.enumerateDevices().then((val) => {
                this._data.number = 0;
                val.forEach(element => {
                    if(element.kind === 'videoinput'){
                        this._data.number++;
                    }
                });                
            })           
            Promise.all([getUserMedia({video:{ facingMode: (this._data.front? "user" : "environment") }})]).then(function(data) {                            
                return data[0];
            }).then((val) => {
                this._data.videoSrc = val;
                document.getElementById('video').srcObject = this._data.videoSrc;
            })
            .catch((err) => {
                this._data.error = err;
            });
            
        }        
    },
  },
  created () {
    this.videostream();
  },
  beforeDestroy () {
      const video = this._data.videoSrc;
      if(video !== null){
        this._data.videoSrc.getTracks().forEach(track => track.stop())
      }
  }
};
</script>