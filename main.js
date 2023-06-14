function answer(){

  let p=parseInt(document.getElementById("principal").value);
  let r=parseInt(document.getElementById("rate").value);
  let t=parseInt(document.getElementById("time").value);

 let i=(p*r*t)/100;
 let total = p+i;
 document.getElementById("output1").innerHTML=p;
 document.getElementById("output2").innerHTML=i;
 document.getElementById("output3").innerHTML=total;
}
answer();