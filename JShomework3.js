let str_1="";
for(let i=0; i<10;i++) 
{   
 for( let j=0; j<i;j++)
 {str_1+=" *";}
 str_1+= "\n";
}
console.log(str_1);


let str_2="";
for(let i=0; i<10;i++) 
{   
 for( let j=i; j<10;j++)
 {str_2+=" *";}
 str_2+= "\n";
}

console.log(str_2);

let str_3="";
for(let i=0; i<11;i++) 
{ for(j=i;j<11;j++){
    str_3+=" ";}
 
 for(j=0;j<i;j++)
 {str_3+=" *";}

 
 str_3+= "\n";}

console.log(str_3);



let str_4 = " ";
for(let i=0; i<10; i++){
    for(let j=i; j<10; j++){
        str_4 +="  ";
    }
    for(let j=0; j<i; j++){
        str_4 +=" *";
    }
    str_4+="\n";
}console.log(str_4);

let str_5 = " ";
for(let i=0; i<10; i++){
    for(let j=0; j<i; j++){
        str_5 +="  ";
    }
    for(let j=i; j<10; j++){
        str_5 +=" *";
    }
    str_5+="\n";
}console.log(str_5);


let str_6="";
for(let i=0; i<5;i++) 
{ for(j=i;j<5;j++){
    str_6+=" ";}
 
 for(j=0;j<i-1;j++)
 {str_6+=" *";} 

 

 str_6+= "\n";}
 for(let i=0; i<6;i++) 
{ for(j=i;j<6;j++){
    str_6+=" ";}
 
 for(j=0;j<i-1;j++)
 {str_6+=" *";} 
 str_6+= "\n";}
 
 for(let i=0; i<7;i++) 
{ for(j=i;j<7;j++){
    str_6+=" ";
    
}
 for(j=0;j<i-1;j++)
 {str_6+=" *";} 
 str_6+= "\n";
 
}


console.log(str_6);   

  
 

 