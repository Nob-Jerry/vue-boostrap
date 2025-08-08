<script setup>
import { Input } from 'ant-design-vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  isPassword: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  customClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <component
    :is="isPassword ? Input.Password : Input"
    :placeholder="placeholder"
    :value="modelValue"
    :class="customClass"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
.input.ant-input {
  background-color: #3c364c !important;
}

.ant-input::placeholder {
  color: #fff !important;
}
</style>
