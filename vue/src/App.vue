<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile to="battery">
          <v-list-tile-action>
            <v-icon>battery_full</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Battery</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="geolocation">
          <v-list-tile-action>
            <v-icon>location_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Geolocation</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="vibration">
          <v-list-tile-action>
            <v-icon>vibration</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Vibration</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="camera">
          <v-list-tile-action>
            <v-icon>camera</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Camera</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="compass">
          <v-list-tile-action>
            <v-icon>near_me</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Compass</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-icon @click.stop="drawer = !drawer">menu</v-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout >
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
      data: () => ({
          drawer: null
      })
  };
</script>