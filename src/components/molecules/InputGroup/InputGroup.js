import { Component } from "../../../core";
import '../../atoms/Button/Button.js'
import '../../atoms/Input/Input.js'
import { TodoList } from "../../../services/totoList/TodoList.js";

export class InputGroup extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    onSave() {
        if (this.state.inputValue) {
            todoList.createTask({
                title: this.state.value,
                isCompleted: false
            })
        }

    }

    onInput(evt) {
        this.setState((state) => {
            return {
                ...state,
                inputValue: evt.detail.value
            }
        })
    }

    componentDidMount() {
        this.addEventListener('save-task', this.onSave)
        this.addEventListener('custom-input', this.onInput)
    }

    render() {

        return `
        <div class="input-group mb-3">
            <my-input value='${this.state.inputValue}' type="text" class="form-control" placeholder="Add a new task"></my-input>
            <my-button eventtype ='save-task' class="btn btn-outline-primary" type="button">save</my-button>
        </div> 
`

    }
}

customElements.define('my-input-group', InputGroup)