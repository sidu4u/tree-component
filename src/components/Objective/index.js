import {useState,useRef,useCallback} from 'react';
import TextArea from '../TextArea';
import ExpandButton from '../ExpandButton';
import ResultList from '../ResultList';
import './styles.css';

function Objective(props) {
  const {data} = props;  
  let isExpandable =  useRef(data.children.length>0);
  let [isExpanded,toggleExpand] = useState(true);
  let toggleExpandCallback = useCallback(()=>toggleExpand(!isExpanded),[isExpanded]);

  return(
      <div className="objective">
      {isExpandable.current && <ExpandButton isExpanded={isExpanded} toggeExpand={toggleExpandCallback}/>}
        <div>
          <TextArea text={data.title}/>
          {data.children && isExpanded && <ResultList results={data.children}/>}
        </div>
      </div>
  )
}

export default Objective;
