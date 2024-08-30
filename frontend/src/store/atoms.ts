import { atom } from "recoil";

const pageNumberState = atom({
  key: "pageNumber",
  default: 1,
});

const userState = atom({
  key: "user",
  default: { user: "", isLoading: false },
});

export { pageNumberState, userState };
