import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img source="https://avatars.githubusercontent.com/u/25967644?v=4" alt="avatar of user" />
          <h1>Matheus Silva</h1>
          <h3>Username: </h3>
          <span>matusilva</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Stareds</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default App;
