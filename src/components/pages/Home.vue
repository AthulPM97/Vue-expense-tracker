<template>
  <div>
    <NavBar />
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import NavBar from "../UI/NavBar.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>
