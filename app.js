const heading = React.createElement("h1", {id:"heading", xyz:"xyz"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading); // return object

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'am h1 tag</h1>
 *      </div> 
 * </div> 
 */

const parent = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement(
        "div", {id: "child"},
        [
            React.createElement("h1", {}, "I'am h1 tag"), 
            React.createElement("h2", {}, "I'am h2 tag")
        ]       
    ) 
 )

root.render(parent);