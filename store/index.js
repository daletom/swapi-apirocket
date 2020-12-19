export const state = () => ({})

export const getters = {

}

export const mutations = {

}

export const actions = {
    async getPosts() {
        let res = await this.$axios.get('', {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "5CquivCm36-07z-dn-pkoAynDpGkuDPd4FL18Ce4MUxXSk72b6e94aRIV1CIyJ9M"
            }
          })
        return res;
      }
}