<template>
    <v-container>
    <v-layout row wrap>
        <v-flex xs12 sm8 md6 lg6 xl4 offset-xs0 offset-sm2 offset-md3 offset-xl4>
        <v-card v-if="battery !== null">
            <v-toolbar flat>
                <v-toolbar-title>Battery Status</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row wrap align-center my-2>
                <v-flex xs6 class="text-xs-center title">Battery Level:</v-flex>
                <v-flex xs6><v-progress-circular
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="battery.level*100"
                    color="teal"
                >
                {{battery.level*100}}%
                </v-progress-circular></v-flex>
            </v-layout>
            <br>
            <v-layout row wrap align-center my-2 v-if="battery.charging">
                <v-flex xs6 class="text-xs-center title">Charging Time:</v-flex>
                <v-flex xs6 class="text-xs-center title" v-if="battery.level < 1">~{{battery.chargingTime}} minutes</v-flex>
                <v-flex xs6 class="text-xs-center title" v-if="battery.level == 1">Battery is full</v-flex>
            </v-layout>
            <v-layout row wrap align-center my-2 v-if="!battery.charging">
                <v-flex xs6 class="text-xs-center title">Discharging Time:</v-flex>
                <v-flex xs6 class="text-xs-center title">~{{battery.dischargingTime}} minutes</v-flex>
            </v-layout>
            <br>
        </v-card>
        <v-card v-else>
            <v-toolbar flat>
                <v-toolbar-title>Not supported</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            Your browser does not support this function.
            Check <a href="https://caniuse.com/#feat=battery-status">https://caniuse.com/#feat=battery-status</a> to find out which browsers are supported.

        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>



<script>
export default {
  data () {
    return {
      battery: {
        charging        :null,
        chargingTime    :null,
        dischargingTime :null,
        level           :null
      },
      updateInterval: null
    }
  },
  methods: {
    updateBattery : function () {
      this.updateInterval = setInterval(() => {
        try{
          navigator.getBattery().then((val) => {
              const bat = this._data.battery;                
              bat.level = val.level;
              bat.charging = val.charging;
              bat.chargingTime = Math.floor(val.chargingTime / 60);
              bat.dischargingTime = Math.floor(val.dischargingTime / 60);
              console.log("test")
          })
        }catch(e){
          this._data.battery = null;
        }
      }, 1000);
    },
  },
  created () {
    this.updateBattery();
  },
  destroyed () {
      clearInterval(this.updateInterval);
  }
};
</script>