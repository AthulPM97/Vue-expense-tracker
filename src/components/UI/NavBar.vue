<template>
  <!-- <v-card
    class="mx-auto overflow-hidden"
    height="400"
  > -->
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Expense Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn style="background-color: #3d3c77;" @click="goToExpenses">Expenses</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="goToHome">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToAbout">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!-- </v-card> -->
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    goToExpenses() {
      this.$router.push('/expenses')
    },
    goToAbout() {
      this.$router.push('/about')
    },
    goToHome() {
      this.$router.push('/')
    }
  }
};
</script>
