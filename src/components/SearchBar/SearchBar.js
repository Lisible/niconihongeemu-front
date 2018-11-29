import SearchType from '@/model/SearchType';

export default {
	name: 'search-bar',
	data() {
		return {
			query: 'ABCDE',
			type: 'any'
		}
	},
	methods: {
		triggerSearchEvent: function(event){
			this.$parent.$emit('SearchEvent', this.query, SearchType.searchTypeFromString(this.type));
		}
	}
}