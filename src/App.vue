<template>
  <div id="app">
    <header-menu></header-menu>
     <transition name="fade" appear mode="out-in">
    <keep-alive include="News">
      <router-view/>
    </keep-alive>
     </transition>
  </div>
</template>
<script>
import headerMenu from './components/headerMenu.vue'
export default {
  components: {
    headerMenu
  }
}
</script>
<style  lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 0.2s;
}
.fade-enter, .fade-leave-to {
   opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 7em;
}

body {
  min-height: 100vh;
}

html {
  font-size: 1.5vw;
}

* {
  margin: 0;
  padding: 0;
}

@media (max-width: 960px) {
html {
  font-size: 16px;
}
}

@media (min-width: 1280px) {
html {
  font-size: 16px;
}
}
</style>
