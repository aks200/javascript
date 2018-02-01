alert("javascript file linked");

    var b1=2;
    var b2=9;
    alert(b1+b2);
    
    alert('My Lucky number is ' +b1); 
    var c=[11,1,55];
    /*
    //c[3]='white'
    c.push('purple');
    c.unshift(0);
    alert(c.length);
    alert(c.sort());
    alert(c.reverse());
    */

    for(var i=0;i<3;i++)
    {
        console.log(c[i]);
    }

    var i,j;
    i=3;
    j=5;
    if(i<j)
    {
        console.log('i is less than j');
    }
    else
    {
        console.log('j is less than i');
    }

    console.log('OBJECT...........');

    var value={
                firstname:'aks',
                lastname:'kn',
                age:12,
                std:'8th',
                languagesknown:['Tamil','Eng','hin','guj'],
                address : {
                    street:'101 palash',
                    area:'anandnagar',
                    colony:'asha'
                    }

                  /*fullname : function(){
                        return this.firstname +" "+ this.lastname;*/

            }
            
   
    
   
    //console.log(fname());
    console.log(value.age);
    console.log(value.languagesknown[1]);
    console.log(value.address.street);
/*
    ++var num;
    num=[23,24,25,26,27];

    numbers.foreach(function(number){
        console.log(num);
    });
*/

apple=new Object();
apple.color='red';
apple.shape='round';

apple.describe=function(){
    return ' Apple is of color '+ this.color + ' and of '+ this.shape + ' shape ';
}

console.log(apple.describe());

var stud=[
    {
        name:'aa',
        age:10
    },
    {
        name:'ab',
        age:12
    },
    {
        name:'ac',
        age:8
    },
    {
        name:'ad',
        age:15
    }
]

console.log(stud[1]);
console.log(stud[3].name);



function changeText(id){
    id.innerHTML="YOU CLICKED";
}

function time(){
    var time=document.getElementById("t")
    time.innerHTML=Date();
}


function arr(){
var veg=['tomato','potato','onion','ladyfingers'];
veg.push('peas');
var len=veg.length;
var txt = "<ul>";
for(var i=0;i<len;i++)
{
    txt+="<li>" + veg[i] + "</li>";
}

t=t+"</ul>";

document.getElementById("demo").innerHTML = "list:" +txt;
}


function sorting(){
    var nos=[10,1,15,40,20];
    var s=nos.sort(function(a,b) {return(b-a)});
    document.getElementById("demo").innerHTML = "descending order "+ s;
    document.getElementById("demo").innerHTML = "max no: "+ s[0];

}

function color1()
{
    var col=document.getElementById("myInput").value;
    var txt;

    switch(col)
    {
        case "blue":
        txt="You have selected blue color";
        break;

        case "red":
        txt="You have selected red color";
        break;

        case "green":
        txt="You have selected green color";
        break;

        default:
            txt = "Unknown color name";

    }

    document.getElementById("demo1").innerHTML=txt;
}