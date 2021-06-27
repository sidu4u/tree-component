import TextArea from '../TextArea';
import './styles.css';

function Result(props) {
  const {data} = props;  

  return <div className="result">
        <div className="offset"></div>
        <TextArea text={data.title}/>
    </div>;
}

export default Result;
