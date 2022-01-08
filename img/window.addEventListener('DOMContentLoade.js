window.addEventListener('DOMContentLoaded', e =>{ 
    const frmId = getFormId();
    
    // ------------limit choices of sports based on attendee role
    
    // get role element
    let selectElement = document.querySelector(`#input_${frmId}_8`);
    
    //--add event listener after role selection
    selectElement.addEventListener('change', (event) => {
    
    //--select referee role and add disabled attribute to selected sports, but before that
    //-- remove disabled attribute just in case it has been added by previous selection
    if ( selectElement.value == "Referee"){
    
    var sportSelectField = document.querySelector(`#input_${frmId}_105`).options;
    
    for (var i = 0; i < sportSelectField.length; i++) {
    
    var optionChoice =  document.querySelector(`#input_${frmId}_105`).options[i];
    optionChoice.removeAttribute("disabled");
    optionChoice.setAttribute("style", "color:unset");
            var optionChoice =  document.querySelector('#input_189_105').options[i];
            if (optionChoice.value == "Athletics" ||
                    optionChoice.value == "Archery" ||
                    optionChoice.value == "Chess" ||
                    optionChoice.value == "Diving" ||
                    optionChoice.value == "Swimming") {
                optionChoice.setAttribute("disabled", true);
                optionChoice.setAttribute("style", "color: red");
    }
    }
    
    }else if( selectElement.value == "Other Team Official"){
    
    //--select Other Team Official role and add disabled attribute to selected sports, but before that
    //-- remove disabled attribute just in case it has been added by previous selection
    
    let sportSelectField1 = document.querySelector(`#input_${frmId}_105`).options;
    for (var i = 0; i < sportSelectField1.length; i++) {
    
    var optionChoice =  document.querySelector(`#input_${frmId}_105`).options[i];
    optionChoice.removeAttribute("disabled");
    optionChoice.setAttribute("style", "color:unset");
    
            var optionChoice =  document.querySelector(`#input_${frmId}_105`).options[i];
            if (optionChoice.value == "Athletics" ||
                optionChoice.value == "Archery" ||
                optionChoice.value == "Badminton" ||
                optionChoice.value == "Chess" ||
                optionChoice.value == "Fencing" ||
                optionChoice.value == "Rhythmic Gymnastics" ||
                optionChoice.value == "Judo" ||
                optionChoice.value == "Swimming" ||
                optionChoice.value == "Table Tennis" ||
                optionChoice.value == "Wrestling" ||
                optionChoice.value == "Taekwondo"  ) {
                optionChoice.setAttribute("disabled", true);
                optionChoice.setAttribute("style", "color:red");
    }
    }
    } else if(selectElement.value == "Coach" || selectElement.value == "Athlete") {
    
    //--remove disabled attributes from Coaches and Athletes Selections---
    
    let sportSelectField2 = document.querySelector(`#input_${frmId}_105`).options;
    for (var i = 0; i < sportSelectField2.length; i++) {
            var optionChoice =  document.querySelector(`#input_${frmId}_105`).options[i];
           // if (optionChoice.value == "Athletics" ||
           //         optionChoice.value == "Archery" ||
            //        optionChoice.value == "Chess" ||
            //        optionChoice.value == "Diving" ||
              //      optionChoice.value == "Swimming") {
                optionChoice.removeAttribute("disabled");
                optionChoice.setAttribute("style", "color:unset");
    }
    }
    }
    );
    
    
    
    //-------- add a age group after sport selection-------------------
    //select the element which holds selection values
    const selectElement3 = document.querySelector(`#input_${frmId}_105`);
    
    //add event listener after the sport has been selected
    selectElement3.addEventListener('change', (event) => {
    
    //grab the value of the input
    let sportSelection = document.getElementById(`input_${frmId}_105`).value;
    
    switch(sportSelection) {
        case "Archery" :
        case "Wushu" :
        case "Athletics":
        case "Fencing":
        case "Aerobic Gymnastics":
        case "Judo":
        case "Taekwondo":
    
     return    document.querySelector(`#input_${frmId}_250`).value= "2004-2006";
     break;
        case "Football":
        case "Basketball":
        case "Chess":
        case "Diving":
        case "Swimming":
        case "Badminton":
        case "Table Tennis":
      return document.querySelector(`#input_${frmId}_250`).value= "2003-2005";
      break;
    
        case "Artistic Gymnastics":
        case "Rhythmic Gymnastics":
      return document.querySelector(`#input_${frmId}_250`).value= "2004-2008";
    
          case "Jump Rope":
        return document.querySelector(`#input_${frmId}_250`).value= "2003-2006";
      break;
      
        case "Wrestling":
        return document.querySelector(`#input_${frmId}_250`).value= "2004-2005";
        break
        default :
      return alert("Cannot validate DoB, undefined sport value");    
    
    }}
    );
    
    
    
    let apiUrl = 'https://isf-eras.org/wp-json/gravityview/v1/views/16821/entries.json';
    let data;
    let regAthletes;
    let sportChoices;
    let choiceWrappers;
    const disciplines = {
        "Athletics":              [225, 226],
        "Badminton":              [228, 229],
        "Basketball":             [],
        "Diving":                 [233, 234],
        "Fencing":                [241],
        "Aerobic Gymnastics":   [196],
        "Artistic Gymnastics":           [266],
        "Rhythmic Gymnastics":           [224],
        "Judo":                   [210, 211],
        "Jump Rope":       [243, 244],
        "Swimming":       [217, 218, 219, 220, 221, 222],
        "Table Tennis":    [201],
        "Taekwondo":      [206, 207, 208],
        "Wrestling":      [212, 213, 214],
        "Wushu":          [267]
    
    }
    
    console.log(disciplines)
    
    // ********** helper functions
    
    // return Id of current form
    function getFormId() {
        const formWrapper = document.querySelector('.gform_wrapper');
        return parseInt(formWrapper.id.slice(14));
    }
    
    // return a field selector of desired field
    function getField(fieldId){
        return document.querySelector(`#field_${frmId}_${fieldId}`);
    }
    
    
    
    //***** connection to api  */
    async function getData(url){
        return await fetch(url)
                        .then(response => response.json())
                        .then(json => data = json.entries)
    }
    
    
    // return array of athletes of selected sport
    function getSportAthletes(arr, sport){
        return arr.filter(participant => participant[8] === "Athlete" && participant[105] === sport);
    }
    
    
    // function getCountOfParticipants(options, participants, optionFieldId){
    //     options.forEach(option => {
    //     let count = participants.reduce((acc,participant) => {
    //         return [...acc, Object.entries(participant[optionFieldId]
    //                                 .filter(item => item[1] === option))];
    //     }, []);
    
    //         return count.length;
    //         });
    //     }
    
    // return array of choices of selected field ID from select box
        function getSportChoices(fieldId){
            let choices = [...document.querySelectorAll(`#field_${frmId}_${fieldId} ${returnType(fieldId)}`)];
            let arr = choices.reduce((acc, choice) => {
                let val = choice.value;
            return [...acc,val];
            }, []);
            
            return arr;
        }
    
        // return array of all disciplines by all athletes
        function getAllDscplnsRegistered(participants, fieldID){
            if(returnType(fieldID) === "input" ){
            let discFields = participants.reduce((acc, part) => {
                return [...acc, Object.entries(part[fieldID]).filter(item => item[1] !== "")]
    
            }, []);
        return discFields.flat().map(item => item[1]);
            } else if(returnType(fieldID) === 'option'){
               return participants.reduce((acc, part)=>{
                        if(part[fieldID] !==""){
                                return [...acc, part[fieldID]]
                        }
                        return acc;
                    }, [])
        }
        
        }
    
        // retun a count of registered athletes for each discipline in the select box
        // Input array of available choices in the select box and array of all registered disciplines
        // input the array of select boxes to appent the result of 
        function getCountsofRegistered(choices,listOfDiscRegistered,choiceWrappers,fieldID){
            choices.forEach((choice,index) => {
            let count = listOfDiscRegistered.filter(item => item === choice).length;
            if(count > 0){
            let countText =  ` => ${count} athletes`;
            let span = document.createElement('span');
                span.classList.add('registered');
                span.textContent = countText;
                span.style.cssText = 'color:red; font-size: .8em; padding-left: 10px;'
    
                if(returnType(fieldID) === "input"){
                 return choiceWrappers[index].parentElement.appendChild(span);
            } else if(returnType(fieldID) === 'option'){
                return choiceWrappers[index].appendChild(span);
            }}
            
            });
            }
    
        function getAllFieldCheckboxes(fieldID){
                return document.querySelectorAll(`#field_${frmId}_${fieldID}`);
            }
    
        function returnType(fieldID){
            let field = document.querySelector(`#field_${frmId}_${fieldID} .ginput_container`);
                 
                if(field.classList.contains('ginput_container_select')){
                    return 'option';
                } else if(field.classList.contains('ginput_container_checkbox')){
                    return 'input';
                }
        }   
    
    
        // get wrapper - return select or Checkbox elements of desired field
        function getWrapper(fieldID){
                return document.querySelectorAll(`#field_${frmId}_${fieldID} ${returnType(fieldID)}`);
                }
    
        //*************** code executive */
       
    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
    
        const selSport = getField("105 select");  
        getData(apiUrl + '?limit=0');
     
    console.log(data);
    console.log(selSport);
    
        let athletics = [225, 226];
        let disciplineBtn = getField(277); 
    
    
        disciplineBtn.addEventListener('change', e =>{
            if(e.target.tagName ==="INPUT" && e.target.checked == true){
                let athletics = [225, 226];
        
                disciplines[selSport.value].forEach(item => {
                    let regAthletes = getSportAthletes(data, selSport.value);
                    let choices = getSportChoices(item);
                    let allDiscreg = getAllDscplnsRegistered(regAthletes, item);
                    let wrapper = getWrapper(item);
              
                  return getCountsofRegistered(choices, allDiscreg, wrapper, item)
                  
              });
        } else if(e.target.tagName ==="INPUT" && e.target.checked == false){
            let registered = document.querySelectorAll('.registered')
                                    .forEach(item => item.parentElement.removeChild(item));
        }
        });
    
    });
    });
    