"use client";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useAuth } from "@/hooks/useAuth";
import { BASE_URL } from "@/lib/base_url";

export default function CheckBiitssCustomer({
  onDiscountVerified,
  open,
  setOpen,
}) {
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      bitss_customer: true,
      bitss_email: "",
    },
  });
  const bitss_customer = watch("bitss_customer");

  useEffect(() => {
    if (bitss_customer === true) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [bitss_customer, setOpen]);

  const handleCheck = async (value) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/order/apply-discount/${value?.bitss_email}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        },
      );
      const data = await res.json();

      if (!res.ok) {
        throw data;
      }

      if (data.success) {
        toast.success(data?.message);
        setOpen(false);
      }
      // if (!data.success) {
      //   toast.error("No Discount with this email");
      // }

      if (data.success) {
        onDiscountVerified(data?.data);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={() => {}}>
        <DialogContent
          className="[&>button]:hidden"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <form onSubmit={handleSubmit(handleCheck)} className="space-y-4">
              <Controller
                name="bitss_customer"
                control={control}
                rules={{ required: "Select you are bitss customer or not" }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Are you BITSS customer?</FieldLabel>
                    <RadioGroup
                      value={field.value ? String(field.value) : false}
                      onValueChange={(val) => field.onChange(val === "true")}
                    >
                      <div className="flex gap-12">
                        <div className="flex gap-2 items-center">
                          <RadioGroupItem value="true" id="yes" />
                          <label htmlFor="yes">YES</label>
                        </div>

                        <div className="flex gap-2 items-center">
                          <RadioGroupItem value="false" id="no" />
                          <label htmlFor="no">No</label>
                        </div>
                      </div>
                    </RadioGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {bitss_customer && (
                <>
                  <Controller
                    name="bitss_email"
                    control={control}
                    rules={{ required: "Email is required" }}
                    render={({ field, fieldState }) => (
                      <Field className="w-full">
                        <FieldLabel>Email</FieldLabel>
                        <Input
                          {...field}
                          value={field.value ?? ""}
                          type="email"
                          placeholder="Your bitss email address"
                          className="h-12"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Button className="bg-primary">
                    {loading ? (
                      <>
                        Submit
                        <Spinner />
                      </>
                    ) : (
                      "submit"
                    )}
                  </Button>
                </>
              )}
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
