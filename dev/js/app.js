let list = document.getElementsByTagName(`td`);
for(i = 0; i<list.length; i++){
    list[i].addEventListener('click',animate);
}

function animate(){
    for(i = 0; i<list.length; i++){
        if(list[i] != event.target && list[i].classList.contains(`animated`)){
            list[i].classList.add(`animated2`);
        }
    }
    if(!event.target.classList.contains(`animated`)){
        event.target.classList.add(`animated`);
    }else{
        event.target.classList.add(`animated2`);
    }
}
