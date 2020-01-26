import React from 'react';

const CryptoList = (props) => {
    
    const listItems = props.list.map((item) =>
  <li key={item.currency}>Last rate: <span className={item.colorClass}>{item.last}</span> {item.currency} [{item.symbol}]</li>);

    return <ul>
        {listItems}
    </ul>
}

export default CryptoList