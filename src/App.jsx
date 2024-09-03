import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import img1 from "./assets/projects/bg1.jpg";

const App = () => {
    return (
        <Router>
            <div
                className="overflow-x-hidden text-neutral-300 antialiased 
            selection:bg-cyan-300 selection:text-cyan-900"
            >
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div
                                className=" w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed  "
                                style={{ backgroundImage: `url(${img1})` }}
                            >
                                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                                    <Hero />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                                <About />
                            </div>
                        }
                    />

                    <Route
                        path="/technologies"
                        element={
                            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                                <Technologies />
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
