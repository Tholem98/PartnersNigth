import React, {Component} from 'react'


class NameProy extends Component{
    constructor(props){
        super(props)

        this.saveAndContinue = this.saveAndContinue.bind(this)
        this.back = this.back.bind(this)
    }

    saveAndContinue(e){
        e.preventDefault()
        this.props.nextStep()
        
    }

    back(e){
        e.preventDefault()
        this.props.prevStep()
    }

    render(){
        const {values}=this.props
        
        return(
        <div>
            <h1 className="bienvenido">Ahora</h1>
            <p className="name">Contanos un poco mas</p>
            <p className="conocernos">Contanos de que se trata para que la comunidad pueda colaborar</p>

            <form action="">
                <p className="pregunta">1. Nombre del proyecto</p>
                <input
                className="input" 
                
                type="text"
                name="nameProy"
                onChange={this.props.handleChange}
                defaultValue={values.email} />
                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button>
                </div>
            </form>
        </div>
        )


    }
}

export default NameProy