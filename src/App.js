import { useEffect,  useState } from "react";
import Spinner from "./components/Spinner";
import WeatherContainer from "./components/WeatherContainer";
import {AiOutlineSearch} from 'react-icons/ai';

function App() {

  const [loading, setLoading] = useState(true);

  const [city, setCity] = useState('Jaipur');
  const [data, setData] = useState(null);

  const url = `http://api.weatherstack.com/current?access_key=f03084c21f5f86d03b4461f938aafe9d&query=${city}`

  function submitHandler(event) {
    event.preventDefault();
    getData();
  }

  function changeHandler(event) {
    const { value } = event.target
    setCity(value);
    console.log(value);
  }

  async function getData() {
    setLoading(true);
    try{
      const response = await fetch(url);
      const output = await response.json();
      console.log(response);
      console.log(output);
      setData(output);
    }

    catch(error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {getData()}, [])


  return (
   <div className="relative background2 h-[1200px] overflow-y-hidden">
      <form onSubmit={submitHandler} className="relative flex mx-auto justify-center items-center  top-16  background rounded-3xl w-10/12">
        <input type="text" name="city" value={city} onChange={changeHandler} placeholder="Search for a city.." className='bg-transparent border-white border-4 rounded-3xl  w-full py-5 text-white px-10 text-lg lg:text-3xl md:text-3xl font-bold'></input>
        <button className='absolute right-10 top-6 font-bold opacity-0 md:opacity-100 lg:opacity-100 text-[2.5rem] text-white'><AiOutlineSearch/></button>
      </form>
      <div>
      {
        loading ? <Spinner/> : <WeatherContainer data = {data}/>
        
      }
      </div>
      
   </div>
  );
}

export default App;
