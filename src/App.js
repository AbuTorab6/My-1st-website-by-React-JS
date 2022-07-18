import React from "react";


import HomePage from "./pages/HomePage";

import TopNavigation from "./components/TopNavigation/TopNavigation";
import EveryPageTop from "./components/EveryPageTop/EveryPageTop";
import AboutDescription from "./components/AboutDescription/AboutDescription";
import Footer from "./components/Footer/Footer";
import AllCourses from "./components/AllCourses/AllCourses";
import AllProject from "./components/AllProject/AllProject";
import ContactForm from "./components/ContactForm/ContactForm";
import Services from "./components/Services/Services";
import RefundPolicyDescription from "./components/RefundPolicyDescription/RefundPolicyDescription";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import CourseDetails from "./components/CourseDetails/CourseDetails";



import AboutPage from "./pages/AboutPage";
import CoursePage from "./pages/CoursePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";



import {BrowserRouter} from '../node_modules/react-router-dom'
import MyRouter from "./router/MyRouter";



function App() {
  return (
    <div>
     
      <BrowserRouter>
        <MyRouter/>
      </BrowserRouter>



    </div> 
  );
}

export default App;
