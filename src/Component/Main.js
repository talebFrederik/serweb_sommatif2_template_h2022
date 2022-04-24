import React from "react";

// import Axios from "axios";

import Header from "./Header";
import Muscle from "./Muscle";
import ListeExercice from "./ListeExercice";
import Entrainement from "./Entrainement";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Muscle />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "lightslategray",
          }}
        >
          <div style={{ overflowY: "scroll", width: "30vh", height: "80vh" }}>
            <ListeExercice />
          </div>
          <div style={{ overflowY: "auto", height: "80vh", flexGrow: 1 }}>
            <Entrainement />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
