//import react from "react";
export default function ExpandButton({isExpanded,toggeExpand}){
return (<span onClick={toggeExpand}>
        {isExpanded?'+':'-'}
    </span>);
}