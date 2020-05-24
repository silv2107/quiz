document.querySelector('#check').addEventListener('click', result);

function result(){
    let points = 0;
    let useranswer = document.querySelectorAll('input:checked');
    useranswer.forEach(function(ua){
        if(ua.value === '1'){
            points++;
            ua.parentElement.style.backgroundColor = 'blue';
        }
        else {
            ua.parentElement.style.backgroundColor = 'red';
        }
    })
alert(`Du fik ${points} point`);                 
}