
let uniqueArrNum = (num) => {
    let arr = [];
    if (isNaN(num)) {
        alert('this is not number')
    } else {
        for (let i = 0; i < num; i++) {
            let newNum = Math.floor(Math.random() * num);
            arr.push(newNum)
            if (arr.indexOf(newNum) !== i) {
                let newVal = arr[i] + arr.length
                if (arr.includes(newVal)) {
                    arr[i] = newVal + arr.length + i;
                } else {
                    arr[i] = newVal
                }
            }
        }
    }
    return arr
}

setInterval(() => {
    console.log(uniqueArrNum(4))
}, 2000)