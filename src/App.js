import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './pages/home/Header';
import Chat from './pages/general/Chat';
import SocialBar from './pages/general/SocialBar';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import './sass/main.css';
import About from './pages/about/About';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SocialBar />
        <Chat />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
