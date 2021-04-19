import React from "react";
import AppRouter from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <AppRouter />
      <GlobalStyles />
    </HelmetProvider>
  );
};

export default App;
