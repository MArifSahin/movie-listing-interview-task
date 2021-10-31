<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="teal accent-3"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="movie.Poster"></v-img>

    <v-card-title>{{ movie.Title }}</v-card-title>

    <v-card-text>
      <v-row>
        <div class="grey--text ms-4">{{ movie.Year }}</div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <MovieDetailsDialog :movie="movie"></MovieDetailsDialog>
    </v-card-actions>
  </v-card>
</template>

<script>
import MovieDetailsDialog from './MovieDetailsDialog.vue';

export default {
  name: 'MovieCard',
  props: ['movie'],
  components: { MovieDetailsDialog },
};
</script>
