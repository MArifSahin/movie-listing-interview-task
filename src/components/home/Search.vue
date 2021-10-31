<template>
  <v-parallax height="300" :src="require('@/assets/images/navigation.png')">
    <v-container fluid grid-list-xl>
      <v-layout justify-center row wrap>
        <v-flex xs12>
          <v-layout align-center justify-center row wrap>
            <v-flex xs6>
              <v-form>
                <v-col class="text-right">
                  <v-card-text>
                    <v-autocomplete
                      v-model="movie"
                      dark
                      :items="results"
                      :search-input.sync="search"
                      :loading="isLoading"
                      color="white"
                      hide-no-data
                      hide-selected
                      item-text="Description"
                      item-value="API"
                      label="Search for movies"
                      placeholder="Start typing to Search"
                      prepend-icon="mdi-magnify"
                      return-object
                    ></v-autocomplete>
                  </v-card-text>
                </v-col>
              </v-form>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
import { ref, watch, computed } from '@vue/composition-api';
import axios from 'axios';

export default {
  name: 'Search',
  props: ['setMovies'],

  setup(props) {
    const movies = ref([]);
    const search = ref('');
    const searchItem = ref('');
    const _ = require('lodash');
    const movie = ref('');
    const isLoading = ref(false);

    watch(search, function (value) {
      isLoading.value = true;
      debouncedOnChange(value);
    });

    const debouncedOnChange = _.debounce(function (value) {
      setSearchItem(value);
    }, 1500);

    function setSearchItem(value) {
      movie.value = '';
      searchItem.value = value;
      axios
        .get(
          `http://www.omdbapi.com/?s=${searchItem.value}&type=movie&y=2020&apikey=f1be0110&`
        )
        .then((response) => {
          if (response.data.Response === 'True') {
            movies.value = response.data.Search;
            props.setMovies(response.data.Search);
          }
          isLoading.value = false;
        });
    }

    const results = computed(() => {
      return movies.value.map((movie) => {
        const title = movie.Title;
        // return Object.assign({}, movie, { title });
        return title;
      });
    });

    return {
      movies,
      movie,
      search,
      searchItem,
      debouncedOnChange,
      setSearchItem,
      results,
      isLoading,
    };
  },
};
</script>
