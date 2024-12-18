/* eslint-disable react/prop-types */
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
  import App from "./App";
import Projects from "./Projects/Projects";
import Layout from "./layout";

  
  const AppRoutes = () => {
  
  
    
  
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            {/* <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Layout>
                </Router>
    );
  };
  
  export default AppRoutes;