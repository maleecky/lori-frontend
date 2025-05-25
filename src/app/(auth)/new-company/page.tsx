import CompanyRegistrationForm from "@/components/CompanyRegistrationForm";
import SignInForm from "@/components/SignInForm";
import Link from "next/link";

const NewCompanyPage = () => {
  return (
    <div className="flex items-center justify-center w-full sm:p-8 p-4 mt-10 mx-auto gap-16">
      <div className="flex   rounded-sm flex-col items-center w-full min-[460px]:max-w-xl">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-mono pt-8">Lori</h1>
          <p className="text-xl text-center ">Get started</p>
        </div>
        <div className="w-full">
          <div className=" rounded-lg min-[460px]:p-8 mt-8">
            <CompanyRegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCompanyPage;
