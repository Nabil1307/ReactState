import React, { Component } from 'react';
import SingleItem from './SingleItem';

class List extends Component {

    constructor(props) {
        super(props) ;
        console.log(this.props) ;
       
    }
    
    render() {
        return (
          <div>
            <div>
              {this.props.articles.map((elt) => (
                <SingleItem key={elt.id} elt={elt} 
                incrementQuatity={this.props.incrementQuatity}
                decrementQuatity={this.props.decrementQuatity}
                deleteArticle={this.props.deleteArticle}
                handleTotalIncrement={this.props.handleTotalIncrement}
                handleTotalDecrement={this.props.handleTotalDecrement}

                />
              ))}
            </div>
            <div>
              <h1>Total sum:</h1>
              <h1>{this.props.sum}</h1>
              <h1>$</h1>
            </div>
          </div>
        );
    }
}
export default List;