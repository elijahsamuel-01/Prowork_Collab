import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { AddProject } from "../../pages/AddProject";
import AddTask from "../../pages/AddTask";
import { IoSearchOutline } from "react-icons/io5";

const Sider = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className=" h-[100vh] w-full">
      <div className="flex p-2">
        <div className="w-[30px] h-[30px] bg-red-500 rounded-3xl flex justify-center items-center">
          E
        </div>
        <div className="flex items-center justify-center ml-[10px]">
          Dev{" "}
          <div className="mt-1 text-[18px]">
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="ml-[140px] text-[20px]">
            <IoIosNotificationsOutline />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {" "}
        <button
          onClick={() => {
            setToggle(true);
          }}
          className="flex ml-2 items-center justify-start mt-8 hover:bg-red-200 mr-2 pl-1 rounded-md py-1 cursor-pointer"
        >
          <div className="text-red-700 text-[30px]">
            <IoIosAddCircle />
          </div>
          <div className="ml-1">Add Task</div>
        </button>
        <div className="flex ml-2 items-center justify-start hover:bg-red-200 mr-2 pl-1 rounded-md py-1 cursor-pointer">
          <div className="text-red-700 text-[20px] mr-1 ml-2">
            <IoSearchOutline />
          </div>
          <div className="ml-1">Search</div>
        </div>
        <hr className="mt-2 w-[89%] ml-3" />
      </div>

      <div className="mt-8">
        <button
          onClick={() => {
            setToggle(true);
          }}
          className="flex ml-2 items-center justify-start hover:bg-red-200 mr-2 pl-1 rounded-md py-1 cursor-pointer"
        >
          <div className="w-[30px] h-[30px] bg-red-500 rounded-lg flex justify-center items-center">
            S
          </div>
          <div className="ml-1 text-[18px] font-semibold">My Projects</div>
          <div className="font-medium text-[19px] ml-[90px]">+</div>
        </button>
        <div className="flex ml-2 border mr-2 hover: pl-1 rounded-md py-1 cursor-pointer mt-2 flex-col gap-2 max-h-50px">
          <div>Building a school project</div>
          <div>Building a school project</div>
          <div>Building a school project</div>
          <div>Building a school project</div>
        </div>
      </div>
      <div className="absolute top-0 l-0">
        {toggle && <AddTask toggle={toggle} setToggle={setToggle} />}
      </div>
      {/* <div className="absolute top-0 l-0">
        {" "}
        {toggle && <AddProject toggle={toggle} setToggle={setToggle} />}
      </div> */}
    </div>
  );
};

export default Sider;
