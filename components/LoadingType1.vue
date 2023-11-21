<template>
  <div v-frag>
    <div class="loading-type1" :class="option ? `type-${option}` : ''">
      <i class="visually-hidden">로딩중입니다.</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: String,
      default: '',
    },
  },
}
</script>
