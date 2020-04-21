
export default {
  state: {
  	showNave: true
  },

  mutations: {
  	updateNaveVisibilty(state, naveState) {
  		state.showNave = naveState;
  	}
  }

};