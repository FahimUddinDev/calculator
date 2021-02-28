function buttonRead (press){
    const displayShow = document.getElementById('displayInput').value;
    if(displayShow=='0'){
        document.getElementById('displayInput').value=press;   
    }else{
        document.getElementById('displayInput').value=displayShow+press;
    };
    
};
document.getElementById('13').addEventListener('click',function(){
    document.getElementById('displayInput').value=0;
});

document.getElementById('15').addEventListener('click',function(){
    const result = eval(document.getElementById('displayInput').value);
    document.getElementById('displayInput').value=result;
});