<template>
<div id="login">
  <div class="login-page">
    <transition-group name="fade">
      <loading-component v-if="loading" :key="2"> </loading-component>
    <div v-else :key="3">
      <transition name="fade" v-on:after-leave="textClear">
        <alert-component
        class="alerts"
        v-on:close="errorLogin.flag = !errorLogin.flag"
        v-show="errorLogin.flag">
          <span slot="mesgErr">{{errorLogin.text}}</span>
        </alert-component>
      </transition>
    <div class="form">
      <form class="login-form">
        <input type="text" placeholder="email" v-model="email"/>
        <transition name="alerts">
          <span class="alerts-email" v-show="errorMessage.email">{{errorMessage.email}}</span>
        </transition>
        <input type="password" placeholder="password" v-model="pass"/>
        <transition name="alerts">
        <span class="alerts-email" v-show="errorMessage.pass">{{errorMessage.pass}}</span>
        </transition>
        <button @click.prevent="loginValidate">sig in</button>
      </form>
    </div>
  </div>
  </transition-group>
  </div>
</div>
</template>
<script>
import alertComponent from '../components/alerts.vue'
const patternEmail = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i
let timer
const validate = {
  email: (text) => {
    return (!patternEmail.test(text)) ? 'email not correction' : ''
  },
  pass: (text) => {
    return (text.length < 6) ? 'password must be longer than 6 characters' : ''
  }
}
export default {
  data () {
    return {
      loading: false,
      errorLogin: {
        text: '',
        flag: false
      },
      email: '',
      pass: '',
      errorMessage: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    textClear () {
      this.errorLogin.text = ''
    },
    loginValidate () {
      const user = {
        email: this.email,
        pass: this.pass
      }
      // якщо масив пустий значить поля заповнені вірно
      let arr = Object.keys(user).filter((key) => {
        this.errorMessage[key] = validate[key](user[key])
        return validate[key](user[key])
      })
      if (!arr.length) this.logIn(user)
    },
    logIn (user) {
      this.loading = true
      this.$store.dispatch('user/FETCH_LOGIN_USER', user)
        .then((e) => { this.$router.push('profile') })
        .catch((text) => { this.ErrorLogin(text.message) })
        .finally(() => { this.loading = false })
    },
    ErrorLogin (text) {
      this.errorLogin = {
        text: text,
        flag: true
      }
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => { this.errorLogin.flag = false }, 3000)
    },
    urlText () {
      this.errorLogin.text = 'sign in to your account'
      this.errorLogin.flag = true
      timer = setTimeout(() => {
        this.errorLogin.flag = false
      }, 2000)
    }
  },
  watch: {
    $route (e) {
      if (this.$route.query['LoginError']) {
        this.urlText()
      }
    }
  },
  created () {
    if (this.$route.query['LoginError']) {
      this.urlText()
    }
  },
  components: {
    alertComponent
  }
}
</script>
<style scoped lang="scss">
#login {
}
.alerts {
  width: auto;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -20%)
}

@media (max-width: 960px) {
.alerts {
  width: 80%;
}
}

.alerts-email {
  display: block;
  overflow: hidden;
  max-height: 5em;
  box-sizing: border-box;
}
.alerts-enter-active, .alerts-leave-active {
  transition: all 0.4s;
}
.alerts-enter, .alerts-leave-to {
  max-height: 0em;
}
.mess {
  font-size: 0.8em;
}
.login-page {
  width: 360px;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}

</style>
