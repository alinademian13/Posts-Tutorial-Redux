import React from 'react';
import {connect} from 'react-redux';

//coonecting state.articles with the component
const mapStateToProps = state => {
    return {articles: state.articles};
};

//stateless component
const ConnectedList = ({articles}) => (
    <ul className="list-group list-group-flash">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

//List = the result of connecting the stateless component ConnectedList with the Redux store
const List = connect(mapStateToProps) (ConnectedList);

export default List;

