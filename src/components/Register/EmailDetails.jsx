import React, {Component} from 'react'
import Welcome from './Welcome'

class EmailDetails extends Component{
    constructor(props){
        super(props)
   
        this.saveAndContinue = this.saveAndContinue.bind(this)
      } 
   
    
    saveAndContinue(e){
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const {values}=this.props
        
        return(
        <div class="content">
            <div class="center container">
                <div style={{marginBottom: "10px"}}>
                    Vale por un logo    
                </div>
                <Welcome/>
                <form action="">
                    <p>1. Confirmanos tu email</p>
                    <input type="text" class="input" name="nombre" defaultValue={values.email} onChange={this.props.handleChange} placeholder="UX designer, FullStack develoer"></input>
                    <div class="controles">
                        {/* <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button> */}
					    <div class="button-outline">Atras</div>
					    <div class="button">Continuar</div>
                    </div>
                </form>
            </div>
        </div>
        )


    }
}

export default EmailDetails