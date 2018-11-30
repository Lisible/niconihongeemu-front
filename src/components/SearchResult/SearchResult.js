export default {
	name: 'search-result',
	data() {
		return {
			searchResultList: null
		}
	},
	methods: {
		setSearchResultList: function(resultList) {
			this.searchResultList = resultList;
		}
	}
}