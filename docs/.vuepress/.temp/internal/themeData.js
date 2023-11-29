export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Blog\",\"link\":\"/blog\"},{\"text\":\"Price Check\",\"link\":\"/pricecheck\"},{\"text\":\"Calendar\",\"link\":\"/calendar\"},{\"text\":\"Photos\",\"link\":\"https://www.facebook.com/groups/564324407104934/media/photos\"},{\"text\":\"Resources\",\"link\":\"/resources\",\"children\":[{\"text\":\"All Resources\",\"link\":\"/resources\"},{\"text\":\"Draft Guide\",\"link\":\"/blog/2022-12-8_Draft_Guide_FFTCG_Updated\"},{\"text\":\"Starter Sets+\",\"link\":\"/blog/2023-11-25_2023_StarterDecks\"},{\"text\":\"Promo Cards\",\"link\":\"/blog/2023-12-01_2023_Promos\"}]},{\"text\":\"About\",\"link\":\"/about\"}],\"lastUpdated\":\"\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
