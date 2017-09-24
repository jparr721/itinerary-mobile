export const initialState = {
  searchResultsPageModalVisible: false,
  shareTripPageVisible: false,
  searchLocation: '',
  searchDate: '',
  searchBudget: '',
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
    case 'SET_SHARE_TRIP_PAGE_VISIBLE':
      return {
        ...state,
        shareTripPageVisible: !state.shareTripPageVisible
      };
    case 'SET_UPDATED_LOCATION':
      return {
        ...state,
        searchLocation: action.location
      };
    case 'SET_UPDATED_DATE':
      return {
        ...state,
        searchDate: action.date
      };
    case 'SET_UPDATED_BUDGET':
      return {
        ...state,
        searchBudget: action.budget
      };
    default:
      return state;
  }
}

export default appReducer;
