import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import UserItem from "../components/UserItem";
import { connect, useDispatch } from "react-redux";
import { getUsers } from "../actions/user";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";
import { useDeleteDialog } from "../hooks/useDeleteDialog";

export const UserList = ({ user: { users, loading } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedUserId, setSelectedUserId] = useState();
  const [open, handleClickOpen, handleDelete, handleCancel] =
    useDeleteDialog(selectedUserId);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return loading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <DeleteDialog
        userId={selectedUserId}
        open={open}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />

      <List>
        <Button variant="contained" onClick={() => navigate("/add")}>
          Create A New User!
        </Button>

        {users.map((user, i) => (
          <div key={i}>
            <UserItem
              user={user}
              setSelectedUserId={setSelectedUserId}
              handleClickOpen={handleClickOpen}
            />
            {i !== users.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
