import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this);
        this.verifyNumbers = this.verifyNumbers.bind(this);

        this.state = {
            
        }
    }

    //Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
    

    handleChange({ target }) {
        const { name } = target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        //Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados
        value = name === 'name' ? value.toUpperCase() : value;
        //Remover qualquer caracter especial que seja digitado
        //Disponível em: https://www.codegrepper.com/code-examples/javascript/remove+special+characters+from+string+javascript
        value = name === 'address' ? value.replace(/[^a-zA-Z1-9 ]/g, "") : value;
      
        this.setState({
          [name]: value,
        });
      }

    //Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
    verifyNumbers({target}) {
        console.log(typeof target.value[0])
        const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        numbers.forEach(num => {
            if (num === target.value[0]) return this.setState({ city: '' });
        });
    }

    render() {
        return (
            <form>
                <fieldset id="form-group1">
                    <label>
                        Name:
                        <input type="text" name="name" maxLength="20" required onChange={this.handleChange} value={this.state.name}/>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" maxLength="50" required onChange={this.handleChange} value={this.state.email}/>
                    </label>
                    <label>
                        CPF:
                        <input type="text" name="cpf" maxLength="11" required onChange={this.handleChange} value={this.state.cpf}/>
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" maxLength="200" required onChange={this.handleChange} value={this.state.address}/>
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" maxLength="28" required onChange={this.handleChange} value={this.state.city} onBlur={this.verifyNumbers} />
                    </label>
                    <label>
                        State:
                        <input type="text" name="state" required/>
                            {/* inserir lista aqui:
                            <select name="state-list">
                                <option>option1</option>
                            </select> */}
                    </label>
                    <label>
                        Type:
                        <input type="radio" name="type" value="House" id="house"/>
                            <label for="house">House</label><br />
                        <input type="radio" name="type" value="Apartment" id="apartment"/>
                            <label for="apartment">Apartment</label><br />
                    </label>
                </fieldset>
                <fieldset id="form-group2">
                    <label>
                        Curriculum Summary:
                        <textarea name="summary" maxLength="1000" required/>
                    </label>
                    <label>
                        Occupation:
                        <textarea name="occupation" maxLength="40" required/>
                    </label>  
                    <label>
                        Last job description:
                        <textarea name="occupation-description" maxLength="500" required/>    
                    </label>     
                </fieldset>
            </form>
        )
    }
}

export default Form;
