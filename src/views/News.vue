<template>
<div id="news">
  <transition-group name="fade" appear tag="div" class="main-news">
    <loading-component v-if="loading" key="loading"></loading-component>
    <div class="news" v-else v-for="(item, key) in getNews" :key="key">
      <h1>{{item.title}}</h1>
      <p class="description">{{item.description}}</p>
      <div class="images"
        :style="{ backgroundImage: `url('${item.urlToImage}')` }">
      </div>
      <p class="content">{{item.content}}</p>
      <span class="publishedAt">{{item.publishedAt}}</span>
      <a :href="item.url" class="link">Read completely {{key}}</a>
    </div>
  </transition-group>
</div>
</template>
<script>

export default {
  name: 'News',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    getNews () {
      const news = this.$store.getters['news/getNews']
      return news
    }
  },
  methods: {
    actionsGetNews () {
      this.$store.dispatch('news/FETCH_NEWS')
        .then(e => {
          this.loading = false
        })
    }
  },
  created () {
    this.actionsGetNews()
  }
}
</script>
<style scoped lang="scss">
#news {
  max-width: 1280px;
  margin: 0 auto;
}

.main-news {
  width: 70%;
  margin: 0 auto;
  font-size: 0.9em;
}

.remove {
  width: 50px;
  height: 50px;
  float: right;
  background: red;
}

.news {
  background-color: #f7f7f9;
  padding: 1em 1em 2em 1em;
  border-radius: 5px;
  margin-bottom: 6em;
  box-shadow: 0px 2px 14px 0px rgba(0,0,0,0.75);
  & h1 {
    text-align: center;
  }

  & p {
    margin: 1em 0;
  }
}

.images {
  overflow: hidden;
  min-height: 25em;
  background-size: cover;
  &>img {
    height: 100%;
    width: 100%;
    border-radius: 0.5em;
    margin: 1em 0;
  }
}

.publishedAt {
  color: #c2bc56;
}

.link {
  float: right;
  background: #007bff;
  display: inline-block;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.5s;
  &:hover {
    text-decoration: underline;
    background: #5658c2;
  }
}

@media (max-width: 960px) {
.main-news {
  width: 90%;
  margin: 0 auto;
  font-size: 0.9em;
  }
.images {
  overflow: hidden;
  min-height: 50vw;;
  background-size: 100% 100%;
}
}
</style>
