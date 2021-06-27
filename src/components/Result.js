import TextArea from './TextArea';

function Result(props) {
  const {data} = props;  

  return <TextArea text={data.title}/>;
}

export default Result;
