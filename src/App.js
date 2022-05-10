import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroLanding from './Components/HeroLanding/HeroLanding';
import Cards from './Components/Cards/Cards';
import dataBase from "./data";


function App() {
    const cardsData = dataBase.map(element => {
      return <Cards {...element} key={element.id} />
    })

  return (
    <div>
      <Navbar />
      <HeroLanding />
      <div className='cards-list'>
        {cardsData}
      </div>


    </div>
  );
}

export default App;



// key={element.id}
// coverImg={element.coverImg} 
// availableStatus={element.availableStatus} 
// stats={element.stats} 
// title={element.title} 
// price={element.price}