import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import {
  ArrowLeft,
  Sprout,
  Satellite,
  Brain,
  Package,
  Shield,
  CreditCard,
  Handshake,
  Check, // Import the Check icon
  Languages, // Import icon for language toggle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import carbonCreditsImage from "@/assets/carbonCredits.jpg"; // Import the image

// --- DATA FOR SERVICES (ICONS) ---
// We keep icons and IDs separate from translatable text.
const serviceDefinitions = [
  { id: "soil-testing", icon: Satellite },
  { id: "crop-monitoring", icon: Brain },
  { id: "agronomy", icon: Sprout },
  { id: "inputs", icon: Package },
  { id: "insurance", icon: Shield },
  { id: "credit", icon: CreditCard },
  { id: "buyback", icon: Handshake },
];

// --- ALL TRANSLATABLE TEXT ---
const translations = {
  en: {
    backToServices: "Back to all services",
    carbonCreditsTitle: "Carbon Credits",
    carbonCreditsSubtitle: "Generate revenue through sustainable farming practices",
    carbonCreditsSheetTitle: "Carbon Credits Made Simple",
    toggleLanguage: "हिंदी में",
    services: {
      "soil-testing": {
        title: "Satellite-based soil testing",
        content: "Advanced satellite technology provides precise soil analysis without physical sampling. Get detailed reports on soil health, nutrient levels, and recommendations for optimal crop growth. Our AI-powered analysis covers macro and micronutrients, pH levels, organic matter content, and moisture retention capacity.",
      },
      "crop-monitoring": {
        title: "AI crop monitoring",
        content: "Real-time crop health monitoring using artificial intelligence and satellite imagery. Detect diseases, pest infestations, and stress conditions early. Receive instant alerts and actionable insights to protect your crops and maximize yields throughout the growing season.",
      },
      "agronomy": {
        title: "Agronomy advisory",
        content: "Expert agronomic guidance tailored to your farm's specific needs. Our team of certified agronomists provides personalized advice on crop selection, planting schedules, irrigation management, and sustainable farming practices to optimize your agricultural operations.",
      },
      "inputs": {
        title: "35 residue-free inputs",
        content: "Access to 35+ certified organic and residue-free agricultural inputs including fertilizers, pesticides, and growth enhancers. All products are rigorously tested and certified to meet international organic standards, ensuring safe and sustainable farming practices.",
      },
      "insurance": {
        title: "Parametric insurance",
        content: "Weather-based parametric insurance that provides automatic payouts when predefined weather conditions occur. No lengthy claim processes - instant compensation for adverse weather events like drought, excess rainfall, or temperature extremes based on satellite and weather station data.",
      },
      "credit": {
        title: "Farm credit",
        content: "Flexible farm credit solutions with competitive interest rates and farmer-friendly terms. Quick approval process using alternative credit scoring based on your farm's productivity data. Get the financial support you need for seeds, equipment, or operational expenses.",
      },
      "buyback": {
        title: "Buy-back program",
        content: "Guaranteed market access through our buy-back program. We ensure fair prices for your produce based on quality standards. Eliminate market uncertainty with pre-agreed contracts, quality-based pricing, and timely payments directly to your bank account.",
      },
    },
    sheetContent: {
      whatIsCredit: "What is a Carbon Credit?",
      whatIsCreditPara: `A carbon credit is a <strong class="font-bold text-primary">reward given</strong> when your farm helps the earth by <strong class="font-bold text-primary">storing carbon in the soil</strong>. Companies buy these credits to balance their pollution. <strong class="font-bold text-primary">You earn money</strong> for keeping your soil healthy.`,
      howFarmingCreates: "How Farming Creates Carbon Credits",
      howFarmingCreatesPara: "You can earn carbon credits when your farm captures and stores carbon. This happens when you use regenerative farming and natural, soil-friendly methods.",
      howFarmingCreatesSub: "Regenerative farming includes:",
      howFarmingCreatesList: [
        "Using less chemicals",
        "Adding organic matter like compost",
        "Keeping the soil covered",
        "Growing different crops",
        "Reducing tilling",
        "Planting trees or agroforestry",
      ],
      howFarmingCreatesPara2: "These practices make soil healthier and increase soil organic carbon.",
      howFarmingCreatesBox: "More carbon in soil = more credits = more income.",
      howWeMeasure: "How Rupiya.app Measures Carbon",
      howWeMeasurePara: "Rupiya.app checks your farm's carbon in two ways:",
      howWeMeasureList: ["Satellite images", "On-ground soil tests"],
      howWeMeasurePara2: `We track how much carbon your soil gains every year. <strong class="font-bold text-primary">Only a real increase in carbon gives you money</strong>. This keeps everything honest and transparent.`,
      howFarmersEarn: "How Farmers Earn Money",
      howFarmersEarnPara: `For every <strong class="font-bold text-primary">1 tonne of CO2 stored</strong> in your soil, you earn extra income.`,
      howFarmersEarnSub: "You get:",
      howFarmersEarnList: [
        `<span><strong class="font-bold text-primary">80%</strong> of the amount in the same year</span>`,
        `<span><strong class="font-bold text-primary">20%</strong> kept safely as a reserve, paid after 5 years (This protects you even if your carbon drops someday)</span>`,
      ],
      howFarmersEarnBox: `Farmers usually earn <strong class="font-bold text-primary whitespace-nowrap">₹2,000-₹5,000 per acre per year</strong>, depending on practices and carbon growth.`,
      partnership: "Rupiya's Global Partnership",
      partnershipPara: `Rupiya.app works with <strong class="font-bold text-primary">Carboneg (Europe)</strong> - a trusted global carbon program. This ensures high standards, proper verification, and good returns for farmers.`,
      benefits: "Why This Benefits Farmers",
      benefitsList: [
        `<span><strong class="font-bold text-primary">Extra income</strong> without changing your main crop</span>`,
        `<span><strong class="font-bold text-primary">Healthier soil</strong> and better yield over time</span>`,
        "Less money spent on fertilizers",
        "More moisture in soil",
        "Long-term support from Rupiya experts",
        "Easy onboarding and monitoring",
      ],
      goal: "Our Goal",
      goalPara: `Rupiya.app aims to bring <strong class="font-bold text-primary">50,000+ farmers</strong> and <strong class="font-bold text-primary">5 lakh hectares</strong> under regenerative farming and carbon credit income in the next 3 years.`,
      goalBox: "More farmers → more income → healthier soil → better climate.",
    },
  },
  hi: {
    backToServices: "सभी सेवाओं पर वापस जाएँ",
    carbonCreditsTitle: "कार्बन क्रेडिट",
    carbonCreditsSubtitle: "टिकाऊ कृषि पद्धतियों के माध्यम से राजस्व उत्पन्न करें",
    carbonCreditsSheetTitle: "कार्बन क्रेडिट हुआ आसान",
    toggleLanguage: "Switch to English",
    services: {
      "soil-testing": {
        title: "सैटेलाइट-आधारित मिट्टी परीक्षण",
        content: "उन्नत उपग्रह तकनीक भौतिक नमू लिए बिना मिट्टी का सटीक विश्लेषण प्रदान करती है। मिट्टी के स्वास्थ्य, पोषक तत्वों के स्तर पर विस्तृत रिपोर्ट और इष्टतम फसल वृद्धि के लिए सिफारिशें प्राप्त करें। हमारा एआई-संचालित विश्लेषण मैक्रो और माइक्रोन्यूट्रिएंट्स, पीएच स्तर, कार्बनिक पदार्थ सामग्री और नमी प्रतिधारण क्षमता को कवर करता है।",
      },
      "crop-monitoring": {
        title: "एआई फसल निगरानी",
        content: "आर्टिफिशियल इंटेलिजेंस और सैटेलाइट इमेजरी का उपयोग करके रियल-टाइम फसल स्वास्थ्य निगरानी। बीमारियों, कीटों के संक्रमण और तनाव की स्थितियों का शीघ्र पता लगाएँ। अपनी फसलों की रक्षा करने और पूरे बढ़ते मौसम में पैदावार को अधिकतम करने के लिए तत्काल अलर्ट और कार्रवाई योग्य अंतर्दृष्टि प्राप्त करें।",
      },
      "agronomy": {
        title: "कृषि विज्ञान सलाह",
        content: "आपके खेत की विशिष्ट आवश्यकताओं के अनुरूप विशेषज्ञ कृषि संबंधी मार्गदर्शन। हमारे प्रमाणित कृषिविदों की टीम फसल चयन, रोपण कार्यक्रम, सिंचाई प्रबंधन और आपके कृषि कार्यों को अनुकूलित करने के लिए स्थायी कृषि पद्धतियों पर व्यक्तिगत सलाह प्रदान करती है।",
      },
      "inputs": {
        title: "35 अवशेष-मुक्त इनपुट",
        content: "उर्वरकों, कीटनाशकों और वृद्धि बढ़ाने वाले 35+ प्रमाणित जैविक और अवशेष-मुक्त कृषि इनपुट तक पहुंच। सभी उत्पादों का कड़ाई से परीक्षण किया जाता है और सुरक्षित और टिकाऊ कृषि पद्धतियों को सुनिश्चित करते हुए अंतरराष्ट्रीय जैविक मानकों को पूरा करने के लिए प्रमाणित किया जाता है।",
      },
      "insurance": {
        title: "पैरामीट्रिक बीमा",
        content: "मौसम-आधारित पैरामीट्रिक बीमा जो पूर्वनिर्धारित मौसम की स्थिति होने पर स्वचालित भुगतान प्रदान करता है। कोई लंबी दावा प्रक्रिया नहीं - उपग्रह और मौसम स्टेशन डेटा के आधार पर सूखा, अत्यधिक वर्षा, या तापमान चरम जैसी प्रतिकूल मौसम की घटनाओं के लिए तत्काल मुआवजा।",
      },
      "credit": {
        title: "कृषि ऋण",
        content: "प्रतिस्पर्धी ब्याज दरों और किसान-अनुकूल शर्तों के साथ लचीला कृषि ऋण समाधान। आपके खेत के उत्पादकता डेटा के आधार पर वैकल्पिक क्रेडिट स्कोरिंग का उपयोग करके त्वरित अनुमोदन प्रक्रिया। बीज, उपकरण, या परिचालन खर्चों के लिए आपको आवश्यक वित्तीय सहायता प्राप्त करें।",
      },
      "buyback": {
        title: "बाय-बैक प्रोग्राम",
        content: "हमारे बाय-बैक प्रोग्राम के माध्यम से गारंटीकृत बाजार पहुंच। हम गुणवत्ता मानकों के आधार पर आपकी उपज के लिए उचित मूल्य सुनिश्चित करते हैं। पूर्व-सहमत अनुबंधों, गुणवत्ता-आधारित मूल्य निर्धारण और सीधे आपके बैंक खाते में समय पर भुगतान के साथ बाजार की अनिश्चितता को समाप्त करें।",
      },
    },
    sheetContent: {
      whatIsCredit: "कार्बन क्रेडिट क्या है?",
      whatIsCreditPara: `एक कार्बन क्रेडिट एक <strong class="font-bold text-primary">इनाम है</strong> जब आपका खेत <strong class="font-bold text-primary">मिट्टी में कार्बन जमा करके</strong> पृथ्वी की मदद करता है। कंपनियां अपने प्रदूषण को संतुलित करने के लिए इन क्रेडिट्स को खरीदती हैं। <strong class="font-bold text-primary">आप पैसे कमाते हैं</strong> अपनी मिट्टी को स्वस्थ रखने के लिए।`,
      howFarmingCreates: "खेती से कार्बन क्रेडिट कैसे बनता है",
      howFarmingCreatesPara: "जब आपका खेत कार्बन को पकड़ता और संग्रहीत करता है तो आप कार्बन क्रेडिट अर्जित कर सकते हैं। ऐसा तब होता है जब आप पुनर्योजी खेती और प्राकृतिक, मिट्टी के अनुकूल तरीकों का उपयोग करते हैं।",
      howFarmingCreatesSub: "पुनर्योजी खेती में शामिल हैं:",
      howFarmingCreatesList: [
        "कम रसायनों का उपयोग करना",
        "खाद जैसे जैविक पदार्थ डालना",
        "मिट्टी को ढक कर रखना",
        "विभिन्न फसलें उगाना",
        "जुताई कम करना",
        "पेड़ लगाना या कृषि वानिकी",
      ],
      howFarmingCreatesPara2: "ये अभ्यास मिट्टी को स्वस्थ बनाते हैं और मिट्टी के जैविक कार्बन को बढ़ाते हैं।",
      howFarmingCreatesBox: "मिट्टी में अधिक कार्बन = अधिक क्रेडिट = अधिक आय।",
      howWeMeasure: "Rupiya.app कार्बन को कैसे मापता है",
      howWeMeasurePara: "Rupiya.app आपके खेत के कार्बन को दो तरीकों से जांचता है:",
      howWeMeasureList: ["सैटेलाइट तस्वीरें", "जमीनी मिट्टी परीक्षण"],
      howWeMeasurePara2: `हम ट्रैक करते हैं कि आपकी मिट्टी में हर साल कितना कार्बन बढ़ता है। <strong class="font-bold text-primary">केवल कार्बन में वास्तविक वृद्धि ही आपको पैसा देती है</strong>। यह सब कुछ ईमानदार और पारदर्शी रखता है।`,
      howFarmersEarn: "किसान कैसे पैसा कमाते हैं",
      howFarmersEarnPara: `आपकी मिट्टी में संग्रहीत <strong class="font-bold text-primary">1 टन CO2</strong> के लिए, आप अतिरिक्त आय अर्जित करते हैं।`,
      howFarmersEarnSub: "आपको मिलता है:",
      howFarmersEarnList: [
        `<span>उसी वर्ष राशि का <strong class="font-bold text-primary">80%</strong></span>`,
        `<span><strong class="font-bold text-primary">20%</strong> रिजर्व के रूप में सुरक्षित रखा जाता है, 5 साल बाद भुगतान किया जाता है (यह आपको तब भी बचाता है जब आपका कार्बन किसी दिन गिर जाता है)</span>`,
      ],
      howFarmersEarnBox: `किसान आमतौर पर प्रथाओं और कार्बन वृद्धि के आधार पर <strong class="font-bold text-primary whitespace-nowrap">₹2,000-₹5,000 प्रति एकड़ प्रति वर्ष</strong> कमाते हैं।`,
      partnership: "रु।app की वैश्विक भागीदारी",
      partnershipPara: `रु।app <strong class="font-bold text-primary">Carboneg (Europe)</strong> के साथ काम करता है - एक विश्वसनीय वैश्विक कार्बन कार्यक्रम। यह किसानों के लिए उच्च मानकों, उचित सत्यापन और अच्छे रिटर्न सुनिश्चित करता है।`,
      benefits: "इससे किसानों को क्या फायदा",
      benefitsList: [
        `<span>अपनी मुख्य फसल को बदले बिना <strong class="font-bold text-primary">अतिरिक्त आय</strong></span>`,
        `<span><strong class="font-bold text-primary">स्वस्थ मिट्टी</strong> और समय के साथ बेहतर उपज</span>`,
        "उर्वरकों पर कम पैसा खर्च होता है",
        "मिट्टी में अधिक नमी",
        "रु।app विशेषज्ञों से दीर्घकालिक समर्थन",
        "आसान ऑनबोर्डिंग और निगरानी",
      ],
      goal: "हमारा लक्ष्य",
      goalPara: `Rupiya.app का लक्ष्य अगले 3 वर्षों में <strong class="font-bold text-primary">50,000+ किसानों</strong> और <strong class="font-bold text-primary">5 लाख हेक्टेयर</strong> को पुनर्योजी खेती और कार्बन क्रेडिट आय के तहत लाना है।`,
      goalBox: "अधिक किसान → अधिक आय → स्वस्थ मिट्टी → बेहतर जलवायु।",
    },
  },
};


const WhatWeOffer = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'hi'>('en'); // Language state

  // Get the correct text based on the current language
  const t = translations[language];

  // Find the selected service definitions (icon)
  const selectedService = serviceDefinitions.find((s) => s.id === selectedCard);
  // Find the selected service translatable text
  const selectedServiceText = selectedCard ? t.services[selectedCard as keyof typeof t.services] : null;

  const toggleLanguage = () => {
    setLanguage(lang => (lang === 'en' ? 'hi' : 'en'));
  };

  if (selectedCard && selectedService && selectedServiceText) {
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500">
        <Button
          onClick={() => setSelectedCard(null)}
          variant="ghost"
          className="mb-8 gap-2 hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.backToServices}
        </Button>

        <Card className="border-border shadow-large bg-gradient-to-br from-background to-green-light/30">
          <CardContent className="p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-primary/10">
                <selectedService.icon className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                {selectedServiceText.title}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              {selectedServiceText.content}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-500">
      {/* --- LANGUAGE TOGGLE BUTTON --- */}
      <div className="flex justify-end">
        <Button
          onClick={toggleLanguage}
          variant="outline"
          className="gap-2"
        >
          <Languages className="h-4 w-4" />
          {t.toggleLanguage}
        </Button>
      </div>

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
                      {t.carbonCreditsTitle}
                    </h3>
                    <p className="text-muted-foreground">
                      {t.carbonCreditsSubtitle}
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
              {t.carbonCreditsSheetTitle}
            </SheetTitle>
          </SheetHeader>
          <div className="max-w-none text-foreground space-y-8 py-4">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                {t.sheetContent.whatIsCredit}
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.sheetContent.whatIsCreditPara }}
              />
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                {t.sheetContent.howFarmingCreates}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.sheetContent.howFarmingCreatesPara}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                {t.sheetContent.howFarmingCreatesSub}
              </p>
              <ul className="list-none p-0 m-0 space-y-3 mt-4 text-lg text-muted-foreground">
                {t.sheetContent.howFarmingCreatesList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                {t.sheetContent.howFarmingCreatesPara2}
              </p>
              <p className="text-lg font-semibold text-center text-primary bg-primary/10 p-4 rounded-lg mt-4">
                {t.sheetContent.howFarmingCreatesBox}
              </p>
            </section>

            <section>
              <img
                src={carbonCreditsImage}
                alt="Visual explanation of how carbon credits work for farmers"
                className="w-full h-auto rounded-lg my-4"
              />
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                {t.sheetContent.howWeMeasure}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.sheetContent.howWeMeasurePara}
              </p>
              <ul className="list-none p-0 m-0 space-y-3 mt-4 text-lg text-muted-foreground">
                {t.sheetContent.howWeMeasureList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p
                className="text-lg text-muted-foreground leading-relaxed mt-4"
                dangerouslySetInnerHTML={{ __html: t.sheetContent.howWeMeasurePara2 }}
              />
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                {t.sheetContent.howFarmersEarn}
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.sheetContent.howFarmersEarnPara }}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                {t.sheetContent.howFarmersEarnSub}
              </p>
              <ul className="list-none p-0 m-0 space-y-3 mt-4 text-lg text-muted-foreground">
                {t.sheetContent.howFarmersEarnList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <p
                className="text-lg text-muted-foreground leading-relaxed mt-4 bg-primary/10 p-4 rounded-lg"
                dangerouslySetInnerHTML={{ __html: t.sheetContent.howFarmersEarnBox }}
              />
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                {t.sheetContent.partnership}
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.sheetContent.partnershipPara }}
              
              />
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                {t.sheetContent.benefits}
              </h2>
              <ul className="list-none p-0 m-0 space-y-3 mt-4 text-lg text-muted-foreground">
                {t.sheetContent.benefitsList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                {t.sheetContent.goal}
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.sheetContent.goalPara }}
              />
              <p className="text-xl font-semibold text-center text-primary bg-primary/10 p-4 rounded-lg mt-6">
                {t.sheetContent.goalBox}
              </p>
            </section>
          </div>
        </SheetContent>
      </Sheet>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceDefinitions.map((service) => {
          const serviceText = t.services[service.id as keyof typeof t.services];
          return (
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
                  {serviceText.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {serviceText.content}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeOffer;