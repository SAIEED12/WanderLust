"use client";
import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";
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
import { toast, Zoom } from "react-toastify";
import { LuUser, LuMail, LuLock } from "react-icons/lu";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
    });

    if (data) redirect("/");

    if (error) {
      toast.error("SignUp Failed!", {
        transition: Zoom,
        theme: "colored",
      });
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/50 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif mb-2">Create Account</h1>
        <p className="text-gray-500">Start your adventure with Wanderlust</p>
      </div>

      <Card className="p-8 w-full max-w-md shadow-lg border-none rounded-sm bg-white">
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">
          <TextField isRequired name="name" type="text" className="flex flex-col gap-1">
            <Label className="text-sm font-bold text-gray-700">Full Name</Label>
            <Input 
              placeholder="Enter your name" 
              startContent={<LuUser className="text-gray-400" />}
              className="bg-gray-50"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="email" type="email" className="flex flex-col gap-1">
            <Label className="text-sm font-bold text-gray-700">Email Address</Label>
            <Input 
              placeholder="Enter your email" 
              startContent={<LuMail className="text-gray-400" />}
              className="bg-gray-50"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="password" type="password" className="flex flex-col gap-1">
            <Label className="text-sm font-bold text-gray-700">Password</Label>
            <Input 
              placeholder="Create a password" 
              startContent={<LuLock className="text-gray-400" />}
              className="bg-gray-50"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="confirmPassword" type="password" className="flex flex-col gap-1">
            <Label className="text-sm font-bold text-gray-700">Confirm Password</Label>
            <Input 
              placeholder="Confirm your password" 
              startContent={<LuLock className="text-gray-400" />}
              className="bg-gray-50"
            />
            <FieldError />
          </TextField>

          <Button 
            className="w-full bg-[#17A2B8] text-white rounded-sm h-12 font-medium mt-2" 
            type="submit"
          >
            Create Account
          </Button>
        </Form>

        <div className="relative my-8">
          <Separator />
          <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-4 text-sm text-gray-500">
            Or sign up with
          </span>
        </div>

        <Button
          onClick={handleGoogleSignin}
          variant="bordered"
          className="w-full rounded-sm border-gray-200 h-12 font-medium"
        >
          <FcGoogle size={20} /> Sign Up With Google
        </Button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-500 font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUpPage;