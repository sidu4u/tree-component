import Result from './Result';

function ResultList(props) {
  const {results} = props;  

  return results.map(result=><Result key={result.id} data={result}/>);
}

export default ResultList;
