
console.log(document.domain);
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[3]);

items[2].style.backgroundColor = 'green';
for (var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold' ;
}