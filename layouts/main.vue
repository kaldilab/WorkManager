<template>
  <div v-frag>
    <main :class="`main main-${$route.name}`">
      <div class="main__container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>
