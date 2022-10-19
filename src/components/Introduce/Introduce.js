import React from "react";

function Introduce() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Introduce</h2>
          <p>10월 18일</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">신청하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
