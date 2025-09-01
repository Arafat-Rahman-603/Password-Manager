import { useEffect, useRef, useState } from "react";
import ConItemes from "./components/ConItemes";
import Footer from "./components/Footer";
import Inputs from "./components/Inputs";
import Navber from "./components/Navber";

function App() {
  const urlRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [data, setData] = useState([]);


    const handleDelete = async (index) => {
    let res = await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: data[index].id }),
    });
    setData(data.filter((_, i) => i !== index));
  };



  const getDatas = async () => {
    let req = await fetch("http://localhost:3000/");
    let res = await req.json();
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    getDatas();
  }, []);
  const handleData = async () => {
    const url = urlRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (url === "" || username === "" || password === "") {
      return alert("Please Fill All The Fields");
    }
    let res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, username, password }),
    });
    setData([{ url, username, password }, ...data]);

    urlRef.current.value = "";
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <>
      <Navber />
      <Inputs
        urlRef={urlRef}
        usernameRef={usernameRef}
        passwordRef={passwordRef}
        handleData={handleData}
      />
      <ConItemes data={data} setData={setData} handleDelete={handleDelete} />
      <Footer />
    </>
  );
}

export default App;
