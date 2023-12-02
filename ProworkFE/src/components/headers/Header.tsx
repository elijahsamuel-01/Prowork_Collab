import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="h-[50px] flex items-center justify-between border-b-2">
      {/* <div className="h-[40px] w-[120px] bg-slate-600"> */}
      <img src={logo} className="w-[120px] h-[80px]" />
      {/* </div> */}
      <div className="mr-5 w-auto flex items-center  text-sm font-medium hover:cursor-pointer ">
        <div className="h-[30px] w-[70px] flex items-center justify-center hover:bg-slate-200 rounded-md text-sm font-medium">
          Features
        </div>
        <div className="h-[30px] w-[70px] flex items-center justify-center hover:bg-slate-200 rounded-md text-sm font-medium">
          For Teams
        </div>
        <div className="h-[30px] w-[70px] flex items-center justify-center hover:bg-slate-200 rounded-md text-sm font-medium">
          Resource
        </div>
        <div className="h-[30px] w-[70px] flex items-center justify-center hover:bg-slate-200 rounded-md text-sm font-medium">
          Pricing
        </div>
        <div className="mx-1">|</div>
        <div className="h-[30px] w-[70px] flex items-center justify-center hover:bg-slate-200 rounded-md text-sm font-medium">
          Log In
        </div>
        <button className="mx-1 h-[30px] w-[100px] text-white font-bold bg-red-600 flex items-center justify-center rounded-md hover:bg-red-700">
          Start for Free
        </button>
      </div>
    </div>
  );
};

export default Header;
