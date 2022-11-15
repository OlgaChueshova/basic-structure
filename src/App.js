import { Component } from './core'
import './components/Button/Button'
import './components/atoms/Input/Input'

export class App extends Component {

    render() {
        return `
        <div class='container mt-5'>
            <div class="input-group mb-3">
                <my-input type="text" class="form-control" placeholder="Add a new task"></my-input>
                <my-button  = 'eventtype' class="btn btn-outline-primary" type="button">save</my-button>
            </div>
        </div>
        `
    }
}

customElements.define('my-app', App)