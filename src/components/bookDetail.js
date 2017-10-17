import React, { Component } from 'react';
import {connect} from 'react-redux';
class BookDetail extends Component {
  render() {
    if (!this.props.selectedBook) {
      return (<div>Select a book from left.</div>);
    }
    return (
      <div>
        <div>
          <b>Details For:</b>
        </div>
        <div>
          {this.props.selectedBook.title}
          {this.props.selectedBook.pages}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {selectedBook:state.selectedBook};
}
export default connect(mapStateToProps)(BookDetail);