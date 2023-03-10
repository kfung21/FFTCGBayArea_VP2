export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Final Fantasy TCG Bay Area\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"manifest\",\"href\":\"./public/manifest.webmanifest\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
