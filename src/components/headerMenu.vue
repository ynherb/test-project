<template>
  <nav id="nav" class="nav">
    <div class="menu" :class="{menu_state_open : !isActive}">
    <div class="menu__icon" @click="isActive = !isActive">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>
    <ul class="link" :class="{link_active : isActive}">
      <router-link to="/" tag="li" exact><a href="#">Home</a></router-link>
      <router-link to="news" tag="li"><a href="#">News</a></router-link>
      <li @click.prevent="logout" v-if="userAuterization"><a href="#">Logout</a></li>
      <router-link to="login" tag="li" v-else><a href="#">Login</a></router-link>
      <router-link to="profile" tag="li"><a href="#">Profile</a></router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/FETCH_SIGN_OUT')
    }
  },
  computed: {
    userAuterization () {
      return this.$store.getters['user/userUid']
    }
  },
  watch: {
    $route () {
      if (!this.isActive) this.isActive = true
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  z-index: 100;
  position: fixed;
  width: 100%;
  font-size: 1em;
  box-sizing: border-box;
  text-decoration: none;
  margin: 0;
  top: 0;
  padding: 1em;
  box-shadow: inset -7px 9px 25px -22px rgba(0,0,0,0.75);
  background: #5658c2;
  & ul  {
    margin: 0;
    padding: 0;
    width: 100%;
  }
}

.link {
  & li {
    list-style: none;
    padding: 0 1em;
    display: inline-block;
    &:nth-child(3) {
      float: right;
    }
  }
    & a {
      outline: none;
      text-decoration: none;
      color: rgba(0,0,0,.9);
      &:hover {color: #ffff;}
    }
}

.router-link-active {
  & a {
    color: #ffff;
  }
}

.open-menu { display: none; }
.authorized { float: right; }

@media (max-width: 960px) {
.link {
  flex-wrap: wrap;
  display: flex;
  & li {
    width: 100%;
    transition: all 0.5s;
    background: #333;
    padding: 0;
    height: 3.5em;
    opacity: 1;
    &:nth-child(3) {
      order: 100;
    }
    & a {
      color: #f2f2f2;
      width: 100%;
      transition: all 0.5s;
      display: block;
      line-height: 3.5em;
      padding-left: 1em;
      height: 3.5em;
      &:hover {
        background-color: #ddd;
        color: black;
      }
    }
  }
}

.router-link-active {
  opacity: 1!important;
  z-index: 9;
  height: 3.5em!important;
}

.link_active li {
  height: 0px;
  opacity: 0;
  overflow: hidden;
  & a {
    width: 4em;
    align-text: center;
  }
}

.nav {
  padding: 0;
}

.router-link-active {
  order: -1!important;
  & a {
    text-decoration: none;
    background-color: #4CAF50;
    color: white;
  }
}

.menu__icon {
  position: absolute;
  width: 45px;
  z-index: 10;
  height: 35px;
  right: 0.5em;
  top: 0.42em;
  cursor: pointer;
}

.menu__icon span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
}

.menu__icon span:nth-child(1) { top: 0px; }

.menu__icon span:nth-child(2), .menu__icon span:nth-child(3) { top: 13px; }

.menu__icon span:nth-child(4) { top: 26px; }

.menu.menu_state_open .menu__icon span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
}

.menu.menu_state_open .menu__icon span:nth-child(2) { transform: rotate(45deg); }

.menu.menu_state_open .menu__icon span:nth-child(3) { transform: rotate(-45deg); }

.menu.menu_state_open .menu__icon span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
}

.menu.menu_state_open .menu__links { display: block; }

}
</style>
