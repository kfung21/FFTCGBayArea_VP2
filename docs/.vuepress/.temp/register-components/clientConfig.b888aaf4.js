import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("FooBar", defineAsyncComponent(() => import("B:/Programming/My Projects/FFTCGBayArea-vuepress2/docs/.vuepress/components/FooBar.vue")))
  },
}
