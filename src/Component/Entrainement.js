import React from "react";

import Paper from "@mui/material/Paper";

class Entrainement extends React.Component {
  render() {

    const exercices = [
      {
        id: 0,
        name: "Redressement assis",
        equipement: "aucun",
        target: "abdos",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      },
      {
        id: 1,
        name: "Redressement assis",
        equipement: "aucun",
        target: "abdos",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      },
      {
        id: 2,
        name: "Redressement assis",
        equipement: "aucun",
        target: "abdos",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      },
      {
        id: 3,
        name: "Redressement assis",
        equipement: "aucun",
        target: "abdos",
        gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      },
    ];

    const listeExercices = exercices.map((exercice, index) => {
      return (
        <Paper key={index} elevation={1} sx={{ p: 2, m: 1 }}>
          <h4>{index + 1} : {exercice.name.charAt(0).toUpperCase() + exercice.name.substring(1)}</h4>
          {exercice.target}
        </Paper>
      );
    });

    return (
      <div>
        {listeExercices}
      </div>
    );
  }
}
export default Entrainement;
