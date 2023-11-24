import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await NextDocument.getInitialProps(ctx)
  return { ...initialProps, nonce: ctx.req?.headers['x-nonce'] };
}

export default function Document({nonce}: {nonce: string | undefined}) {
  return (
    <Html lang="en">
      <Head nonce={nonce} />
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  )
}
