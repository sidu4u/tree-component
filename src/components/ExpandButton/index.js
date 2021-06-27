import './styles.css';

export default function ExpandButton({isExpanded,toggeExpand}){
return (<div className="expandButton" onClick={toggeExpand}>
       {isExpanded?'-':'+'}
    </div>);
}