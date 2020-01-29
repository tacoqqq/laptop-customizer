import React, {Component} from 'react';
import Options from '../Options/Options.js';
import './Feature.css';


class Feature extends Component {

    render(){
        const options = this.props.features[this.props.feature].map((item,idx) => 
            <Options 
                key={idx}
                features={this.props.features}
                selected={this.props.selected} 
                feature={this.props.feature} 
                item={item}
                name={item.name} 
                cost={item.cost}
                updateFeature={this.props.updateFeature}
            />)
        const featureHash = this.props.feature + '-' + this.props.idx;
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {options}
            </fieldset>
        )
    }
}

export default Feature;
