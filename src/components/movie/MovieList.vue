<template>
  <v-container>
    <v-row>
      <v-col v-for="movie in movies" :key="movie.title" cols="12" sm="6" md="4">
        <movie-card :movie="movie"></movie-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from '../movie/MovieCard.vue';
export default {
  name: 'MovieList',
  props: ['movies'],
  components: { MovieCard },
};
</script>
