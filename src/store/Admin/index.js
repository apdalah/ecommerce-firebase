export default {
  namespaced: true,

  state: {

  	showNave: true,

  },

  mutations: {
  	
  	updateNaveVisibilty(state, naveState) {
  		state.showNave = naveState;
  	},

  }, 

  actions: {},

};