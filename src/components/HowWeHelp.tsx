import { useState } from "react";
import {
  Users,
  Building2,
  ShoppingCart,
  TrendingUp,
  Languages, // Import icon for language toggle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// --- ALL TRANSLATABLE TEXT ---
const translations = {
  en: {
    toggleLanguage: "हिंदी में",
    selectUserType: "Select a user type above to see how we can help you",
    benefitsFor: "Benefits for {title}",
    userTypes: {
      farmer: {
        title: "Farmer",
        // NEW: Replaced benefits array with a single detailsHtml string
        detailsHtml: `
          <div class="space-y-8">
    
            <!-- CROPS WE SUPPORT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🌱 Crops We Support</h4>
                <p class="text-lg text-muted-foreground mb-3">Rupiya.app works with farmers growing:</p>
                <div class="flex flex-wrap gap-3">
                    <span class="bg-green-100 text-green-800 font-medium px-4 py-1 rounded-full">Banana</span>
                    <span class="bg-red-100 text-red-800 font-medium px-4 py-1 rounded-full">Chilli</span>
                    <span class="bg-yellow-100 text-yellow-800 font-medium px-4 py-1 rounded-full">Ginger</span>
                    <span class="bg-blue-100 text-blue-800 font-medium px-4 py-1 rounded-full">Maize</span>
                    <span class="bg-purple-100 text-purple-800 font-medium px-4 py-1 rounded-full">Pigeon Pea (Toor)</span>
                    <span class="bg-orange-100 text-orange-800 font-medium px-4 py-1 rounded-full">Turmeric</span>
                </div>
            </div>
        
            <!-- HOW TO SHIFT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">✨ How to Shift to Residue-Free Farming</h4>
                <p class="text-lg text-muted-foreground mb-4">It's easy! It means using clean, natural inputs, not stopping fertilizers. We guide you step-by-step:</p>
                <ul class="space-y-3 list-none p-0">
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">1.</strong><span><strong class="font-semibold text-foreground">Slowly reduce harmful chemicals.</strong> No sudden stops! We guide this transition.</span></li>
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">2.</strong><span><strong class="font-semibold text-foreground">Use Rupiya's 35+ clean inputs</strong> instead of heavy chemicals (like <i class="text-green-700">Beauv Shakti</i> or <i class="text-green-700">Rupiya Kuber</i>).</span></li>
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">3.</strong><span><strong class="font-semibold text-foreground">Improve soil health</strong> with natural boosters for better microbes and moisture.</span></li>
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">4.</strong><span><strong class="font-semibold text-foreground">Follow simple guidance</strong> from Rupiya experts on product use and pest management.</span></li>
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">5.</strong><span><strong class="font-semibold text-foreground">Keep basic farm records.</strong> This helps with traceability, buy-back, and carbon credits!</span></li>
                </ul>
            </div>
        
            <!-- CARBON CREDITS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">💰 How Carbon Credit Income Works</h4>
                <p class="text-lg text-muted-foreground mb-4">Get extra income just for improving your soil health!</p>
                <ul class="space-y-3 list-none p-0">
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>Natural farming increases soil carbon.</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>Rupiya measures this increase using satellites and soil sampling.</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span><strong class="text-foreground">You earn money per tonne of carbon stored</strong> (usually <strong class="text-green-700">₹2,000-₹5,000 per acre per year</strong>).</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>Get paid <strong class="text-foreground">80% this year</strong> and 20% after 5 years (as a safety reserve).</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>You farm, we handle the global carbon market!</span></li>
                </ul>
                <img
                  src="./src/assets/farmers.jpg" // This path is from your original file
                  alt="Our vision for a comprehensive financial ecosystem"
                  className="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg mb-16"
                />
                <p class="mt-4 text-center font-bold text-xl text-primary bg-primary/10 p-3 rounded-lg">Healthy Soil = More Income!</p>
            </div>
        
            <!-- YIELD & COST -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🚀 How We Boost Your Yield & Cut Costs</h4>
                <p class="text-lg text-muted-foreground mb-4">We use awesome tech and real field experts to help you grow more for less.</p>
                
                <strong class="text-lg font-semibold text-foreground">1. Mobile App Magic ✨</strong>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li><strong class="text-green-700">Satellite Soil Testing:</strong> Know your soil health anytime.</li>
                    <li><strong class="text-green-700">Ask the Expert:</strong> Send a photo of your problem, get real advice!</li>
                    <li><strong class="text-green-700">Farming Schedule:</strong> Get plans for spraying and nutrients.</li>
                    <li><strong class="text-green-700">Buy/Sell on App:</strong> Order inputs, sell your harvest.</li>
                </ul>
                
                <strong class="text-lg font-semibold text-foreground mt-4 block">2. On-Ground Experts 👨‍🌾</strong>
                <p class="text-muted-foreground my-2">Local experts visit your farm to help with pests, soil correction, and irrigation.</p>
                
                <strong class="text-lg font-semibold text-foreground mt-4 block">3. Our 35+ Safe Inputs 🌿</strong>
                <p class="text-muted-foreground my-2">These natural inputs improve soil life, boost crop strength, and control pests naturally.</p>
        
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <h5 class="text-xl font-bold text-red-700 mb-2">How This REDUCES COST 📉</h5>
                        <ul class="list-disc list-inside space-y-1 text-red-600">
                            <li>Fewer chemical pesticides needed</li>
                            <li>Lower fertilizer usage over time</li>
                            <li>Soil holds more moisture (less irrigation)</li>
                            <li>Better crop health reduces wastage</li>
                        </ul>
                    </div>
                    <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h5 class="text-xl font-bold text-green-700 mb-2">How This INCREASES YIELD 📈</h5>
                        <ul class="list-disc list-inside space-y-1 text-green-600">
                            <li>Soil becomes alive and fertile</li>
                            <li>Plants get balanced nutrition</li>
                            <li>Flower drop reduces</li>
                            <li>Pest pressure comes down</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>
        `,
      },
      fpo: {
        title: "FPO",
        benefits: [
          "Collective bargaining power for better input prices",
          "Streamlined access to technology for all member farmers",
          "Bulk procurement advantages for agricultural inputs",
          "Professional support in quality management and certification",
          "Enhanced market linkages and better price realization",
          "Capacity building programs for sustainable farming practices",
        ],
      },
      buyer: {
        title: "Institutional Buyer",
        benefits: [
          "Assured supply of quality-certified agricultural produce",
          "Traceability and transparency throughout the supply chain",
          "Direct farmer connections eliminating middlemen",
          "Customizable procurement based on specific quality parameters",
          "ESG compliance through sustainable sourcing practices",
          "Year-round supply planning with predictable pricing",
        ],
      },
      investor: {
        title: "Investor / Carbon Buyer",
        benefits: [
          "Verified carbon credits from regenerative agriculture",
          "Transparent monitoring and reporting of carbon sequestration",
          "Direct impact on sustainable farming practices",
          "Compliance with international carbon credit standards",
          "Portfolio diversification with agricultural carbon assets",
          "Measurable social and environmental impact metrics",
        ],
      },
    },
  },
  hi: {
    toggleLanguage: "Switch to English",
    selectUserType:
      "आपको हम कैसे मदद कर सकते हैं, यह देखने के लिए ऊपर एक उपयोगकर्ता प्रकार चुनें",
    benefitsFor: "{title} के लिए लाभ",
    userTypes: {
      farmer: {
        title: "किसान",
        // NEW: Translated HTML content for Hindi
        detailsHtml: `
          <div class="space-y-8">
    
            <!-- CROPS WE SUPPORT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🌱 हम किन फसलों का समर्थन करते हैं</h4>
                <p class="text-lg text-muted-foreground mb-3">Rupiya.app इन फसलों को उगाने वाले किसानों के साथ काम करता है:</p>
                <div class="flex flex-wrap gap-3">
                    <span class="bg-green-100 text-green-800 font-medium px-4 py-1 rounded-full">केला</span>
                    <span class="bg-red-100 text-red-800 font-medium px-4 py-1 rounded-full">मिर्च</span>
                    <span class="bg-yellow-100 text-yellow-800 font-medium px-4 py-1 rounded-full">अदरक</span>
                    <span class="bg-blue-100 text-blue-800 font-medium px-4 py-1 rounded-full">मक्का</span>
                    <span class="bg-purple-100 text-purple-800 font-medium px-4 py-1 rounded-full">अरहर (तूर)</span>
                    <span class="bg-orange-100 text-orange-800 font-medium px-4 py-1 rounded-full">हल्दी</span>
                </div>
            </div>
        
            <!-- HOW TO SHIFT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">✨ रेसिड्यू-फ्री खेती में कैसे बदलें</h4>
                <p class="text-lg text-muted-foreground mb-4">यह आसान है! इसका मतलब है स्वच्छ, प्राकृतिक इनपुट का उपयोग करना, न कि उर्वरकों को रोकना। हम आपको कदम दर कदम मार्गदर्शन करते हैं:</p>
                <ul class="space-y-3 list-none p-0">
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">1.</strong><span><strong class="font-semibold text-foreground">हानिकारक रसायनों को धीरे-धीरे कम करें।</strong> अचानक बंद न करें! हम इस बदलाव में आपका मार्गदर्शन करते हैं।</span></li>
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">2.</strong><span>भारी रसायनों के बजाय <strong class="font-semibold text-foreground">Rupiya के 35+ स्वच्छ इनपुट का उपयोग करें</strong> (जैसे <i class="text-green-700">ब्यूव शक्ति</i> या <i class="text-green-700">Rupiya कुबेर</i>)।</span></li>
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">3.</strong><span>बेहतर रोगाणुओं और नमी के लिए प्राकृतिक बूस्टर के साथ <strong class="font-semibold text-foreground">मिट्टी का स्वास्थ्य सुधारें</strong>।</span></li>
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">4.</strong><span>उत्पाद के उपयोग और कीट प्रबंधन पर Rupiya विशेषज्ञों से <strong class="font-semibold text-foreground">सरल मार्गदर्शन का पालन करें</strong>।</span></li>
                    <li class="flex items-start gap-3"><strong class="font-bold text-primary text-xl">5.</strong><span><strong class="font-semibold text-foreground">बुनियादी खेत रिकॉर्ड रखें।</strong> यह ट्रेसबिलिटी, बाय-बैक और कार्बन क्रेडिट में मदद करता है!</span></li>
                </ul>
            </div>
        
            <!-- CARBON CREDITS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">💰 कार्बन क्रेडिट आय कैसे काम करती है</h4>
                <p class="text-lg text-muted-foreground mb-4">केवल अपनी मिट्टी के स्वास्थ्य में सुधार के लिए अतिरिक्त आय प्राप्त करें!</p>
                <ul class="space-y-3 list-none p-0">
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>प्राकृतिक खेती से मिट्टी में कार्बन बढ़ता है।</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>Rupiya उपग्रहों और मिट्टी के नमूनों का उपयोग करके इस वृद्धि को मापता है।</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span><strong class="text-foreground">आपको प्रति टन संग्रहीत कार्बन पर पैसा मिलता है</strong> (आमतौर पर <strong class="text-green-700">₹2,000-₹5,000 प्रति एकड़ प्रति वर्ष</strong>)।</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span><strong class="text-foreground">इस वर्ष 80%</strong> और 5 वर्षों के बाद 20% (सुरक्षा रिजर्व के रूप में) भुगतान प्राप्त करें।</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>आप खेती करें, हम वैश्विक कार्बन बाजार को संभालते हैं!</span></li>
                </ul>
                <img
                  src="./src/assets/farmers.jpg" // This path is from your original file
                  alt="Our vision for a comprehensive financial ecosystem"
                  className="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg mb-16"
                />
                <p class="mt-4 text-center font-bold text-xl text-primary bg-primary/10 p-3 rounded-lg">स्वस्थ मिट्टी = अधिक आय!</p>
            </div>
        
            <!-- YIELD & COST -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🚀 हम आपकी उपज कैसे बढ़ाते हैं और लागत कैसे कम करते हैं</h4>
                <p class="text-lg text-muted-foreground mb-4">हम आपको कम लागत में अधिक उगाने में मदद करने के लिए बेहतरीन तकनीक और वास्तविक क्षेत्र विशेषज्ञों का उपयोग करते हैं।</p>
                
                <strong class="text-lg font-semibold text-foreground">1. मोबाइल ऐप मैजिक ✨</strong>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li><strong class="text-green-700">सैटेलाइट सॉयल टेस्टिंग:</strong> किसी भी समय अपनी मिट्टी का स्वास्थ्य जानें।</li>
                    <li><strong class="text-green-700">विशेषज्ञ से पूछें:</strong> अपनी समस्या की एक तस्वीर भेजें, और वास्तविक सलाह पाएं!</li>
                    <li><strong class="text-green-700">खेती का शेड्यूल:</strong> छिड़काव और पोषक तत्वों के लिए योजनाएँ प्राप्त करें।</li>
                    <li><strong class="text-green-700">ऐप पर खरीदें/बेचें:</strong> इनपुट ऑर्डर करें, अपनी फसल बेचें।</li>
                </ul>
                
                <strong class="text-lg font-semibold text-foreground mt-4 block">2. ऑन-ग्राउंड विशेषज्ञ 👨‍🌾</strong>
                <p class="text-muted-foreground my-2">स्थानीय विशेषज्ञ कीटों, मिट्टी सुधार और सिंचाई में मदद करने के लिए आपके खेत का दौरा करते हैं।</p>
                
                <strong class="text-lg font-semibold text-foreground mt-4 block">3. हमारे 35+ सुरक्षित इनपुट 🌿</strong>
                <p class="text-muted-foreground my-2">ये प्राकृतिक इनपुट मिट्टी के जीवन में सुधार करते हैं, फसल की ताकत बढ़ाते हैं, और कीटों को प्राकृतिक रूप से नियंत्रित करते हैं।</p>
        
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <h5 class="text-xl font-bold text-red-700 mb-2">यह लागत कैसे कम करता है 📉</h5>
                        <ul class="list-disc list-inside space-y-1 text-red-600">
                            <li>कम रासायनिक कीटनाशकों की आवश्यकता</li>
                            <li>समय के साथ उर्वरक का कम उपयोग</li>
                            <li>मिट्टी अधिक नमी रखती है (कम सिंचाई)</li>
                            <li>बेहतर फसल स्वास्थ्य से बर्बादी कम होती है</li>
                        </ul>
                    </div>
                    <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h5 class="text-xl font-bold text-green-700 mb-2">यह उपज कैसे बढ़ाता है 📈</h5>
                        <ul class="list-disc list-inside space-y-1 text-green-600">
                            <li>मिट्टी जीवंत और उपजाऊ बनती है</li>
                            <li>पौधों को संतुलित पोषण मिलता है</li>
                            <li>फूलों का झड़ना कम हो जाता है</li>
                            <li>कीटों का दबाव कम हो जाता है</li>
</ul>
                    </div>
                </div>
            </div>
        
        </div>
        `,
      },
      fpo: {
        title: "एफपीओ",
        benefits: [
          "बेहतर इनपुट कीमतों के लिए सामूहिक सौदेबाजी की शक्ति",
          "सभी सदस्य किसानों के लिए प्रौद्योगिकी तक सुव्यवस्थित पहुंच",
          "कृषि इनपुट के लिए थोक खरीद के लाभ",
          "गुणवत्ता प्रबंधन और प्रमाणन में पेशेवर सहायता",
          "उन्नत बाजार संपर्क और बेहतर मूल्य प्राप्ति",
          "टिकाऊ कृषि पद्धतियों के लिए क्षमता निर्माण कार्यक्रम",
        ],
      },
      buyer: {
        title: "संस्थागत खरीदार",
        benefits: [
          "गुणवत्ता-प्रमाणित कृषि उपज की सुनिश्चित आपूर्ति",
          "आपूर्ति श्रृंखला में पता लगाने योग्यता और पारदर्शिता",
          "बिचौलियों को खत्म करते हुए सीधे किसान से संपर्क",
          "विशिष्ट गुणवत्ता मापदंडों के आधार पर अनुकूलन योग्य खरीद",
          "टिकाऊ सोर्सिंग प्रथाओं के माध्यम से ईएसजी अनुपालन",
          "भविष्य कहने योग्य मूल्य निर्धारण के साथ साल भर की आपूर्ति योजना",
        ],
      },
      investor: {
        title: "निवेशक / कार्बन खरीदार",
        benefits: [
          "पुनर्योजी कृषि से सत्यापित कार्बन क्रेडिट",
          "कार्बन पृथक्करण की पारदर्शी निगरानी और रिपोर्टिंग",
          "टिकाऊ कृषि पद्धतियों पर सीधा प्रभाव",
          "अंतर्राष्ट्रीय कार्बन क्रेडिट मानकों का अनुपालन",
          "कृषि कार्बन संपत्ति के साथ पोर्टफोलियो विविधीकरण",
          "मापने योग्य सामाजिक और पर्यावरणीय प्रभाव मेट्रिक्स",
        ],
      },
    },
  },
};

// --- DATA FOR USER TYPES (ICONS) ---
// We keep icons and IDs separate from translatable text.
const userTypeDefinitions = [
  {
    id: "farmer",
    icon: Users,
  },
  {
    id: "fpo",
    icon: Building2,
  },
  {
    id: "buyer",
    icon: ShoppingCart,
  },
  {
    id: "investor",
    icon: TrendingUp,
  },
];

const HowWeHelp = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [language, setLanguage] = useState<"en" | "hi">("en"); // Language state

  // Get the correct text based on the current language
  const t = translations[language];

  const selectedUserType = userTypeDefinitions.find(
    (u) => u.id === selectedUser,
  );
  // Find the selected user's translatable text
  const selectedUserText = selectedUser
    ? (t.userTypes[selectedUser as keyof typeof t.userTypes] as any) // Use 'any' to access both benefits and detailsHtml
    : null;

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "en" ? "hi" : "en"));
  };

  return (
    <div className="space-y-12">
      {/* --- LANGUAGE TOGGLE BUTTON --- */}
      <div className="flex justify-end">
        <Button onClick={toggleLanguage} variant="outline" className="gap-2">
          <Languages className="h-4 w-4" />
          {t.toggleLanguage}
        </Button>
      </div>

      {/* User Type Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userTypeDefinitions.map((user) => (
          <Button
            key={user.id}
            variant={selectedUser === user.id ? "default" : "outline"}
            className={`h-32 flex flex-col items-center justify-center gap-4 text-base font-semibold transition-all duration-300 ${
              selectedUser === user.id
                ? "shadow-large scale-105"
                : "shadow-soft hover:shadow-medium hover:-translate-y-1"
            }`}
            onClick={() => setSelectedUser(user.id)}
          >
            <user.icon className="h-8 w-8" />
            {/* Get title from translations */}
            {t.userTypes[user.id as keyof typeof t.userTypes].title}
          </Button>
        ))}
      </div>

      {/* Benefits Area */}
      <Card className="border-border shadow-large bg-gradient-to-br from-background to-green-light/20">
        <CardContent className="p-12">
          {selectedUserType && selectedUserText ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <selectedUserType.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  {/* Get heading from translations */}
                  {t.benefitsFor.replace("{title}", selectedUserText.title)}
                </h3>
              </div>

              {/* NEW: Conditional Rendering */}
              {selectedUser === "farmer" && selectedUserText.detailsHtml ? (
                // Render rich HTML for farmers
                <div
                  className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: selectedUserText.detailsHtml,
                  }}
                />
              ) : (
                // Render bulleted list for other user types
                <ul className="space-y-4">
                  {selectedUserText.benefits.map((benefit: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-lg text-muted-foreground animate-in fade-in slide-in-from-left-4 duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                {/* Get placeholder text from translations */}
                {t.selectUserType}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HowWeHelp;