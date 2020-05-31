import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
// import example from './module-example'
 // import的名字作为在别处引用的模块名，相当于别名。所以可以随便取，只要保持一致就行。
import base from './module_base'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const Store = new Vuex.Store({
  modules: {
    // example
    base
  },
  plugins:[new VuexPersistence().plugin],

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})

export default Store
