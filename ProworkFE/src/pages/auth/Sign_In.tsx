import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Adduser } from "../../Global/Reduxstate";
import { loginAccount } from "../../api/API";
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const Sign_In = () => {

  const dispatch = useDispatch()

  // const navigate = useNavigate()

  const schema = yup.object({

    email: yup.string().email().required("email must be filled"),
    password: yup.string().required("password must be filled"),

  })
  console.log(dispatch)


  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)

  })


  const handleSubmitNow = handleSubmit((data: any) => {
    const { } = data
    loginAccount(data).then((res) => {
      dispatch(Adduser(res.data))
      // navigate("/")

    })
  })

  return (
    <div className="flex justify-center">
      <div className="w-[410px] h-[90vh] mt-[40px] rounded-lg flex justify-center">
        <form onSubmit={handleSubmitNow}>
          <div className="mt-[30px] w-[95%]">
            <div className="flex flex-row justify-between mb-9">
              <div className="ml-[10px] text-[28px] font-bold">Log in</div>
              <div>Logo</div>
            </div>
            <div className="flex justify-center flex-col w-[70%] ml-14 text-[17px] gap-5 mb-5 font-bold">
              <div className="hover:cursor-pointer flex items-center">
                <div style={{ fontSize: "17px" }} className="mr-2">
                  <FcGoogle />
                </div>
                Continue with Google
              </div>
              <div className="hover:cursor-pointer flex items-center">
                {" "}
                <div
                  style={{ color: "#1877F2", fontSize: "17px" }}
                  className="mr-2"
                >
                  <FaFacebook />
                </div>
                Continue with Facebook
              </div>
              <div className="hover:cursor-pointer flex items-center">
                <div style={{ fontSize: "17px" }} className="mr-2">
                  <FaApple />
                </div>
                Continue with Apple
              </div>
            </div>
            <hr style={{ backgroundColor: "grey", height: "2px" }} />

            <div className="mt-10 flex flex-col gap-[20px]">
              <div className="border rounded-md ml-[10px]">
                <div className="text-[14px] font-normal p-1">Email</div>
                <input
                  className="w-[200px] outline-none bg-transparent p-1 placeholder:text-[18px]"
                  placeholder="Enter your email..."
                  {...register("email")}
                />
              </div>
              <div className="border rounded-md ml-[10px] ">
                <div className="text-[14px] font-normal p-1">Password</div>
                <input
                  className="w-[200px] outline-none bg-transparent p-1 placeholder:text-[18px]"
                  placeholder="Enter your password..."
                  {...register("password")}
                />
              </div>
            </div>
            <button
              type="submit"
              className="font-semibold text-white text-[20px] bg-red-600 w-[70%] h-[38px] rounded-lg ml-16 mt-[15px]">
              Log In
            </button>
            <div className="text-[13px] flex ml-[10px] mt-[8px]">
              Don’t have an account?{" "}
              <Link to="/signup">
                <div className="ml-[5px]"> Sign up</div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_In;
