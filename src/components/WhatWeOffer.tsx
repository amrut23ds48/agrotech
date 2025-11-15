import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { ArrowLeft, Sprout, Satellite, Brain, Package, Shield, CreditCard, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCard {
  id: string;
  title: string;
  icon: any;
  content: string;
}

const WhatWeOffer = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const services: ServiceCard[] = [
    {
      id: "soil-testing",
      title: "Satellite-based soil testing",
      icon: Satellite,
      content:
        "Advanced satellite technology provides precise soil analysis without physical sampling. Get detailed reports on soil health, nutrient levels, and recommendations for optimal crop growth. Our AI-powered analysis covers macro and micronutrients, pH levels, organic matter content, and moisture retention capacity.",
    },
    {
      id: "crop-monitoring",
      title: "AI crop monitoring",
      icon: Brain,
      content:
        "Real-time crop health monitoring using artificial intelligence and satellite imagery. Detect diseases, pest infestations, and stress conditions early. Receive instant alerts and actionable insights to protect your crops and maximize yields throughout the growing season.",
    },
    {
      id: "agronomy",
      title: "Agronomy advisory",
      icon: Sprout,
      content:
        "Expert agronomic guidance tailored to your farm's specific needs. Our team of certified agronomists provides personalized advice on crop selection, planting schedules, irrigation management, and sustainable farming practices to optimize your agricultural operations.",
    },
    {
      id: "inputs",
      title: "35 residue-free inputs",
      icon: Package,
      content:
        "Access to 35+ certified organic and residue-free agricultural inputs including fertilizers, pesticides, and growth enhancers. All products are rigorously tested and certified to meet international organic standards, ensuring safe and sustainable farming practices.",
    },
    {
      id: "insurance",
      title: "Parametric insurance",
      icon: Shield,
      content:
        "Weather-based parametric insurance that provides automatic payouts when predefined weather conditions occur. No lengthy claim processes - instant compensation for adverse weather events like drought, excess rainfall, or temperature extremes based on satellite and weather station data.",
    },
    {
      id: "credit",
      title: "Farm credit",
      icon: CreditCard,
      content:
        "Flexible farm credit solutions with competitive interest rates and farmer-friendly terms. Quick approval process using alternative credit scoring based on your farm's productivity data. Get the financial support you need for seeds, equipment, or operational expenses.",
    },
    {
      id: "buyback",
      title: "Buy-back program",
      icon: Handshake,
      content:
        "Guaranteed market access through our buy-back program. We ensure fair prices for your produce based on quality standards. Eliminate market uncertainty with pre-agreed contracts, quality-based pricing, and timely payments directly to your bank account.",
    },
  ];

  const selectedService = services.find((s) => s.id === selectedCard);

  if (selectedCard && selectedService) {
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500">
        <Button
          onClick={() => setSelectedCard(null)}
          variant="ghost"
          className="mb-8 gap-2 hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all services
        </Button>

        <Card className="border-border shadow-large bg-gradient-to-br from-background to-green-light/30">
          <CardContent className="p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-primary/10">
                <selectedService.icon className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                {selectedService.title}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              {selectedService.content}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-500">
      {/* Carbon Credits Card */}
      <Sheet>
        <SheetTrigger asChild>
          <Card
            id="carbon-credits"
            className="border-primary/20 shadow-large hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-primary/5 to-green-medium/30 overflow-hidden group"
          >
            <CardContent className="p-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Sprout className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      Carbon Credits
                    </h3>
                    <p className="text-muted-foreground">
                      Generate revenue through sustainable farming practices
                    </p>
                  </div>
                </div>
                <ArrowLeft className="h-6 w-6 text-primary rotate-180 group-hover:translate-x-2 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </SheetTrigger>
        <SheetContent className="sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-3xl font-bold mb-4">
              Carbon Credits Made Simple
            </SheetTitle>
          </SheetHeader>
          {/* This 'prose' class adds nice article styling */}
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                What is a Carbon Credit?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A carbon credit is a reward given when your farm helps the earth
                by storing carbon in the soil. Companies buy these credits to
                balance their pollution. You earn money for keeping your soil
                healthy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                How Farming Creates Carbon Credits
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You can earn carbon credits when your farm captures and stores
                carbon. This happens when you use regenerative farming and
                natural, soil-friendly methods.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Regenerative farming includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                <li>Using less chemicals</li>
                <li>Adding organic matter like compost</li>
                <li>Keeping the soil covered</li>
                <li>Growing different crops</li>
                <li>Reducing tilling</li>
                <li>Planting trees or agroforestry</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These practices make soil healthier and increase soil organic
                carbon. More carbon in soil = more credits = more income.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                How Rupiya.app Measures Carbon
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Rupiya.app checks your farm's carbon in two ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                <li>Satellite images</li>
                <li>On-ground soil tests</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We track how much carbon your soil gains every year. Only a
                real increase in carbon gives you money. This keeps
                everything honest and transparent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                How Farmers Earn Money
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For every 1 tonne of CO2 stored in your soil, you earn extra
                income.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You get:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                <li>80% of the amount in the same year</li>
                <li>
                  20% kept safely as a reserve, paid after 5 years (This
                  protects you even if your carbon drops someday)
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Farmers usually earn ₹2,000-₹5,000 per acre per year,
                depending on practices and carbon growth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Rupiya's Global Partnership
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Rupiya.app works with Carboneg (Europe) - a trusted global
                carbon program. This ensures high standards, proper
                verification, and good returns for farmers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Why This Benefits Farmers
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Extra income without changing your main crop</li>
                <li>Healthier soil and better yield over time</li>
                <li>Less money spent on fertilizers</li>
                <li>More moisture in soil</li>
                <li>Long-term support from Rupiya experts</li>
                <li>Easy onboarding and monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Our Goal
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Rupiya.app aims to bring 50,000+ farmers and 5 lakh hectares
                under regenerative farming and carbon credit income in the
                next 3 years.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                More farmers → more income → healthier soil → better climate.
              </p>
            </section>
          </div>
        </SheetContent>
      </Sheet>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card
            key={service.id}
            className="border-border shadow-medium hover:shadow-large transition-all duration-300 cursor-pointer bg-card overflow-hidden group hover:-translate-y-1"
            onClick={() => setSelectedCard(service.id)}
          >
            <CardContent className="p-8">
              <div className="mb-6 p-3 rounded-xl bg-accent w-fit group-hover:bg-primary/10 transition-colors">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {service.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;