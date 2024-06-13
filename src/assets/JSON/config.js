const fileStructure = [
  {
    type: "folder",
    name: "node_modules",
    children: [
      { type: "file", name: "logo.png" },
      { type: "file", name: "code.jpeg" },
    ],
  },
  {
    type: "folder",
    name: "src",
    children: [
      {
        type: "folder",
        name: "assets",
        children: [
          { type: "file", name: "logo.png" },
          { type: "file", name: "code.jpeg" },
        ],
      },
      {
        type: "folder",
        name: "components",
        children: [
          { type: "file", name: "Header.tsx" },
          { type: "file", name: "Footer.tsx" },
        ],
      },
      {
        type: "file",
        name: "App.tsx",
      },
      {
        type: "file",
        name: "index.css",
      },
      {
        type: "file",
        name: "eslintrc.js",
      },
    ],
  },
  {
    type: "folder",
    name: "public",
    children: [{ type: "file", name: "index.html" }],
  },
];

export default fileStructure;
