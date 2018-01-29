import { EventEmitter } from '../utils/eventEmmiter';

class PhonesStore extends EventEmitter {
  constructor() {
    super();
    this._list = [];
    this._url = 'http://127.0.0.1:4002/api/v1/phones';
  }

  getList(onError) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', this._url);
    xhr.send();

    xhr.addEventListener('readystatechange',() => {
      console.log(xhr.readyState);
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            const list = JSON.parse(xhr.response).map((item) => {
              item.imgUrl = 'http://127.0.0.1:4002/api/v1/' +item.imgUrl;
              return item;
            });
            console.log(list);
          this._list = list;

          this.publish('dataChanged', this._list);
        } else {
          onError(xhr.status);
        }
      }
    });
  }
}

const phonesStore = new PhonesStore();

export {phonesStore};