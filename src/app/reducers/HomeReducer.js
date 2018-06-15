export default function HomeReducer(state = { users: [], isUserspending: false }, action) {
  switch (action.type) {
    case 'USERS_SUCCESS':
      state = {
            ...state,
            users: action.users,
            isUserspending: action.isUserspending,
          };
      return state;
    case 'USERS_PENDING':
      state = {
            ...state,
            isUserspending: action.isUserspending,
          };
      return state;
    default:
      return state;
  }
}
