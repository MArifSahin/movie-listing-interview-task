<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 24" :key="n" cols="2">
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
