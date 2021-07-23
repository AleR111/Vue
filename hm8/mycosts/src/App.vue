<template>
  <v-app>
    <v-app-bar
        app
        dark
        flat
    >
      <v-btn depressed :ripple="false" to="/home">Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn depressed :ripple="false" to="/about">About</v-btn>

    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
