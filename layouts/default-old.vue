<template>
  <v-app>
    <div class="motion">
      <div class="nav-menu">
        <v-btn variant="text" v-for="link in links" :key="link" :to="link.to">
          {{ link.title }}
        </v-btn>
      </div>
    </div>

    <!-- <Motion
        :initial="{ backgroundColor: '#ffb74d', height: '64px' }"
        :animate="{ backgroundColor: '#fafafa', height: '48px' }"
        :transition="{ duration: 0.5, ease: 'linear' }"
        class="motion">
    </Motion> -->

    <v-main class="bg-grey-lighten-5 padding content">
        <!-- {{ page }} -->
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { Motion } from "motion/vue"
import { computed } from 'vue'
const route = useRoute()

console.log(route.query.animate)

// const page = computed(() => {
//   console.log(route)
//   return route.name
// })

const links = [
  {to: '/', title: 'Home'},
  {to: '/about', title: 'About'},
  // {to: '/blog', title: 'Blog'},
];
</script>

<style lang="scss" scoped>

.motion {
  width: 100%;
  height: 48px;
  background-color: rgb(var(--v-theme-background));
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid black;
}

.nav-menu {
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  align-content: center;
}

.content {
  padding-top: 48px;
  // background-color: rgb(var(--v-theme-background));
}
</style>
