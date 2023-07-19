import { atom } from "recoil";

const sidebaseState = atom({
    key: "sidebaseState",
    default: false
});

const projectState = atom({
    key: "projectState",
    default: "motion"
});

export { sidebaseState, projectState };