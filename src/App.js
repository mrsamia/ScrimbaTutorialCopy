import './App.css';
import MainBody from './SoloProject/MainBody';
import Nav from './SoloProject/Nav';
import Card from './Card/Card';
import Hook_One from './Hook/Hook_One';
import HookTwo from './Hook/HookTwo';
import HookThree from './Hook/HookThree';
import HookFour from './Hook/HookFour';
import Accordion from './Accordion/Accordion';
import AccordionTwo from './Accordion/AccordionTwo';

function App() {
  return (
    <div className="App pt-5">
      <div className='main'>
        <Nav />
        <MainBody />
      </div>
      <div className='pt-5 pb-5'>
        <Card />
      </div>
      <div className='pt-5'>
        <h3>Hook Practice</h3>
        <Hook_One />
        <HookTwo/>
        <HookThree/>
        <HookFour/>
        <Accordion/>
        <AccordionTwo/>
      </div>
    </div>
  );
}

export default App;
