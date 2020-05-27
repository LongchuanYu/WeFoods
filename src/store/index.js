import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
 // import的名字作为在别处引用的模块名，相当于别名。所以可以随便取，只要保持一致就行。
import myself from './module_myself'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      myself
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
