module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "prismjs",
      {
        "languages": [
          "javascript",
          "css",
          "markup"
        ],
        "plugins": [
          "line-numbers",
          "show-language",
          "copy-to-clipboard"
        ],
        "theme": "tomorrow",
        "css": true
      }
    ]
  ]
}