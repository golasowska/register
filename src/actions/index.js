export const REGISTER = "register";
export const LOGIN = "login";
export const RESET = "reset";

export function register(values) {
  console.log("values", values);
  return {
    type: REGISTER,
    payload: values
  };
}

export function login(values) {
  console.log("values", values);
  return {
    type: LOGIN,
    payload: values
  };
}

export function reset(values) {
  console.log("values", values);
  return {
    type: RESET,
    payload: values
  };
}
