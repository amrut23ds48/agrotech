import {
  Smartphone,
  Gem,
  Plane,
  Shield,
  Wallet,
  Tractor,
  Landmark,
  CheckCircle2, // Added for new list style
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// --- Interface Updated ---
// 'description' is now a React.ReactNode to allow for rich JSX content
// (like bullet points, bold text, and highlights).
interface VisionItem {
  id: string;
  title: string;
  icon: any;
  description: React.ReactNode; // Changed from string
}

const VisionSection = () => {
  // --- visionItems array is now updated with rich JSX descriptions ---
  // This content is mapped directly from your PDF.
  const visionItems: VisionItem[] = [
    {
      id: "recharge",
      title: "Recharge & Bill Payments",
      icon: Smartphone,
      description: (
        <>
          <p className="mb-4">
            Stay connected 24/7. No more trips to town just to pay a bill.
            Manage all your digital payments from one app, anytime, anywhere.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Pay for:{" "}
                <span className="font-semibold text-foreground">
                  Mobile, DTH, Electricity, Water & Gas
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-bold bg-primary/10 text-primary px-2 py-1 rounded">
                Guaranteed Cashback Offers
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                Absolutely No Platform Fees
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "digital-gold",
      title: "Digital Gold",
      icon: Gem,
      description: (
        <>
          <p className="mb-4">
            A safe, modern way to grow your savings. Invest in{" "}
            <span className="font-bold text-yellow-500">24K Pure Digital Gold</span>{" "}
            starting from just ₹1.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Buy, sell, or{" "}
                <span className="font-semibold text-foreground">gift gold instantly</span>{" "}
                at live market prices.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                Zero Making Charges
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                <span className="font-semibold text-foreground">100% Insured</span>{" "}
                & stored in secure, audited vaults.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Convert to{" "}
                <span className="font-semibold text-foreground">
                  physical gold
                </span>{" "}
                anytime.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "travel",
      title: "Travel Bookings",
      icon: Plane,
      description: (
        <>
          <p className="mb-4">
            Plan any trip quickly and easily. No agents, no paper tickets, no
            running around. Your next journey is just a tap away.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Book:{" "}
                <span className="font-semibold text-foreground">
                  Flights, Trains, Buses & Hotels
                </span>
                .
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-bold bg-primary/10 text-primary px-2 py-1 rounded">
                Special Discounts for Farmers
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                24/7 customer support &{" "}
                <span className="font-semibold text-foreground">
                  earn reward points
                </span>
                .
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Enjoy{" "}
                <span className="font-semibold text-foreground">
                  flexible cancellation policies
                </span>
                .
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "insurance",
      title: "Insurance",
      icon: Shield,
      description: (
        <>
          <p className="mb-4">
            Protect what matters most. Get comprehensive insurance tailored for
            farming families with an easy, digital-first process.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Family Protection:{" "}
                <span className="font-semibold text-foreground">
                  Health, Life, Crop & Livestock
                </span>
                .
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Vehicle Protection:{" "}
                <span className="font-semibold text-foreground">
                  Two-wheelers, Tractors, Goods & Passenger Vehicles
                </span>
                .
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                <span className="font-semibold text-primary">
                  Instant policy issuance
                </span>{" "}
                & easy claims.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                Affordable Premiums
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "credit",
      title: "Credit Access",
      icon: Wallet,
      description: (
        <>
          <p className="mb-4">
            Get money when you need it—fast, simple, and with dignity. Access
            loans designed for your unique agricultural needs.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Access:{" "}
                <span className="font-semibold text-foreground">
                  Farm Input Loans, Personal Loans & Emergency Funds
                </span>{" "}
                during{" "}
                <span className="font-semibold text-primary">weather shocks</span>.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-bold bg-primary/10 text-primary px-2 py-1 rounded">
                Easy Application & Quick Approval
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Minimal documentation
                </span>{" "}
                & flexible repayment.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                A{" "}
                <span className="font-semibold text-foreground">
                  dignified, farmer-friendly
                </span>{" "}
                process.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "equipment-finance",
      title: "Farm Equipment Finance",
      icon: Tractor,
      description: (
        <>
          <p className="mb-4">
            Modernize your farm with finance support to reduce labour,
            increase productivity, and grow your income.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Get loans for:{" "}
                <span className="font-semibold text-foreground">
                  Tractors & Special Machinery
                </span>
                .
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Support for:{" "}
                <span className="font-semibold text-foreground">
                  Solar Pumps & Irrigation Systems
                </span>
                .
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                <span className="font-semibold text-primary">
                  Reduce labour & increase productivity
                </span>{" "}
                to grow your income.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "scheme-access",
      title: "Government Scheme Access",
      icon: Landmark,
      description: (
        <>
          {/* --- FIX: Corrected the closing </p> tag here --- */}
          <p className="mb-4">
            Never miss out on benefits. We help you navigate government programs
            with no confusion and no middlemen.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                We help{" "}
                <span className="font-semibold text-primary">
                  identify the right schemes
                </span>{" "}
                for you.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Assistance with applications
                </span>{" "}
                and subsidy access.
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="text-muted-foreground">
                Support for both{" "}
                <span className="font-semibold text-foreground">
                  Central & State programs
                </span>
                .
              </span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                No Confusion, No Middlemen
              </span>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background via-green-light/30 to-background py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <img
          src="src/assets/residueFree.jpg" // This path is from your original file
          alt="Our vision for a comprehensive financial ecosystem"
          className="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg mb-16"
        />
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Long-Term Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a comprehensive financial ecosystem for farmers beyond
            agriculture
          </p>
        </div>
          <img
          src="/assets/financial.jpg" // This path is from your original file
          alt="Our vision for a comprehensive financial ecosystem"
          className="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg mb-16"
        />
        <div className="space-y-8 max-w-5xl mx-auto">
          {visionItems.map((item, index) => (
            <Card
              key={item.id}
              className="border-border shadow-medium hover:shadow-large transition-all duration-300 bg-card overflow-hidden animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-primary/10 flex-shrink-0">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  {/* --- FIX: Corrected classNameD to className --- */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    {/* --- This div now renders the rich, styled JSX content --- */}
                    <div className="text-lg text-muted-foreground leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;