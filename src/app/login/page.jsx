"use client";
import { Card, Separator, Checkbox } from "@heroui/react";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast, Zoom } from "react-toastify";
import { LuMail, LuLock } from "react-icons/lu";
import Link from "next/link";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) redirect("/");

    if (error) {
      toast.error("Login Failed!", {
        theme: "colored",
        transition: Zoom,
      });
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/30 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif mb-2">Welcome Back</h1>
        <p className="text-gray-500">Resume your adventure with Wanderlust</p>
      </div>

      <Card className="p-10 w-full max-w-md shadow-lg border-none rounded-sm bg-white">
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">
          {/* Email Field */}
          <TextField isRequired name="email" type="email" className="flex flex-col gap-1">
            <Label className="text-sm font-bold text-gray-700">Email Address</Label>
            <Input 
              placeholder="Enter your email" 
              startContent={<LuMail className="text-gray-400" />}
              className="bg-gray-50"
            />
            <FieldError />
          </TextField>

          {/* Password Field */}
          <TextField isRequired name="password" type="password" className="flex flex-col gap-1">
            <Label className="text-sm font-bold text-gray-700">Password</Label>
            <Input 
              placeholder="Enter your password" 
              startContent={<LuLock className="text-gray-400" />}
              className="bg-gray-50"
            />
            <FieldError />
          </TextField>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <Link href="#" className="text-sm text-cyan-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button 
            className="w-full bg-[#17A2B8] text-white rounded-sm h-12 font-medium mt-2" 
            type="submit"
          >
            Sign In
          </Button>
        </Form>

        {/* Separator */}
        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <span className="relative bg-white px-4 text-sm text-gray-500">
            Or continue with
          </span>
        </div>

        {/* Social Login */}
        <Button
          onClick={handleGoogleSignin}
          variant="bordered"
          className="w-full rounded-sm border-gray-200 h-12 font-medium text-gray-700"
        >
          <FcGoogle size={20} /> Sign Up With Google
        </Button>

        {/* Footer Link */}
        <p className="text-center mt-8 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-cyan-500 font-bold hover:underline">
            Sign Up
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;