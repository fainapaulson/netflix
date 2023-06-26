import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Row from './Row';
import { requests } from './requests';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
   <Row  isposter={true} title={"Treanding Movies"} fetchUrl={requests.fetchTrending}></Row>
   <Row title={"NetflixOriginals"} fetchUrl={requests.fetchNetflixOriginals}></Row>
   <Row title={"TopRated"} fetchUrl={requests.fetchTopRated}></Row>
   <Row title={" Action Movies"} fetchUrl={requests. fetchActionMovies}></Row>
   <Row title={" Comedy Movies"} fetchUrl={requests. fetchComedyMovies}></Row>
   <Row title={" Horror Movies"} fetchUrl={requests. fetchHorrorMovies}></Row>
   <Row title={" Romance Movies"} fetchUrl={requests. fetchRomanceMovies}></Row>
   <Row title={"  Documentaries"} fetchUrl={requests. fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
