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
import CardTwo from './Card/CardTwo';
import CardTest from './Test/CardTest';
import HeroPart from './Test/HeroPart';
import CardThree from './Card/CardThree';
import CountCard from './DashBoard/CountSection/CountCard';
import MainDashboard from './DashBoard/Main/MainDashboard';
import DashNav from './DashBoard/Nav/DashNav';
import Practice from "./Practice/Practice";
// import MultistepForm from "./Practice/MultistepForm";
import MultistepFromTwo from "./Practice/MultistepFromTwo";
import Increment from "./Practice/Increment";
import Multiplication from "./Practice/Multiplication";
import MultiplicationBtn from "./Practice/MultiplicationBtn";
import InputForm from "./Practice/InputForm";
import MultiplicationTwo from "./Practice/MultiplicationTwo";

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
        <HookTwo />
        <HookThree />
        <HookFour />
        <Accordion />
        <AccordionTwo />
        <CardTwo />
        <CardThree />
        <HeroPart />
        <CardTest />
      </div>
      <div className='pt-5 pb-5'>
         <Practice/>
        {/* <MultistepForm/> */}
        <MultistepFromTwo/>
        <Increment/>
        <Multiplication/>
        <InputForm/>
        <MultiplicationBtn/>
        <MultiplicationTwo/>
      </div>
      <div className='pt-5'>
        <DashNav />
        <MainDashboard />
      </div>
    </div>
  );
}

export default App;
