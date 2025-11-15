import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutions = [
    "Satellite-based soil testing",
    "AI crop monitoring",
    "Agronomy advisory",
    "35 residue-free inputs",
    "Parametric insurance",
    "Farm credit",
    "Buy-back program",
  ];

  const whoWeHelp = [
    "Farmer",
    "FPOs",
    "Institutional Buyer",
    "Investor / Carbon Buyer",
  ];

  const scrollToCarbonCredits = () => {
    const element = document.getElementById("carbon-credits");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">AgriTech</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border-border shadow-medium">
                {solutions.map((solution) => (
                  <DropdownMenuItem
                    key={solution}
                    className="py-3 cursor-pointer hover:bg-accent focus:bg-accent"
                  >
                    {solution}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={scrollToCarbonCredits}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Carbon Credits
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                Who We Help
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border shadow-medium">
                {whoWeHelp.map((item) => (
                  <DropdownMenuItem
                    key={item}
                    className="py-3 cursor-pointer hover:bg-accent focus:bg-accent"
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              Financial Services
            </button>

            <button className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              About Us
            </button>
          </div>

          {/* Right Side - Theme Toggle & Language Selector */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Select defaultValue="en">
              <SelectTrigger className="w-32 border-border bg-card">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 border-t border-border">
            <div className="space-y-2">
              <div className="font-semibold text-muted-foreground text-sm px-4">
                Solutions
              </div>
              {solutions.map((solution) => (
                <button
                  key={solution}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {solution}
                </button>
              ))}
            </div>

            <button
              onClick={scrollToCarbonCredits}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium"
            >
              Carbon Credits
            </button>

            <div className="space-y-2">
              <div className="font-semibold text-muted-foreground text-sm px-4">
                Who We Help
              </div>
              {whoWeHelp.map((item) => (
                <button
                  key={item}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium">
              Financial Services
            </button>

            <button className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-lg transition-colors font-medium">
              About Us
            </button>

            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
