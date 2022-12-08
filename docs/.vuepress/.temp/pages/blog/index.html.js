export const data = JSON.parse("{\"key\":\"v-145ac574\",\"path\":\"/blog/\",\"title\":\"Blog\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Blog\",\"tags\":[\"Blog\"],\"author\":\"FFTCG\",\"blog\":true,\"sidebar\":\"auto\",\"summary\":\"Blog\"},\"excerpt\":\"\",\"headers\":[{\"level\":3,\"title\":\"Blog Test1\",\"slug\":\"blog-test1\",\"link\":\"#blog-test1\",\"children\":[]},{\"level\":3,\"title\":\"Blog Test2\",\"slug\":\"blog-test2\",\"link\":\"#blog-test2\",\"children\":[]},{\"level\":3,\"title\":\"Blog Test3\",\"slug\":\"blog-test3\",\"link\":\"#blog-test3\",\"children\":[]}],\"git\":{\"updatedTime\":1670479540000,\"contributors\":[{\"name\":\"kf\",\"email\":\"kevtfung@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"blog/README.md\"}")

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
