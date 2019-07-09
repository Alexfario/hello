import React from 'react';



class NameComponent extends React.Component {
    componentDidMount() {
        console.log(`Mounted with ${this.props.children}`)
    };

    componentDidUpdate(prevProps) {
        console.log(`Updated from ${prevProps.children} to ${this.props.children}`)
    }

    render() {
        const { onAddToTaleHandler } = this.props;

        const secretName = 'AntiHero';

        return <li onClick={() => {onAddToTaleHandler(secretName)}}>{this.props.children}</li>;
    }
}


export default NameComponent
