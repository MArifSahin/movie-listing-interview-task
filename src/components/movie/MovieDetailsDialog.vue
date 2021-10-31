<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="teal accent-3"
        text
        v-bind="attrs"
        v-on="on"
        @click="getMovieDetails"
        >Details</v-btn
      >
    </template>
    <template v-slot:default="dialog">
      <v-card :loading="isLoading">
        <v-img height="404" :src="movieDetails.Poster"></v-img>
        <v-spacer>
          <v-card-title>
            {{ movieDetails.Title }} - {{ movieDetails.Released }}
          </v-card-title>
          <v-card-subtitle>
            {{ movieDetails.Director }} / {{ movieDetails.Country }} /
            {{ movieDetails.Runtime }} / {{ movieDetails.Language }}
          </v-card-subtitle>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="grey--text ms-4">
                IMDB: {{ movieDetails.imdbRating }}
              </div>
            </v-row>
            <v-row align="center" class="mx-0">
              <div class="grey--text ms-4">{{ movieDetails.Genre }}</div>
            </v-row>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title> Summary </v-card-title>
          <v-card-text>{{ movieDetails.Plot }}</v-card-text>
        </v-spacer>

        <v-divider class="mx-4"></v-divider>
        <v-card-title> Actors </v-card-title>
        <v-card-text>{{ movieDetails.Actors }}</v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { ref } from '@vue/composition-api';
import axios from 'axios';

export default {
  name: 'MovieDetails.vue',
  props: ['movie'],

  setup(props, { root: { $store } }) {
    const movieDetails = ref({});
    const isLoading = ref(false);

    function getMovieDetails() {
      isLoading.value = true;
      if ($store.getters.movies[props.movie.Title]) {
        console.log('retrieved from cache');
        movieDetails.value = $store.getters.movies[props.movie.Title];
        isLoading.value = false;
      } else {
        console.log('retrieved from api');
        axios
          .get(
            `http://www.omdbapi.com/?t=${props.movie.Title}&type=movie&y=2020&apikey=f1be0110&`
          )
          .then((response) => {
            if (response.data.Response === 'True') {
              movieDetails.value = response.data;
              var jsonVariable = {};
              jsonVariable[response.data.Title] = response.data;
              $store.commit('SET_STORE', jsonVariable);
            }
            isLoading.value = false;
          });
      }
    }

    return { movieDetails, isLoading, getMovieDetails };
  },
};
</script>
