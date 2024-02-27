import React, { useState } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";

function App() {
  const [displayBio, setDisplayBio] = useState(false);

  const toggleDisplayBio = () => setDisplayBio(!displayBio);

  return (
    <div>
      <h1>Hello!</h1>
      <p>My name is Ashwini. I'm a software engineer.</p>
      <p>I'm always looking forward to working on meaningful projects.</p>
      {displayBio ? (
        <div>
          <p>
            {" "}
            I live in Kaiserslautern, Germany and I am improving my react skills
            with projects
          </p>
          <p> Besides coding, I love reading, hiking, cycling and running</p>
          <div>
            <button onClick={toggleDisplayBio}>Show Less</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={toggleDisplayBio}>Read more</button>
        </div>
      )}
      <hr />
      <Projects />
      <hr />
      <SocialProfiles />
    </div>
  );
}
export default App;
