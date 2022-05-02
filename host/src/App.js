import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteApp = React.lazy(
  // @ts-ignore
  () => import("remote/Button")
);

export const App = () => (
  <>
    <h1>Host!</h1>
    <ErrorBoundary>
      <RemoteApp />
    </ErrorBoundary>
  </>
);
export default App;
