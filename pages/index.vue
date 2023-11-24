<script setup>
useSeoMeta({
  title: "marosmola.com - Home",
  description: "This is my amazing site, let me tell you all about it.",
  // ogTitle: 'My Amazing Site',
  // ogDescription: 'This is my amazing site, let me tell you all about it.',
  // ogImage: 'https://example.com/image.png',
});

const articles = await queryContent("/").where({ featured: true }).find();
console.log(articles);
</script>

<template>
  <div class="blog-section">
    <v-container>
      <h1>Explore Topics</h1>
      <p>
        Dive into a world of knowledge and discovery. Our blog covers a wide
        range of topics, from programming tips to product reviews. Start your
        journey now!
      </p>

      <v-btn variant="outlined" to="/blog"> Start Exploring </v-btn>
    </v-container>
  </div>

  <div class="featured-section">
    <v-container>
      <h2>Featured articles</h2>
      <v-row>
        <v-col v-for="article in articles" :key="article.id">
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <v-btn class="mt-2" color="primary" variant="flat" :to="article._path">
            Read
          </v-btn>
        </v-col>
      </v-row>

    </v-container>
  </div>

  <!-- <div class="about-section">
    <v-container>
      <h2>About</h2>
      <p>Something nice here intro..</p>
      <nuxt-link to="/blog">Blog</nuxt-link>
    </v-container>
  </div> -->
</template>


<style lang="scss" scoped>
h1 {
  // font-family: 'Space Grotesk';
  font-size: 48px;
}

.v-container {
  max-width: 900px;
  padding: 0;
}

.blog-section {
  // background-color: rgb(var(--v-theme-primary));
  background: rgb(34,153,84);
  background: linear-gradient(65deg, rgba(34,153,84,1) 0%, rgba(22,21,20,1) 100%);
  border-bottom: 1px solid black;
  padding: 5rem 0;
  color: white;
  // line-height: 64px;

  h1 {
    text-shadow: 3px 3px black;
  }
  p {
    margin-bottom: 8px;
  }
}

.featured-section {
  padding: 2rem 0;
  background-color: rgb(var(--v-theme-background));

  h2 {
    margin-bottom: 2rem;
    // text-shadow: 3px 3px rgb(var(--v-theme-primary), .8);
  }

  p {
    font-family: "Merriweather";
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
  }

  h3 {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 8px;
  }
}
</style>
