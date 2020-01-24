<template>
  <div id="profile">
    <transition name="fade" appear>
    <p>What is Lorem Ipsum?

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
  </p>
  </transition>
  </div>
</template>
<script>

export default {
  data () {
    return {
      loading: true
    }
  },
  computed: {
    userUid () {
      console.log(this.$store.getters['user/userUid'])
      return this.$store.getters['user/userUid']
    }
  },
  watch: {
    userUid (uid) {
      if (!uid) {
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>
<style scoped lang="scss">
#profile {
  width: 84%;
  margin: 0 auto;
}
</style>
