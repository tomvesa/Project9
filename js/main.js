// 📁 main.js

import {Card} from './cardsDetails.js';
import { Elem, InputElement } from './element.js';
//import { InputElement } from './element.js';
//import { InputElement } from './inputElements.js';
import { getParentElByIdName } from './domFunctions.js';


const aboutMe = new Elem('#about-me-text');
const aboutMeNav = new Elem('#about-nav-link');
const aboutProject = new Elem('#about-project-text');
const contact = new Elem("#contact");
const contactLink = new Elem('#contact-nav-link');
const sendBtn = new Elem('#send-message-btn');
const contactFrm = new Elem('#contact form');
const sentMessage = new Elem('#message-sent');
//console.log(contact);
let cards = [];
const projectBtn = document.querySelector('#project-link');
const projectSection = new Elem('#projects-section');
const projectsNav = new Elem('#projects-nav-link');
const location = window.location.href;


//card 1 setup and set the card background image
const card1 = new Elem('#card-p1');
card1.details = new Card("The Game", "game");
card1.imgBackground(`./img/game.png`);
card1.elementTitle(card1.details.title);


//card 2 setup and set the card background image
const card2 = new Elem('#card-p2', 'dashboard');
card2.details = new Card("Admin Dashboard", 'dashboard');
card2.imgBackground(`./img/dashboard.png`);
card2.elementTitle(card2.details.title);


//card 3 setup and set the card background image
const card3 = new Elem('#card-p3');
card3.details = new Card("Employee List", "employees");
card3.imgBackground(`./img/employees.png`);
card3.elementTitle(card3.details.title);

//card 4 setup and set the card background image
const card4 = new Elem('#card-p4', );
card4.details = new Card("Registration Form", 'form');
card4.imgBackground(`./img/desktop-form-2.png`);
card4.elementTitle(card4.details.title);

//card 5 setup and set the card background image
const card5 = new Elem('#card-p5', );
card5.details = new Card("Style guide", 'style-guide');
card5.imgBackground(`./img/style-guide.png`);
card5.elementTitle(card5.details.title);

//card 6 setup and set the card background image
const card6 = new Elem('#card-p6', );
card6.details = new Card("Portfolio", 'portfolio');
card6.imgBackground(`./img/portfolio.png`);
card6.elementTitle(card6.details.title);

//add cards to an cards Array
cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);
cards.push(card6);

// InfoText of each Cards

// card 1 info
card1.infoText = `<h4>Project 6 - Wheels of Success</h4>
                    <p class='text-left'>
                    First proper usage of Javascript to create an interactive game - a browser version of “Wheel of Success”. A quotation guessing game. 
                    A random phrase to be guessed by players using a browser keyboard.
                    </p>
                    <p class='text-left'>
                    Using JS to create DOM elements corresponding to the length of the text. Event listeners to interact with users.
                    </p>
                   <ul> 
                        <h5>Languages used</h5>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                   </ul> 
                    `;

// card 2 info
card2.infoText = `<h4>Project 3 - Dashboard</h4>
                    <p class='text-left'>An interactive dashboard for a web application using advanced web techniques including SVG graphics and JavaScript programming. 
                    The project involves creating tables, charts, graphics and other user interface components in a manner that promotes interactivity and usability. 
                    Used local storage to save selected settings, event listeners to interact with user action. A third party graph elements integration...</p>
                   <ul> 
                        <h5>Languages used</h5>
                        <li>HTML</li>
                        <li>SCSS/CSS</li>
                        <li>Javascript</li>
                        
                   </ul> 
                    `;

// card 3 info
card3.infoText = `<h4>Project 8 - Employee List</h4>
                    <p class='text-left'>In this project we focused on the usage of the Javascript to get information from third party source using API.
                    From the fetched data we created HTML elements to display List of employee, detail of an employee and move from one Employee card to another.</p>
                    <p>
                    Information fetched from a API was processed to create DOM elements. Interactivity allows to display person's contact information. A search box search 
                    through display data while typing reducing displayed information. 
                    </p>
                   <ul> 
                        <h5>Languages used</h5>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                   </ul> 
                    `;         

// card 4 info
card4.infoText = `<h4>Project 3 - Online registration Form</h4>
                    <p class='text-left'>Mobile-friendly registrtion form using css. Getting familiar with different input type fields.
                    To enhance UX the placeholders were used and athere different css atrubutes like <i>focus, required, transition...</i></p>
                   <ul> 
                        <h5>Languages used</h5>
                        <li>HTML</li>
                        <li>CSS</li>
                   </ul> 
                    `;

// card 5 info
card5.infoText = `<h4>Project 6 - Web style guide</h4>
                    <p class='text-left'>In this lesson we were introduced to SASS, this was very exciting to use all these variables. We were provided with full HTML and CSS files.
                    Our task here was to create the style guide page using SASS. Also we were to use Git version control system for the first time.</p>
                   <ul> 
                        <h5>Languages used</h5>
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>CSS</li>
                        
                   </ul> 
                    `;

// card 6 info
card6.infoText = `<h4>Project 1 - Portfolio</h4>
<p class='text-left'>This was our first project after copleting a lesson 1. Was wery excited to prepare a brand new website. All was so new and the lessons were brilliant. Actually reading
my plan, in this project I think I know how to work with HTML, CSS and Javascript like I wanted. Javascript hooked me a lot and am using it more and more on a daily basis. In fact I will probably
dig deeper in it rather than jumping on PHP now, maybe sometime later</p>
<ul> 
    <h5>Languages used</h5>
    <li>HTML</li>
    <li>CSS</li>
    
</ul> 
`;

//executive code
// add click listener to each project card
const cardWrapper = new Elem('.projects-wrapper');
cardWrapper.singleEl.addEventListener('click', e => {
    let isCard = e.target.classList.value.includes('card');




//make sure we are clicking on the card    
    if(isCard){
        // check if the the about-me text is visible or not
        // then get an Id of the card and check if that card is already active
        let isAboutMeVisible = !aboutMe.singleEl.classList.value.includes('d-none');
        let isContactFrmVisible = !contact.singleEl.classList.value.includes('d-none') ;
        let cardId = getParentElByIdName(e.target, "card-p").id;
        let cardEl = cardWrapper.getElBySelector(`#${cardId}`);
        let isCardElActive = cardEl.classList.contains('active');
        let isAboutProjectVisible = !aboutProject.singleEl.classList.value.includes('d-none') ;

        // console.log(`About me: ${isAboutMeVisible}`);
        // console.log(`About project: ${isAboutProjectVisible}`);
        // console.log(`Contact Form: ${isContactFrmVisible}`);

        if(!isCardElActive){
            // if this card is not active => information about this project is not visible, 
            // then find any active ones and reset
            const activeCard = document.querySelector('.card.active');
             if(activeCard){activeCard.classList.remove('active')}

            // and then make this card active or
            cardEl.classList.add('active');
        } else { 
            // if the card was active at the beggining => make it inactive
            cardEl.classList.remove('active')};
        //console.log(cardEl);
        
        
// info about the project
// select the info project wrapper to display information about project
        let projectInfo = aboutProject.singleEl.querySelector('.text-wrapper');

        let findProject = cards.find(card => card.singleEl.id === cardId);
        let isCardInfoActive = findProject.details.isActive ;
        // console.log(findProject.infoText);
           // console.log(findProject.details);
        // console.log(isCardInfoVisible);
            

            if(isCard &&  isAboutMeVisible){
                // if clicking on a card and about me text is visible => replace about-me with project info
                //console.log("case 1");
            const hideAboutMe = aboutMe.addClass('d-none');
            const displayAboutProject = aboutProject.removeClass('d-none');
            const makeClassActive = aboutProject.addClass('active-project');
            // display project information in the project Info HTML wrapper
            projectInfo.innerHTML = findProject.infoText;

            //make the displayed project active, but first reset all previously active to be false
            cards.forEach(card => card.details.isActive = false);
            findProject.details.isActive = true;
            addLinkTargetListener(projectBtn, findProject.details.projectLocation);
            aboutProject.elementFocus();
            //console.log(`Active project details: ${findProject.details.title}`);

            } else if(isCard && isCardInfoActive){
               // if clicking on a card  and this card is already active => replace project info with about-me text   
            const displayAboutMe =  aboutMe.removeClass('d-none');
            const hideAboutProject = aboutProject.addClass('d-none'); 
            // hide project info and set card  isActive to false
            projectInfo.innerHTML = "";
            findProject.details.isActive = false;
            //addLinkTargetListener(projectBtn, findProject.details.projectLocation);
            aboutMe.elementFocus();
            //console.log('case 2');
            //console.log(`This project info is being hidden ${findProject.details.title}`);

            } else if(isCard && !isCardInfoActive && !isContactFrmVisible){
                // if clicking on a card when another project is being displayed => replace already displayed project info with new one   
                //
                //console.log('case 3');
                // display project info in the wrapper    
                projectInfo.innerHTML = findProject.infoText;
                cards.forEach(card => card.details.isActive = false);
                findProject.details.isActive = true;
               // console.log(findProject.details);
                //console.log(`${location}${findProject.details.projectLocation}`);
                addLinkTargetListener(projectBtn, findProject.details.projectLocation);
                aboutProject.elementFocus();

            } else if(isCard && isContactFrmVisible){
                //console.log('case 4');
                const hideContactSection = contact.addClass('d-none');
                const displayAboutProject = aboutProject.removeClass('d-none'); 
            }
    }   
}, {capture: true});

function addLinkTargetListener(element, targetLocation){
    element.addEventListener('click', e=> {
        window.location.href = targetLocation});
}

contactLink.singleEl.addEventListener("click", e => {
    
    let isAboutMeVisible = !aboutMe.singleEl.classList.value.includes('d-none') ;
    let isAboutProjectVisible = !aboutProject.singleEl.classList.value.includes('d-none') ;
    let isContactFrmVisible = !contact.singleEl.classList.value.includes('d-none') ;
    // console.log(`About me: ${isAboutMeVisible}`);
    // console.log(`About project: ${isAboutProjectVisible}`);
    // console.log(`Contact Form: ${isContactFrmVisible}`);

    if(isAboutProjectVisible || isAboutMeVisible){
        const hideAboutText = isAboutMeVisible? aboutMe.addClass('d-none') : aboutProject.addClass('d-none');
        const displayContFrm = contact.removeClass('d-none');
    }

    if(isContactFrmVisible){
        const hideAboutText = aboutMe.removeClass('d-none');
        const hideContFrm = contact.addClass('d-none');
        const makeCardInactive =  isAboutProjectVisible ?  document.querySelector('.card.active').classList.remove('active') : undefined;
    }
    
} );

const nameInp = new InputElement('#inputName');
const emailInp = new InputElement('#inputEmail');
const messageInp = new InputElement("#message-text");

sendBtn.singleEl.addEventListener("click", e => {
    
    //sendMessage();
});

async function  sendMessage(){


    const send = await setTimeout( ()=>{
                const hideForm = contactFrm.addClass('d-none');
                const displayMessage = sentMessage.removeClass('d-none');
                    }, 1000);

    const reset = await setTimeout( ()=>{
        const hideContactSection = contact.addClass('d-none');
        const displayAboutMe = aboutMe.removeClass('d-none');
        const displayForm = contactFrm.removeClass('d-none');
        const hideMessage = sentMessage.addClass('d-none');
        const resetName = nameInp.value = "";
        const resetEmail = emailInp.value = "";
        const resetMessage = messageInp.value = "";

    
            }, 5000);

}



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
   // 'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            let senderName = nameInp.singleEl.value;
            let nameElement = new Elem("#user-name-sent");
            // display name of the sender in the message
               console.log("form submitted");
            nameElement.singleEl.innerHTML = senderName; 
            console.log(form.checkValidity());
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          //  console.log('message not sent');
          } else {
            event.preventDefault();
            event.stopPropagation();  
            console.log('message sending');
            sendMessage();
            form.submit();
            //forms.classList.remove('was-validated');
          }
  
          form.classList.add('was-validated');
        }, false);
      });
  })();

  const navs = new Elem('#navlinks');
  const hamburger = new Elem('#hamburger-menu');
  hamburger.singleEl.addEventListener('click', e =>{
      const hambTop =  new Elem('.cls-1');
      const isNavVisible = navs.singleEl.classList.contains('d-none')? 
                            showMenu() :  // make it visible
                            hideMenu();      // hide it
      
    //hide menu and hide top and bottom of hamburger    
     function hideMenu(){
        navs.addClass('d-none');
        hambTop.removeClassToAll('d-none');
     }
        //display menu and hide top and bottom of hamburger  
     function showMenu(){
        navs.removeClass('d-none');
        hambTop.addClassToAll('d-none');
     }     
  });


  projectsNav.singleEl.addEventListener('mousedown', e =>{
    document.getElementById('projects-section').focus();
});


