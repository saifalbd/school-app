import { createStore,createLogger } from 'vuex'
import createPersistedState from "vuex-plugin-persistedstate";

// Create a new store instance.
const store = createStore( {
    plugins: [createPersistedState()],
  state() {
     return {
      user: null,
      avatar:null,
      auth_id:null,
      token:null,
      showProfileModal:false,
      role:''
     }
  },
  mutations: {
      addUser(state, user) {
          const {id,avatar} = user;
          state.auth_id = id;
          if(avatar){
              state.avatar = avatar;
          }else{
              state.showProfileModal = true;
          }

          state.role = user.role;
        
          state.user = user;
      },
      addToken(state, token) {
          state.token = token;
      },
      updateAvatar(state, avatar){
        state.avatar = avatar;
      },
      hideProfileModal(state){
          state.showProfileModal = false;
      }
  },
  getters: {
      canRole: (state) => {
        return (role:string) => state.role.toLowerCase() ==role.toLocaleLowerCase()
      },
    },


});
export default store;