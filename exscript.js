const Form = {
    currencyChange : document.getElementById('currencyChange'), //mano boteu uns nome muito bostakkkkkkk
    currency : document.querySelector('input#number'),
    currencyFrom : document.getElementById('currencyFrom'),
    currencyTo : document.getElementById('currencyTo'),
    button : document.querySelector('button'),

    getValues(){
        return {
            currency: Form.currency.value,
            //currencyFrom: Form.currencyFrom.option[0]
            
        }
    },

    formatValues(){
        let {currency} = Form.getValues()
    },

    submit(event){
        event.preventDefault()
    }
}

const Calc = {



    calc(){

        //Mathmagic trying to get the option from DOM still not working

        //get those options
        //if one option and other are something do the calc
        //if not? just do nothing.
         if (Form.currencyFrom.selectedIndex == "1" && Form.currencyTo.selectedIndex == "0") {
             const result = Form.currencyChange.innerHTML ="R$ " + Form.currency.value * 3
             return result
         } else if (Form.currencyFrom.selectedIndex == "0" && Form.currencyTo.selectedIndex == "1") {
             const result = Form.currencyChange.innerHTML = "$ " + Form.currency.value / 3
             const floatResult = parseFloat(Calc.calc.result)
             Calc.calc.floatResult.toFixed(2)
             return floatResult, result
         }

        //if i mess up with everything we still have this lmao =>
        // const result = Form.currencyChange.innerHTML ="R$ " + Form.currency.value * 3
        //return result
        
    }
}


const App = {
    init(){

    }
}

//currencyChange.innerHTML = Calc.calc.result
// console.log(document.getElementById("currencyFrom").options.length)
// console.log(document.getElementById("currencyFrom").options[0].text)
// console.log(document.getElementById("currencyFrom").options.namedItem("BRL").text)