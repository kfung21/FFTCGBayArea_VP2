import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { defaultTheme } from 'vuepress'
import { blogPlugin } from "vuepress-plugin-blog2";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

const __dirname = getDirname(import.meta.url)

export default {
    title: 'Final Fantasy TCG Bay Area',
    theme: defaultTheme({
    // default theme config
        navbar: [
            // nested group - max depth is 2
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Blog',
                link: '/blog',
            },
            {
                text: 'Price Check',
                link: '/pricecheck',
            },
            {
                text: 'Calendar',
                link: '/calendar',
            },
            {
                text: 'Photos',
                link: 'https://www.facebook.com/groups/564324407104934/media/photos',
                // link: 'https://photos.app.goo.gl/NUySx7BLQ6F1EifG8',
            },
            {
                text: 'Resources',
                link: '/resources',
                children: [
                    {
                        text: 'All Resources',
                        link: '/resources',
                    },
                    {
                        text: 'Draft Guide',
                        link: '/blog/2022-12-8_Draft_Guide_FFTCG_Updated',
                    },
                ],

            },
            {
                text: 'About',
                link: '/about',
            },
        ],
        lastUpdated: ''
    }),
    head: [
        ['link', { rel: 'manifest', href: './public/manifest.webmanifest' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],


    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        blogPlugin({
      // your options
        }),
        pwaPlugin({
            skipWaiting: true
        }),
        googleAnalyticsPlugin({
            id: 'G-ZFB92VM4KZ',
            debug: true,
        }),
        sitemapPlugin({
            hostname: 'https://www.fftcgbayarea.com'
        }),


    ],
}

