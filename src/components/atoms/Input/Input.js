import { Component } from "../../../core";

export class Input extends Component {

    constructor() {
        super();
        this.state = {
            value: "",
        }
    }

    onChange() {

    }

    componentDidMount() {
        this.addEventListener('input', onChange)
    }

    componentWillUpdate(name, oldValue, newValue) {
        if (name === 'value') {
            this.setState((state) => {
                return {
                    ...state,
                    value: newValue,
                }
            })
        }
    }

    render() {
        return `
         <input
            type="${this.props.type}" 
            class="form-control" 
            placeholder="${this.props.placeholder}"
            value="${this.state.value}",
        />
        `
    }


}

customElements.define('my-input', Input)
