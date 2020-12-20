import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: "apirocket.imgix.net",
    defaultIxParams: {
        auto: 'format,compress'
    },
});