import React from "react";
import ReactDOM from 'react-dom';
import Head from "./head.js";
import Nav from './nav.js';
import "./index.css";
import logoAlt from "./static/img/logo-alt.png";
import Plot from 'react-plotly.js';


function App() {

  return (
    <html>
      <Head />
      <body>
        <Nav />
        <Plot
          data={[
            {
              x: [
                "White",
                "Hispanic",
                "Black",
                "Asian",
                "Native American",
                "Biracial",
              ],
              y: [46.7, 29.1, 15.2, 8.9, 0.1, null],
              type: "scatter",
              mode: "markers",
              marker: {
                color: "blue",
                symbol: "square-dot",
                opacity: 0.8,
                size: 12,
                line: {
                  color: "lightgrey",
                  width: 1,
                },
              },
              name: "Police",
              textposition: "top center",
              textfont: {
                family: "Raleway, sans-serif",
              },
            },

            {
              x: [
                "White",
                "Hispanic",
                "Black",
                "Asian",
                "Native American",
                "Biracial",
              ],
              y: [32.1, 29.1, 24.3, 13.9, 0.4, null],
              type: "scatter",
              mode: "markers",
              marker: {
                color: "rgba(226, 106, 106, 0.5)",
                symbol: "circle-dot",
                size: 12,
                line: {
                  color: "lightgrey",
                  width: 1,
                },
              },
              name: "Community",
              textposition: "top center",
              textfont: {
                family: "Open Sans, sans-serif",
              },
            },
          ]}
          layout={{
            template: {
              data: {},
              layout: {
                title: "Watermark Template",
                // items with a `name` attribute in template.images will be added to any
                // plot using this template
                images: [
                  {
                    name: "watermark",
                    source:
                      logoAlt,
                    xref: "paper",
                    yref: "paper",
                    x: 0.85,
                    y: 1,
                    sizex: 0.15,
                    sizey: 0.15,
                    sizing: "stretch",
                    opacity: 0.2,
                    layer: "below"
                  },
                ],
              },
            },

            xaxis: {},
            yaxis: {
              range: [0, 60],
            },
            legend: {
              y: 0.5,
              yref: "paper",
              font: {
                family: "Open Sans, sans-serif",
                size: 15,
                color: "grey",
              },
            },
            title: "Racial Parity Reflection",
          }}
        />
      </body>
    </html>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));