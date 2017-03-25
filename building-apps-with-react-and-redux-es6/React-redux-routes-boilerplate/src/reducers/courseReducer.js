export const courseReducer = (state = [], action) => {

  switch(action.type){
    case 'CREATE_COURSE':
      return [
        ...state,
        action.course
        // Object.assign({}, action.course)
      ];

    default:
      return state;
  }

};