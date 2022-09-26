import './App.css'
import Home from "./pages/Home";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Header from "./components/Header/Header";
import Docs from "./pages/Docs";
import Examples from "./pages/Examples";
import About from "./pages/About";
import News from "./pages/News";

// const router = createBrowserRouter([
//     {path: "/", element: <Home/>},
//     {path: "/docs", element: <Docs/>},
// ], {basename: "/tailwindcss-study/"})

function App() {
    return (
        <BrowserRouter basename={"/tailwindcss-study/"}>
            <div className="App">
                <Header/>
                <Routes >
                    <Route path="/" element={<Home/>}/>
                    <Route path="/docs" element={<Docs/>}/>
                    <Route path="/examples" element={<Examples/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>

            </div>
        </BrowserRouter>

    )
}

export default App
