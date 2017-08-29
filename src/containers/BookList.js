import React from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from  'redux';

class BookList extends React.Component{
    renderList(){
        return this.props.books.map(book => (
            <li key={book.title} className="list-group-item">{book.title}</li>  
        ));
    }
    
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    /* Whatever is returned will show up as props */
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch){
    //Binding the actionCreate selectBook to the dispatch,
    //so it flows through the dispatcher anytime it's called.
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}

//Will pass to the BookList component the state and the actionCreater as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);