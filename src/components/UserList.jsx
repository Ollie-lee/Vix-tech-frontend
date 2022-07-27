import React, { useEffect } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import UserItem from "../components/UserItem";
import { connect, useDispatch } from "react-redux";
import { getUsers } from "../actions/user";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const UserList = ({ user: { users, loading } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return loading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : (
    <List>
      <Button variant="contained" onClick={() => navigate("/add")}>
        Create A New User!
      </Button>

      {users.map((user, i) => (
        <div key={i}>
          <UserItem user={user} />
          {i !== users.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
