"use client";

import Link from "next/link";

const ForgotPassword = () => {
  return (
    <Link
      href="/forgot-password"
      className="text-sm text-blue-500 cursor-pointer hover:text-blue-700 transition-all ease-in"
    >
      Forgot password?
    </Link>
  );
};

export default ForgotPassword;
