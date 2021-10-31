<template>
  <v-app-bar
    absolute
    elevation="24"
    :src="require('@/assets/images/navigation.png')"
    scroll-threshold="500"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(206,206,206,.5), rgba(129,129,129,.8)"
      ></v-img>
    </template>
    <v-spacer />
    <v-toolbar-title><h1>Movie Listing</h1></v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>
