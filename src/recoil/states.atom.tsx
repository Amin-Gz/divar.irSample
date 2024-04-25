import { atom } from "recoil";
export const loading = atom({
  key: "loading",
  default: false as boolean,
});
export const rPhone = atom({
  key: "phone",
  default: "" as string,
});
export const rPassword = atom({
  key: "password",
  default: "" as string,
});
export const rShow = atom({
  key: "show",
  default: false as boolean,
});
export const rHidden = atom({
  key: "hidden",
  default: true as boolean,
});
export const rSignup = atom({
  key: "signup",
  default: true as boolean,
});
export const rWrongPass = atom({
  key: "wrongPass",
  default: false as boolean,
});
export const rShowPassword = atom({
  key: "showPassword",
  default: "" as string,
});
export const rChangeBorder = atom({
  key: "changeBorder",
  default: "border-borderColor border" as string,
});
export const rAuth = atom({
  key: "Authorize",
  default: false as boolean,
});
export const rLoading = atom({
  key: "Loading",
  default: true as boolean,
});
export const rText = atom({
  key: "text",
  default: "" as string,
});
export const rText2 = atom({
  key: "text2",
  default: "" as string,
});
export const rCategoriNames = atom({
  key: "Category names",
  default: "" as string,
});
export const rBool = atom({
  key: " div changer",
  default: false as boolean,
});
