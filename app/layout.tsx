import React from "react";
import StoreProvider from "./GlobalRedux/Provider";

const RootLayout: React.FC<any> = ({ children }) => {
  return (
    <StoreProvider>
      <html lang="ru">
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}

export default RootLayout

