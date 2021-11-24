<template>
  <the-login-page />
</template>

<script>
import TheLoginPage from '../components/templates/TheLoginPage.vue'

export default {
  name: 'SignIn', //複数単語コンポーネントが原則
  components: {
    //コンポーネント名はPascalCase
    TheLoginPage,
  },
}
</script>
