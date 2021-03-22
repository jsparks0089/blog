import Vuex from 'vuex'
import Vue from 'vue'
import blog from './modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        blog
    }
})