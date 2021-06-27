import {useEffect,useState} from 'react';
import Objective from '../components/Objective';
import {fetchData} from '../utils';

function Root() {
  let [data,updateData] =  useState([]);
  useEffect(()=>{
    fetchData()
    .then(data=>updateData(data))
  },[]);

  console.log(data);
  return Object.values(data).map(element=><Objective key={element.id} data={element}/>)
}

export default Root;
