import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="card shadow-lg  p-3 mb-5 bg-white rounded">
          <div className="card-header">
            <h4> App Components (Root)</h4>
          </div>
          <div className="card-body">
           <Login/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;