export function UpdateInput(event) {
  return {
      type: 'LOGIN_UPDATE_INPUT',
      payload: event.target,
    };
}

export function ResetInput() {
  return {
    type: 'LOGIN_RESET_INPUT',
  };
}

export function CloseModal() {
  return {
    type: 'LOGIN_CLOSE_MODAL',
    modalStatus: false,
  };
}

export function OpenModal() {
  return {
    type: 'OPEN_MODAL',
    modalStatus: true,
  };
}

export function UpdateObject(key, object) {
  return {
    type: 'LOGIN_UPDATE_OBJECT',
    object: object,
    key: key,
  };
}

export function CheckUser(user) {
  return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        debugger;
          if (user.email === 'abhi@gmail.com' && user.password === '123') {
            dispatch(ValidUser());
            resolve();
          }
        });
    };
}

export function ValidUser() {
  return {
    type: 'VALID_USER',
    isValiduser: true,
  };
}
