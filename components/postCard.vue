<template>
  <div>
    <div class="posts__container flex flex-wrap" v-if="posts.length > 0">
      <div class="post xs:w-full md:w-1/3 px-2 xs:mb-6 md:mb-12" v-for="post in posts" :key="post.id">
        <div class="image">
          <ix-img
            :src="'0h60t5aq/Swapi/' + post.poster.fileName"
            :imgixParams="{fit:'crop', crop:'bottom', ar:'1:1'}"
            sizes="(min-width: 768px) 30vw, 100vw"
            class="post__image"
            :alt="post.title + ' Movie Poster'"
          />
        </div>
        <p>
          <span class="paragraph__title">Title</span>
          : {{ post.title }}
        </p>
        <p>
          <span class="paragraph__title">Episode ID</span>
          : {{ post.episodeId }}
        </p>
        <p>
          <span class="paragraph__title">Date</span>
          : {{ post.releaseDate }}
        </p>
        <p>
          <span class="paragraph__title">Director</span>
          : {{ post.director }}
        </p>
        <button class="nav__link nav__link--long button">
          <nuxt-link :to="`/films/${post.id}`">View Episode Crawl</nuxt-link>
        </button>
      </div>
    </div>
    <div class="posts__container" v-else>
      <div class="empty__report">
        <h5>You have no posts yet</h5>
        <button class="nav__link nav__link--long">
          <nuxt-link to="/post.id">View Episode Info</nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueImgix from '~/plugins/vue-imgix.js'

export default {
  name: "post-card",
  props: {
    post: {
      type: Object,
      default: null
    },
    posts: {
      type: Array,
      default: null
    },
    imgixParams: {
      type: String,
      default: null
    }
  },
  methods: {
    emitEvent(post) {
      this.$emit("deletePost", post);
    }
  }
};
</script>

<style>
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}</style>