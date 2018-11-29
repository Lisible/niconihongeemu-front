import SearchType from '@/model/SearchType';

export default {
	name: 'search-bar',
	data() {
		return {
			SearchType: SearchType,
			query: '',
			type: SearchType.ANY
		}
	},
	methods: {
		triggerSearchEvent: function(event){
			this.$parent.$emit('SearchEvent', this.query, this.type);
		}
	}
}