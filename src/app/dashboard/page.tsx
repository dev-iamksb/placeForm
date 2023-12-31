import type { Metadata } from "next";
import "@/app/globals.css";
import FormTable from "@/components/formTable/formTable";

export const metadata: Metadata = {
  title: "PlaceForm: Forms",
  description: "Generated by create next app",
};

export default function Form() {
  return (
    <>
      <FormTable />
    </>
  );
}
