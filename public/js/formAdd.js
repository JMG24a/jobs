const eventMultiple = document.getElementById('buttonAddForm');

eventMultiple.addEventListener('click', (e) =>{
    const $divContainerForm = document.getElementById('addForm'),
        $template = document.getElementById('templateAddForm').content,
        $fragment = document.createDocumentFragment();

    $fragment.appendChild($template)
    $divContainerForm.appendChild($fragment)

})

eventMultiple.addEventListener('click', () =>{
    const $divContainerForm = document.getElementById('addForm'),
        $containerForm = document.getElementById('containerForm');
    if($divContainerForm.classList.contains('main__containerButtom__form')){
        $divContainerForm.classList.replace('main__containerButtom__form', 'main__containerButtom__formInactive');
        $containerForm.classList.replace('container__formInactive','container__form');
    }else{
        $divContainerForm.classList.replace('main__containerButtom__formInactive','main__containerButtom__form');
        $containerForm.classList.replace('main__containerButtom__formInactive','main__containerButtom__form');
    }
    
    
   
})