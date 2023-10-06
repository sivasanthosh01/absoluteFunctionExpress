let value=prompt("Enter the Number");
document.write(`Given number is ${value} <br>`)

let result=(v)=>{
    if(v>13){
        let res=v-13;
        document.write(`Answer is ${res*2}`)
    }
}
result(value)