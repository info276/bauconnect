import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./components/Home";
import CompanyContact from "./components/CompanyContact";
import WorkerContact from "./components/WorkerContact";
import JobsPage from "./components/JobsPage";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company-contact" element={<CompanyContact />} />
            <Route path="/worker-contact" element={<WorkerContact />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
