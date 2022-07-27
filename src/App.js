import AppBar from "@mui/material/AppBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Paper
          sx={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa",
          }}
          elevation={0}
        >
          <AppBar color="primary" position="static" style={{ height: "64px" }}>
            <Toolbar>
              <Typography color="inherit">
                <Link to="/">Vix Technology Code Test</Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid
            container
            justify={"center"}
            style={{ marginTop: "1rem", justifyContent: "center" }}
          >
            <Grid item xs={11} md={8} lg={4}>
              <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/add" element={<UserForm />} />
                <Route path="/edit/:userId" element={<UserForm />} />
              </Routes>
            </Grid>
          </Grid>
        </Paper>
      </Router>
    </Provider>
  );
}

export default App;
