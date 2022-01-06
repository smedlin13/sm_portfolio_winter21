import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Skills from './components/shared/Skills';
import Portfolio from './components/shared/Portfolio';
import NoMatch from './components/shared/NoMatch';
import Contacts from './components/contacts/Contacts';
import MainNav from './components/shared/MainNav';
import ContactShow from './components/contacts/ContactShow'
import { Container } from 'react-bootstrap';


const App = () => (
  <>

  <MainNav />
  <Container >
  <Routes>
    <Route exact path='/' element={<Home /> } />
    <Route exact path='/home' element={<Home /> } />
    <Route exact path='/about' element={<About /> } />
    <Route exact path='/skills' element={<Skills /> } />
    <Route exact path='/portfolio' element={<Portfolio /> } />
    <Route exact path='/contacts' element={<Contacts /> } />
    <Route exact path='/:contactId' element={<ContactShow /> }>
      </Route>

    <Route path='/*' element={<NoMatch />} />
    </Routes>
    </Container>
  </>
)

export default App;