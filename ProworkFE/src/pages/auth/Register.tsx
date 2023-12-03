import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[410px] h-[90vh] mt-[0px] rounded-lg flex justify-center">
        <div className="mt-[30px] w-[95%]">
          <div className="flex flex-row justify-between mb-9">
            <div className=" text-[28px] font-bold">Sign Up</div>
            <div>Logo</div>
          </div>
          <div className="flex justify-center flex-col text-[17px] gap-4 mb-5 font-bold">
            <div className="hover:cursor-pointer flex items-center border p-2 w-[100%] rounded-md">
              <div style={{ fontSize: "17px" }} className="mr-2">
                <FcGoogle />
              </div>
              Continue with Google
            </div>
            <div className="hover:cursor-pointer flex items-center border p-2 w-[100%] rounded-md">
              {" "}
              <div
                style={{ color: "#1877F2", fontSize: "17px" }}
                className="mr-2"
              >
                <FaFacebook />
              </div>
              Continue with Facebook
            </div>
            <div className="hover:cursor-pointer flex items-center border p-2 w-[100%] rounded-md">
              <div style={{ fontSize: "17px" }} className="mr-2">
                <FaApple />
              </div>
              Continue with Apple
            </div>
          </div>
          <hr style={{ backgroundColor: "grey", height: "2px" }} />

          <div className="mt-10 flex flex-col gap-[20px]">
            <div className="border rounded-md">
              <div className="text-[14px] font-normal p-1">Name</div>
              <input
                className="w-[200px] outline-none bg-transparent p-1 placeholder:text-[18px]"
                placeholder="Enter your name..."
              />
            </div>
            <div className="border rounded-md">
              <div className="text-[14px] font-normal p-1">Email</div>
              <input
                className="w-[200px] outline-none bg-transparent p-1 placeholder:text-[18px]"
                placeholder="Enter your email..."
              />
            </div>
            <div className="border rounded-md">
              <div className="text-[14px] font-normal p-1">Password</div>
              <input
                className="w-[200px] outline-none bg-transparent p-1 placeholder:text-[18px]"
                placeholder="Enter your password..."
              />
            </div>
          </div>
          <button className="font-semibold text-white text-[20px] bg-red-600 w-[70%] h-[38px] rounded-lg ml-16 mt-[15px]">
            Sign Up with Email
          </button>
          <div className="text-[13px] flex  mt-[8px]">
            Already signed up?{" "}
            <Link to="/signin">
              <div className="ml-[5px]"> Go to login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
