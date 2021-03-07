import Navbar from './pages/navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import routes from './routes';
import About from './pages/about/about';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About}></Route>
          {routes.map((ele, index) => (
            <Route key={index} exact path={`/${ele.route}`} component={ele.component}></Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
