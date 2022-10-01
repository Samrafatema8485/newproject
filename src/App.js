import logo from './logo.svg';
import './App.css';
import {FullName} from "./components/FullName"
import{FullAddress} from "./components/FullAddress";
import { OfficeAddress } from "./components/OfficeAddress";
import "./components/common.css"
import { FavouriteDish } from './components/FavouriteDish';
import { FavouriteAnimal } from './components/FavouriteAnimal';
import { FavouriteBooks } from "./components/FavouriteBook";
import { FavouriteCities } from "./components/FavouriteCities";
import { Entry } from "./components/Entry";
import { DataEntry } from "./components/DataEntry";
import "./components/common.css"
import Bulb from './components/Bulb';
import  CoEditor  from './components/CoEditor';



function App() {
  return (
   <div className='main'>
   <Bulb/>
   <CoEditor/>
      <DataEntry/>     
      <Entry />
      <FullName />
     <FullAddress/>
     <OfficeAddress />
     <FullName />
     <FavouriteDish />
     <FavouriteAnimal />
     <FavouriteBooks />
     <FavouriteCities />
   
   </div>
  );
}

export default App;
