'use strict'

const fibonacci = () => {
    let res = [];
	res.push(0, 1);
	let i = 2;
    let atual = 0;
    while(atual < 350){
    	atual = (res[i-2] + res[i-1]);
    	res.push(atual);
    	++i;
    }
    console.log(res);
    return res;
}

const isFibonnaci = (num) => {
	let res = fibonacci();
	if(res.find(x => x == num )){
     	return true;
    }
    return false;
}

module.exports = {
    fibonacci,
    isFibonnaci
}
