import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  GsapHome,
  Iphone
} from "./pages";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router basename={import.meta.env.PROD ? "/gsap-cc" : ""}>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/gsap" element={<GsapHome />} />
          <Route path="/" element={<Iphone />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
