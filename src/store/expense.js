export default {
  namespaced: true,

  state: {
    expenses: [{ id: 1, amount: 100, description: "Milk shake" }],
    currentUser: "John",
  },
  mutations: {
    set_currentUser(state, data) {
      state.currentUser = data;
    },
  },
  actions: {
    changeName({ commit }, data) {
        console.log(data)
      commit("set_currentUser", data.newName);
    },
  },
};
