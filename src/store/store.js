import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0
      title:"我是vuex中的store的数据"
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    getter:{

    },
    actions:{
        increment (context) {
            context.commit('increment')
          }

    },
    modules:{

    }

  })

  export default store;