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
import product1 from "@/assets/products/AgroShakti.png";
import product2 from "@/assets/products/BeauvShakti.png";
import product3 from "@/assets/products/CeralShakti.png";
import product4 from "@/assets/products/CombishieldShakti.png";
import product5 from "@/assets/products/EARTHWISE.png";
import product6 from "@/assets/products/FungiShakti.png";
import product7 from "@/assets/products/GrowShakti.png";
import product8 from "@/assets/products/GuardShakti.png";
import product9 from "@/assets/products/GuardShakti Prime.png";
import product10 from "@/assets/products/LIQUIDEARTHWISE.png";
import product11 from "@/assets/products/MetaShakti.png";
import product12 from "@/assets/products/Nitro Shakti.png";
import product13 from "@/assets/products/NPK Shakti.png";
import product14 from "@/assets/products/PAN STROKES ++.png";
import product15 from "@/assets/products/Petal Shakti Prime.png";
import product16 from "@/assets/products/Petal shakti.png";
import product17 from "@/assets/products/Plant shakti Prime.png";
import product18 from "@/assets/products/Plant Shakti.png";
const productImages = [
  { src: product1, name: "AgroShakti" },
  { src: product2, name: "BeauvShakti" },
  { src: product3, name: "CeralShakti" },
  { src: product4, name: "CombishieldShakti" },
  { src: product5, name: "EARTHWISE" },
  { src: product6, name: "fungi shakti" },
  { src: product7, name: "grow shakti" },
  { src: product8, name: "guardshakti" },
  { src: product9, name: "guardshakti prime" },
  { src: product10, name: "Liquid earthwise" },
  { src: product11, name: "Meta shakti" },
  { src: product12, name: "nitro shati" },
  { src: product13, name: "NPK Shakti" },
  { src: product14, name: "Pan Strokes ++" },
  { src: product15, name: "Petal Shakti Prime" },
  { src: product16, name: "Petal Shakti" },
  { src: product17, name: "plant shakti prime" },
  { src: product17, name: "plant shakti" },
  
];
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
        content: "Hassle-free soil testing using advanced satellite data. Get instant reports on nutrients, moisture, and organic carbon. Helps reduce chemical use.",
        detailedContent: `
          <p>
            Rupiya.app makes soil testing <strong class="font-bold text-primary">quick and hassle-free</strong>. No need to call anyone or wait for a team to visit—you can check your soil health directly through the app.
          </p>
          <p>
            Our system scans your land using satellite data, and you get a detailed soil health report right on your phone.
          </p>
          
          <strong class="font-semibold text-foreground">What the report shows:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Soil nutrients</li>
            <li>Soil moisture</li>
            <li>Soil organic carbon</li>
            <li>Crop condition</li>
            <li class="font-medium text-amber-600">Early signs of stress or disease</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">Why farmers love it:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">Cheaper than traditional testing</li>
            <li class="font-medium text-green-600">No follow-ups or delays</li>
            <li class="font-medium text-green-600">Helps reduce extra chemical use</li>
          </ul>
        `
      },
      "crop-monitoring": {
        title: "AI crop monitoring",
        content: "Our app uses AI and satellite images to watch your farm every few days, helping you understand crop health without walking the field. Catch problems early.",
        detailedContent: `
          <p>
            Rupiya.app uses AI and satellite images to watch over your farm every few days. This helps you understand your crop's health <strong class="font-bold text-primary">without needing to walk the entire field</strong>.
          </p>
          <p>
            AI studies the crop colour, growth pattern, moisture, and canopy. The app alerts you if something looks unusual.
          </p>
          
          <strong class="font-semibold text-foreground">What you can see:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Crop growth stage</li>
            <li class="font-medium text-amber-600">Stress due to water, pests, or nutrients</li>
            <li>Leaf colour changes</li>
            <li>Patch-wise crop health</li>
            <li>Farm boundary and exact area</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">Why it matters:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">You catch problems early</li>
            <li class="font-medium text-green-600">You save money by using the right product at the right time</li>
            <li>No need for guesswork</li>
            <li>Helps you qualify for carbon credits</li>
          </ul>
        `
      },
      "agronomy": {
        title: "Agronomy advisory",
        content: "Get help on your phone and in the field. Our app acts as a digital assistant, while local experts visit your farm to guide you with pests, nutrients, and growth.",
        detailedContent: `
          <p>
            Rupiya.app gives every farmer two types of support: <strong class="font-bold text-primary">help on the phone and help in the field</strong>. This makes residue-free farming easier and safer.
          </p>
          
          <strong class="font-semibold text-foreground mt-4 block">App-Based Support (Software Advisory):</strong>
          <p class="mt-2">The Rupiya app acts like a digital farming assistant. You can:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Do satellite soil testing anytime</li>
            <li><strong class="font-medium text-primary">Ask the Expert:</strong> send photos or text your problem</li>
            <li>Get crop schedules for spraying and nutrition</li>
            <li>Order all 35 residue-free inputs directly</li>
            <li>Sell your harvest through the app</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">On-Ground Agronomy Experts:</strong>
          <p class="mt-2">Local experts visit farms to guide you with:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-amber-600">Pest and disease identification</li>
            <li class="font-medium text-amber-600">Nutrient deficiency checks</li>
            <li>Soil correction and fertilizer reduction</li>
            <li>Irrigation and water planning</li>
            <li class="font-medium text-green-600">Flowering, fruiting, and harvest support</li>
          </ul>
        `
      },
      "inputs": {
        title: "25 residue-free inputs",
        content: "Access to 25+ certified organic and residue-free agricultural inputs including fertilizers, pesticides, and growth enhancers. All products are rigorously tested and certified to meet international organic standards, ensuring safe and sustainable farming practices.",
      },
      "insurance": {
        title: "Parametric insurance",
        content: "Automatic payouts for weather & wildlife loss. No long paperwork or surveys. Get fast, automatic claim processing for excess rain, humidity, temperature shocks, and more.",
        detailedContent: `
          <p>
            Farming is risky. Weather changes quickly, and wildlife can damage crops overnight. Rupiya.app offers parametric insurance that pays you when these events happen—<strong class="font-bold text-primary">without long paperwork or inspections</strong>.
          </p>
          
          <strong class="font-semibold text-foreground mt-4 block">What it covers:</strong>
          <ul class="list-none mt-2 space-y-3">
            <li>
              <strong class="font-medium text-blue-600">Covers Excess Rain</strong>
              <p class="text-base text-muted-foreground">If rainfall crosses the safe limit in your area, you get an <strong class="font-medium text-foreground">automatic payout</strong>. No claims. No surveys. The system tracks it through weather stations.</p>
            </li>
            <li>
              <strong class="font-medium text-teal-600">Low or High Humidity</strong>
              <p class="text-base text-muted-foreground">If humidity goes beyond the set range, the insurance triggers and <strong class="font-medium text-foreground">pays you instantly</strong>.</p>
            </li>
            <li>
              <strong class="font-medium text-red-600">Temperature Shocks</strong>
              <p class="text-base text-muted-foreground">Sudden heatwaves or cold waves reduce yield. When temperature crosses the danger mark, you <strong class="font-medium text-foreground">receive compensation</strong>.</p>
            </li>
            <li>
              <strong class="font-medium text-amber-700">Wildlife Damage</strong>
              <p class="text-base text-muted-foreground">This plan protects you against sudden wildlife attacks from animals like wild boar, nilgai, or deer.</p>
            </li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">Why farmers prefer it:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">Fast payouts</li>
            <li class="font-medium text-green-600">No need to prove damage</li>
            <li class="font-medium text-green-600">No survey needed</li>
            <li class="font-medium text-green-600">Automatic claim processing</li>
          </ul>
        `
      },
      "credit": {
        title: "Farm credit",
        content: "Get quick, hassle-free credit through trusted banking and fintech partners. Low-paperwork process with fast approval for inputs, irrigation, seeds, and more.",
        detailedContent: `
          <p>
            Many farmers struggle to get quick, hassle-free credit. Rupiya.app makes it simple by <strong class="font-bold text-primary">connecting you with trusted banking and fintech partners</strong> so you can get the right loan at the right time.
          </p>
          
          <strong class="font-semibold text-foreground mt-4 block">What you get:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Small and medium farm loans</li>
            <li class="font-medium text-green-600">Low-paperwork process</li>
            <li class="font-medium text-green-600">Fast approval</li>
            <li>Digital onboarding</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">Where the credit can help:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Buying residue-free farming inputs</li>
            <li>Irrigation improvements</li>
            <li>Seeds and planting material</li>
            <li>Fertilizers and nutrition</li>
            <li>Harvesting and labour</li>
          </ul>

          <br/>
          <strong class="font-semibold text-foreground">Why farmers prefer it:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">Quick process</li>
            <li class="font-medium text-green-600">Trusted banks</li>
            <li>No hidden steps</li>
            <li>Easy repayment options</li>
          </ul>
        `
      },
      "buyback": {
        title: "Buy-back program",
        content: "Guaranteed market access for your residue-free produce. Get pre-agreed contracts, fair transparent pricing, and timely payments. Eliminates all market uncertainty.",
        detailedContent: `
          <p>
            Stop worrying about where to sell your harvest or if you'll get a fair price. Our Buy-Back Program gives you <strong class="font-bold text-primary">guaranteed market access</strong> and rewards you for growing high-quality, residue-free produce.
          </p>
          
          <strong class="font-semibold text-foreground mt-4 block">What you get:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Pre-agreed contracts before the season</li>
            <li>Clear quality standards for your produce</li>
            <li><strong class="font-medium text-primary">Guaranteed purchase</strong> of produce that meets standards</li>
            <li>Direct farm-gate pickup scheduling</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">Why farmers love it:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">Eliminates market uncertainty</li>
            <li class="font-medium text-green-600">Fair and transparent pricing</li>
            <li class="font-medium text-green-600">Timely payments directly to your account</li>
            <li class="font-medium text-green-600">Rewards for high-quality, residue-free farming</li>
            <li>No need to deal with middlemen</li>
          </ul>
        `
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
        content: "उन्नत सैटेलाइट डेटा का उपयोग करके परेशानी मुक्त मिट्टी परीक्षण। पोषक तत्वों, नमी और जैविक कार्बन पर तुरंत रिपोर्ट प्राप्त करें। रासायनिक उपयोग को कम करने में मदद करता है।",
        detailedContent: `
          <p>
            Rupiya.app मिट्टी परीक्षण को <strong class="font-bold text-primary">त्वरित और परेशानी मुक्त</strong> बनाता है। किसी को बुलाने या टीम के आने का इंतजार करने की जरूरत नहीं है—आप सीधे ऐप के जरिए अपनी मिट्टी का स्वास्थ्य जांच सकते हैं।
          </p>
          <p>
            हमारा सिस्टम सैटेलाइट डेटा का उपयोग करके आपकी भूमि को स्कैन करता है, और आपको सीधे अपने फोन पर मिट्टी के स्वास्थ्य की विस्तृत रिपोर्ट मिलती है।
          </p>
          
          <strong class="font-semibold text-foreground">रिपोर्ट क्या दिखाती है:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>मिट्टी के पोषक तत्व</li>
            <li>मिट्टी में नमी</li>
            <li>मिट्टी का जैविक कार्बन</li>
            <li>फसल की स्थिति</li>
            <li class="font-medium text-amber-600">तनाव या बीमारी के शुरुआती लक्षण</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">किसानों को यह क्यों पसंद है:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">पारंपरिक परीक्षण से सस्ता</li>
            <li class="font-medium text-green-600">कोई फॉलो-अप या देरी नहीं</li>
            <li class="font-medium text-green-600">अतिरिक्त रासायनिक उपयोग को कम करने में मदद करता है</li>
          </ul>
        `
      },
      "crop-monitoring": {
        title: "एआई फसल निगरानी",
        content: "हमारा ऐप हर कुछ दिनों में आपके खेत की निगरानी के लिए एआई और सैटेलाइट इमेज का उपयोग करता है, जिससे आपको खेत में घूमे बिना फसल के स्वास्थ्य को समझने में मदद मिलती है। समस्याओं को जल्दी पकड़ें।",
        detailedContent: `
          <p>
            Rupiya.app हर कुछ दिनों में आपके खेत पर नज़र रखने के लिए AI और सैटेलाइट इमेज का उपयोग करता है। यह आपको <strong class="font-bold text-primary">पूरे खेत में घूमने की आवश्यकता के बिना</strong> अपनी फसल के स्वास्थ्य को समझने में मदद करता है।
          </p>
          <p>
            AI फसल के रंग, वृद्धि पैटर्न, नमी और कैनोपी का अध्ययन करता है। यदि कुछ असामान्य दिखता है तो ऐप आपको सचेत करता है।
          </p>
          
          <strong class="font-semibold text-foreground">आप क्या देख सकते हैं:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>फसल वृद्धि अवस्था</li>
            <li class="font-medium text-amber-600">पानी, कीटों या पोषक तत्वों के कारण तनाव</li>
            <li>पत्ती के रंग में परिवर्तन</li>
            <li>पैच-वार फसल स्वास्थ्य</li>
            <li>खेत की सीमा और सटीक क्षेत्र</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">यह क्यों मायने रखता है:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">आप समस्याओं को जल्दी पकड़ लेते हैं</li>
            <li class="font-medium text-green-600">आप सही समय पर सही उत्पाद का उपयोग करके पैसे बचाते हैं</li>
            <li>अनुमान लगाने की जरूरत नहीं</li>
            <li>आपको कार्बन क्रेडिट के लिए अर्हता प्राप्त करने में मदद करता है</li>
          </ul>
        `
      },
      "agronomy": {
        title: "कृषि विज्ञान सलाह",
        content: "अपने फोन पर और खेत में सहायता प्राप्त करें। हमारा ऐप एक डिजिटल सहायक के रूप में कार्य करता है, जबकि स्थानीय विशेषज्ञ कीटों, पोषक तत्वों और वृद्धि में आपका मार्गदर्शन करने के लिए आपके खेत का दौरा करते हैं।",
        detailedContent: `
          <p>
            Rupiya.app हर किसान को दो तरह की सहायता देता है: <strong class="font-bold text-primary">फोन पर मदद और खेत में मदद</strong>। यह अवशेष मुक्त खेती को आसान और सुरक्षित बनाता है।
          </p>
          
          <strong class="font-semibold text-foreground mt-4 block">ऐप-आधारित सहायता (सॉफ्टवेयर सलाह):</strong>
          <p class="mt-2">रु.app एक डिजिटल फार्मिंग असिस्टेंट की तरह काम करता है। आप कर सकते हैं:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>कभी भी सैटेलाइट मिट्टी परीक्षण करें</li>
            <li><strong class="font-medium text-primary">विशेषज्ञ से पूछें:</strong> अपनी समस्या की तस्वीरें या टेक्स्ट भेजें</li>
            <li>छिड़काव और पोषण के लिए फसल कार्यक्रम प्राप्त करें</li>
            <li>सभी 35 अवशेष-मुक्त इनपुट सीधे ऑर्डर करें</li>
            <li>ऐप के माध्यम से अपनी फसल बेचें</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">जमीनी कृषि विशेषज्ञ:</strong>
          <p class="mt-2">स्थानीय विशेषज्ञ आपकी मदद करने के लिए खेतों का दौरा करते हैं:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-amber-600">कीट और रोग की पहचान</li>
            <li class="font-medium text-amber-600">पोषक तत्वों की कमी की जांच</li>
            <li>मिट्टी में सुधार और उर्वरक में कमी</li>
            <li>सिंचाई और जल योजना</li>
            <li class="font-medium text-green-600">फूल, फल और कटाई में सहायता</li>
          </ul>
        `
      },
      "inputs": {
        title: "25 अवशेष-मुक्त इनपुट",
        content: "उर्वरकों, कीटनाशकों और वृद्धि बढ़ाने वाले 25+ प्रमाणित जैविक और अवशेष-मुक्त कृषि इनपुट तक पहुंच। सभी उत्पादों का कड़ाई से परीक्षण किया जाता है और सुरक्षित और टिकाऊ कृषि पद्धतियों को सुनिश्चित करते हुए अंतरराष्ट्रीय जैविक मानकों को पूरा करने के लिए प्रमाणित किया जाता है।",
      },
      "insurance": {
        title: "पैरामीट्रिक बीमा",
        content: "मौसम और वन्यजीवों से होने वाले नुकसान के लिए स्वचालित भुगतान। कोई लंबी कागजी कार्रवाई या सर्वेक्षण नहीं। अत्यधिक बारिश, आर्द्रता, तापमान के झटके, और अधिक के लिए तेजी से, स्वचालित दावा प्रसंस्करण प्राप्त करें।",
        detailedContent: `
          <p>
            खेती जोखिम भरी है। मौसम तेजी से बदलता है, और वन्यजीव रातोंरात फसलों को नुकसान पहुंचा सकते हैं। Rupiya.app पैरामीट्रिक बीमा प्रदान करता है जो इन घटनाओं के होने पर आपको भुगतान करता है—<strong class="font-bold text-primary">बिना किसी लंबी कागजी कार्रवाई या निरीक्षण के</strong>।
          </p>
          
          <strong class="font-semibold text-foreground mt-4 block">यह क्या कवर करता है:</strong>
          <ul class="list-none mt-2 space-y-3">
            <li>
              <strong class="font-medium text-blue-600">अत्यधिक वर्षा को कवर करता है</strong>
              <p class="text-base text-muted-foreground">यदि आपके क्षेत्र में वर्षा सुरक्षित सीमा को पार कर जाती है, तो आपको <strong class="font-medium text-foreground">स्वचालित भुगतान</strong> मिलता है। कोई दावा नहीं। कोई सर्वेक्षण नहीं। सिस्टम इसे मौसम स्टेशनों के माध्यम से ट्रैक करता है।</p>
            </li>
            <li>
              <strong class="font-medium text-teal-600">कम या उच्च आर्द्रता</strong>
              <p class="text-base text-muted-foreground">यदि आर्द्रता निर्धारित सीमा से बाहर हो जाती है, तो बीमा शुरू हो जाता है और <strong class="font-medium text-foreground">आपको तुरंत भुगतान करता है</strong>।</p>
            </li>
            <li>
              <strong class="font-medium text-red-600">तापमान के झटके</strong>
              <p class="text-base text-muted-foreground">अचानक लू या अप्रत्याशित शीत लहरें उपज कम कर देती हैं। जब तापमान खतरे के निशान को पार करता है, तो आपको <strong class="font-medium text-foreground">मुआवजा मिलता है</strong>।</p>
            </li>
            <li>
              <strong class="font-medium text-amber-700">वन्यजीवों से नुकसान</strong>
              <p class="text-base text-muted-foreground">यह योजना आपको जंगली सूअर, नीलगाय या हिरण जैसे जानवरों के अचानक हमलों से बचाती है।</p>
            </li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">किसान इसे क्यों पसंद करते हैं:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">तेजी से भुगतान</li>
            <li class="font-medium text-green-600">नुकसान साबित करने की जरूरत नहीं</li>
            <li class="font-medium text-green-600">सर्वेक्षण की आवश्यकता नहीं</li>
            <li class="font-medium text-green-600">स्वचालित दावा प्रसंस्करण</li>
          </ul>
        `
      },
      "credit": {
        title: "कृषि ऋण",
        content: "विश्वसनीय बैंकिंग और फिनटेक भागीदारों के माध्यम से त्वरित, परेशानी मुक्त ऋण प्राप्त करें। इनपुट, सिंचाई, बीज, और अधिक के लिए कम कागजी कार्रवाई वाली प्रक्रिया और तेजी से मंजूरी।",
        detailedContent: `
          <p>
            कई किसानों को त्वरित, परेशानी मुक्त ऋण प्राप्त करने के लिए संघर्ष करना पड़ता है। Rupiya.app <strong class="font-bold text-primary">आपको विश्वसनीय बैंकिंग और फिनटेक भागीदारों से जोड़कर</strong> इसे सरल बनाता है ताकि आप सही समय पर सही ऋण प्राप्त कर सकें।
          </p>
          
          <strong class="font-semibold text-foreground mt-4 block">आपको क्या मिलता है:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>छोटे और मध्यम कृषि ऋण</li>
            <li class="font-medium text-green-600">कम कागजी कार्रवाई वाली प्रक्रिया</li>
            <li class="font-medium text-green-600">तेजी से मंजूरी</li>
            <li>डिजिटल ऑनबोर्डिंग</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">यह ऋण कहाँ मदद कर सकता है:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>अवशेष-मुक्त खेती इनपुट खरीदना</li>
            <li>सिंचाई में सुधार</li>
            <li>बीज और रोपण सामग्री</li>
            <li>उर्वरक और पोषण</li>
            <li>कटाई और श्रम</li>
          </ul>

          <br/>
          <strong class="font-semibold text-foreground">किसान इसे क्यों पसंद करते हैं:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">त्वरित प्रक्रिया</li>
            <li class="font-medium text-green-600">विश्वसनीय बैंक</li>
            <li>कोई छिपा हुआ कदम नहीं</li>
            <li>आसान पुनर्भुगतान विकल्प</li>
          </ul>
        `
      },
      "buyback": {
        title: "बाय-बैक प्रोग्राम",
        content: "आपकी अवशेष-मुक्त उपज के लिए गारंटीकृत बाजार पहुंच। पूर्व-सहमत अनुबंध, उचित पारदर्शी मूल्य निर्धारण और समय पर भुगतान प्राप्त करें। बाजार की सभी अनिश्चितता को समाप्त करता है।",
        detailedContent: `
          <p>
            अपनी फसल कहाँ बेचनी है या आपको उचित मूल्य मिलेगा या नहीं, इसकी चिंता करना छोड़ दें। हमारा बाय-बैक प्रोग्राम आपको <strong class="font-bold text-primary">गारंटीकृत बाजार पहुंच</strong> देता है और आपको उच्च-गुणवत्ता, अवशेष-मुक्त उपज उगाने के लिए पुरस्कृत करता है।
          </p>
          
          <strong class="font-semibold text-foreground mt-4 block">आपको क्या मिलता है:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>मौसम से पहले पूर्व-सहमत अनुबंध</li>
            <li>आपकी उपज के लिए स्पष्ट गुणवत्ता मानक</li>
            <li>मानकों को पूरा करने वाली उपज की <strong class="font-medium text-primary">गारंटीकृत खरीद</strong></li>
            <li>खेत से सीधे पिकअप शेड्यूलिंग</li>
          </ul>
          
          <br/>
          <strong class="font-semibold text-foreground">किसान इसे क्यों पसंद करते हैं:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li class="font-medium text-green-600">बाजार की अनिश्चितता को समाप्त करता है</li>
            <li class="font-medium text-green-600">निष्पक्ष और पारदर्शी मूल्य निर्धारण</li>
            <li class="font-medium text-green-600">सीधे आपके खाते में समय पर भुगतान</li>
            <li class="font-medium text-green-600">उच्च-गुणवत्ता, अवशेष-मुक्त खेती के लिए पुरस्कार</li>
            <li>बिचौलियों से निपटने की जरूरत नहीं</li>
          </ul>
        `
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
            {selectedCard === "inputs" ? (
              // IF 'inputs' is selected, show this list
              <div className="flex flex-col gap-4 mt-4">
                
                {/* Make sure your map uses '(product, index)' 
                  and the img uses 'product.src'
                */}
                {productImages.map((product, index) => (
                  <div 
                    key={index} 
                    // MODIFIED: Switched to flex-col to stack image and name
                    className="flex flex-col items-center gap-4 p-4 py-6 border rounded-lg shadow-sm bg-background"
                  >
                    {/* MODIFIED: 
                      - Container is 80% width (w-4/5) and centered (mx-auto)
                      - Image fills this container, 'h-auto' respects aspect ratio
                      - 'object-contain' ensures the entire image is visible
                    */}
                    <div className="w-4/5 mx-auto">
                      <img
                        src={product.src}
                        alt={product.name}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    
                    {/* MODIFIED: Text is centered and larger */}
                    <span className="font-semibold text-xl sm:text-2xl text-foreground mt-2">
                      {product.name}
                    </span>
                  </div>
                ))}
              
              </div>
            ) : (
              // ELSE, show the normal text content
              <div
                className="text-lg text-muted-foreground leading-relaxed max-w-4xl space-y-4"
                dangerouslySetInnerHTML={{
                  __html: (selectedServiceText as any).detailedContent || selectedServiceText.content,
                }}
              />
            )}
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
              className="border-border shadow-medium hover:shadow-large transition-all duration-300 cursor-pointer bg-card overflow-hidden group hover:-translate-y-1 relative"
              onClick={() => setSelectedCard(service.id)}
            >
              {/* Arrow at upper right corner */}
              <ArrowLeft className="absolute top-4 right-4 h-6 w-6 text-primary rotate-180 group-hover:translate-x-2 transition-transform z-10" />
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