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


import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
