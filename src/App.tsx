//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//  ==> Componenetes 1x1
import { Discord}   from './components/1x1/discord.tsx'
import { Github }   from './components/1x1/github.tsx';
import { Language } from './components/1x1/language.tsx';
import { Linkedin } from './components/1x1/linkedin.tsx';
import { Mailto }   from './components/1x1/mailto.tsx';
import { Projects } from './components/1x1/projects.tsx';
import { YearsExp } from './components/1x1/yearsExp.tsx';
//  ==> Componentes 1x2
import { Name }     from './components/1x2/name.tsx';
import { PersonalRoll } from './components/1x2/personalRoll.tsx';
import { Skills }   from './components/1x2/skills.tsx';
// ==> Componentes 2x1
import { Spotify }  from './components/2x1/spotify.tsx';
// ==> Componentes 2x2
import { PersonalImg } from './components/2x2/personalImg.tsx';



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='home bento'>
        <PersonalImg />
        <Name />
        <PersonalRoll />
        <Spotify />
        <Discord />
        <Github />
        <Language />
        <Linkedin />
        <Mailto />
        <Projects />
        <YearsExp />
        <Skills />

      </div>
    </>
  )
}

export default App
