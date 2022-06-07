import React from "react"
import {createRoot} from "react-dom/client"
import "./css/reset.module.css"


const App = (props) => {
    return (
        <React.Fragment>
            <div className="teal">Hi This is ProTab</div>
            <div className="purple">Made using React + Webpack</div>
        </React.Fragment>
    )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)