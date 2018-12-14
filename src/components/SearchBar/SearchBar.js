import SearchResult from '@/model/SearchResult'
import SearchType from '@/model/SearchType'
import SearchResultList from '@/model/SearchResultList'

import WordProvider from '@/model/WordProvider'
import KanjiProvider from '@/model/KanjiProvider'

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
        search: async function(event){
            const query = this.query;
            const type = this.type;

            let searchResultList = new SearchResultList();
            let wp = new WordProvider();
            let kp = new KanjiProvider();
            let searchType = +document.getElementsByName("search-type")[0].value;

            this.$parent.$emit('SearchStartedEvent');
            if (searchType === SearchType.ANY || searchType === SearchType.KANJI) {
                const results = await kp.searchKanji(query);

                results.forEach(r => {
                        searchResultList.addSearchResult(new SearchResult('kanji', r));
                });
            }

            if (searchType === SearchType.ANY || searchType === SearchType.WORD) {
                const results = await wp.searchWord(query);

                results.forEach(r => {
                        searchResultList.addSearchResult(new SearchResult('word', r));
                 });
            }
            this.$parent.$emit('SearchFinishedEvent', searchResultList);
        }
    }
}