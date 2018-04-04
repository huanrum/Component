import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {

    propTypes(){
        PropTypes.shape({
            id: PropTypes.string
        });
        React.renderToString(<div></div>);
    }

    render(){
        return (
            <button className="component-button">{this.props.children}</button>
        );
    }

    componentWillReceiveProps(){    
        console.log('componentWillReceiveProps');
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    
    
}

