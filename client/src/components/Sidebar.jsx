import { MdGroups } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="h-4/5 w-auto mx-2 p-2 text-white mr-7">
      <div className=" flex gap-1 items-center mb-2">
        <MdGroups className=" text-xl" />
        <p className=" text-lg font-medium" >Users</p>
      </div>
      <div>
        <ul>
          <li>arjun</li>
          <li>abdul</li>
          <li>uma</li>
          <li>swaran</li>
        </ul>
      </div>
      {/* <div className="">
        <button>Leave Room</button>
      </div> */}
    </div>
  );
};

export default Sidebar;
