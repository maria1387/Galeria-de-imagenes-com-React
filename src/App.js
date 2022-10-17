
import './App.css';
import CardInfor from './components/CardInfor';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';


function App() {
  return (
    <Container>
    <div className="App">
      <Header/>

    <CardInfor/>
    <Footer/>
    </div>
    </Container>
  );
}

export default App;
