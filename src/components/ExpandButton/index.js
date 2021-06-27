import './styles.css';

export default function ExpandButton({isExpanded,toggeExpand}){
return (<span className="expandButton" onClick={toggeExpand}>
        {isExpanded?'-':'+'}
    </span>);
}