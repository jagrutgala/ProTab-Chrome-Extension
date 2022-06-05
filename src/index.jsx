import React from "react"
import {createRoot} from "react-dom/client"

const App = (props) => {
    return (
        <React.Fragment>
            <div>Hi This is ProTab</div>
        </React.Fragment>
    )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)