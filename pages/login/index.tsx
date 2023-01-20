import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { ThemeName } from "../../src/theme";
import { useTheme } from "../_app";

function Login() {
  const { setTheme, theme } = useTheme();
  const Router = useRouter();

  return (
    <div className="App">
      <form className="form" action="/">
        <div>
          <TextField id="standard-basic" label="Email" variant="standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>

        <Button
          variant="contained"
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {/* <Button variant="contained" onClick={() => Router.push("/")}> */}
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login;
