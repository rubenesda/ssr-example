const html = ({ body }: { body: string }):string => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
    <script src="bundle.js" defer></script>
  </html>
`;

export default html;