var data = [
    {
        name:'小明',
        dogs:['小黑','小白'],
    },{
        name:'小華',
        dogs:['小黃'],

    }
];


var el = document.querySelector('.box1');
var totel = data.length;
var str = '';
console.log(totel);

for (var i=0 ; i<totel ;i++){
    var names = '<p>'+data[i].name+'</p>';
    console.log(names);
    
    str += names;
}

el.innerHTML = str ;