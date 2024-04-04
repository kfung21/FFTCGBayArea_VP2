import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Calendar", defineAsyncComponent(() => import("B:/Projects/FFTCGBayArea_VP2/docs/.vuepress/components/Calendar.vue"))),
      app.component("PriceLookup", defineAsyncComponent(() => import("B:/Projects/FFTCGBayArea_VP2/docs/.vuepress/components/PriceLookup.vue")))
  },
}
