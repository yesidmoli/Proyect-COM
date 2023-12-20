import React from "react";

// Importamos el router
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Para permitir usar varios componentes
import { Fragment } from "react";

// Importar el componente para agregar nuevo empresario.
import NuevoEmpresario from "./componentes/empresarios/NuevoEmpresarios";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={NuevoEmpresario} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
