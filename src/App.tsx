import './App.css'
import Home from "./pages/Home";
import {createBrowserRouter, Routes, RouterProvider,Route, BrowserRouter} from "react-router-dom"
import Header from "./components/Header/Header";
import Docs from "./pages/Docs";

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
                </Routes>

            </div>
        </BrowserRouter>

    )
}

export default App
