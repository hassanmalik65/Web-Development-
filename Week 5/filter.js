const array=[1,2,3,4,5,6,7,8];
var Map = array.filter(function(item){
    return item%2==1;
})
console.log(Map);