import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useInputChange } from "../hooks/useInputChange";
import { USER_NAME, USER_AGE, FEMALE, MALE } from "../utils/constant";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate, useMatch } from "react-router-dom";
import { createUser, updateUser } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";

export default function UserForm() {
  const [input, handleInputChange, resetInputChange, replaceInput] =
    useInputChange();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editingUser = useMatch("/edit/:userId");
  const currentUser = useSelector((state) => state.user).users.find(
    (user) => user.id === editingUser?.params?.userId
  );

  const handleFormSubmit = () => {
    editingUser
      ? dispatch(updateUser(input, navigate, currentUser.id))
      : dispatch(createUser(input, navigate));
    resetInputChange();
  };

  useEffect(() => {
    if (!editingUser) return;
    replaceInput(currentUser);
  }, []);

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
        }}
      >
        <TextField
          name={USER_NAME}
          onChange={handleInputChange}
          value={input[USER_NAME]}
          margin="normal"
          label={
            editingUser ? "Editing This User's Name" : "Add New User's Name"
          }
          fullWidth
        />
        <FormControl>
          <FormLabel id="gender-radio-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="gender-radio-group"
            name="gender"
            value={input["gender"]}
            onChange={handleInputChange}
            row
          >
            <FormControlLabel
              value={FEMALE}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value={MALE} control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <TextField
          name={USER_AGE}
          onChange={handleInputChange}
          value={input[USER_AGE]}
          margin="normal"
          label={
            editingUser ? "Editing This User's Age" : "Editing New User's Age"
          }
          fullWidth
        />
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "0.5rem",
          }}
        >
          <Button variant="contained" onClick={() => handleFormSubmit()}>
            Submit
          </Button>
        </Container>
      </form>
    </Paper>
  );
}
