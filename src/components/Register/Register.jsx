"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Spinner } from "../ui/spinner";
import { BASE_URL } from "@/lib/base_url";

export default function Register() {
  const [state, setState] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";
  const { login } = useAuth();
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegister = async (data) => {
    const registerPayload = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const loginPayload = {
      email: data.email,
      password: data.password,
    };

    if (state === "register") {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/register`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(registerPayload),
        });
        const data = await res.json();
        if (!res.ok) {
          throw data;
        }
        if (data.success) {
          login(data?.data);
          toast.success(data.message);
          setLoading(false);
          router.replace(redirectPath);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginPayload),
        });
        const data = await res.json();
        if (!res.ok) {
          throw data;
        }
        if (data.success) {
          login(data?.data);
          toast.success(data.message);
          setLoading(false);
          router.replace(redirectPath);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col items-center justify-center space-y-2 p-10 bg-white rounded-md shadow lg:w-1/3"
        >
          {state === "register" ? (
            <h2 className="font-bold text-[21px] lg:text-4xl text-primary pb-5">
              {" "}
              Welcome To Bitss Crypto Audit
            </h2>
          ) : (
            <h2 className="font-bold text-xl lg:text-4xl text-primary pb-5">
              Welcome Back
            </h2>
          )}
          {state === "register" && (
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Full Name</FieldLabel>
                  <Input
                    {...field}
                    type="text"
                    placeholder="john doe"
                    className="h-12"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          )}
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  {...field}
                  type="email"
                  placeholder="example@gmail.com"
                  className="h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <div className="w-full relative">
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Must be at least 6 characters",
                },
              }}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="******"
                    className="h-12"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {showPassword ? (
              <span
                onClick={() => setShowPassword((perv) => !perv)}
                className="absolute top-12 right-3"
              >
                <EyeOffIcon size={14} />
              </span>
            ) : (
              <span
                onClick={() => setShowPassword((perv) => !perv)}
                className="absolute top-12 right-3"
              >
                <EyeIcon size={14} />
              </span>
            )}
          </div>

          {state === "register" && (
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Password does not match",
              }}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>Confirm Password</FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    placeholder="******"
                    className="h-12"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          )}

          {state === "login" ? (
            <Button type="submit" className="w-full">
              {loading ? (
                <>
                  {" "}
                  Logging <Spinner />
                </>
              ) : (
                " Login"
              )}
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              {loading ? (
                <>
                  {" "}
                  Sign up <Spinner />
                </>
              ) : (
                " Sign up"
              )}
            </Button>
          )}
          {state === "login" ? (
            <p className="text-muted-foreground text-sm text-right">
              Don’t have an account{" "}
              <span
                onClick={() => setState("register")}
                className="font-bold cursor-pointer"
              >
                Register
              </span>{" "}
            </p>
          ) : (
            <p className="text-muted-foreground text-sm text-right">
              Already have an account? Please{" "}
              <span
                onClick={() => setState("login")}
                className="font-bold cursor-pointer"
              >
                Login
              </span>
            </p>
          )}
        </form>
      </div>
    </>
  );
}
