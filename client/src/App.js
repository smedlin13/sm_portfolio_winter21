import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Skills from './components/shared/Skills';
import Portfolio from './components/shared/Portfolio';
import NoMatch from './components/shared/NoMatch';
import Contacts from './components/contacts/Contacts';
import MainNav from './components/shared/MainNav';

const App = () => (
  <>
  <MainNav />
  <Routes>
    <Route exact path='/' element={<Home /> } />
    <Route exact path='/home' element={<Home /> } />
    <Route exact path='/about' element={<About /> } />
    <Route exact path='/skills' element={<Skills /> } />
    <Route exact path='/portfolio' element={<Portfolio /> } />
    <Route exact path='/contacts' element={<Contacts /> } />

    <Route path='/*' element={<NoMatch />} />
    </Routes>
  </>
)

export default App;