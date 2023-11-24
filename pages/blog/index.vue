
<template>
  <v-container>
    <v-chip-group v-if="category" filter mandatory v-model="category" class="justify-center">
      <v-chip value="explore">Explore</v-chip>
      <v-chip v-for="cat in categories" :key="cat.slug" :value="cat.slug">{{ cat.title }}</v-chip>
    </v-chip-group>

    <!-- {{ navigation }} -->
    <!-- {{ articles }} -->

    <div style="max-width: 900px; margin: 0 auto;">
      <h1 v-if="category == 'explore'" class="cat-title">
        Explore
      </h1>
      <h1 v-else class="cat-title">
        {{ categories.find(i => i.slug == category)?.title }}
      </h1>
      <v-divider></v-divider>

      <v-row class="mt-1">
        <!-- Update to search only by category -->

          <v-col cols="12" md="6" v-for="item in articles" :key="item._id">
            <v-card variant="outlined" class="card">
              <v-img v-if="item.cover" :src="item.cover" height="200px" cover alt="Image text"></v-img>

              <v-card-item>
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <v-btn color="primary" variant="flat" :to="item._path">
                  Read
                </v-btn>
              </v-card-item>
            </v-card>
          </v-col>
      </v-row>
    </div>
  </v-container>

</template>



<script setup lang="ts">
import { ref } from 'vue'
import type { ParsedContent, QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

useSeoMeta({
  title: 'marosmola.com - Blog',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
})

let query: QueryBuilderParams;
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const categories = navigation.value?.find(i => i.title == 'Blog')?.children || []
const category = ref('explore')
const articles: Ref<ParsedContent[]> = ref([])

watch(category, async (newCat, oldCat) => {
  // console.log(newCat)
  if (newCat && newCat != 'explore') {
    articles.value = await queryContent('blog').where({ _dir: newCat, _extension: 'md' }).find()
  } else {
    articles.value = await queryContent('blog').where({ _extension: 'md' }).find()
  }
})

onMounted(async () => {
  // console.log('mounted')
  articles.value = await queryContent('blog').where({ _extension: 'md' }).find()
})

</script>

<style lang="scss" scoped>
.card {
  border: 0;

  .v-card-item {
    padding-left: 0;
    padding-right: 0;

    a {
      margin-top: 8px;
    }
  }
}
.cat-title {
  font-size: 48px;
  text-align: center;
  margin: .5em auto;
  font-weight: 700;
  // opacity: 40%;
  // text-shadow: 3px 3px rgb(var(--v-theme-primary), .8);
}

p {
  font-family: "Merriweather";
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  max-width: 680px;
}

h2 {
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 8px;
}
</style>