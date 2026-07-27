import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a SignEdge India account.",
  robots: { index: false, follow: false },
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
