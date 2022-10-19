import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/introduce" className="btn btn-ghost normal-case text-xl">
          😎 멋진 개발 세탁기 (Awesome Dev Laundry)
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/reservation">같이놀기</Link>
          </li>
          <li>
            <Link to="/log">개발로그</Link>
          </li>
          <li>
            <Link to="/introduce">자기소개</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
