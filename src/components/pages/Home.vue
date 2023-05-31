<template>
  <div>
    <NavBar />
    <v-form @submit="addExpense">
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
          <v-col cols="12" md="4">
            <v-btn type="submit" dark> Add expense </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-row>{{  }} </v-row>
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
      },
    };
  },
  methods: {
    addExpense(e) {
      e.preventDefault()
      this.$store.dispatch("expense/addExpense", this.expense)
      console.log(this.$store.state.expense.expenses)
    }
  },
};
</script>
