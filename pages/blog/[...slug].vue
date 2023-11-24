<template>

  <ContentDoc v-slot="{ doc }">
    <article class="content">
      <div class="intro">
        <span>{{ doc.category }}</span>
        <h1>{{ doc.title }}</h1>

        <div class="user-section">
          <v-avatar color="brown" class="mr-2">
            <span class="text-h7">MS</span>
          </v-avatar>
          <div class="mt-1">
            {{ doc.author }} <br />
            <span>Posted on {{ doc.publishedAt }}</span>
          </div>
        </div>

        <v-divider class="my-3"></v-divider>

        <p>{{ doc.description }}</p>

        <v-img v-if="doc.cover" :src="doc.cover" max-height="400px"></v-img>
        <p class="image-description">Image Source: custompc</p>
      </div>


      <ContentRenderer :value="doc"/>
    </article>

  </ContentDoc>
</template>

<script setup>
</script>

<style lang="scss">
.content {
  // max-width: 680px;
  margin: 16px 0;

  .intro {
    max-width: 680px;
    margin: 0 auto;
  }

  .image-description {
    margin-top: 0;
    text-align: center;
    font-size: 12px;
    // font-family: 'Inter';
  }

  h1 {
    font-size: 2.5em;
    line-height: 1.3em;
  }

  p {
    font-family: "Merriweather";
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    margin: 20px auto;
    max-width: 680px;
  }

  blockquote {
    font-style: italic;
    border-left: 2px solid black;
    max-width: 700px;
    margin: 0 auto;
  }
}

.user-section {
  display: flex;
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: rgb(39, 39, 39);

  span {
    font-size: 12px;
    font-weight: 400;
  }
}

</style>