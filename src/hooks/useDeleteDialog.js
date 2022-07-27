import * as React from "react";

import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/user";

export const useDeleteDialog = (userId) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = () => {
    dispatch(deleteUser(userId));
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return [open, handleClickOpen, handleDelete, handleCancel];
};
