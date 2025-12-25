export default {
  plugins: [
    {
      name: "removeAttrs",
      params: { attrs: "(stroke|fill)" },
    },
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          { fill: "none" },
          { stroke: "currentColor" },
          
        ],
      },
    },
  ],
};

