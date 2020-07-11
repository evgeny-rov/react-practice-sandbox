export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_SOMETHING':
      return state.concat([action.text])
    default:
      return state
  }
}