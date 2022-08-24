let num = document.querySelector('input#ntxt');
let lista = document.querySelector('select#lista');
let res = document.querySelector('div#res');
let nums = [];

function addLista(){
    res.innerHTML = '';
    if(isNum(num.value) && !inList(num.value, nums)){
        nums.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
    }else{
        window.alert('Valor inválido ou já está na lista');
    }
    num.value = '';
    num.focus();
}

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function calcular(){
    if(nums.length == 0){
        window.alert('Sem valores para somar!');
    }else{
        let total = nums.length;
        let soma=0;
        let mediana = Math.round(total/2);
        
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados.</p>`;

        nums.sort(function(a,b){
            if(a > b) return 1;
            if(a < b) return -1;
        });

        for(let pos in nums){
            soma += nums[pos];
        }

        res.innerHTML += `<p>Valores: ${nums}.</p>`;
        res.innerHTML += `<p>O menor número é: ${nums[0]}.</p>`;
        res.innerHTML += `<p>O maior número é: ${nums[total-1]}.</p>`;
        res.innerHTML += `<p>A soma de todos eles é: ${soma}.</p>`;
        res.innerHTML += `<p>A mediana é: ${nums[mediana]}.</p>`;
    }
}