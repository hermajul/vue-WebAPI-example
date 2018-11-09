<template>
    <v-container>
    <v-layout row wrap>
        <v-flex xs12 sm8 md6 lg6 xl4 offset-xs0 offset-sm2 offset-md3 offset-xl4>
        <v-card v-if="duration !== null">
            <v-toolbar flat>
                <v-toolbar-title>Vibration</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row wrap align-center my-2>
                <v-flex xs3 class="text-xs-center title">{{duration}} ms</v-flex>
                <v-flex xs6><v-slider
                    v-model="duration"
                    prepend-icon="vibration"
                    min="0"
                    max="3000"
                ></v-slider>
                </v-flex>
            </v-layout>
            <br>
            <div>
                <v-btn
                color="blue-grey"
                class="white--text"
                @click="vibrate"
                >
                vibrate
                <v-icon right dark>play_circle_outline</v-icon>
                </v-btn>
            </div>
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
      duration: 200,
    }
  },
  methods: {
    vibrate : function () {
        console.log(this)
        window.navigator.vibrate(this._data.duration);
    },
  },
  created () {
    
  },
};
</script>