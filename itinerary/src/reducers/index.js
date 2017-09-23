export const initialState = {
  searchResultsPageModalVisible: false,
  locations: [
    {Id: 'Generate', 'Info': {'locationName':'New York, New York', 'departureDate': 'June, 19, 2018', 'transportationMode': 'Plane'}},
    {Id: 'Generate1', 'Info': {'locationName':'Michigan, Allendale', 'departureDate': 'September, 23, 2056', 'transportationMode': 'Car'}},
  ]
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
