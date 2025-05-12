import './App.css';
import  { ThemeProvider } from 'styled-components';
import { darkTheme } from "./utils/Themes";
import Navbar  from './components/Navbar';
import styled from 'styled-components';
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills';
import Education from './components/sections/Eduation';
// import EducationCard from './components/cards/EducationCard';

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
  return (<ThemeProvider theme={darkTheme}>
    <Navbar />
    <Body>
      <Hero />
      <Skills />
      {/* <EducationCard/> */}
      <Education/>
    </Body>
  </ThemeProvider>
  );
}

export default App;
