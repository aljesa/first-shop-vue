import axios from 'axios';

const state = {
   data: [],
   categories: [],
   breadcrumbs: [
      { name: 'Home', path: '/' }
    ]
};
const getters = {
  getData: state => state.data,
  getCategoriesData: state => state.categories
};
const mutations = {
  setData: (state, data) => {
    state.data = data
  },
  setCategoriesData: (state, categories) => {
    state.categories = categories
  }

};

const actions = {
  async fetchData({commit}, limit = 8) {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
    commit('setData', response.data);
    // console.log(response)
  },
  async fetchCategories({commit}){
    const res = await axios.get(`https://dummyjson.com/products/categories`);
    commit('setCategoriesData', res.data);
    console.log(res)
  }
};

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}


