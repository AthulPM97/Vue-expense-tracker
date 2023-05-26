<template>
  <div>
    <NavBar />
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="expense.amount"
              label="Expense Amount"
              type="number"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="expense.description"
              label="Expense Description"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="d-flex">
            <v-select
              v-model="expense.category"
              :items="categories"
              label="Expense Category"
              required
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-btn color="primary"> Primary </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import NavBar from "../UI/NavBar.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
  },
  data() {
    return {
      expense: {
        amount: "",
        description: "",
        category: "",
      },
      categories: ["Personal", "Business"],
    };
  },
  methods: {},
};
</script>
