var elon = document.querySelector('.btnon');
elon.onclick = function (){
    alert('on的第一次點擊');
}
elon.onclick = function (){
    alert('on的第二次點擊');
}


var eladd = document.querySelector('.btnadd');
eladd.addEventListener('click',function(e){
    alert('add的第一次點擊');
},false);
eladd.addEventListener('click',function(e){
    alert('add的第二次點擊');
    e.stopPropagation();
},false);


var elbox =document.querySelector('.box');
elbox.addEventListener('click',function(e){
    alert('點擊到box了');
},false);


//onclick跟addEventListener監聽事件的差別，onclick只會執行最後一個事件，addEventListener則可以都執行
// el.addEventListener('click',fun(){},false);
//false -- 從指定元素往外面找
//true -- 從最外面開始找到指定元素
//stopPropagation -- 停止搜尋元素



var ela = document.querySelector('.alink');
ela.addEventListener('click',function(e){
    e.preventDefault();
    //取消元素的行為
    console.log('取消默認動作');
},false);