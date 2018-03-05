import React, { Component } from 'react'
import { imgItems } from "./slide.js";
import { Slide } from "./slid.jsx";

const leng = imgItems.slice();

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            length: leng.length
        }
    }

    next() {
        if (this.state.currentIndex < this.state.length - 1) {
            this.setState({ currentIndex: this.state.currentIndex + 1 })
        }
        else {
            this.setState({ currentIndex: 0 })
        }
    }

    prev() {
        if (this.state.currentIndex > 0) {
            this.setState({ currentIndex: this.state.currentIndex -1 })
        }
        else {
            this.setState({ currentIndex: this.state.length - 1 })
        }
    }

    render() {
        const slid = imgItems.map((item, index) => {
           return <div key={index}>
               <Slide image={item.imgUrl} description={item.description} show={this.state.currentIndex === index} />
               </div>
        });
        return (
            <div className="slideShow">
                <a className="previous" onClick={() => this.prev()}>prev</a>
                <div className="slider">
                    {slid}
                </div>
                <a className="next" onClick={() => this.next()}>next</a>
            </div>
        );
    }
}

export { Slider };