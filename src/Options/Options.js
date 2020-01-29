import React,{Component} from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Options extends Component {
    render(){
        const itemHash = slugify(JSON.stringify(this.props.item));
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(this.props.feature)}
                    checked={this.props.name === this.props.selected[this.props.feature].name}
                    onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {this.props.name} ({USCurrencyFormat.format(this.props.cost)})
                </label>
            </div>    
          )
    }
}


export default Options;

