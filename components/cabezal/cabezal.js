import Head from "next/head";

export default function Cabezal(props){
    return (
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
}