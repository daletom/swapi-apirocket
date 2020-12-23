export const state = () => ({})

export const getters = {

}

export const mutations = {

}

export const actions = {
    async getPosts() {

		const myQuery = `query MyQuery {
				AllSwapis(orderBy: EPISODEID_ASC) {
					createdAt
					director
					episodeId
					id
					openingCrawl
					poster {
						fileName
					}
					producer
					releaseDate
					title
				}
			}			
		`;

		const options = {
			method: 'POST',
			url: 'https://graphql.apirocket.io/',
			headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer 5CquivCm36-07z-dn-pkoAynDpGkuDPd4FL18Ce4MUxXSk72b6e94aRIV1CIyJ9M"
			},
			data: JSON.stringify({query: myQuery})
		};
				
		let res = await this.$axios.request(options)
        return res.data.data.AllSwapis;
			},
			async getFilm($id) {

				const myQuery = `query MyQuery {
					Swapi(id: "${$id}") {
						director
						episodeId
						id
						openingCrawl
						poster {
							fileName
						}
						producer
						releaseDate
						title
					}
				}
					
				`;
		
				const options = {
					method: 'POST',
					url: 'https://graphql.apirocket.io/',
					headers: {
					"Content-Type": "application/json",
					"Authorization": "Bearer 5CquivCm36-07z-dn-pkoAynDpGkuDPd4FL18Ce4MUxXSk72b6e94aRIV1CIyJ9M"
					},
					data: JSON.stringify({query: myQuery})
				};
						
				let res = await this.$axios.request(options)
						return res.data.data.Swapi;
					}
}
