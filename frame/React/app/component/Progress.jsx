import React from 'react';
import ReactDOM from 'react-dom';

export default class Progress extends React.Component {
    constructor(){
        super();
        this.state = {
            defaultValue:0,
            width:0
        };
    }
    update(value){
        if(this.state.defaultValue !== this.props.value){
            this.setState({
                defaultValue: this.props.value,
                width: value * this.refs.slide.offsetWidth / 100
            });
        }
    }
    move(e) {
        var drag = false;
        var end = () => {
            this.refs.slide.removeEventListener('touchend', end);
            this.refs.slide.removeEventListener('mouseup', end);
            this.refs.slide.removeEventListener('mouseleave', end);
            this.refs.slide.removeEventListener('touchmove', move);
            this.refs.slide.removeEventListener('mousemove', move);
        };
        var move = e => {
            var pointX = (e || e.touches && e.touches[0]).clientX || 0;
                var percent = Math.floor((pointX - this.refs.slide.offsetLeft - 2.5) * 10000 / this.refs.slide.offsetWidth) / 100;
                if (this.props.onChange) {
                    this.props.onChange(percent);
                }
                this.update(percent);
        };

        move(e);
        this.refs.slide.addEventListener('touchend', end);
        this.refs.slide.addEventListener('mouseup', end);
        this.refs.slide.addEventListener('mouseleave', end);
        
        this.refs.slide.addEventListener('touchmove', move);
        this.refs.slide.addEventListener('mousemove', move);
    }
    render(){
        setTimeout(()=>this.update(this.props.value),100);
        return (
            <div ref="slide" className="component-progress" onTouchStart={e=>this.move(e)} onMouseDown={e=>this.move(e)}>
                <div className="progress" style={{width:this.state.width}}></div>
            </div>
        );
    }
    
}