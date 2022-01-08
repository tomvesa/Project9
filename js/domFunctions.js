// search for a defined ID name in parent elements
// to make selection when using conditional logic to hide/display fields
export function getParentElByIdName(elem, idName){
    if(elem){
    if(elem.id.includes(idName)){
        return {elem: elem, id : elem.id};
      } else{
          let elemParent = elem.parentElement;
           return getParentElByIdName(elemParent, idName);
    }}
}