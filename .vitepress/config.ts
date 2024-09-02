import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

//每页的文章数量
const pageSize = 10

export default defineConfig({
    title: '小黑日记',
    base: '/',
    cacheDir: './node_modules/vitepress_cache',
    description: '这一路上有很多风景',
    ignoreDeadLinks: true,
    themeConfig: {
        posts: await getPosts(pageSize),
        // 评论的仓库地址
        comment: {
            repo: '',
            themes: 'github-light',
            issueTerm: 'pathname'
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '分类', link: '/pages/category' },
            { text: '归档', link: '/pages/archives' },
            { text: '标签', link: '/pages/tags' },
            { text: '关于', link: '/pages/about' }
        ],
        search: {
            provider: 'local'
        },
        outline: {
            label: '文章摘要'
        }
    } as any,
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
        build: { minify: false },
        server: { port: 5000 }
    }
})
