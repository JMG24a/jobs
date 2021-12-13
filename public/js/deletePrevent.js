//card delete
const $dPrevent = document.getElementById('dPrevent');
const $confirm = document.getElementById('confirm');
const $dButton__no = document.getElementById('dButton__no');

//card option
const $ePrevent = document.getElementById('ePrevent');
const $options = document.getElementById('options');
const $eButton__cancel = document.getElementById('eButton__cancel');

//card formulario ProfileEdit
const $container__iconProfile = document.getElementById('container__iconProfile')
const $options__card = document.getElementById('options__card');
const $container_formEmployee = document.getElementById('container_formEmployee');
const $formIconCancelEmployee = document.getElementById('formIconCancelEmployee')

//card formulario AddressEdit
const $container__iconAddress = document.getElementById('container__iconAddress');
const $container__formAddress = document.getElementById('container__formAddress');
const $formIconCancelAddress = document.getElementById('formIconCancelAddress');

//card from Assigned
const $container__iconAssigned= document.getElementById('container__iconAssigned');
const $container__formAssigned = document.getElementById('container__formAssigned');
const $formIconCancelAssigned = document.getElementById('formIconCancelAssigned');


// event delete
$dPrevent.addEventListener('click', (e) =>{
    $confirm.classList.add('confirm__show');
})

$dButton__no.addEventListener('click', (e) =>{
    $confirm.classList.remove('confirm__show');
})

// event edit
$ePrevent.addEventListener('click', (e) =>{
    $options.classList.add('options__show');
})

$eButton__cancel.addEventListener('click', (e) =>{
    $options.classList.remove('options__show');
})

//event editProfile
$container__iconProfile.addEventListener('click', (e) =>{
    $options__card.classList.add('options__card');
    $container_formEmployee.classList.add('container_formEmployee__show');
    $options__card.classList.remove('options__card__show');
})

$formIconCancelEmployee.addEventListener('click', (e) =>{
    $container_formEmployee.classList.remove('container_formEmployee__show'); 
    $options__card.classList.remove('options__card');
    $options__card.classList.add('options__card__show');

})

//event editAddress
$container__iconAddress.addEventListener('click', (e)=>{
    $options__card.classList.add('options__card');
    $container__formAddress.classList.add('container__formAddress__show');
    $options__card.classList.remove('options__card__show');
})

$formIconCancelAddress.addEventListener('click', (e) =>{
    $container__formAddress.classList.remove('container__formAddress__show'); 
    $options__card.classList.remove('options__card');
    $options__card.classList.add('options__card__show');
})

//event editAssigned
$container__iconAssigned.addEventListener('click', (e)=>{
    $options__card.classList.add('options__card');
    $container__formAssigned.classList.add('container__formAssigned__show');
    $options__card.classList.remove('options__card__show');
})

$formIconCancelAssigned.addEventListener('click', (e) =>{
    $container__formAddress.classList.remove('container__formAssigned__show'); 
    $options__card.classList.remove('options__card');
    $options__card.classList.add('options__card__show');
})
