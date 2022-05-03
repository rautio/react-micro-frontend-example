import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid rgb(132, 14, 93)",
      background: "rgba(132, 14, 93, 0.3)",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div style={{ background: "rgba(76, 175, 80, 0.3)" }}>
    <h1>This is the Host!</h1>
    <h2>Remote App:</h2>
    <RemoteWrapper>
      <RemoteApp />
    </RemoteWrapper>
    <h2>Remote Button:</h2>
    <RemoteWrapper>
      <RemoteButton />
    </RemoteWrapper>
    <br />
    <a href="http://localhost:4000">Link to Remote App</a>
  </div>
);
export default App;
