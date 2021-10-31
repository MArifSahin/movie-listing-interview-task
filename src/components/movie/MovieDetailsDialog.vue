<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="teal accent-3" text v-bind="attrs" v-on="on">Details</v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-img
          height="250"
          src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        ></v-img>
        <v-spacer>
          <v-card-text>
            <div class="text-h2">MOVIE NAME</div>
          </v-card-text>
        </v-spacer>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'MovieDetails.vue',
  props: ['movie'],
};
</script>
