import React, {Component} from 'react'
import Welcome from './Welcome';

class PitchDetails extends Component{
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
    const {values} = this.props
    
    return (
    <div>
        <Welcome/>
        <form action="">
            <p className="pregunta">4. Cual es tu elevator pitch? </p>
            <textarea 
            className="textarea"
            type="text"
            name='pitch'
            onChange={this.props.handleChange}
            defaultValue={values.pitch}/> 
            <div>
                <button className="back" onClick={this.back} >Ver pregunta anterior</button>
                <button className="continuar" onClick={this.saveAndContinue} >Siguiente pregunta</button>
            </div>
        </form>
    </div>
    )
    
}
}

export default PitchDetails