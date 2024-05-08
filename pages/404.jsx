import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const ErorMessage = () => {
  const router = useRouter();
  const pagenumber = router.query.PageNo;

  const handleNavigate = () => {
    router.push("/");
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 5000);
  // }, []);

  return (
    <div>
      <div className="error-page-main">
        <h2>404 error page not found</h2>
        <br />
        <a
          onClick={() => {
            handleNavigate()
          }}
        >
          Back to Home page
        </a>
      </div>
      <br />
    </div>
  );
};

export default ErorMessage;
