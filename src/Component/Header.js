import { Component } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

class Header extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          p: 1,
          height: "6vh",
        }}
      >
        <Paper
          sx={{
            textAlign: "center",
            flexGrow: 1,
            backgroundColor: "lightgrey",
          }}
        >
          <h3>Bienvenue à Giga Chad l'application d'entraînement moderne</h3>
        </Paper>
      </Box>
    );
  }
}

export default Header;
