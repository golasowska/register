export const REGISTER = "register";
export const LOGIN = "login";

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
