import React, {Component} from 'react';
import Feature from '../Feature/Feature.js';


class FeatureList extends Component {

    render(){
        const features = Object.keys(this.props.features).map((feature,idx) => {
            return <Feature 
                features={this.props.features}
                selected={this.props.selected} 
                feature={feature} 
                key={idx}
                updateFeature={this.props.updateFeature}
            />
        })
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default FeatureList;
