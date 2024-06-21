import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: () => {
          toast.success("User login Successfully", {
            position: "top-center"
          });
          // redirect to dashboard
          navigate("/dashboard/home");
        }
    })

    const handleLogin = () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        // console.log("Data", {email, password});

        if(!email || !password) {
            return toast.warning("Email and Password is required", {
                position: "top-center"
            });
        }

        mutation.mutate({ email, password })
        

        // make a server call. 
    }
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link to={"/"} className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
              </div>
              <Input ref={passwordRef} id="password" type="password" required />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to={'/auth/register'} className="underline">
            Sign up
          </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;
