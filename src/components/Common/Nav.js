import React from "react";

function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          😎 멋진 개발 세탁기 (Awesome Dev Laundry)
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex="0">
            <a>Main</a>
          </li>
          <li>
            <a>개발로그</a>
          </li>
          <li>
            <a>자기소개</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
