//import react from "react";
export default function ExpandButton({isExpanded,toggeExpand}){
return (<div onClick={toggeExpand}>
        {isExpanded?'+':'-'}
    </div>);
}