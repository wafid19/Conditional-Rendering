import React from "react";
import First from './First'
import Secend from "./Secend";


class Main extends React.Component{
     state = {
        agreement: false
     }

    handleSubmit = event => {
        event.preventDefult()

        event.target.reset();
        this.setState({agreement: false})
    }

    handleAgreement = event =>{
    
        this.setState({
            agreement: event.target.checked
        });
        
      };

    render(){
        let content="";

        if(this.state.agreement){
            content = <First/>
        }else{
            content = <Secend/>
        }

        const {agreement} = this.state
        return(
          <>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" name="agreement" checked={agreement} role="switch" onChange={this.handleAgreement} id="flexSwitchCheckDefault"/>
        </div>

          <div>
                {content}
          </div>
          
          </>
        )
    }
}

export default Main