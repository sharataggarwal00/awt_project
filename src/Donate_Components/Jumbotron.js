import React from 'react';
import '../index.css';

const Jumbotron = () => {
    return (
        <div class="jumbotron p-4 p-md-5 jumbotron-fluid text-white rounded" style={{backgroundImage: "url(images/img1.jpg)"}}>
            <div class="col-md-7 px-50">
                <h1 class="display-4 font-italic">“Alone we can do so little; together we can do so much” </h1>
                <p class="lead my-3">-Helen Keller</p>
            </div>
        </div>
    )
}
export default Jumbotron;