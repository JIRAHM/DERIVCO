//function for matching 2 opponents against each other
function match(text){
    text=text.toUpperCase();

var chars = text.split("");
var letters_count={};

for (let i = 0; i < chars.length; i++) {
    if(letters_count[chars[i]] ==undefined){
        letters_count[chars[i]]=0;
    }
    letters_count[chars[i]]++;
}
 var str="";
for(var i in letters_count){
    str=str+letters_count[i];
    //console.log(i+" "+letters_count[i]);
}
//console.log(str);

while(parseInt(str)>100){
var newstr="";
for (let i = 0; i < Math.ceil((str.length)/2); i++) {
    var sum=0;
    var num1=parseInt(str[i]);
    var num2=parseInt(str[(str.length-i)-1]);

    if((str.length%2==0)){
    sum=num1+num2;
    newstr+=sum;
    //console.log(str[i]+"+"+str[(str.length-i)-1]+"= "+ sum) ;
    }//end of if
    else if(str.length%2==1 && i==Math.ceil((str.length)/2)-1){
        sum=num1;
        newstr+=sum;
        //console.log(str[i]) ;
    }//end of else
    else if(str.length%2==1){
        sum=num1+num2;
        newstr+=sum;
        //console.log(str[i]+"+"+str[(str.length-i)-1]+"= "+ sum) ;
    }//end of else


}
//console.log("newstr:" +newstr);
str=newstr;
}//end of while loop
if(parseInt(newstr)>=80){
    console.log(text+" MATCH: " +newstr+" GOOD MATCH");    
}
else{
console.log(text+" MATCH: " +newstr);
}
return newstr +" "+ text;

}//end of function

let girl=[];
let boy=[];
var str="JACKMATCHESJILL";      //test data for matching function  
match(str);

//requirements for reading textfile
var fs = require("fs");
var text = fs.readFileSync("./NAMES.txt").toString('utf-8');
var textByLine = text.split("\n");


//code for reading names for textfile into arrays seperateed by gender
for (let i = 0; i < textByLine.length; i++) {
    console.log(textByLine[i]);
    var char= textByLine[i].charAt(textByLine.length-2);    //gets either f or m to check gender
    console.log(char);

    var position = textByLine[i].indexOf(",");          //position of deliminator
    var name=textByLine[i].substring(0,position);       //copies only the name
    console.log(name);

    if(char=='m'){                                      //checks gender and
        boy.push(name);                                 //adds name into 
    }                                                   //corresponding
    if(char=='f'){                                      //arrays
        girl.push(name);
    }


}//end of for loop


let m=[];
//loops running to create match against the 2 arrays(opponents)
for (let i = 0; i < boy.length; i++) {
    for (let j = 0; j < girl.length; j++) {
        var matches = boy[i]+"matches"+girl[j];
        matches.toUpperCase;
        match(matches);
        m.push(match(matches));
        
        
    }
    
}

console.log(m);

//console.log(m[5].substring(0,2));

for (let i = m.length-1; i >=1; i--) {
    for (let j = 1; j <= i; j++) {
        var val1=parseInt(m[j-1].substring(0,2));
        var val2= parseInt(m[j].substring(0,2));

        if(val1>val2){
            var temp=m[j];
            m[j]=m[j-1];
            m[j-1]=temp;
        }
        
    }
    
}



//writing to text file
for (let i = 0; i < m.length; i++) {
    const fs = require('fs');
    let data = m[i];

    fs.writeFile('OUTPUT.txt', data, (err) => {
        if (err) throw err;});
    
}
