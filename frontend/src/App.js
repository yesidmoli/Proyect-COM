import DiagnosticForm from "./componentes/diagnosticForm/DiagnosticForm";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route 
        path="/diagnostic-form"
        element={<DiagnosticForm />}
        />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
