<template>
  <input v-model="curryValue" @change="handelInput()">
</template>

<style lang="scss">
button {
  background: #d3d3d3;
}
</style>

<script>
export default {
  props: ["value"],
  computed: {
    curryValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    handelInput() {
      this.$emit("change", this.curryValue);
    }
  }
};
</script>


