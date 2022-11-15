import { Component } from "../../../core";
import { debounce } from "../../../utils/debounce.js";

export class Input extends Component {

    constructor() {
        super();
        this.state = {
            value: "",
        }

        this.onInput = this.onInput.bind(this);
    }

    onInput(evt) {

        this.dispatch('custom-input', {value: evt.target.value})
        // this.setState((state), () => {
        //     return {
        //         ...this.state,
        //         value: evt.target.value
        //     }
        // })
    }

    static get observedAttributes() {
        return ['type', 'value', 'placeholder'];
    }

    componentDidMount() {
        this.addEventListener('input', debounce(this.onInput, 300))
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
