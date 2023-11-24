<template>
  <v-app>

    <div class="motion" :class="{ 'background': page == 'index', 'bg-background': page != 'index' }">
      <div class="nav-menu">
        <v-btn variant="text" v-for="link in links" :key="link" :to="link.to">
          {{ link.title }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn variant="flat" rounded="xl" to="/blog" color="black">
          Blog
        </v-btn>
      </div>
    </div>

    <div class="under-nav" :class="{ 'background': page == 'index' }"></div>

    <v-main class="main">
      <slot />
    </v-main>

    <v-footer class="footer bg-white py-5 text-center d-flex flex-column">
      <div>
        <v-btn class="mx-4" icon="mdi-linkedin" variant="text" href="https://www.linkedin.com/in/marek-smolen-49700b150/" target="_blank"></v-btn>
      </div>
      <v-divider></v-divider>
    <div>
      {{ new Date().getFullYear() }} — <strong>marosmola.com</strong>
    </div>


    </v-footer>
  </v-app>
</template>

<script setup>
import { Motion } from "motion/vue"
const route = useRoute()

const page = computed(() => {
  return route.name
})

const links = [
  {to: '/', title: 'Home'},
  {to: '/about', title: 'About'},
  // {to: '/blog', title: 'Blog'},
];
</script>

<style lang="scss" scoped>

.motion {
  // background-color: rgb(var(--v-theme-background));
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 64px;
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

.under-nav {
  position: absolute;
  width: 100%;
  height: 64px;
}

.main {
  // background-color: rgb(var(--v-theme-primary));
  padding-top: 64px;
}

.background {
  background: rgb(34,153,84);
  background: linear-gradient(65deg, rgba(34,153,84,1) 0%, rgba(22,21,20,1) 100%);
}

.footer {
  border-top: 1px solid black;
}
</style>
