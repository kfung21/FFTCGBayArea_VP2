export const data = JSON.parse("{\"key\":\"v-02a7ff8d\",\"path\":\"/blog/Test2.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1670479540000,\"contributors\":[{\"name\":\"kf\",\"email\":\"kevtfung@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"blog/Test2.md\"}")

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
