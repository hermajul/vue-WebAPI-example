<template>
    <v-container>
    <v-layout row wrap>
        <v-flex xs12 sm8 md6 lg6 xl4 offset-xs0 offset-sm2 offset-md3 offset-xl4>
        <v-card>
            <v-toolbar flat>
                <v-toolbar-title>About</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row wrap align-center my-2 >
              <div class="font-weight-thin subheading">
                This website shows some WebAPI features.
                Some functions only work on secure (https) servers.
                And some functions require the corresponding hardware, try it with the smartphone.
              </div>
            </v-layout>
            <br>
        </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>