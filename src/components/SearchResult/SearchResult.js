export default {
	name: 'search-result',
	data() {
		return {
			searchResultList: null
		}
	},
	methods: {
		/**
		 * Sets the search result list
		 * @param resultList The search result list
		 */ 
		setSearchResultList: function(resultList) {
			this.searchResultList = resultList;
		}
	}
}