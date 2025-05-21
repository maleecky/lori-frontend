import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center w-full sm:p-8 p-4 mt-20 mx-auto gap-16">
      <div className=" w-full min-[460px]:space-y-6  max-w-sm">
        <div className="flex flex-col min-[460]:border rounded-sm min-[460]:border-gray-300   items-center">
          <div>
            <h1 className="text-2xl pt-8">Lori</h1>
          </div>
          <div className="w-full max-w-sm min-[460px]:space-y-6 space-y-5">
            <div className="rounded-lg min-[460px]:p-8  mt-8">
              <SignUpForm />
            </div>
            <div className="min-[460px]:border-t flex  items-center justify-center gap-1 text-[15px] border-gray-300 text-nowrap flex-wrap   min-[460px]:p-8 pb-8  min-[460px]:mt-8 mt-0">
              <span>Already have an account? </span>
              <Link
                href="/sign-in"
                className="text-blue-500 hover:text-blue-700 transition-all ease-in duration-200 "
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
        <footer className="text-sm flex items-center justify-center gap-1 text-gray-800 text-nowrap flex-wrap  mt-8">
          <Link
            href="/terms"
            className=" transition-all hover:text-blue-700 duration-200 "
          >
            Terms
          </Link>
          <span>{"|"}</span>
          <Link
            href="/conditions"
            className=" transition-all hover:text-blue-700 duration-200 "
          >
            Conditions
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SignUpPage;
