//Jbuilder review
//json.extract! returns an object with all the keys and corresponding values

import { Route } from "react-router";

//Routing
//Single page applications
//often times only one html is served up from the server unlike multiple page applications
//Theres no page reload when content on the page changes
//Frontend Routes or not the same as backend routes
//The root route/ is the only backend route that serves up HTML
//backend routes are to modify data or get data from the database but not to get html
//
//Frontend routes simulate navigation
//React renders different components but the url will always be the root path
//React Router provides a way to create dynamic frontend routes


//React Router Basics
//Three primary components in React Router:

//-router <HashRouter>
//route matchers <Route> and <switch>
//-navigation <Link>,<NavLink>, <Redirect>

{/* <Route path="/" component={Home} />
<Route path="/" component={Home} />
<Route path="/" component={Home} /> */}

//Switch should have least specific route on bottom and most specific on the top

//<Link> Generates anchor tag in your html document to a specific route
//-to property takes in a string representing the path to link to 
//<Link to=:/todos
//<NavLink> link with additional props for styling