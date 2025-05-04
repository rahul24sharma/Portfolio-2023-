// import { BrowserRouter } from "react-router-dom";
// import { useState, useEffect } from "react";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Tech,
//   Navbar,
//   Works,
//   StarsCanvas,
// } from "./components";
// import Preloader from "./components/Preloader";

// const withLoader = (WrappedComponent) => {
//   return function WithLoader(props) {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//       setIsLoading(true);

//       const timeoutId = setTimeout(() => {
//         setIsLoading(false);
//       }, 2000);

//       return () => clearTimeout(timeoutId);
//     }, []);

//     return isLoading ? <Preloader /> : <WrappedComponent {...props} />;
//   };
// };

// const WrappedNavbar = withLoader(Navbar);
// const WrappedHero = withLoader(Hero);
// const WrappedAbout = withLoader(About);
// const WrappedExperience = withLoader(Experience);
// const WrappedTech = withLoader(Tech);
// const WrappedWorks = withLoader(Works);
// const WrappedFeedbacks = withLoader(Feedbacks);
// const WrappedContact = withLoader(Contact);
// const WrappedStarsCanvas = withLoader(StarsCanvas);

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <WrappedNavbar />
//           <WrappedHero />
//         </div>
//         <WrappedAbout />
//         <WrappedExperience />
//         <WrappedTech />
//         <WrappedWorks />
//         <WrappedFeedbacks />
//         <div className="relative z-0">
//           <WrappedContact />
//           <WrappedStarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


// import { BrowserRouter } from "react-router-dom";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Tech,
//   Navbar,
//   Works,
//   StarsCanvas,
// } from "./components";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <Tech />
//         <Works />
//         <Feedbacks />
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, StarsCanvas } from "./components";

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Experience = React.lazy(() => import("./components/Experience"));
const Feedbacks = React.lazy(() => import("./components/Feedbacks"));
const Tech = React.lazy(() => import("./components/Tech"));
const Works = React.lazy(() => import("./components/Works"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading Sections...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
