import React,{Component} from 'react';
import {connect} from 'react-redux';
import selectBook from '../actions';
class BookList extends Component {
  constructor(props) {
    super(props);
    this.onClickHelp = this.onClickHelp.bind(this);
  }
  onClickHelp=(book)=>{
    return this.props.selectBook(book);
  }

  renderList(book) {
    console.log(this);
    return (
      <li key={book.title} onClick={()=>this.onClickHelp(book)}>{book.title}</li>
    );
  }
  render() {
    return (
            <ul>
               {this.props.books.map(this.renderList)}
            </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    books:state.books
  };
}
export default connect(mapStateToProps,{selectBook})(BookList);