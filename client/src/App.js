import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Articles from "./pages/Articles";
// import Saved from "./pages/Saved";
// import Comments from "./pages/Comments";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

import Main from "./components/Main";

const App = () => <Main />;


//   -----MOVED TO COMPONENTS/MAIN!!!!???? (
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Articles} />
//         <Route exact path="/articles" component={Articles} />
//         <Route exact path="/articles/:id" component={Saved} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>
// );

export default App;
