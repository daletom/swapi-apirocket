<template>
  <div>
    <div class="posts__container flex flex-wrap" v-if="posts.length > 0">
      <div class="post xs:w-full md:w-1/3 px-2 xs:mb-6 md:mb-12" v-for="post in posts" :key="post.id">
        <div class="image">
          <img
            :src="post.poster.url + '?w=400&h=600&fit=fill&fill=color&fill-color=white&auto=format,compress'"
            :imgixParams="{fit:'crop'}"
            sizes="(min-width: 768px) 30vw, 100vw"
            class="post__image"
            :alt="post.title"
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
        <p>
          <span class="paragraph__title">Producer(s)</span>
          : {{ post.producer }}
        </p>
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
    },
    imageSrc() {
      return (new URL(this.post.poster.url)).pathname
    }
  }
};
</script>

<style></style>