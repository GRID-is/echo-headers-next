export default function Home({headers, timestamp}: {headers: any, timestamp: number}) {
  return (
    <>
      <pre>
        Has referer: {headers['referer'] ? 'Yes' : 'No'}
        <br />
        The time is: {new Date(timestamp).toISOString()}
        <br />
        <br />
        Here are the headers:<br />
        {JSON.stringify(headers, null, 2)}
      </pre>
    </>
  )
}

export async function getServerSideProps(ctx: any) {
  return {
    props: { headers: ctx.req.headers, timestamp: Date.now() },
  };
}