import { Component } from "react";

import Exercice from "./Exercice";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

class ListeExercice extends Component {
  render() {
    const exercices = [
      {
        id: 0,
        name: "Redressement assis",
        equipement: "aucun",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      },
      {
        id: 1,
        name: "Redressement assis",
        equipement: "aucun",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      },
      {
        id: 2,
        name: "Redressement assis",
        equipement: "aucun",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      },
      {
        id: 3,
        name: "Redressement assis",
        equipement: "aucun",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      },
    ];

    const listeExercies = exercices.map((exercice, index) => {
      return (
        <Box key={exercice.id} item>
          <Exercice />
          <Button
            variant="contained"
            name="ajouter"
            value={index}
            sx={{ width: 1 }}
          >
            Ajouter
          </Button>
        </Box>
      );
    });

    return <Box>{listeExercies}</Box>;
  }
}
export default ListeExercice;
