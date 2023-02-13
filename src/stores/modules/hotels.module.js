import axios from 'axios';



const state = {
    data: [],
};
const getters = {
};
const mutations = {
  SET_DATA(state, data) {
    state.data = data;
  },
};

const actions = {
 async fetchData({ commit }) {
    const response = await axios.get('https://sephora.p.rapidapi.com/categories/v2/list-root',{
      headers: {
        'X-RapidAPI-Key': 'c524d666e7mshb6c0e6ea9ac57e8p13ba76jsn2f7449ce5707',
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
      }
    });
    commit('SET_DATA', response.data);
    console.log(response);
    
    
  },
};
export default{
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}


