import React, {Component} from 'react';

class Searchbox extends Component {
  render() {
    return (
        <div className="level-item">
          <p className="control has-addons">
            <input value={this.props.searchString} onChange={this.props.onChange} className="input" type="text"
                   placeholder="Find a post" />
          </p>
        </div>
    )
  }
}

export default Searchbox;