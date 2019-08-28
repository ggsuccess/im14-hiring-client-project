import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  <div className="origin">
    <p>어플리케이션을 골라주세요.</p>
    <Link to="/user">
    <button id="todoBtn" onClick="">투두</button>
    </Link>
    <Link to="/board">
    <button id="boardBtn">게시판</button>
    </Link>
  </div>
}

export default Home;