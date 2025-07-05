import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router";
import NavigationRoutes from "./navigation-routes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const ToggleContainer = () => {
  const { userId } = useAuth();

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden text-white">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>

        <nav color="#fff" className="gap-6 flex flex-col items-start text-white">
          <NavigationRoutes isMobile />
          {userId && (
            <NavLink
              to={"/generate"}
              className={({ isActive }) =>
                cn(
                  "text-base text-neutral-600 mt-6",
                  isActive && "text-white font-semibold"
                )
              }
            >
              Take An Interview
            </NavLink>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default ToggleContainer;
