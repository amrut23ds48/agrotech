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
import farmers from "@/assets/farmers.jpg"; 
import fpo from "@/assets/fpo.jpg"; 
import institutions from "@/assets/institutions.jpg"; 
import investors from "@/assets/investors.jpg"; 
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
                  src=${farmers}
                  alt="FPO सदस्य Rupiya.app विशेषज्ञों के साथ सहयोग कर रहे हैं"
                  class="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg my-8"
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
        // NEW: Replaced benefits array with a single detailsHtml string from the PDF
        detailsHtml: `
        <div class="space-y-8">

            <!-- HOW WE EMPOWER -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🤝 How Rupiya.app Empowers FPOs</h4>
                <p class="text-lg text-muted-foreground mb-4">We help your FPO become stronger by connecting you to our technology platform and expert network. Your FPO gets the tools and systems to:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>Manage all member farmers easily</li>
                    <li>Track crops, soil reports, and outputs</li>
                    <li>Maintain clean, accurate records</li>
                    <li>Run operations smoothly</li>
                    <li>Support farmers with the right guidance</li>
                </ul>
            </div>
        
            <!-- IMAGE -->
            <img
              src=${fpo}
              alt="FPO members collaborating with Rupiya.app experts"
              class="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg my-8"
            />
        
            <!-- TRAINING SUPPORT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🎓 Training Support</h4>
                <p class="text-lg text-muted-foreground mb-4">Your members receive simple, practical training on:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>Residue-free farming</li>
                    <li>Regenerative practices</li>
                    <li>Safe input usage</li>
                    <li>Soil health improvement</li>
                </ul>
                <p class="text-lg text-muted-foreground mt-3">This helps your FPO produce clean, high-quality crops that buyers prefer.</p>
            </div>
        
            <!-- CARBON CREDITS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">💰 Access to Carbon Credit Revenue</h4>
                <p class="text-lg text-muted-foreground mb-4">Your FPO earns money for keeping soil healthy. In partnership with <strong class="text-foreground">Carboneg (Europe)</strong>, we ensure trust and guaranteed payouts.</p>
                <ul class="space-y-3 list-none p-0">
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>Healthy soil stores carbon, which is converted into credits.</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>Companies buy these verified credits.</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>Your FPO earns <strong class="text-green-700">₹800 per verified carbon credit</strong>.</span></li>
                </ul>
                <p class="mt-4 text-center font-bold text-xl text-primary bg-primary/10 p-3 rounded-lg">More Good Farming → More Carbon → More Income!</p>
            </div>
        
            <!-- BUY-BACK SUPPORT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">📈 Buy-Back & Supply Chain Support</h4>
                <p class="text-lg text-muted-foreground mb-4">Rupiya.app gives your FPO direct market access and a trusted, stable sales channel.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h5 class="text-xl font-bold text-green-700 mb-2">You Get:</h5>
                        <ul class="list-disc list-inside space-y-1 text-green-600">
                            <li>Farm-gate buy-back for all supported crops</li>
                            <li>Better price realization</li>
                            <li>Smooth logistics and quality handling</li>
                        </ul>
                    </div>
                    <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <h5 class="text-xl font-bold text-red-700 mb-2">You Avoid:</h5>
                        <ul class="list-disc list-inside space-y-1 text-red-600">
                            <li>No middlemen</li>
                            <li>No market uncertainty</li>
                            <li>No payment delays</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- COLLABORATION -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🚀 Collaboration Benefits</h4>
                <p class="text-lg text-muted-foreground mb-4">We grow together as partners. Working with Rupiya.app brings long-term gains:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>Continuous support & shared resources</li>
                    <li>Stronger market presence</li>
                    <li>Growth opportunities</li>
                    <li>Better income for all members</li>
                </ul>
            </div>
        
        </div>
        `,
      },
      buyer: {
        title: "Institutional Buyer",
        // OLD:
        // benefits: [
        //   "Assured supply of quality-certified agricultural produce",
        //   "Traceability and transparency throughout the supply chain",
        //   "Direct farmer connections eliminating middlemen",
        //   "Customizable procurement based on specific quality parameters",
        //   "ESG compliance through sustainable sourcing practices",
        //   "Year-round supply planning with predictable pricing",
        // ],
        // NEW: Replaced benefits array with a single detailsHtml string
        detailsHtml: `
        <div class="space-y-8">

            <!-- QUALITY CONSISTENCY -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">★ Quality Consistency</h4>
                <p class="text-lg text-muted-foreground mb-4">We provide the level of reliability big buyers need. Your supply meets strict institutional standards every single time.</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>Clean, residue-free produce</li>
                    <li>Uniform quality across all farms</li>
                    <li>Verified farmer network</li>
                    <li>Produce grown using safe, monitored practices</li>
                </ul>
            </div>

            <!-- FULL TRACEABILITY -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">📍 Full Traceability</h4>
                <p class="text-lg text-muted-foreground mb-4">Know exactly where your produce comes from. You can trace the product from the farmer's field all the way to your facility.</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>AI-driven monitoring</li>
                    <li>Satellite-based crop tracking</li>
                    <li>Digital farm logs & location-based verification</li>
                </ul>
                <p class="mt-4 text-center font-bold text-xl text-primary bg-primary/10 p-3 rounded-lg">Simple, transparent, and fully verifiable.</p>
            </div>

            <!-- IMAGE -->
            <img
              src=${institutions}
              alt="Traceable supply chain for institutional buyers"
              class="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg my-8"
            />

            <!-- CERTIFICATIONS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">📜 Certifications & Compliance</h4>
                <p class="text-lg text-muted-foreground mb-4">Your supply arrives ready for compliance, reducing supply chain risk and simplifying internal quality audits.</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>Global and domestic safety standards</li>
                    <li>Regulatory alignment</li>
                    <li>Quality and residue checks</li>
                    <li>Full documentation support</li>
                </ul>
            </div>

            <!-- CROP PORTFOLIO -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🌾 Crop Portfolio</h4>
                <p class="text-lg text-muted-foreground mb-3">Choose from multiple clean crops grown under safe, residue-free practices:</p>
                <div class="flex flex-wrap gap-3">
                    <span class="bg-green-100 text-green-800 font-medium px-4 py-1 rounded-full">Banana</span>
                    <span class="bg-red-100 text-red-800 font-medium px-4 py-1 rounded-full">Chilli</span>
                    <span class="bg-yellow-100 text-yellow-800 font-medium px-4 py-1 rounded-full">Ginger</span>
                    <span class="bg-blue-100 text-blue-800 font-medium px-4 py-1 rounded-full">Maize</span>
                    <span class="bg-purple-100 text-purple-800 font-medium px-4 py-1 rounded-full">Pigeon Pea (Toor)</span>
                    <span class="bg-orange-100 text-orange-800 font-medium px-4 py-1 rounded-full">Turmeric</span>
                </div>
            </div>
            
            <!-- SMOOTH PROCUREMENT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🚚 Smooth Procurement Process</h4>
                <p class="text-lg text-muted-foreground mb-4">Large-scale buying becomes easy with an end-to-end managed process, giving you peace of mind and predictable supply.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <ul class="list-disc list-inside space-y-1 text-green-600">
                            <li>Streamlined workflow</li>
                            <li>Reliable delivery</li>
                            <li>Consistent volume</li>
                        </ul>
                    </div>
                    <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <ul class="list-disc list-inside space-y-1 text-blue-600">
                            <li>Standardized quality</li>
                            <li>Transparent pricing</li>
                            <li>End-to-end management</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>
        `,
      },
      investor: {
        title: "Investor / Carbon Buyer",
        // OLD:
        // benefits: [
        //   "Verified carbon credits from regenerative agriculture",
        //   "Transparent monitoring and reporting of carbon sequestration",
        //   "Direct impact on sustainable farming practices",
        //   "Compliance with international carbon credit standards",
        //   "Portfolio diversification with agricultural carbon assets",
        //   "Measurable social and environmental impact metrics",
        // ],
        // NEW: Replaced benefits array with a single detailsHtml string
        detailsHtml: `
        <div class="space-y-8">

            <!-- IMPACT NUMBERS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">📈 Impact Numbers</h4>
                <p class="text-lg text-muted-foreground mb-4">Rupiya.app is scaling fast, showing real adoption and climate impact:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>Farmer network growing every month</li>
                    <li>Residue-free farming land expanding across multiple states</li>
                    <li>Soil carbon stored (verified via satellite + field sampling)</li>
                    <li>35+ clean agri-inputs used across all supported crops</li>
                    <li>Clean produce buy-back active and increasing every season</li>
                </ul>
            </div>

            <!-- GROWTH HIGHLIGHTS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🚀 Growth Highlights</h4>
                <p class="text-lg text-muted-foreground mb-4">Our growth curve is steady and visible:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>Rising farmer onboarding</li>
                    <li>More carbon credits generated each cycle</li>
                    <li>Satellite soil tests increasing rapidly</li>
                    <li>Strong app engagement</li>
                    <li>Expansion into new districts and FPO clusters</li>
                </ul>
                <p class="mt-4 text-center font-bold text-xl text-primary bg-primary/10 p-3 rounded-lg">More Farmers → More Clean Acres → More Verified Credits</p>
            </div>

            <!-- IMAGE -->
            <img
              src=${investors}
              alt="Graphs showing investor impact and growth"
              class="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg my-8"
            />

            <!-- COLLABORATIONS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🤝 Collaborations & MoUs</h4>
                <p class="text-lg text-muted-foreground mb-4">Rupiya.app is backed by trusted national and global partners, bringing reliability and confidence to the ecosystem:</p>
                <div class="flex flex-wrap gap-3">
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">Carboneg (Europe)</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">Augmont</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">Goibibo</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">ITC</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">NSDL Payments Bank</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">Probus Insurance</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">ICICI Bank</span>
                </div>
            </div>

            <!-- FARMER FEEDBACK -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🧑‍🌾 Farmer Feedback</h4>
                <p class="text-lg text-muted-foreground mb-4">This trust at the ground level is our biggest strength. Farmers report:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>Soil is improving & chemical cost is dropping</li>
                    <li>Crops are stronger & produce quality is better</li>
                    <li>Buy-back is helping them sell easily</li>
                    <li>Carbon credits give real extra income</li>
                </ul>
            </div>
            
            <!-- SUPPLY CHAIN -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🌐 Supply Chain Achievements</h4>
                <p class="text-lg text-muted-foreground mb-4">We've built a clean and traceable farm-to-buyer network designed for reliability, safety, and scale.</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>Direct farm-gate procurement</li>
                    <li>Full traceability with digital logs & satellite data</li>
                    <li>Low residue levels and high consistency in quality</li>
                    <li>Verified digital records at every step</li>
                </ul>
            </div>
        
        </div>
        `,
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
                  src=${farmers}
                  alt="FPO सदस्य Rupiya.app विशेषज्ञों के साथ सहयोग कर रहे हैं"
                  class="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg my-8"
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
        // NEW: Translated HTML content for Hindi
        detailsHtml: `
        <div class="space-y-8">

            <!-- HOW WE EMPOWER -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🤝 Rupiya.app FPOs को कैसे सशक्त बनाता है</h4>
                <p class="text-lg text-muted-foreground mb-4">हम आपको अपने प्रौद्योगिकी मंच और विशेषज्ञ नेटवर्क से जोड़कर आपके FPO को मजबूत बनाने में मदद करते हैं। आपके FPO को ये टूल और सिस्टम मिलते हैं:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>सभी सदस्य किसानों को आसानी से प्रबंधित करें</li>
                    <li>फसलों, मिट्टी की रिपोर्ट और आउटपुट को ट्रैक करें</li>
                    <li>स्वच्छ, सटीक रिकॉर्ड बनाए रखें</li>
                    <li>संचालन सुचारू रूप से चलाएं</li>
                    <li>सही मार्गदर्शन के साथ किसानों का समर्थन करें</li>
                </ul>
            </div>
        
            <!-- IMAGE -->
            <img
              src=${fpo}
              alt="FPO सदस्य Rupiya.app विशेषज्ञों के साथ सहयोग कर रहे हैं"
              class="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg my-8"
            />
        
            <!-- TRAINING SUPPORT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🎓 प्रशिक्षण सहायता</h4>
                <p class="text-lg text-muted-foreground mb-4">आपके सदस्यों को इस पर सरल, व्यावहारिक प्रशिक्षण मिलता है:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>अवशेष-मुक्त खेती (रेसिड्यू-फ्री फार्मिंग)</li>
                    <li>पुनर्योजी प्रथाएं (रीजेनरेटिव प्रैक्टिस)</li>
                    <li>सुरक्षित इनपुट उपयोग</li>
                    <li>मिट्टी के स्वास्थ्य में सुधार</li>
                </ul>
                <p class="text-lg text-muted-foreground mt-3">यह आपके FPO को स्वच्छ, उच्च-गुणवत्ता वाली फसलें पैदा करने में मदद करता है जिन्हें खरीदार पसंद करते हैं।</p>
            </div>
        
            <!-- CARBON CREDITS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">💰 कार्बन क्रेडिट राजस्व तक पहुंच</h4>
                <p class="text-lg text-muted-foreground mb-4">आपका FPO मिट्टी को स्वस्थ रखने के लिए पैसा कमाता है। <strong class="text-foreground">Carboneg (Europe)</strong> के साथ साझेदारी में, हम विश्वास और गारंटीकृत भुगतान सुनिश्चित करते हैं।</p>
                <ul class="space-y-3 list-none p-0">
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>स्वस्थ मिट्टी कार्बन जमा करती है, जिसे क्रेडिट में बदल दिया जाता है।</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>कंपनियां ये सत्यापित क्रेडिट खरीदती हैं।</span></li>
                    <li class="flex items-start gap-3"><span class="font-bold text-green-600 text-xl">✔</span><span>आपका FPO <strong class="text-green-700">₹800 प्रति सत्यापित कार्बन क्रेडिट</strong> कमाता है।</span></li>
                </ul>
                <p class="mt-4 text-center font-bold text-xl text-primary bg-primary/10 p-3 rounded-lg">बेहतर खेती → अधिक कार्बन → अधिक आय!</p>
            </div>
        
            <!-- BUY-BACK SUPPORT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">📈 बाय-बैक और सप्लाई चेन सपोर्ट</h4>
                <p class="text-lg text-muted-foreground mb-4">Rupiya.app आपके FPO को सीधी बाजार पहुंच और एक विश्वसनीय, स्थिर बिक्री चैनल देता है।</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h5 class="text-xl font-bold text-green-700 mb-2">आपको मिलता है:</h5>
                        <ul class="list-disc list-inside space-y-1 text-green-600">
                            <li>सभी समर्थित फसलों के लिए फार्म-गेट बाय-बैक</li>
                            <li>बेहतर मूल्य प्राप्ति</li>
                            <li>सुचारू रसद और गुणवत्ता हैंडलिंग</li>
                        </ul>
                    </div>
                    <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <h5 class="text-xl font-bold text-red-700 mb-2">आप बचते हैं:</h5>
                        <ul class="list-disc list-inside space-y-1 text-red-600">
                            <li>कोई बिचौलिया नहीं</li>
                            <li>कोई बाजार अनिश्चितता नहीं</li>
                            <li>भुगतान में कोई देरी नहीं</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- COLLABORATION -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🚀 सहयोग के लाभ</h4>
                <p class="text-lg text-muted-foreground mb-4">हम भागीदारों के रूप में एक साथ बढ़ते हैं। Rupiya.app के साथ काम करने से लंबी अवधि के लाभ मिलते हैं:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>निरंतर समर्थन और साझा संसाधन</li>
                    <li>मजबूत बाजार उपस्थिति</li>
                    <li>विकास के अवसर</li>
                    <li>सभी सदस्यों के लिए बेहतर आय</li>
                </ul>
            </div>
        
        </div>
        `,
      },
      buyer: {
        title: "संस्थागत खरीदार",
        // OLD:
        // benefits: [
        //   "गुणवत्ता-प्रमाणित कृषि उपज की सुनिश्चित आपूर्ति",
        //   "आपूर्ति श्रृंखला में पता लगाने योग्यता और पारदर्शिता",
        //   "बिचौलियों को खत्म करते हुए सीधे किसान से संपर्क",
        //   "विशिष्ट गुणवत्ता मापदंडों के आधार पर अनुकूलन योग्य खरीद",
        //   "टिकाऊ सोर्सिंग प्रथाओं के माध्यम से ईएसजी अनुपालन",
        //   "भविष्य कहने योग्य मूल्य निर्धारण के साथ साल भर की आपूर्ति योजना",
        // ],
        // NEW: Translated HTML content for Hindi
        detailsHtml: `
        <div class="space-y-8">

            <!-- QUALITY CONSISTENCY -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">★ गुणवत्ता में निरंतरता</h4>
                <p class="text-lg text-muted-foreground mb-4">हम बड़े खरीदारों के लिए आवश्यक विश्वसनीयता प्रदान करते हैं। आपकी आपूर्ति हर बार सख्त संस्थागत मानकों को पूरा करती है।</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>स्वच्छ, अवशेष-मुक्त (रेसिड्यू-फ्री) उपज</li>
                    <li>सभी फार्मों पर एक समान गुणवत्ता</li>
                    <li>सत्यापित किसान नेटवर्क</li>
                    <li>सुरक्षित, निगरानी वाली प्रथाओं का उपयोग करके उगाई गई उपज</li>
                </ul>
            </div>

            <!-- FULL TRACEABILITY -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">📍 पूर्ण ट्रेसबिलिटी</h4>
                <p class="text-lg text-muted-foreground mb-4">जानें कि आपकी उपज कहाँ से आती है। आप उत्पाद को किसान के खेत से लेकर अपनी सुविधा तक ट्रैक कर सकते हैं।</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>एआई-संचालित निगरानी</li>
                    <li>सैटेलाइट-आधारित फसल ट्रैकिंग</li>
                    <li>डिजिटल फार्म लॉग और स्थान-आधारित सत्यापन</li>
                </ul>
                <p class="mt-4 text-center font-bold text-xl text-primary bg-primary/10 p-3 rounded-lg">सरल, पारदर्शी और पूरी तरह से सत्यापन योग्य।</p>
            </div>

            <!-- IMAGE -->
            <img
              src=${institutions}
              alt="संस्थागत खरीदारों के लिए ट्रैसेबल आपूर्ति श्रृंखला"
              class="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg my-8"
            />

            <!-- CERTIFICATIONS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">📜 प्रमाणन और अनुपालन</h4>
                <p class="text-lg text-muted-foreground mb-4">आपकी आपूर्ति अनुपालन के लिए तैयार आती है, जिससे आपूर्ति श्रृंखला जोखिम कम होता है और आंतरिक गुणवत्ता ऑडिट सरल होता है।</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>वैश्विक और घरेलू सुरक्षा मानक</li>
                    <li>नियामक संरेखण</li>
                    <li>गुणवत्ता और अवशेष जांच</li>
                    <li>पूर्ण दस्तावेज़ीकरण समर्थन</li>
                </ul>
            </div>

            <!-- CROP PORTFOLIO -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🌾 फसल पोर्टफोलियो</h4>
                <p class="text-lg text-muted-foreground mb-3">सुरक्षित, अवशेष-मुक्त प्रथाओं के तहत उगाई गई कई स्वच्छ फसलों में से चुनें:</p>
                <div class="flex flex-wrap gap-3">
                    <span class="bg-green-100 text-green-800 font-medium px-4 py-1 rounded-full">केला</span>
                    <span class="bg-red-100 text-red-800 font-medium px-4 py-1 rounded-full">मिर्च</span>
                    <span class="bg-yellow-100 text-yellow-800 font-medium px-4 py-1 rounded-full">अदरक</span>
                    <span class="bg-blue-100 text-blue-800 font-medium px-4 py-1 rounded-full">मक्का</span>
                    <span class="bg-purple-100 text-purple-800 font-medium px-4 py-1 rounded-full">अरहर (तूर)</span>
                    <span class="bg-orange-100 text-orange-800 font-medium px-4 py-1 rounded-full">हल्दी</span>
                </div>
            </div>
            
            <!-- SMOOTH PROCUREMENT -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🚚 सुगम खरीद प्रक्रिया</h4>
                <p class="text-lg text-muted-foreground mb-4">एंड-टू-एंड प्रबंधित प्रक्रिया के साथ बड़े पैमाने पर खरीदारी आसान हो जाती है, जो आपको मानसिक शांति और अनुमानित आपूर्ति देती है।</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <ul class="list-disc list-inside space-y-1 text-green-600">
                            <li>सुव्यवस्थित वर्कफ़्लो</li>
                            <li>विश्वसनीय डिलीवरी</li>
                            <li>लगातार वॉल्यूम</li>
                        </ul>
                    </div>
                    <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <ul class="list-disc list-inside space-y-1 text-blue-600">
                            <li>मानकीकृत गुणवत्ता</li>
                            <li>पारदर्शी मूल्य निर्धारण</li>
                            <li>एंड-टू-एंड प्रबंधन</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>
        `,
      },
      investor: {
        title: "निवेशक / कार्बन खरीदार",
        // OLD:
        // benefits: [
        //   "पुनर्योजी कृषि से सत्यापित कार्बन क्रेडिट",
        //   "कार्बन पृथक्करण की पारदर्शी निगरानी और रिपोर्टिंग",
        //   "टिकाऊ कृषि पद्धतियों पर सीधा प्रभाव",
        //   "अंतर्राष्ट्रीय कार्बन क्रेडिट मानकों का अनुपालन",
        //   "कृषि कार्बन संपत्ति के साथ पोर्टफोलियो विविधीकरण",
        //   "मापने योग्य सामाजिक और पर्यावरणीय प्रभाव मेट्रिक्स",
        // ],
        // NEW: Translated HTML content for Hindi
        detailsHtml: `
        <div class="space-y-8">

            <!-- IMPACT NUMBERS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">📈 प्रभाव के आँकड़े</h4>
                <p class="text-lg text-muted-foreground mb-4">Rupiya.app तेजी से बढ़ रहा है, जो वास्तविक अपनाने और जलवायु प्रभाव को दर्शाता है:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>किसान नेटवर्क हर महीने बढ़ रहा है</li>
                    <li>अवशेष-मुक्त खेती की भूमि कई राज्यों में फैल रही है</li>
                    <li>मृदा कार्बन संग्रहीत (सैटेलाइट + फील्ड सैंपलिंग के माध्यम से सत्यापित)</li>
                    <li>सभी समर्थित फसलों में 35+ स्वच्छ कृषि-इनपुट का उपयोग</li>
                    <li>स्वच्छ उपज बाय-बैक सक्रिय है और हर सीजन में बढ़ रहा है</li>
                </ul>
            </div>

            <!-- GROWTH HIGHLIGHTS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🚀 विकास की मुख्य बातें</h4>
                <p class="text-lg text-muted-foreground mb-4">हमारी विकास दर स्थिर और दृश्यमान है:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>बढ़ती किसान ऑनबोर्डिंग</li>
                    <li>प्रत्येक चक्र में अधिक कार्बन क्रेडिट उत्पन्न होते हैं</li>
                    <li>सैटेलाइट मिट्टी परीक्षण तेजी से बढ़ रहे हैं</li>
                    <li>मजबूत ऐप जुड़ाव</li>
                    <li>नए जिलों और FPO समूहों में विस्तार</li>
                </ul>
                <p class="mt-4 text-center font-bold text-xl text-primary bg-primary/10 p-3 rounded-lg">अधिक किसान → अधिक स्वच्छ एकड़ → अधिक सत्यापित क्रेडिट</p>
            </div>

            <!-- IMAGE -->
            <img
              src=${investors}
              alt="निवेशक के प्रभाव और वृद्धि को दर्शाने वाले ग्राफ़"
              class="w-full md:w-4/5 h-auto mx-auto rounded-lg shadow-lg my-8"
            />

            <!-- COLLABORATIONS -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🤝 सहयोग और समझौता ज्ञापन</h4>
                <p class="text-lg text-muted-foreground mb-4">Rupiya.app को विश्वसनीय राष्ट्रीय और वैश्विक भागीदारों का समर्थन प्राप्त है, जो पारिस्थितिकी तंत्र में विश्वसनीयता और विश्वास लाते हैं:</p>
                <div class="flex flex-wrap gap-3">
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">Carboneg (Europe)</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">Augmont</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">Goibibo</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">ITC</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">NSDL Payments Bank</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">Probus Insurance</span>
                    <span class="bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">ICICI Bank</span>
                </div>
            </div>

            <!-- FARMER FEEDBACK -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🧑‍🌾 किसान प्रतिक्रिया</h4>
                <p class="text-lg text-muted-foreground mb-4">जमीनी स्तर पर यह विश्वास हमारी सबसे बड़ी ताकत है। किसान रिपोर्ट करते हैं:</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>मिट्टी में सुधार हो रहा है और रासायनिक लागत कम हो रही है</li>
                    <li>फसलें मजबूत हो रही हैं और उपज की गुणवत्ता बेहतर हो रही है</li>
                    <li>बाय-बैक उन्हें आसानी से बेचने में मदद कर रहा है</li>
                    <li>कार्बन क्रेडिट से वास्तविक अतिरिक्त आय होती है</li>
                </ul>
            </div>
            
            <!-- SUPPLY CHAIN -->
            <div>
                <h4 class="text-2xl font-bold text-primary mb-4">🌐 आपूर्ति श्रृंखला उपलब्धियां</h4>
                <p class="text-lg text-muted-foreground mb-4">हमने विश्वसनीयता, सुरक्षा और पैमाने के लिए डिज़ाइन किया गया एक स्वच्छ और ट्रैसेबल फार्म-टू-क्रेता नेटवर्क बनाया है।</p>
                <ul class="list-disc list-inside space-y-2 my-2 pl-4 text-muted-foreground">
                    <li>प्रत्यक्ष फार्म-गेट खरीद</li>
                    <li>डिजिटल लॉग और सैटेलाइट डेटा के साथ पूर्ण ट्रेसबिलिटी</li>
                    <li>कम अवशेष स्तर और गुणवत्ता में उच्च स्थिरता</li>
                    <li>हर कदम पर सत्यापित डिजिटल रिकॉर्ड</li>
                </ul>
            </div>
        
        </div>
        `,
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
              {(selectedUser === "farmer" ||
                selectedUser === "fpo" ||
                selectedUser === "buyer" ||
                selectedUser === "investor") &&
              selectedUserText.detailsHtml ? (
                // Render rich HTML for farmers, FPOs, Buyers, or Investors
                <div
                  className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: selectedUserText.detailsHtml,
                  }}
                />
              ) : (
                // Render bulleted list for other user types
                <ul className="space-y-4">
                  {selectedUserText.benefits.map(
                    (benefit: string, index: number) => (
                      <li
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