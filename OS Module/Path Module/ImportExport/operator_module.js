
const add=(a,b)=>{

    return a+b;
}

const sub=(a,b)=>{

    return a-b;
}

const mul=(a,b)=>{

    return a*b;
}

const div=(a,b)=>{

    return a/b;
}

//Single Export
//module.exports=add;

//multiple exports
module.exports={add, sub, mul, div}