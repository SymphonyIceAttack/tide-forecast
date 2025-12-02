# Screenshot Verbose Setting

When using `mcp_chrome-devtools_take_screenshot {}`, always set `verbose: false` as the default to get clean, concise output instead of verbose a11y tree structures.

Example:
```javascript
mcp_chrome-devtools_take_screenshot({
  "verbose": false,
  "fullPage": true
});
```

This provides cleaner output without unnecessary accessibility tree information.