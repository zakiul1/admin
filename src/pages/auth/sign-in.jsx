import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import logo from "../../../public/img/logo-ct.png";
export function SignIn() {
  const onSubmit = (e) => {
    e.preventDefault;
    return console.log("hi");
  };
  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full bg-blue-gray-50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[22rem] -translate-y-2/4 -translate-x-2/4 bg-blue-gray-50">
          <form onSubmit={onSubmit}>
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
              <Input type="email" label="Email" size="lg" />
              <Input type="password" label="Password" size="lg" />
              <div className="-ml-2.5 text-sm">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <button
                type="button"
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
