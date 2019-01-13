import SearchResult from '@/model/SearchResult'
import SearchType from '@/model/SearchType'
import SearchResultList from '@/model/SearchResultList'

import AccessToken from '@/model/AccessToken'
import WordAPI from '@/model/api/WordAPI'
import KanjiAPI from '@/model/api/KanjiAPI'

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
        /**
         * Sends a search request and updates the search results
         */
        search: async function(){
            const query = this.query;

            let searchResultList = new SearchResultList();
            let searchType = +document.getElementsByName("search-type")[0].value;

            this.$eventBus.$emit('SearchStartedEvent');
            if (searchType === SearchType.ANY || searchType === SearchType.KANJI) {
                const results = await KanjiAPI.searchKanji(query, AccessToken.token);

                results.forEach(r => {
                        searchResultList.addSearchResult(new SearchResult('kanji', r));
                });
            }

            if (searchType === SearchType.ANY || searchType === SearchType.WORD) {
                const results = await WordAPI.searchWord(query, AccessToken.token);

                results.forEach(r => {
                        searchResultList.addSearchResult(new SearchResult('word', r));
                 });
            }
            this.$eventBus.$emit('SearchFinishedEvent', searchResultList);
        }
    }
}