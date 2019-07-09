import React, { Component } from 'react';

import NameComponent from './Name';



class App extends Component {
    state = {
        names: [
            'Vitek',
            'Michael'
        ]
    };


    addToHead = name => {
        this.setState(state => ({
            names: [name, ...state.names]
        }))
    };

    addToTail = name => {
        this.setState(state => ({
            names: [...state.names, name]
        }))
    };


    render() {
        const { names } = this.state;

        return (
            <>
                <button
                    onClick={() => {this.addToHead('Alex')}}
                >Add to Head</button>
                <button
                    onClick={() => {this.addToTail('Nike')}}
                >Add to Tail</button>
            <ul>
                {names.map((name, index) => <NameComponent
                    onAddToTaleHandler={this.addToTail}

                    key={name+index}>{name}</NameComponent>)}
            </ul>
            </>
        )
    }
}

export default App;
