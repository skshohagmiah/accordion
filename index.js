const accordionItems = document.querySelectorAll('.accordion-item');


accordionItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        if( item.querySelector('.accordion-content').style.display === 'none'){
            accordionItems.forEach(item => {
                item.querySelector('.accordion-content').style.display = 'none'
                item.querySelector('span').innerHTML = '+'
            });
            const content =  item.querySelector('.accordion-content');
            const span = item.querySelector('span')
            content.style.display = 'block'
            span.innerHTML = "-"
        }else{
            accordionItems.forEach(item => {
                item.querySelector('.accordion-content').style.display = 'none'
                item.querySelector('span').innerHTML = '+'
            });
           
        }
       

    })
})

document.addEventListener('DOMContentLoaded', () => {
    accordionItems[0].querySelector('.accordion-content').style.display = 'block';
})