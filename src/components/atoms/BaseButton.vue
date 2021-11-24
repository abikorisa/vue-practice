<template>
  <button class="button-main" @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style>
.button-main {
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
}
</style>
