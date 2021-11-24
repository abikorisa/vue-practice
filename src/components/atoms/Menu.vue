<template>
  <div>
    <button @click="on">Click</button>
    <slot v-if="display"> </slot>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      display: true,
    }
  },
  methods: {
    on() {
      return (this.display = !this.display)
    },
  },
}
</script>
