
import Navbar from  "./Navbar";
import Home from "./Home";
import {BrowserRouter  as Router,Route,Switch} from "react-router-dom";
import Create from "./Create";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";

function App() {
  return (
<Router>
        <div className="App">
                 <Navbar />
                 <div className="content">
                     <Switch>
                         <Route exact path='/'>
                             <Home/>
                         </Route>
                         <Route exact path='/Create'>
                             <Create/>
                         </Route>
                         <Route exact path='/blogs/:id'>
                             <BlogDetail/>
                         </Route>
                         <Route exact path='*'>
                             <NotFound/>
                         </Route>

                     </Switch>

        </div>
      </div>
</Router>
  );
}

export default App;
