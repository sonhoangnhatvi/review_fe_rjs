import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import useHttp from "./hooks/use-http";

function App() {
  const [data, setData] = useState(null);
  const { sendRequest } = useHttp();

  useEffect(() => {
    const configURL = {
      url: "https://6245b93d6b7ecf057c23abe2.mockapi.io/users",
      headers: null,
      body: null,
    };

    const loadingData = (resData) => {
      console.log("resData", resData);
      setData(resData);
    };

    sendRequest(configURL, loadingData);
  }, [sendRequest]);

  return (
    <div className="App">
      {data &&
        data.map((item, index) => {
          return <h1 key={index}>{item.name}</h1>;
        })}
    </div>
  );
}

export default App;
