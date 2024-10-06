let numberList=Array.from(document.getElementsByClassName("numbers")); 
let symbolList=Array.from(document.getElementsByClassName("operations")); 
const operations=[null,null,null]
const textBox=document.getElementById("displayBox")
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
//fuction to add eventlisteners to operations 
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
        return parseInt(operations[2]) 
    }
    else{
        if(ele.textContent=="+"){
            if(operations[0]==null){
                return operations[2]
            }
            else{
                operations[2]=parseInt(operations[2])+parseInt(operations[0])
                return operations[2]
            }
            
        }
    }

}
