import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import About from "./componentes/About";
import Contact from "./componentes/Contact";
import MyWork from "./componentes/MyWork";
import Navbar from "./componentes/Navbar";
import Skills from "./componentes/Skills";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#F1DCC9"},
    secondary: { main: "#9F4636" }

  }
})

function App() {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <About title='About Me' id='about' dark={true} />
        <Skills title='My Coding Journey' id='skills' dark={false} />
        <MyWork title='My Work' id='work' dark={true} />
        <Contact title='Get in touch' id='contact' dark={false} />
      </div>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    

  }
}))

export default App;
