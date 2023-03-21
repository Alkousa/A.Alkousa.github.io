let toggleNavStatus = false;

let toggleNav = function() {
    let getSideBar = document.querySelector('.side-bar');
    let getSideBarUl = document.querySelector('.side-bar ul');
    let getSideBarTitle = document.querySelector('.side-bar span'); 
    let getSideBarLink = document.querySelectorAll('.side-bar a');  

if(toggleNavStatus === false) {
    getSideBarUl.style.visibility = 'visible';
    getSideBar.style.width = '272px';
    getSideBarTitle.style.opacity = '0.5';
    
    let arrayLength = getSideBarLink.length;
    for(let i = 0; i < arrayLength; i++){
        getSideBarLink[i].style.opacity = '1';
    }
    toggleNavStatus = true;

}

else if(toggleNavStatus === true) {
   
    getSideBar.style.width = '50px';
    getSideBarTitle.style.opacity = '0';
    
    let arrayLength = getSideBarLink.length;
    for(let i = 0; i < arrayLength; i++){
        getSideBarLink[i].style.opacity = '0';
    }
    getSideBarUl.style.visibility = 'hidden';
    toggleNavStatus = false;

}
}
