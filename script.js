
const BotaoCalcular = document.querySelector('.btnCalcular')
const res = document.querySelector('.res')
 const botaomais = document.querySelector('.botaomais')
botaomais.addEventListener('click', function Calcular(){

const Input1 = document.querySelector('#numero1').value 
const Input2 = document.querySelector('#numero2').value
const Soma = Number(Input1) + Number(Input2)
    
   res.innerHTML = Soma
}
 
)

const botaomenos = document.querySelector('.botaomenos')

botaomenos.addEventListener('click', function Menos()
{const Input1 = document.querySelector('#numero1').value 
const Input2 = document.querySelector('#numero2').value
    const Soma = Number(Input1) - Number(Input2)
    res.innerHTML = Soma
})

const Botaovezes = document.querySelector('.botaovezes').addEventListener('click', function Multiplicar(){
        const Input1 = document.querySelector('#numero1').value 
const Input2 = document.querySelector('#numero2').value
    const Soma = Number(Input1) * Number(Input2)
    res.innerHTML = Soma
}

)
const botaodividir = document.querySelector('.botaodividir').addEventListener('click', function Dividir(){
    const Input1 = document.querySelector('#numero1').value 
const Input2 = document.querySelector('#numero2').value
    const Soma = Number(Input1) / Number(Input2)
    res.innerHTML = Soma
})



    
