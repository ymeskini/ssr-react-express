type Params = {
  meta: string;
  body: string;
  style: string;
  preloadedState: string;
  nonce: string;
  scripts: string;
};

const escape = (str: string) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

export const renderFullPage = ({ meta, body, style, scripts, preloadedState, nonce }: Params) => {
  return `<!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="PEX">
        ${meta}
        ${style}
      </head>
      <body>
        ${body}
        <script nonce="${nonce}" id="initial-data" type="text/plain" data-json="${escape(
    preloadedState
  )}"></script>
        ${scripts}
      </body>
    </html>
  `.trim();
};
