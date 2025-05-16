import './App.css';
import  { ThemeProvider } from 'styled-components';
import { darkTheme } from "./utils/Themes";
import Navbar  from './components/Navbar';
import styled from 'styled-components';
// import { BrowserRouter } from "react-router-dom";
import Hero from './components/sections/About'
import Skills from './components/sections/Skills';
import Education from './components/sections/Eduation';
import Project from './components/sections/Project';
// import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100vw; /* full viewport width */
  min-height: 100vh; /* at least full viewport height, if you need vertical fill */
  overflow-x: hidden; /* still hide horizontal overflow */

  /* reset any default body/html margins that could introduce gaps */
  margin: 0;
  padding: 0;
`;

function App() {
  return (
  <ThemeProvider theme={darkTheme}>
      {/* <BrowserRouter> */}
        <Navbar />
        <Body>
          <div>
            <Hero />
            <Wrapper>
              <Skills />
            </Wrapper>
            <Project />
            <Wrapper>
              <Education />
              {/* <Contact /> */}
            </Wrapper>
            <Footer />
          </div>
        </Body>
      {/* </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default App;
