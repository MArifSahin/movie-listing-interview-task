<template>
  <v-app app dark>
    <navigation></navigation>
    <search :set-movies="setMovies"></search>
    <movie-list :movies="movies"></movie-list>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api';
import Navigation from './components/home/Navigation.vue';
import Search from './components/home/Search.vue';
import MovieList from './components/movie/MovieList.vue';
export default {
  components: { Navigation, Search, MovieList },
  setup() {
    const movies = ref([]);

    function setMovies(value) {
      movies.value = value;
      console.log(movies.value);
    }

    return { movies, setMovies };
  },
};
</script>
