import TextArea from '../TextArea';
import './styles.css';

function Result(props) {
  const {data} = props;  

  return <div className="result"><TextArea text={data.title}/></div>;
}

export default Result;
