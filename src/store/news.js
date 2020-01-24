import AXIOS from 'axios'

const axios = AXIOS.create({
  baseURL: 'https://newsapi.org/v2/top-headlines?country=us&category=business',
  headers: {
    'X-Api-Key': 'a8e53c931d314499aa9ea3507c8cd2aa'
  }
})
const reg = /\[[^\]]*\]/g

export default {
  namespaced: true,
  state: {
    newsList: []
  },
  getters: {
    getNews (state) {
      return state.newsList
    }
  },
  mutations: {
    SET_NEWS (state, news) {
      // знімаємо реактивність з обєктів

      const listNews = []
      news.forEach(item => {
        if (typeof item.publishedAt === 'string') {
          item.publishedAt = item.publishedAt.replace(/[a-z]/gi, ' ')
        }
        if (typeof item.content === 'string') {
          item.content = item.content.replace(reg, '')
        }
        listNews.push(Object.freeze(item))
      })
      state.newsList.push(...listNews)
    }
  },
  actions: {
    async  FETCH_NEWS ({ commit, state }) {
      try {
        let { data } = await axios.get()
        commit('SET_NEWS', data.articles)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
