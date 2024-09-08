"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()
    console.log(pathName);

  const links = [
    
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },

  ];

  const handler = () => {
    router.push("/about")
  }

  if(pathName.includes("/dashboard")){
    return  <div className="bg-green-500 p-6">Dashboard Layout</div>
  }

  return (
    <nav className="bg-red-500 px-6 py-4 flex justify-between items-center ">
      <h6 className="text-3xl">
        Next <span className="text-white">Hero </span>
      </h6>
      <ul className="flex justify-between items-center space-x-4">
        {
            links?.map(link => <Link className={`${pathName === link.path && "text-blue-700"}`} key={link.path} href={link.path}>{link.title}</Link>)
        }
      </ul>
      <button onClick={handler} className="bg-white p-3 text-cyan-300">Log in</button>
    </nav>
  );
};

export default Navbar;
