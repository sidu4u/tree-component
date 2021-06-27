import {useState,useRef,useCallback} from 'react';
import TextArea from './TextArea';
import ExpanButton from './ExpandButton';
import ResultList from './ResultList';

function Objective(props) {
  const {data} = props;  
  let isExpandable =  useRef(data.children.length>0);
  let [isExpanded,toggleExpand] = useState(true);
  let toggleExpandCallback = useCallback(()=>toggleExpand(!isExpanded),[isExpanded]);

  return(
      <>
      {isExpandable && <ExpanButton isExpanded={isExpandable} toggeExpand={toggleExpandCallback}/>}
      <TextArea text={data.title}/>
      {data.children && isExpanded && <ResultList results={data.children}/>}
      </>
  )
}

export default Objective;
