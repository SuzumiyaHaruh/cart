import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state() {
        return {
          goods:[
            {id: 1, name: "Chicken Wing", category: "Food", qty: 3, price: 10},
            {id: 2, name: "Pizza", category: "Food", qty: 1, price: 50},
            {id: 3, name: "Hamburger", category: "Food", qty: 1, price: 12},
            {id: 4, name: "Coca Cola", category: "Drink", qty: 2, price: 5},
            {id: 5, name: "Orange Juice", category: "Drink", qty: 1, price: 15},
            {id: 6, name: "Potato Chips", category: "Snack", qty: 1, price: 8},]
        }
    },
    getters: {},
    mutations: {
      SET_GOODS(state,value) {
        state.goods=value
      }
    },
    actions: {},
    modules: {}
})
