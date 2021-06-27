import {useEffect,useState,useCallback,useLayoutEffect} from 'react';
import Objective from '../../components/Objective';
import Filter from '../../components/Filter';
import {fetchData} from '../../utils';
import './styles.css';

function Root() {
  let [okrs,updateokrs] = useState([]);  
  let [filteredokrs,updateFilteredOkrs] = useState([]);  
  let [categories,updateCategories] = useState([]);
  let [selectedCategory,updateSelectedCategory] = useState('default');
  let changeCategoryCallback = useCallback((event)=>{console.log(event);updateSelectedCategory(event.target.value)},[]);
  useEffect(()=>{
    fetchData()
    .then(data=>{updateokrs(data.okrs);updateCategories(data.categories)})
  },[]);

  useLayoutEffect(()=>{
    if(selectedCategory==='default'){
        updateFilteredOkrs(okrs);
        return;
    }  
    updateFilteredOkrs(Object.values(okrs).filter(okr=>okr.category===selectedCategory));
  },[selectedCategory,okrs]);

  return (
      <div className="root">
          <Filter categories={categories} selectCategory={changeCategoryCallback}/>
          {
            Object.values(filteredokrs).map(element=><Objective key={element.id} data={element}/>)
          }
    </div>
    )
}

export default Root;
