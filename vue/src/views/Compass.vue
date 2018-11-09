<template>
    <v-container>
    <v-layout row wrap>
        <v-flex xs12 sm8 md6 lg6 xl4 offset-xs0 offset-sm2 offset-md3 offset-xl4>
        <v-card v-if="orientation !== null && orientation.alpha !== null">
            <v-toolbar flat>
                <v-toolbar-title>Compass</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row my-2 justify-center>
                    <div id="compass-pointer"> 
                        <img id="compass-bg" src="../assets/compass-bg.png"/>
                    </div>
            </v-layout>
            <v-layout row my-2 justify-center>
                    <div> 
                        <v-chip dark>alpha</v-chip> <v-chip dark>{{orientation.alpha.toFixed(10)}}</v-chip>
                    </div>
            </v-layout>
        </v-card>
        <v-card v-else>
            <v-toolbar flat>
                <v-toolbar-title>Not supported</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            There is no device orientation event in your browser, try it with your smartphone.
            Your browser does not support this function.
            Check <a href="https://caniuse.com/#search=deviceorientation">https://caniuse.com/#search=deviceorientation</a> to find out which browsers are supported.

        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>



<script>

export default {
  data () {
    return {
        value: 50,
        orientation: null,
    }
  },      
  methods: {
    handleOrientation : function (evt) {
        console.log(evt);
        this._data.orientation = evt;
        if(evt.alpha !== null){
            document.getElementById('compass-bg').style.transform = 'rotate('+(-evt.alpha)+'deg)';
        }
        
    },
  },
  mounted(){
      window.addEventListener("deviceorientation", this.handleOrientation, true);
      console.log(window.navigator)
  }
};

</script>

<style>
    #compass-pointer {
        width: 200px;
        height: 200px;
        background-image: url("../assets/compass-pointer.png");
    }
</style>
