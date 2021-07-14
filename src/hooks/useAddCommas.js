import { useState } from 'react'
    
function useAddCommas() {
    const [value, setValue] = useState(0)
    //Convert to string
    const putComma = (salary) => {
        let nums = salary.toString();
        if (nums.length > 3){
            //Convert to array
            const n = nums.split('');
            const newNum =[];
            let ins=0;

            //Insert comma every 3 chars from last
            for (let x = n.length-1; x>=0; x--){
                ins ++;
                if (ins===4 && n[x]!=='.' && n[x]!=='-' ){
                    newNum.push(',');
                    ins=1;              
                }
                if (n[x]==='.'){
                    ins =0;    
                }
                newNum.push(n[x])
            }
            setValue(newNum.reverse().join(''))
        } 
    }
    return [value, putComma];
}

export default useAddCommas;