import React, { Component } from 'react';
import { Window } from "./../window-task/window-task.jsx";
import { Foto } from "./foto.jsx";
import './gallery.styl';

class Gallery extends Component {

  render() {
    return <section className="gallery">
      <div className="page-content-L">
        < Window />
        < Foto />
      </div>
    </section>;
  }
}

export { Gallery };