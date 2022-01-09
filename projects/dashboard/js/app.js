

//*****     Line Graph trafic */
//**** weekly chart */
let trafficCanvas = document.querySelector(`#traffic-chart`);

let trafficData = {
        
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
            datasets:[{
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
                backgroundColor: 'rgba(116, 119, 191, 0.3)',
                borderWidth: 1,
                }]
            };
        
let traficDataUpd = {        
        monthly: {
            labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            datasets:[{
                data: [2451, 3545, 6661, 1452, 2556, 3458, 3459, 4681, 2454, 4681, 5001, 1566],
                backgroundColor: 'rgba(116, 119, 191, 0.3)',
                borderWidth: 1,
                }]
            }, 
            
        weekly: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
            datasets:[{
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
                backgroundColor: 'rgba(116, 119, 191, 0.3)',
                borderWidth: 1,
                }]
        },    


        daily: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets:[{
                data: [157, 168, 102, 97, 126, 90, 75],
                backgroundColor: 'rgba(116, 119, 191, 0.3)',
                borderWidth: 1,
            }]
        },
        hourly: {
            labels: [7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            datasets:[{
                data: [23, 15, 10, 17, 19, 21, 24, 27, 25, 26, 23, 20, 21, 18],
                backgroundColor: 'rgba(116, 119, 191, 0.3)',
                borderWidth: 1,
            }]
        },

};

let trafficOptions = {
    aspectRation: 2.5,
    animation: {
        duration: 0,
    },
    scales: {
        yAses: [{
            ticks: {
                beginAtZero: true,
            }
        }]
    },
    legend :{
        display: false,
    }
};

var trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
    });
    

// daily trafic 
// bar chart
const dailyCanvas = document.querySelector("#daily-trafic");

const dailyData = {
    labels: ['Mo','Tu','We','Th','Fr','Sa','Su'],
    datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1,
}],
};

const dailyOptions = {
    scales: {
        yAxes:[{
            ticks: {
                beginAtZero: true,
            }
        }]
    },
    legend: {
        display: false,
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions,
});

// doughnat chart

const mobileCanvas = document.querySelector('#mobile-users-chart');

const mobileUsers = {
    labels: ['phone', 'tablet', 'desctop'],
    datasets: [{
        data: [70, 17, 13],
        backgroundColor: ['#484CCB', '#CCA05C', '#9052CC'],
        borderWidth: 1,

    }]
};

const mobileOptions = {
    legend: {
        display: true,
        position: 'right',
        align: 'center'
    },

}


let mobileChart = new Chart(mobileCanvas, {
        type : "doughnut",
        data : mobileUsers,
        options : mobileOptions,
})

//style select option element





//******  hide alert message when clicked */
const alertBox = document.querySelector('#alert-box');
const notifications = document.querySelector('#notification-box');
const closeArr = [alertBox, notifications];

closeArr.forEach(item => {
    item.addEventListener('click', e => {
        if(e.target.className === 'close-icon'){   
            let parentEl = e.target.parentElement; 
        
            parentEl.style.display = "none";
            
    }
});
}
);

//************** display notification
const bell = document.querySelector(".notification");
const notifItems = document.querySelectorAll(".notification-item");
bell.addEventListener('click', ()=>{
    notifItems.forEach(item => {item.style.display = "flex";})
});



//********* Trafic switch charts */
//Select Navigation div
const traficNav = document.querySelector('.trafic-nav');
// Add event listener to the div and store target in a variable to lowerCase
traficNav.addEventListener('click', e => {
    if(e.target.className.indexOf('traffic-nav-item') > -1){
        
        let selectedNavItem = e.target.textContent
                            .toLowerCase();
 
        console.log(e.target.classList);
        // Remove existing green background and place it to a targe
        traficNav.querySelector('.selected').classList.remove('selected');
        e.target.classList.add('selected');

// display the correct chart with target variable         
       replacedata( selectedNavItem);
        
    }
}); 



function replacedata(selection){
    //replace data in the chart
    trafficData.labels = traficDataUpd[selection].labels;
    trafficData.datasets = traficDataUpd[selection].datasets;
    trafficChart.update();
}



const userF = document.querySelector('#user-field');
const messageF = document.querySelector('#messageField');
const sendBtn = document.querySelector('#send');

sendBtn.addEventListener('click', e =>{
    let user = userF.value;
    let message = messageF.value;

    if(user && message){
        
        sessionStorage.setItem('messageSent', true);
    } else {
        
        e.preventDefault();
        switch(!user || !message){
        case (!user && !message) :
              alert(`User and Message field are empty`);
              break;
        case !user:
              alert(`User field is empty`);
            break;  
        case !message:
            alert(`Message field is empty`);
            break;    


        }

    };
});

//**** display message was sent after clicking the send button */
window.addEventListener('load', () =>{
    if(sessionStorage.messageSent && sessionStorage.messageSent == "true"){
        alert('Your message has been sent');
        sessionStorage.removeItem('messageSent');
    }
})


// ****** settings
let emailNotif = document.querySelector('#email-notifications input');
let profile = document.querySelector('#profile-settings input')
let timeZone = document.querySelector('#timezone');
let saveBtn = document.querySelector('#save')

saveBtn.addEventListener('click', ()=>{
;

    localStorage.setItem('profileSettings', profile.checked);
    localStorage.setItem('emailNotification', emailNotif.checked);
    localStorage.setItem('timeZone', timeZone.value );
    console.log(localStorage);

})


window.addEventListener('load', () =>{
    emailNotif.checked = JSON.parse(localStorage.emailNotification);
    profile.checked = JSON.parse(localStorage.profileSettings);
    timeZone.value = localStorage.timeZone;

    });


//******** Search Autocomplete */
let memberlist = [...document.querySelectorAll(".members .members-text p")];
let members = memberlist.map(item => item.innerText);
let memberOptionBox = document.querySelector('#member-options');
let memberOptionList = document.createElement('ul');
let messageBox = document.querySelector('#message form');

//memberOptionList.classList.add('members-item');


//memberOptionBox.appendChild(memberOptionList);
for(i= 0; i < members.length ; i++){
    listItem = document.createElement('li');
    listItem.innerText = members[i];
    listItem.classList.add('members-item');
    listItem.style.display = "none";
    memberOptionList.appendChild(listItem);
    console.log(listItem);

}

memberOptionBox.appendChild(memberOptionList);
let membersLI = document.querySelectorAll('.members-item');

userF.addEventListener("input", () => {
     let text = userF.value.toLowerCase();
     let membersLI = document.querySelectorAll('.members-item');
    
     membersLI.forEach(item => {
        if(userF.value == ""){
            membersLI.forEach(item => item.style.display = "none");
        } else if (item.innerText.indexOf(text) < 0 ){
         item.style.display = 'none';
     } else if(item.innerText.indexOf(text) > -1){
         item.style.display = 'list-item';
     }} 
 )});

 const selectionBox = document.querySelector('#member-options');
selectionBox.addEventListener('click', (e) => {
        let target = e.target;
        if(e.target.tagName == "LI"){
        userF.value = target.innerText;
        membersLI.forEach(item => item.style.display = "none")
        }
    }) ;


 


    