{/* <div id="parent">
    <div id="child">
        <h1>This is a h1 tag</h1>
    </div>
</div> */}

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement(
                "h1",
                {},
                "This is an h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "This is an h2 tag"
            )
        ]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

// const heading   = React.createElement(
//     "h1",
//      {
//         id: "heading",
//      }, 
//      "Hello World! from React"
//      );
// const root      = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);