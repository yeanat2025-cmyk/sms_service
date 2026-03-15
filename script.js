async function sendSMS(){

let phone=document.getElementById("number").value;
let amount=document.getElementById("amount").value;

let trx=Math.random().toString(36).substring(2,10).toUpperCase();

let message="AIDE PAY\nYou received Tk "+amount+"\nTRX "+trx;

try{

let res=await fetch("https://api.textbee.dev/api/v1/gateway/devices/69b625e6eb0b29634caa6c96/send-sms",{
method:"POST",
headers:{
"x-api-key":"4034d517-eaaa-47b7-9dfc-58f83486e0ee",
"Content-Type":"application/json"
},
body:JSON.stringify({
recipients:[phone],
message:message
})
});

let data=await res.json();

if(data && data.data){

document.getElementById("result").innerHTML=
"✅ Payment Successful<br>TRX ID: "+trx;

}else{

document.getElementById("result").innerHTML=
"❌ SMS Failed";

}

}catch(e){

document.getElementById("result").innerHTML=
"❌ Network Error";

}

}
