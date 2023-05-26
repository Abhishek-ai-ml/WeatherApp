import React from 'react'

import '../App.css';
import {WiHumidity} from 'react-icons/wi';
import {MdOutlineVisibility} from 'react-icons/md';
import {TbWind} from 'react-icons/tb';
import {BsFillCloudHazeFill} from 'react-icons/bs';
import {IoIosSunny, IoMdRainy} from 'react-icons/io';
import {RiSunCloudyFill} from 'react-icons/ri';



const WeatherContainer = (props) => {
  let data = props.data;

  // const [city, setCity] = useState('Delhi');
  // const [data, setData] = useState([]);

  // // const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=624abf2c5a85475d86691fc25b288207`;

  // const url = `http://api.weatherstack.com/current?access_key=f03084c21f5f86d03b4461f938aafe9d&query=${city}`;
  

  // function submitHandler(event) {
  //   event.preventDefault();
  //   getData();
  // }

  // function changeHandler(event) {
  //   // const { value } = event.target
  //   setCity(event.target.value);
  // }

  // // function searchHandler(event) {
  // //   event.preventDefault();
  // //   getData();
  // // }

  // async function getData() {
    
  //   setLoading(true);
  //   try{
  //     const response = await fetch(url);
  //     const output = await response.json();
  //     console.log(response);
  //     console.log(output);
  //     setData(output);
  //     // setCity(output.location.name);
  //   }

  //   catch(error) {
  //     console.log(error);
  //   }
  //   setLoading(false);
  // }
  // //-----
  // useEffect( () => {getData()}, [])
  // getData();

  function isObjEmpty (obj) {
    return Object.keys(obj).length === 0;
  }
    
  return (
    <div className='w-full h-[800px]  md:h-[500px] lg:h-[500px] relative top-20'>
      <div className='main-container flex flex-col md:flex-row  lg:flex-row w-10/12 h-full  mx-auto justify-evenly lg:justify-between pt-5 px-10 pb-20 background rounded-[60px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
        <div className='left-container relative flex flex-col sm:flex w-full md:w-[50%] lg:w-[50%]'>
          <div className='temp-box flex items-center relative'>
            <div className='text-white xs:text-[5rem] text-[5rem] md:text-[7rem] lg:text[7rem] font-bold'>
              {!isObjEmpty(data) ? data.current.temperature : <>0</>}
            </div>
            {/* <div className='text-white text-[7rem] font-bold'>40</div> */}
            <div className='flex text-white pt-5'><sup className='font-bold top-5 text-[3rem]'>o</sup><span className='font-bold text-[5rem]'>C</span></div>
          </div>

          <div className='text-white text-[2.5rem] lg:text-[5rem] font-bold'>
            {!isObjEmpty(data) ? data.location.name : <>Midgard</>}
          </div>
          {/* <div className='text-white text-[5rem] font-bold'>Delhi</div> */}

          <div className='flex text-white text-[3rem]  relative'>
            <div className='pr-5 text-[1.15rem] md:text-[1.5rem] lg:text-[3rem]'>Feels Like</div>
            <div className='text-[1.5rem] lg:text-[3rem] md:text-[1.5rem]'>
              {!isObjEmpty(data) ? data.current.feelslike : <>0</>}
            </div>
            {/* <div>38</div> */}
            <div className='flex'><sup className='lg:top-5 md:top-2  top-2 text-[1rem] lg:text-[2rem] md:text-[1rem]'>o</sup><span className=' text-[1.5rem] lg:text-[3rem] md:text-[1.5rem]'>C</span></div>
          </div>

          
          <div className='text-white  md:text-[2rem] md:left-0 opacity-0 lg:opacity-0 md:opacity-100 pt-12 font-bold'>
            {!isObjEmpty(data) ? data.current.weather_descriptions : <>Cool</>}
          </div>

          
          
        </div>


        <div className='right-container flex flex-col w-full lg:w-[50%] justify-center pr-10'>
          


          <div className='flex md:flex-col lg:flex-row mx-auto gap-10 md:gap-5 lg:gap-10 items-center lg:justify-center md:justify-center justify-evenly w-full'>
            <div className='w-full md:w-[50%] flex flex-col md:flex-row lg:flex-col items-center justify-between md:gap-5 lg:gap-5 gap-3'>
              <div className='text-white text-[4rem] lg:text-[8rem] md:text-[5rem]'><WiHumidity/></div>
              <div className='text-white text-[1rem] lg:text-[1.75rem] md:text-[1.5rem] font-bold'>
                {!isObjEmpty(data) ? data.current.humidity : <>0</>}%
              </div>
              {/* <div className='text-white text-[2rem] font-bold'>20</div> */}
            </div>

            <div className='w-full  md:w-[50%] flex flex-col md:flex-row lg:flex-col items-center justify-between md:gap-5 lg:gap-5 gap-3'>
              <div className='text-white text-[4rem] lg:text-[8rem] md:text-[5rem]'><TbWind/></div>
              <div className='text-white text-[1rem] lg:text-[1.75rem] md:text-[1.5rem] font-bold'>
                {!isObjEmpty(data) ? data.current.wind_speed : <>0</>} km/h
              </div>
              {/* <div className='text-white text-[2rem] font-bold'>20</div> */}
            </div>

            <div className='w-full  md:w-[50%] flex flex-col md:flex-row lg:flex-col items-center justify-between md:gap-5 lg:gap-5 gap-3'>
              <div className='text-white text-[4rem] lg:text-[8rem] md:text-[5rem]'><MdOutlineVisibility/></div>
              <div className='text-white text-[1rem] lg:text-[1.75rem] md:text-[1.5rem] font-bold'>
                {!isObjEmpty(data) ? data.current.visibility : <>0</>} km
              </div>
              {/* <div className='text-white text-[2rem] font-bold'>20</div> */}
            </div>

            
          </div>

          <div className='relative flex w-full mx-auto items-center justify-center pt-8'>
              <div className='text-white flex mx-auto pt-5 text-[2.5rem] lg:text-[2.75rem] lg:opacity-100 md:opacity-0 font-bold'>
                {!isObjEmpty(data) ? data.current.weather_descriptions : <>Cool</>}
              </div>

              <div className='text-white text-[7rem] mx-auto md:opacity-100 opacity-0 lg:opacity-0 absolute top-12 right-10'>
                {
                  !isObjEmpty(data) ? data.current.weather_descriptions[0] === 'Haze' && <BsFillCloudHazeFill/> : <>-</>
                }

                {
                  !isObjEmpty(data) ? data.current.weather_descriptions[0] === 'Sunny' && <IoIosSunny className='text-yellow-400'/> : <>-</>
                }

                {
                  !isObjEmpty(data) ? data.current.weather_descriptions[0] === 'Rainy' && <IoMdRainy className='text-blue-400'/> : <>-</>
                }

                {
                  !isObjEmpty(data) ? data.current.weather_descriptions[0] === 'Partly cloudy' && <RiSunCloudyFill className='text-white'/> : <>-</>
                }

              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherContainer
