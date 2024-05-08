import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();
  console.log(data, "data");
  return {
    props: {
      data: data,
    },
  };
};

export default function Home({ data }) {
  console.log(data, "date");
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="hell will become heaven if you play with fire"
        />
      </Head>
      <Navbar />
      {data.slice(0, 5).map((e, i) => {
        return (
          <>
            <div className="ssr-styles" key={e.id}>
              <h3>{e.id}</h3>
              <Link href={`/blog/${e.id}`}>
                <h2 >{e.title}</h2>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
}
