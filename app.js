const inputInversion = document.getElementById('inputInversion')
const inputRangeInversion = document.getElementById('inputRangeInversion')
const inputTasa = document.getElementById('inputTasa')
const inputRangeTasa = document.getElementById('inputRangeTasa')
const inputTime = document.getElementById('inputTime')
const inputRangeTime = document.getElementById('inputRangeTime')
const spanMonto = document.getElementById('spanMonto')
const spanInterest = document.getElementById('spanInterest')
const spanTotal = document.getElementById('spanTotal')

const loadData =()=>{
    inputInversion.value = inputRangeInversion.value
    inputTasa.value = inputRangeTasa.value
    inputTime.value = inputRangeTime.value
}

const changeRangeInputInversion = (element)=>{
    inputInversion.value = element.value
}

inputInversion.addEventListener('input', ()=>{
    inputRangeInversion.value = inputInversion.value
})

const changeRangeInputTasa = (element)=>{
    inputTasa.value = element.value
}

inputTasa.addEventListener('input',()=>{
    inputRangeTasa.value = inputTasa.value
})

const changeRangeInputTiempo = (element)=>{
    inputTime.value = element.value
}

inputTime.addEventListener('input', ()=>{
    inputRangeTime.value = inputTime.value
})

const updateData = ()=>{
    spanMonto.innerHTML = formatCurrency(+inputInversion.value)
    const interes = (((inputTasa.value)*(+inputInversion.value))/100)*+inputTime.value
    spanInterest.innerHTML = formatCurrency(interes)
    const total = +inputInversion.value+interes
    spanTotal.innerHTML = formatCurrency(total)
    console.log(spanMonto.innerText);
}

const formatCurrency = (valor)=>{
    return valor.toLocaleString('es-PE', {style:'currency', currency: 'PEN', minimumFractionDigits:2})
}

