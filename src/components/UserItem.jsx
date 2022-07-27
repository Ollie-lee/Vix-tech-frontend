import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function UserItem({
  user = {},
  setSelectedUserId,
  handleClickOpen,
}) {
  const navigate = useNavigate();
  const { name = "ollie", gender = "male", age = 18, id } = user;

  const handleDeleteClick = () => {
    setSelectedUserId(id);
    handleClickOpen();
  };

  return (
    <ListItem>
      {
        <>
          <ListItemText>{name}</ListItemText>
          <ListItemText>{gender}</ListItemText>
          <ListItemText>{age}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton area-label="Delete" onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              area-label="Edit"
              onClick={() => navigate(`/edit/${id}`)}
            >
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  );
}
