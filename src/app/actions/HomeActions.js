import axios from 'axios';

let users = ['Abhijit', 'Sathwik', 'Andrew', 'Kaushik'];

export function GetDemoUsers() {
  return (dispatch, getState) => {
        dispatch(GetUsersPending());
        return new Promise((resolve, reject) => {
            setTimeout(function () {
              dispatch(GetUsersSuccess(users));
            }, 3000);
          });
      };
}

export function GetUsersSuccess() {
  return {
        type: 'USERS_SUCCESS',
        users,
        isUserspending: false,
      };
}

export function GetUsersPending() {
  return {
          type: 'USERS_PENDING',
          isUserspending: true,
        };
}
