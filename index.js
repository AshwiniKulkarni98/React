import React from "react"
import ReactDOM from "react-dom/client"

//JSX reactElement must be in camelCase
const jsxListing = <h1 id="heading">Hello Javascript</h1>

//React Component(function) must be in caps
const HeadingComp =()=>{
  return  <h1>This is headingComp</h1>
}
const a ="aba" // this s a JS and u can put the JS inside the react by giving the {flower braces}

//And is called as component composition - means binding multiple components together

const HeadingComponent =()=>(
    <div id ="container">
       {jsxListing}
    <h1 className="heading">
        <HeadingComp/> //this is how we can callone component into another
        this is headddddinnnggg
    </h1>
     </div>
)

const xyz =<h1>ABC</h1>
// const heading = React.createElement("h1",{id :"root"},"Hello ,this is react Teaching")
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<HeadingComponent />)
root.render(xyz)
