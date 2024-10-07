let numberList=Array.from(document.getElementsByClassName("numbers")); 
let symbolList=Array.from(document.getElementsByClassName("operations")); 
const equalBtn=document.getElementById("equals"); 
const clearBtn=document.getElementById("clearAll"); 
const operations=[null,null,null]
const textBox=document.getElementById("displayBox")
clearBtn.addEventListener('click',()=>{
    // operations[0],operations[1],operations[2]=null; 
    operations[0]=null; 
    operations[1]= null; 
    operations[2]=null; 
    console.log(operations)
    textBox.value=""; 
})
equalBtn.addEventListener('click',()=>{
    if(operations[0]==null){
        textBox.value=operations[2]; 
    }
    else{
        if(operations[1]=="+"){
            operations[2]=parseFloat(operations[2])+parseFloat(operations[0]); 
            operations[0]=null; 
            textBox.value=operations[2]; 
        }
        else if(operations[1]=="-"){
            operations[2]=parseFloat(operations[2])-parseFloat(operations[0]); 
            operations[0]=null; 
            textBox.value=operations[2];
        }
        else if(operations[1]=="*"){
            operations[2]=parseFloat(operations[2])*parseFloat(operations[0]); 
            operations[0]=null; 
            textBox.value=operations[2];
        }
        else if(operations[1]=="/"){
            operations[2]=parseFloat(operations[2])/parseFloat(operations[0]); 
            operations[0]=null; 
            textBox.value=operations[2];
        }
    }
})
//function to add eventlisteners to numbers
numberList.map((ele)=>{
ele.addEventListener('click',()=>{
    let currVal=ele.textContent; 
    let dispVal; 
    if(operations[0]==null){
        operations[0]=currVal; 
        dispVal=currVal; 
    }
    else{
        operations[0]+=currVal; 
        dispVal=operations[0]; 
    }
    textBox.value=dispVal; 
})
}); 
//fuction to add eventlisteners to operators
symbolList.map((ele)=>{
    ele.addEventListener('click',()=>{
        let result=calculateResult(ele); 
        operations[0]=null; 
        let currVal=ele.textContent; 
        operations[1]=currVal; 
        textBox.value=result; 
    })
})
//function to calculate the results 
const calculateResult=(ele)=>{
    if(operations[2]==null){
        operations[2]=operations[0]; 
        return parseFloat(operations[2]) 
    }
    else{
        if(operations[1]=="+"){
            if(operations[0]==null){
                return operations[2]
            }
            else{
                operations[2]=parseFloat(operations[2])+parseFloat(operations[0])
                return operations[2]
            }
            //ele.textContent
        }
        else if(operations[1]=="-"){
            if(operations[0]==null){
                return operations[2]
            }
            else{
                operations[2]=parseFloat(operations[2])-parseFloat(operations[0])
                return operations[2]
            }
        }
        else if(operations[1]=="*"){
            if(operations[0]==null){
                return operations[2]
            }
            else{
                operations[2]=parseFloat(operations[2])*parseFloat(operations[0])
                return operations[2]
            }
        }
        else if(operations[1]=="/"){
            if(operations[0]==null){
                return operations[2]
            }
            else{
                operations[2]=parseFloat(operations[2])/parseFloat(operations[0])
                return operations[2]
            }
        }
    }

}
