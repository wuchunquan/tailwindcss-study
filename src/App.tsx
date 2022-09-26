import './App.css'
import Home from "./pages/Home";
import {Router, createBrowserRouter, RouterProvider} from "react-router-dom"
import Header from "./components/Header/Header";

const router = createBrowserRouter([{
    path: "/", element: <Home/>
}],{basename:"/tailwindcss-study/"})

function App() {
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default App
