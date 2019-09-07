import React, {Component} from 'react'
import Welcome from './Welcome'

class UserDetails extends Component{
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
            <Welcome/>
            <form action="">
                <p  className="pregunta">2. Coloca tu nombre de usuario</p>
                <input 
                className="input"
                type="text"
                name='user'
                onChange={this.props.handleChange}
                defaultValue={values.user} />
                <div>
                    <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                    <button className="continuar" onClick={this.saveAndContinue}>Siguiente Pregunta</button>
               </div>
            </form>
        </div>
        )


    }
}

export default UserDetails