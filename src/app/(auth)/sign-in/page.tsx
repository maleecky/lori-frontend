import SignInForm from "@/components/SignInForm";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center w-full sm:p-8 p-4 mt-20 mx-auto gap-16">
      <div className="flex min-[460px]:border min-[460px]:border-gray-300  rounded-sm flex-col items-center w-full min-[460px]:max-w-sm">
        <div>
          <h1 className="text-2xl font-mono pt-8">Lori</h1>
        </div>
        <div className="w-full max-w-sm">
          <div className=" rounded-lg min-[460px]:p-8 mt-8">
            <SignInForm />
          </div>
          <div className="border-t flex items-center justify-center gap-1 text-[15px]  text-nowrap flex-wrap   p-8  mt-8">
            <span>Don't have an account? </span>
            <Link
              href="/sign-up"
              className="text-blue-500 hover:text-blue-700 text-sm transition-all ease-in duration-200"
            >
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
