import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Skills from './components/shared/Skills';
import Portfolio from './components/shared/Portfolio';
import NoMatch from './components/shared/NoMatch';
import ContactForm from './components/contacts/ContactForm';
import MainNav from './components/shared/MainNav';
import { Container } from 'react-bootstrap';
import Blogs from './components/shared/Blogs';
import { HeaderTop } from './styles/sharedStyles';

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
    <Route exact path='/blogs' element={<Blogs />} />
    <Route exact path='/contacts' element={<ContactForm /> } />

    <Route path='/*' element={<NoMatch />} />
    </Routes>
    </Container>
  </>
)

export default App;