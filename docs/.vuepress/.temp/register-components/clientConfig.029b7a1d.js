import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("TestComponent", defineAsyncComponent(() => import("B:/Programming/My Projects/FFTCGBayArea-vuepress2/docs/.vuepress/components/FooBar.vue")))
  },
}
