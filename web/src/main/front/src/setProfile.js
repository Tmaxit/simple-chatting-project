import React, { Component } from 'react';

class SetProfile extends Component {
    state = {
        name: '',
        color: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    changeColor = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <label> Color </label>
                <select ref="dropDownColor" 
                onChange={this.changeColor}>
                    <option value="aqua" style={{ color: 'aqua' }}>Blue</option>
                    <option value="red" style={{ color: 'red' }}>Red</option>
                    <option value="orange" style={{ color: 'orange' }}>Orange</option>
                    <option value="green" style={{ color: 'green' }}>Green</option>
                </select>
                <button>click</button>
                <div>{this.state.name} {this.state.color}</div>
            </form>
        )
    }
}

export default SetProfile; // 이걸로 컴포넌트 이름을 설정?