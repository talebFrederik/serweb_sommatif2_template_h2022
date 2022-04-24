import { Component } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

class Exercice extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Redressement assis
          </Typography>
          <Typography>
            Équipement : Aucun
          </Typography>
        </CardContent>
        <CardMedia component="img" image="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" alt="Exercice" />
      </Card>
    );
  }
}

export default Exercice;
