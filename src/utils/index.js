export function fetchData(){
return fetch('https://okrcentral.github.io/sample-okrs/db.json')
       .then(response=>response.json())
       .then(parsedResponse => {
            //console.log('test:',parsedResponse.data.filter(element=>element.id===2));
           return perge(checkNesting(parsedResponse.data));
        })
}


function isEmpty(value){
    return value === "";
  }

function perge(data){
    const perged = {};
    for(let key in data){
        if(data.hasOwnProperty(key)){
            let value = data[key];
            if (value.id){
                perged[key] = value;
            }
        }
    }

    return perged;
}  
  
function checkNesting(data){
   let cache = {};
  
   data.forEach(element => {
       const parentId = element["parent_objective_id"];
       const elementId = element.id;
       if(!isEmpty(parentId) && cache[elementId]){
           throw new Error('has multiple level nesting');
       }
       if(!isEmpty(parentId) && !cache[parentId]){
          cache[parentId] = {children:[element]};
       }
       else if(!isEmpty(parentId) && cache[parentId]){
           cache[parentId].children.push(element);
       }
       else{
           let entry = cache[elementId];
           cache[elementId] = entry?{...element,children:entry.children}:{...element,children:[]}; 
       }
   });
  
   return cache;
  }
