import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="flex items-center justify-center w-full sm:p-8 p-4 mt-20 mx-auto gap-16">
      <div className=" w-full space-y-6 min-[460px]:max-w-sm">
        <div className="flex flex-col min-[460px]:border rounded-sm min-[460px]:border-gray-300   items-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl pt-8">Lori</h1>
            <div>
              <p className="text-lg">Forgot password</p>
            </div>
          </div>
          <div className="w-full min-[460px]:max-w-sm space-y-6">
            <div className="rounded-lg min-[460px]:p-8   mt-5">
              <ForgotPasswordForm />
            </div>
            <div className="border-t flex items-center justify-center gap-1 text-[15px] border-gray-300 text-nowrap flex-wrap   min-[460px]:p-8 p-4  mt-8">
              <Link
                href="/sign-in"
                className="flex items-center gap-1 hover:text-blue-700 transition-all ease-in duration-200 "
              >
                <span>
                  <ArrowLeft width={17} />
                </span>
                <span>Back to sign in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
