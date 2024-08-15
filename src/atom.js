import { atom } from "recoil";

export const AddBookMarkItemState = atom({
  key: "addBookMarkItem",
  default: [],
});

export const AddCompanyItemState = atom({
  key: "addCompanyItem",
  default: [],
});

export const BookMarkCountState = atom({
  key: "bookMarkCount",
  default: 0,
});

export const CompanyCountState = atom({
  key: "CompanyCount",
  default: 0,
});

export const SearchModalState = atom({
  key: "isSearchModal",
  default: false,
});
