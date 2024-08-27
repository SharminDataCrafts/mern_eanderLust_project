let taxSwitch = document.getElementById('flexSwitchCheckDefault');
taxSwitch.addEventListener('click', ()=>{
    let taxInfo = document.getElementsByClassName('tax-info');
    let taxToggle= document.getElementsByClassName('tax-toggle');
    console.log(taxToggle)

    for(info of taxInfo){

        if(info.style.display != 'inline'){
            info.style.display = 'inline';
            for (let toggle of taxToggle) {
                toggle.style.opacity = '1';
            }
        }else{
            info.style.display = 'none';
            for (let toggle of taxToggle) {
                toggle.style.opacity = '0.6';
            }
        }
        
    }
})