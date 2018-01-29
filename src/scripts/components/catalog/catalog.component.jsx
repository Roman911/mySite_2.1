import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import { phonesStore } from '../../stores/phones.store';

class CatalogComponent extends Component {
  constructor() {
    super();
    this.state = {
      phones: []
    };
  }

  componentDidMount() {
    phonesStore.subscribe('dataChanged', (phones) => {
      this.setState((state) => {
        state.phones = phones;
        return state;
      })
    });

    phonesStore.getList();
  }

  render () {
    const phones = this.state.phones.map((item, i) => {
      return <div className='catalog__item' key={i}>
        <img src={item.imgUrl} alt=''/>
        <h2 className='catalog__title'>{item.name}  {item.price} $</h2>
      </div>
    });
    return <div className='catalog'>
      {phones}
    </div>
  }
}

export {CatalogComponent};