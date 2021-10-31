<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="teal accent-3"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    ></v-img>

    <v-card-title>Movie Name</v-card-title>

    <v-card-text>
      <v-row>
        <div class="grey--text ms-4">IMDB : 5</div>
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

  data: () => ({
    loading: false,
  }),

  methods: {
    details() {
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
