import Headings from "@/components/headings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <Headings
          title="Dashboard"
          description="Create and start you AI Mock interview"
        />
        <Link to={"/generate/create"}>
          <Button size={"sm"} className="text-black">
            <AiOutlinePlus className="text-black" /> Add New
          </Button>
        </Link>
      </div>

      <Separator className="my-8" />
    </>
  );
};

export default Dashboard;
