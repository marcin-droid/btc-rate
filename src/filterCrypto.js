import React from 'react';

const filterCrypto = props => {
    return (
        <input placeholder="Przefiltruj" onChange={props.filtr} ref={input => this.filterInput = input}></input>
    )

}

export default filterCrypto