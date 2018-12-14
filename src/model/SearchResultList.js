export default class SearchResultList {
    constructor() {
        this.resultList = [];
    }

    addSearchResult(searchResult) {
        this.resultList.push(searchResult);
    }

    clearSearchResult() {
        this.resultList = [];
    }

    getSearchResults() {
        return this.resultList;
    }
}