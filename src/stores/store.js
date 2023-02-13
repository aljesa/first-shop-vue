// import Vue from 'vue'
import Vuex from 'vuex'
import recipes from './modules/recipes.module';
import items from './modules/items.module';
import button from './modules/button.module'

export default new Vuex.Store({
  modules: {
    recipes,
    items
  },
})
