export default function LoginReducer(state = {
  show: true,
  isValiduser: false,
  email: { value: '', isValid: true, message: '' },
  password: { value: '', isValid: true, message: '' },
}, action) {
  switch (action.type) {
  case 'LOGIN_UPDATE_INPUT':
    state = {
      ...state,
      [action.payload.name]: action.payload.value,
    };
    return state;
  case 'LOGIN_RESET_INPUT':
    state = {
      ...state,
      email: { value: '', isValid: true, message: '' },
      password: { value: '', isValid: true, message: '' },
    };
    return state;
  case 'LOGIN_CLOSE_MODAL':
    state = {
      ...state,
      show: action.modalStatus,
    };
    return state;
  case 'OPEN_MODAL':
    state = {
      ...state,
      show: action.modalStatus,
    };
    return state;
  case 'VALID_USER':
    state = {
      ...state,
      isValiduser: action.isValiduser,
    };
    return state;
  case 'LOGIN_UPDATE_OBJECT':
    state = {
      ...state,
      [action.key]: {
        ...state[action.key],
        isValid: action.object.isValid,
        message: action.object.message,
        value: action.object.value,
      },
    };
    return state;
  default:
    return state;
}
}
