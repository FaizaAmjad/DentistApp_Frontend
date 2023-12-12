import Vuex from 'vuex'


const state = {
    dentist: null
};

const store = new Vuex.Store({
    state,
    getters: {
        dentist: (state) => {
            return state.dentist;
        }
    },
    actions: {
        dentist(context, dentist) {
            
            context.commit('dentist', dentist)
        }
    },
    mutations: {
        dentist(state, dentist) {
            state.dentist = dentist;
        }
    }
})

export default store;
