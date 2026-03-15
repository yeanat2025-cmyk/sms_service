function generateTRX(){
return Math.random().toString(36).substring(2,10).toUpperCase();
}

function sendSMS(){

let phone=document.getElementById("number").value;
let amount=document.getElementById("amount").value;

let trx=generateTRX();

let message=`AIDE PAY

You have received Tk ${amount}
TRX ID: ${trx}`;

fetch("https://api.textbee.dev/api/v1/gateway/devices/69b625e6eb0b29634caa6c96/send-sms",{
method:"POST",
headers:{
"Content-Type":"application/json",
"x-api-key":"4034d517-eaaa-47b7-9dfc-58f83486e0ee"
},
body:JSON.stringify({
recipients:[phone],
message:message
})
})
.then(response=>response.json())
.then(data=>{
console.log(data);

if(data && data.data){
document.getElementById("result").innerHTML=
"✅ Payment Successful<br>TRX ID: "+trx;
}else{
document.getElementById("result").innerHTML=
"❌ SMS Failed";
}
})
.catch(error=>{
document.getElementById("result").innerHTML=
"❌ Network Error";
console.log(error);
});

}
