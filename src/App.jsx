import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Experience from "./Experience";
import Data from "./data";
// const url = "https://course-api.com/react-tabs-project";
function App() {
  const log = console.log;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(Data);

  

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const info = await response.json();
  //     setLoading(false);
  //     setData(info);
  //   } catch (error) {
  //     setLoading(false);
  //     log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="h-screen flex items-center justify-center">
  //       <Loading />
  //     </div>
  //   );
  // }

  return <Experience data={data} />;
}

export default App;
