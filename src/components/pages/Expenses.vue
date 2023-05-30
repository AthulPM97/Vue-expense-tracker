<template>
  <div>
    user: {{ userName }}
    {{ expenses }}
    <!-- <input type="text" placeholder="enter new name"/> -->
    <button @click="changeName">Change name</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
// console.log(this)
export default {
  name: "ExpenseView",
  computed: {
    // expenses() {
    //     return this.$store.state.expense.expenses
    // }
    ...mapState({
      expenses: (state) => state.expense.expenses,
      userName: (state) => state.expense.currentUser,
    }),
  },
  methods: {
    changeName() {
       this.$store.dispatch("expense/changeName", {
        newName: "Tom",
      });
    },
  },
};
</script>
