import axios from 'axios';

const state = {
    data: [],
    detailsData: [],
};
const getters = {

};
const mutations = {
  SET_DATA(state, data) {
    state.data = data;
  },
  setDetailsData(state, data) {
      state.detailsData = data
    }
 
};

const actions = {

 async fetchData({ commit }) {
    const response = await axios.get('https://dummyjson.com/products/category/smartphones');
    commit('SET_DATA', response.data);
  },
 fetchDetailsData({commit}, id) {
      const res = axios.get(`https://dummyjson.com/products/${id}`);
      commit('setDetailsData', res.data);
    
    },

};

export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}


