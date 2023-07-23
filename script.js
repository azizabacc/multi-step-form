const mobileDesign = window.matchMedia("(max-width: 560px)");
const desktopDesign = window.matchMedia("(min-width: 561px)");
const sliderBar = document.getElementById('sliderBar');
const stepNavs = document.querySelectorAll('.stepNav')
const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');
const stepLogos = document.querySelectorAll('.stepLogo');
const formContainers = document.querySelectorAll('.formContainer');
const navBtns = document.getElementById('navBtns');
const optionPlanDiv = document.querySelectorAll('.optionPlanDiv')
const checkbox =document.getElementById('checkbox');
const optionPrice = document.querySelectorAll('.optionPrice')
const checkboxOns = document.querySelectorAll('.checkboxOns');
const onsDiv = document.querySelectorAll('.onsDiv');
const stepContainer = document.querySelector('.stepContainer')
///step 4 Tags
const optionResume = document.getElementById('optionResume');
///////////////header backgroud Image///////////////////
const mediaDisplayUpdate = () =>{
    if(mobileDesign.matches){
        ///////////////header backgroud Image mobile///////////////////
        sliderBar.style.backgroundImage='url(assets/images/bg-sidebar-mobile.svg)'
        ////// stepNav display ////////
        for ( const stepNav of stepNavs){
            stepNav.style.display='none';
        }  
    }  else{
        ///////////////header backgroud Image Desktop///////////////////
        sliderBar.style.backgroundImage ='url(assets/images/bg-sidebar-desktop.svg)'
       ////// stepNav display ////////
    for ( const stepNav of stepNavs){
        stepNav.style.display='flex';
    }  
    }
}
// Call the initial function to set the background image on the initial page load
mediaDisplayUpdate();

// Add event listeners for screen size changes
mobileDesign.addEventListener('change', mediaDisplayUpdate);
desktopDesign.addEventListener('change', mediaDisplayUpdate);
//// Step 2 Event Listners ////
//// select options ////
const selectOption = (option) => {
    option.classList.toggle('selectedOption');
    optionPlanDiv.forEach(op => {
        if (op !== option && op.classList.contains('selectedOption')) {
            op.classList.remove('selectedOption');
        }
    });


}

for (let i = 0; i < optionPlanDiv.length; i++) {
    let option = optionPlanDiv[i];
    option.addEventListener('click', () =>{
        selectOption(option);
    }); 
}

///// checkbox monthly / yearly /////
const offer0 = document.createElement('p');
offer0.className='offer';
offer0.innerText = '2 months free';
const offer1 = document.createElement('p');
offer1.className='offer';
offer1.innerText = '2 months free';
const offer2 = document.createElement('p');
offer2.className='offer';
offer2.innerText = '2 months free';
const insertAfter = (newNode, existingNode)=> {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
checkbox.addEventListener('change', (e) =>  {
    
        if(checkbox.checked){
            optionPrice[0].innerHTML = '$90/yr'
            insertAfter(offer0,optionPrice[0]);
            optionPrice[1].innerHTML = '$120/yr'
            insertAfter(offer1,optionPrice[1]);
            optionPrice[2].innerHTML = '$150/yr'
            insertAfter(offer2,optionPrice[2]);
        }else{
            let offerList = document.querySelectorAll('.offer');
            for(let j = 0 ; j< offerList.length;j++){
                offerList[j].remove();

            }
            optionPrice[0].innerHTML = '$9/yr'
            optionPrice[1].innerHTML = '$12/yr'
            optionPrice[2].innerHTML = '$15/yr'

        }

    
}); 
//////step 3 //////////////
///checkbox event listner ////////


for (let i = 0; i < checkboxOns.length; i++) {
    let option = checkboxOns[i];
    option.addEventListener('change', () => 
    {
        onsDiv[i].classList.toggle('selectedOns');

    }); 
}
///step 4 en form container////
const messageFormContainer = document.createElement('div');
messageFormContainer.className = 'formContainer currentForm';
messageFormContainer.id = 'step5';
const endImg = document.createElement('img');;
endImg.id ='endImg'
endImg.src = "assets/images/icon-thank-you.svg"
const endTitle = document.createElement('h1');
endTitle.className='stepTitle';
endTitle.innerText='Thank you!';
const endText = document.createElement('p');
endText.className = 'stepDesc';
endText.innerText ='Thanks for confirming your suscription! We hope you have fun using our Platform. If you ever need support, please feel free to email us at support@loremgaming.com'
messageFormContainer.append(endImg);
messageFormContainer.append(endTitle);
messageFormContainer.append(endText)
////Buttons event Listners ////
let currentStep = 0;
let LastStep = 3;
const nextForm = () =>{
    if(previousBtn.classList.length>0){
        previousBtn.classList.toggle('hidden');
        navBtns.style.justifyContent ='space-between'
    }

    if(currentStep<3){
        stepLogos[currentStep].classList.remove('currentStep');
        formContainers[currentStep].classList.remove('currentForm');
        currentStep++;
        stepLogos[currentStep].classList.add('currentStep');
        formContainers[currentStep].classList.add('currentForm');
        if(currentStep===3){
            nextBtn.innerHTML='Confirm';
        }
        }
        else {
/// end forms => end message /////
        navBtns.remove();
        stepContainer.innerHTML='';
        stepContainer.append(messageFormContainer)
        }
    
}
const previousForm = () =>{
    if(currentStep==1){
        previousBtn.classList.toggle('hidden');
        navBtns.style.justifyContent ='flex-end'
    }
    if(currentStep>0){
        stepLogos[currentStep].classList.remove('currentStep');
        formContainers[currentStep].classList.remove('currentForm');
        currentStep--;
        stepLogos[currentStep].classList.add('currentStep');
        formContainers[currentStep].classList.add('currentForm');
        }else{
            alert('done');
        }
}

nextBtn.addEventListener('click', (event) => {
nextForm();
});

previousBtn.addEventListener('click', (event) => {
    previousForm();
    });
