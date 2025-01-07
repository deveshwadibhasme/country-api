import { useState } from "react";

const useMode = () => {
    const [mode, setMode] = useState(false);
    const toggleMode = () => {
        setMode(!mode);
        localStorage.setItem("mode", mode);
    };
    return [mode, toggleMode];
}


export default useMode;
