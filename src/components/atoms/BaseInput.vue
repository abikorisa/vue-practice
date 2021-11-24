<template>
  <input
    :value="value"
    @input="onInput"
    :type="type"
    :name="name"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: { type: String, required: false },
    type: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String, required: false },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    onInput(event) {
      //
      this.$emit('input', event.target.value)
    },
  },
}
</script>
