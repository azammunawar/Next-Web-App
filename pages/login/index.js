import Link from "next/link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Login() {
  return (
    <div className="App">
      <form className="form" action="/">
        <div>
          <TextField id="standard-basic" label="Email" variant="standard" />
        </div>
        <div>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login;
