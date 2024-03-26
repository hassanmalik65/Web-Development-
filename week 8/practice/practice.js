const honey= {
    naam : "Hanzla",
    age : 24,
    gender:"male"
}
const haha = honey;
haha.naam="hanzia";
//haha.age=23;
haha.gender="them";
//console.log(haha);
//console.log(honey);
const{naam , age, ...rest}=honey;
console.log(naam,age,rest);