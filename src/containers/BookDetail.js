import React from 'react';
import {connect} from 'react-redux';

class BookDetail extends React.Component{
    render(){
        console.log("Props: ", this.props);
        //const book = this.props.activeBook ? this.props.activeBook.title : "";

        //Alternative:
        if (!this.props.activeBook){
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Book Details:</h3>
                <ul>
                    <li>Title: {this.props.activeBook.title}</li>
                    <li>Pages: {this.props.activeBook.pages}</li>
                </ul> 
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);