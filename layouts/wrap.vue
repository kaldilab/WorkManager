<template>
  <div v-frag>
    <div class="wrap" :data-route="$route.name">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WrapLayout',
  beforeMount() {
    const promise = this.$getAuth()
    Promise.all([promise]).then(() => {
      const authNumber = this.$store.state.common.auth
      const storedAuthNumber = this.$getLocalStore('auth')
      if (authNumber === storedAuthNumber) {
        if (this.$route.name.includes('auth')) {
          this.$router.push('/')
        }
      } else {
        this.$router.push('/auth')
      }
    })
  },
}
</script>
