const angka = document.querySelectorAll(".angka");
const operasi = document.querySelectorAll(".operasi");
const calc = document.getElementById("cara");
const result = document.getElementById("result");
const hapusSemua = document.getElementById("hapus-semua");
const hapusItem = document.getElementById("hapus-item");
const samadengan = document.getElementById("samadengan");

let calcResult = "";
let calcArray = [];

const getNumber = (number) => {
    const lastChar = calcResult[calcResult.length - 1];
    if (lastChar === "." && number === ".") {
        return;
    }
    calcResult += number;
    calcArray.push(number);
    if (calc.innerHTML === "0") {
        calc.innerHTML = "";
    }
    calc.innerHTML += calcArray[calcArray.length - 1];
    setResult();
    console.log(calcResult);
};

const getOperator = (operator) => {
    const lastChar = calcResult[calcResult.length - 1];
    if (
        lastChar != "%" &&
        lastChar !== "/" &&
        lastChar !== "*" &&
        lastChar !== "+" &&
        lastChar !== "-"
    )
        calcResult += operator;
    calcArray.push(
        `<span style="color:#ff3e39; margin:0 8px;">${operator}</span>`
    );
    calc.innerHTML += calcArray[calcArray.length - 1];
    console.log(calcResult);
};

const setResult = () => {
    result.innerHTML = eval(calcResult);
};

const clearAll = () => {
    calcResult = "";
    calcArray = [];
    calc.innerHTML = "0";
    result.innerHTML = "0";
};

const backSpace = () => {
    calcArray.splice(-1, 1);
    calcResult = calcResult.substr(0, calcResult.length - 1);
    calc.innerHTML = calcArray.join("");
    if (calcResult === "") clearAll();
};

const getEquel = () => {
    if (eval(calcResult) !== Infinity) {
        resultStr = eval(calcResult).toString();
        calcArray = [];
        for (i = 0; i < resultStr.length; i++) {
            calcArray.push(resultStr.charAt(i));
        }
        calcResult = eval(calcResult);
        calc.innerHTML = eval(calcResult);
    }
};

angka.forEach((el) => {
    el.addEventListener("click", (e) => {
        // const.log(e.target.innerHTML);
        const keyValue = e.target.innerHTML;
        getNumber(keyValue);
    });
});

operasi.forEach((el) => {
    el.addEventListener("click", (e) => {
        // console.log(e.target.innerHTML);
        const keyValue = e.target.innerHTML;
        getOperator(keyValue);
    });
});

hapusSemua.addEventListener("click", clearAll);
hapusItem.addEventListener("click", backSpace);
samadengan.addEventListener("click", getEquel);