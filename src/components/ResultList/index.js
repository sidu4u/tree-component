import Result from '../Result';
import './styles.css';

function ResultList(props) {
  const {results} = props;  

  return (<div>{results.map(result=><Result key={result.id} data={result}/>)}</div>);
}

export default ResultList;
