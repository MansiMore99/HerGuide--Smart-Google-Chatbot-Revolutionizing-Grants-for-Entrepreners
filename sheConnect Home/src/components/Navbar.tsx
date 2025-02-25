import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          sheConnect
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Features</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Community</a>
          <Button className="bg-primary hover:bg-primary-dark transition-colors">
            Join Now
          </Button>
        </div>
        <Button className="md:hidden bg-primary hover:bg-primary-dark">
          Menu
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;