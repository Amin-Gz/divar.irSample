import { atom } from "recoil";
export const loading = atom({
  key: "loading",
  default: false,
});
export const rPhone = atom({
  key: "phone",
  default: "",
});
export const rPassword = atom({
  key: "password",
  default: "",
});
export const rShow = atom({
  key: "show",
  default: false,
});
export const rHidden = atom({
  key: "hidden",
  default: true,
});
export const rSignup = atom({
  key: "signup",
  default: true,
});
export const rWrongPass = atom({
  key: "wrongPass",
  default: false,
});
export const rShowPassword = atom({
  key: "showPassword",
  default: "",
});
export const rChangeBorder = atom({
  key: "changeBorder",
  default: "border-borderColor border",
});
export const rAuth = atom({
  key: "Authorize",
  default: false,
});
export const rLoading = atom({
  key: "Loading",
  default: true,
});
export const rText = atom({
  key: "text",
  default: "",
});
export const rText2 = atom({
  key: "text2",
  default: "",
});
