import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import logo from "../../../public/img/logo-ct.png";
import { useState } from "react";

export function SignIn() {
  const signIn = useSignIn();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const submitForm = (event) => {
    event.preventDefault();

    axios
      .post("api/login", formData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          /* if (
          signIn({
            token: res.data.token,
            expiresIn: res.data.expiresIn,
            tokenType: "Bearer",
            authState: res.data.authUserState,
            refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
            refreshTokenExpireIn: res.data.refreshTokenExpireIn, // Only if you are using refreshToken feature
          })
        ) {
          // Only if you are using refreshToken feature
          // Redirect or do-something
        } else {
          //Throw error
        } */
        }
      })
      .catch((ee) => {
        console.log(ee);
      });
  };
  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full bg-blue-gray-50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[22rem] -translate-y-2/4 -translate-x-2/4 bg-blue-gray-50">
          <form onSubmit={submitForm}>
            <CardBody className="flex flex-col gap-4 p-4">
              <div className="m-auto ">
                <img
                  src={logo}
                  alt="logo"
                  className="h-[70px] w-[70px] rounded-full bg-gray-100 p-4"
                />
              </div>
              <h3 className="m-auto text-2xl font-medium text-blue-gray-400">
                Admin Login
              </h3>
              <Input
                type="email"
                label="Email"
                size="lg"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Input
                type={"password"}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                label="Password"
                size="lg"
              />
              <div className="-ml-2.5 text-sm">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-gray-800 py-2 text-sm font-medium text-white"
              >
                LOGIN
              </button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
