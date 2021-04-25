import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/main.css';
import styles from './app.module.css';
import Header from './pages/general/Header';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import LeftBar from './pages/general/LeftBar';
import ThemeButton from './pages/general/ThemeButton';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
function App() {
  const { darkTheme, colors } = useContext(ThemeContext);
  return (
    <div className={`${styles.app}`} style={{ backgroundColor: colors.bg }}>
      <Router>
        <Header />
        <Home />
        <Projects />
        <About />
        <LeftBar />
        <ThemeButton />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
