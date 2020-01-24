
let uniqueArrNum = (num) => {
    let arr = [];
    if (isNaN(num)) {
        alert('this is not number')
    } else {
        for (let i = 0; arr.length < num; i++) {
            let newNum = Math.floor(Math.random() * num);
            arr.push(newNum)
            if (arr.indexOf(newNum) !== i) {
                arr = [...new Set(arr)]
            }
        }
    }
    return arr
}

setInterval(() => {
    console.log(uniqueArrNum(4))
}, 2000)
