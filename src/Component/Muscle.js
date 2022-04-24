import { Component } from "react";

// import axios from "axios";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

class Muscle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muscles: ["biceps", "quadriceps", "grand dorsal", "pectoral"],
      selectedMuscle: "biceps",
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Stack
        direction="row"
        alignContent="center"
        justifyContent="flex-start"
        spacing={1}
        sx={{ p: 1, height: "10vh" }}
      >
        <Paper elevation={0} sx={{ alignContent: "center", p: 2 }}>
          <p>Choisir un muscle ciblé</p>
        </Paper>
        <Select
          name="selectedMuscle"
          value={this.state.selectedMuscle}
          onChange={this.handleChange}
          sx={{ flexGrow: 1 }}
        >
          {this.state.muscles.map((muscle) => {
            return (
              <MenuItem key={muscle} value={muscle}>
                {muscle.charAt(0).toUpperCase() + muscle.substring(1)}
              </MenuItem>
            );
          })}
        </Select>
        <Button
          variant="contained"
        >
          Rechercher les exercices
        </Button>
      </Stack>
    );
  }
}
export default Muscle;
