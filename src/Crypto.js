import React, {Component} from 'react';
import axios from 'axios';
import CryptoList from './CryptoList';

class Crypto extends Component {
    constructor(){
        super();
        this.state= {
            crypto: [],
            filteredCrypto: []
        }
    }
    componentDidMount(){
        this.getData();
        this.timer = setInterval(this.getData, 4000);
    }
    getData = () => {
        axios
        .get(`https://blockchain.info/pl/ticker`)
        .then(response => {
            let cryptoArray = [];
            let i = 0;
            let bufor;
            for(let key in response.data)
            {    
                if (this.state.crypto[i]!==undefined){bufor = this.state.crypto[i].last}

                let cryptoObj = {
                    last: response.data[key].last,
                    symbol: response.data[key].symbol,
                    currency: key,
                    colorClass: bufor<response.data[key].last ? 'green':(bufor>response.data[key].last ? 'red':'blue')
                }
                i++;
                cryptoArray.push(cryptoObj)
            }
            this.setState({
                crypto: cryptoArray,
                filteredCrypto: cryptoArray
            })
            this.filtrCrypto();
        })
        
    }

    filtrCrypto = () => {
        let filtered = this.state.crypto.filter(el=>{
          return el.currency.toUpperCase().includes(this.filterInput.value.toUpperCase());
        })
       this.setState({filteredCrypto: filtered})
    }
    
render(){
    return (
        <div>   
            <h2>Crypton</h2>
            <input placeholder="Przefiltruj" onChange={this.filtrCrypto} ref={input => this.filterInput = input}></input>
            <CryptoList list={this.state.filteredCrypto}/>
        </div>
        )
    } 
}

export default Crypto