import { useState } from "react";
import { FEMALE } from "../utils/constant";

export const useInputChange = () => {
  //state = {input.name : input.value, input.name : input.value}
  const [input, setInput] = useState({
    username: "",
    gender: FEMALE,
    userage: "",
  });

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const resetInputChange = () =>
    setInput({ username: "", gender: FEMALE, userage: "" });

  const replaceInput = (currentUser) =>
    setInput({
      username: currentUser?.name,
      gender: currentUser?.gender,
      userage: currentUser?.age,
    });

  return [input, handleInputChange, resetInputChange, replaceInput];
};
