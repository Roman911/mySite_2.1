import { EventEmitter } from '../utils/eventEmmiter';

class TaskListStore extends EventEmitter {
  constructor() {
    super();
    this._list = [];
    this._url = 'http://127.0.0.1:4001/list';
  }

  addTask(title) {
    const task = {title};
    const xhr = new XMLHttpRequest();

    xhr.open('POST', this._url);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.send(JSON.stringify(task));

    xhr.addEventListener('readystatechange', () => {
      if(xhr.readyState === 4) {
        if (xhr.status === 200) {
          this._list.push(JSON.parse(xhr.response));
          this.publish('dataChanged', this._list);
        } else {

        }
      }
    })
  }

  deleteTask(id) {
    const xhr = new XMLHttpRequest();

    xhr.open('DELETE', this._url + `/${id}`);

    xhr.send();

    xhr.addEventListener('readystatechange', () => {
      if(xhr.readyState === 4) {
        if (xhr.status === 200) {
          this._list = this._list.filter((task) => {
            return task.id !== id;
          });

          this.publish('dataChanged', this._list);
        } else {

        }
      }
    })
  }

  getList(onError) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', this._url);
    xhr.send();

    xhr.addEventListener('readystatechange',() => {
      console.log(xhr.readyState);
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          this._list = JSON.parse(xhr.response);
          this.publish('dataChanged', this._list);
        } else {
          onError(xhr.status);
        }
      }
    });
  }
}

const taskListStore = new TaskListStore();

export {taskListStore};