export const data = JSON.parse("{\"key\":\"v-b1d2ef42\",\"path\":\"/photos.html\",\"title\":\"Photos\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Photos\",\"tags\":[\"Photos\"],\"author\":\"FFTCG\",\"blog\":true,\"sidebar\":\"auto\",\"summary\":\"Photos\"},\"excerpt\":\"\",\"headers\":[],\"git\":{},\"filePathRelative\":\"photos.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
