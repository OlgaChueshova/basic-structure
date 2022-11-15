import { Component } from "../../../core";
import '../../atoms/Button'
import '../../atoms/Input'

export class InputGroup extends Component {
    render() {

        return `
        <div class="input-group mb-3">
        <my-input type="text" class="form-control" placeholder="Add a new task"></my-input>
        <my-button  = 'eventtype' class="btn btn-outline-primary" type="button">save</my-button>
    </div> 
`

    }
}

customElements.define('my-input-group', InputGroup)