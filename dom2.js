
console.log(document.domain);
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[3]);

//li[2].style.backgroundColor = 'green';
for (var i=0; i<li.length; i++){
    li[i].style.backgroundColor = 'grey' ;
}