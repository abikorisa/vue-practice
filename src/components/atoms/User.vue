<template>
  <span>
    <slot :user="user" :message="message">{{ user.lastName }}</slot>
  </span>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        age: '25',
        sex: '男性',
      },
      message: 'こんにちは！',
    }
  },
}
</script>
