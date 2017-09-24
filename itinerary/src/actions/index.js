export const setSearchResultsPageModalVisible = () => {
  return {
    type: 'SET_SEARCH_RESULTS_MODAL_VISIBLE',
  }
};

export const setShareTripPageVisible = () => {
  return {
    type: 'SET_SHARE_TRIP_PAGE_VISIBLE',
  }
};

export const setUpdatedLocation = (text) => {
  return {
    type: 'SET_UPDATED_LOCATION',
    location: text
  }
};

export const setUpdatedDate = (text) => {
  return {
    type: 'SET_UPDATED_DATE',
    date: text
  }
};

export const setUpdatedBudget = (text) => {
  return {
    type: 'SET_UPDATED_BUDGET',
    budget: text
  }
};
