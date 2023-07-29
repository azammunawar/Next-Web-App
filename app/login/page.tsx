// import Button from "@mui/material/Button";

"use client";
// import { Button } from "react-lib-webpack";
import TextField from "@mui/material/TextField";
import { ThemeContext, useTheme } from "../layout";
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const {theme, setTheme} = useTheme();
  const handleLogin = () => {
   
    // setTheme("dark");
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "cart_01GR922ATWW6CSCCXG9RXVGPXF",
        password: "testinghashs",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        router.push('/');
      });
  };
  return (
    <div className="App">
      <ThemeContext.Consumer>
      {theme => <span>{theme ? "yes": "no"}</span>}
    </ThemeContext.Consumer>
      {/* <form className="form" action="/"> */}
      <div>
        <TextField id="standard-basic" label="Email" variant="standard" />
      </div>
      <div>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
      <button onClick={handleLogin}>text</button>
      {/* <Button variant="contained" onClick={() => Router.push("/")}> */}
      {/* </form> */}
    </div>
  );
}

export default Page;
