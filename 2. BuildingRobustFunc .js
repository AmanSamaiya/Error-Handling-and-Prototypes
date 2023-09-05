function getPerson (obj) {

    try {
        if(obj.name && obj.age) 
        return `Name : ${obj.name} , Age: ${obj.age}`
    else{
        throw error 
    }

    } 

    catch (error) {
        console.log("Invalid parameter type");
    }




}



console.log(getPerson({name:"aman" , age:25}));