import "./Header.css"
export default function Header() {
    return (<header className="text-3xl font-bold m-0 flex bg-gray-600 border-b-4 border-b-gray-500">
        <h1 className="mx-4 flex justify-center items-center">
            <span className="text-blue-200 hover:text-blue-300">新</span>
            <span className="ml-1 text-red-400 hover:text-red-200">视感</span>
        </h1>
        <nav className="header-nav">
            <ul>
                <li><a>文档</a></li>
                <li><a>案例</a></li>
                <li><a>关于</a></li>
                <li><a>新闻</a></li>
            </ul>
        </nav>
    </header>)
}