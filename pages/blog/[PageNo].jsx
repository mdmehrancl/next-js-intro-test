import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";


export const getStaticPaths  = async () =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json(); 

  const paths = data.map((currentElemment,i) => {
    return{
      params: {
        PageNo:currentElemment.id.toString()  }
    }
  })
  return{
    paths,
    fallback:false
  }
}


export const getStaticProps = async (context) => {
  const id = context.params.PageNo;

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  console.log(data, "data");
  return {
    props: {
      data: data,
    },
  };
};

const PageNo = ({data}) => {
    const router = useRouter()
    const pagenumber = router.query.PageNo;

    console.log(data,"data");
  return (
    <div>
      <Navbar />
      {/* <h2>hello all this is blog {pagenumber} </h2> */}
      <div className="ssr-styles ssr-styles-inside"  key={data.id}>
              <h3>{data.id}</h3>
                <h2 >{data.title}</h2>
                <p>{data.body}</p>
            </div>
    </div>
  );
};

export default PageNo;
