import React from "react";
import Theme from "./theme";

export default () => {
  return (
    <style>
      {`
        body {
          margin: 0;
          font-size: 1rem;
          color: ${Theme.colors[0].light};
          font-family: ${Theme.fonts.body};
        }
        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: ${Theme.fonts.heading} !important;
        }
        a{
          text-decoration: none;
          color: ${Theme.colors[0].light};
        }
        a:hover {
          color: ${Theme.colors[0].dark};
        }

        /* Works on Firefox */
        * {
            scrollbar-width: thin;
            scrollbar-color: ${Theme.colors[0].dark2} ${Theme.colors[0].dark};
        }
        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
            width: 12px;
        }
        *::-webkit-scrollbar-track {
            background: ${Theme.colors[0].dark};
        }
        *::-webkit-scrollbar-thumb {
            background-color: ${Theme.colors[0].dark2};
            border-radius: 20px;
            border: 3px solid ${Theme.colors[0].dark};
        }
    `}
    </style>
  );
};
