import React , {Component,Fragment} from 'react'
 
export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue:"",
            list:[]
        }
    }
    render(){
        return(
            <Fragment>
            <div><input 
            value= {this.state.inputValue}
            onChange ={this.handleInputChange.bind(this)}
            /><button>提交</button></div>
            <ul>
                <li>study</li>
                <li>learn</li>
            </ul>
            </Fragment>
        )      
    }
    handleInputChange(e){
        console.log(this)
        // this.state.inputValue = e.target.value
        // console.log(e.target.value)
    }
}