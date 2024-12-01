import { Link } from "react-router"

const Header = () => {
  return (
    <header className="max-w-screen-xl w-full min-h-16 flex items-center justify-center shadow-lg shadow-black/60 mx-auto">
        <div className="max-w-screen-lg flex w-[80%] justify-between items-center">
            <Link to = {'/'} className="text-lg">Where in the world?</Link>
            <div id="mode" className="max-w-28 w-full flex h-full items-center justify-around cursor-pointer">
                <i className="far fas fa-moon text-xl text-white [text-shadow:0px_0px_3px_rgb(12,_20,_23)]" title="dark or white" aria-hidden="true"></i><span className="sr-only">dark or white</span>
                <h2 id="mode-title">
                <span id="light" hidden="">Dark Mode</span>
                {/* <span span="" id="dark">Light Mode</span> */}
                </h2>
            </div>
        </div>
    </header>
  )
}

export default Header