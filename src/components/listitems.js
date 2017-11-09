import React from 'react';

const ItemsList = (props) => {
    const line = (props.myProp).map((name, itemno) => {
        return <li key={itemno} onClick = {() => console.log(itemno)}>{name.last}, {name.first}</li>;
    });
    
    return (
        <ul>
            {line}
        </ul>
    );
};

export default ItemsList;