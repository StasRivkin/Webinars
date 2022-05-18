const custom_button = document.getElementById('custom_button');
const my_input = document.getElementById('my_input');

custom_button.addEventListener('click', () => {
    console.log('clicked');
});

my_input.addEventListener('blur', () =>{
    console.log('blured');
})