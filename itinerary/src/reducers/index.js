export const initialState = {
  searchResultsPageModalVisible: false
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_SEARCH_RESULTS_MODAL_VISIBLE':
      return {
        ...state,
        searchResultsPageModalVisible: !state.searchResultsPageModalVisible
      };
    case 'PLACE_HOLDER_ACTION':
      return {
        ...state
      };
    default:
      return state;
  }
}

export default appReducer;
