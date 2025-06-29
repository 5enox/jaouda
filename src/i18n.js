import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const lang = document.documentElement.lang || 'en';


i18n
    .use(HttpApi) // Load translation files
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Bind to React
    .init({
        debug: true, // Show debug messages in the console
        lng: lang,
        fallbackLng: "en", // Default language
        resources: {
            "en": {
                "translation": {
                    "textsection": {
                        "title": "Discover Luxury Living in ",
                        "letter": "J",
                        "company": "aouda Immobilier",
                        "paragraph": "Welcome to our premier luxury building company, offering a unique and sophisticated collection of high-end apartments, offices, and commercial spaces in the center of Dar Bouazza, Sidi Rahal, and Had Soualem."
                    },
                    "darBouaaza": {
                        "regionInfo": {
                            "title": "Dar Bouaaza",
                            "content": "Dar Bouaaza offers a variety of modern living and business spaces, including apartments, offices, and commercial spaces. Conveniently located near major shopping centers like MC and Mini Carrefour, these properties provide easy access to essential amenities and services."
                        },
                        "apartments": {
                            "title": "Apartments",
                            "content": "Welcome to our Apartments Section! Here, we provide you with all the essential details about our premium apartments, including available spaces, pricing, and prime locations."
                        },
                        "offices": {
                            "title": "Offices",
                            "content": "Welcome to our Offices Section! Here, we provide you with all the essential details about our premium office spaces, featuring modern designs, top-tier amenities, and a prime location in the heart of Dar Bouazza."
                        },
                        "commercialSpaces": {
                            "title": "Commercial Spaces",
                            "content": "Welcome to our Commercial Spaces Section! Explore our top-tier commercial spaces, designed to meet the needs of growing businesses, with modern architecture, excellent facilities, and a prime location in the heart of Dar Bouazza."
                        }
                    },
                    "hadSoualem": {
                        "regionInfo": {
                            "title": "Had Soualem",
                            "content": "Jaouda offers a range of apartments and commercial spaces in Had Soualem, a strategic location near Casablanca. This area provides excellent access to the city while offering a quieter, more relaxed environment."
                        },
                        "apartments": {
                            "title": "Apartments",
                            "content": "Welcome to our Apartments Section in Had Soualem! Discover well-designed 72m² apartments, offering a perfect blend of comfort and modern living."
                        },
                        "commercialSpaces": {
                            "title": "Commercial Spaces",
                            "content": "Welcome to our Commercial Spaces Section in Had Soualem! Explore our top-tier commercial spaces, designed to meet the needs of expanding businesses."
                        }
                    },
                    "sidiRahal": {
                        "regionInfo": {
                            "title": "Sidi Rahal Chatii",
                            "content": "Sidi Rahal Chatti offers a variety of commercial spaces and apartments. Located just 5 minutes from the beach, it provides easy access to the coastline for relaxation and leisure."
                        },
                        "apartments": {
                            "title": "Apartments",
                            "content": "Welcome to our apartments section at Sidi Rahal Beach! Discover our luxury apartments with modern designs, located just 5 minutes from the beach, offering a comfortable and pleasant living environment. The available areas range from 50m², 62m², 74m², 78m², 80m² to 90m², with prices starting from 370,000 MAD."
                        },
                        "commercialSpaces": {
                            "title": "Commercial Spaces",
                            "content": "Welcome to our Commercial Spaces Section in Sidi Rahal! Discover our premium commercial spaces, designed for growing businesses, featuring modern architecture, excellent facilities, and a strategic location in the heart of Sidi Rahal."
                        }
                    },
                    "productsList": {
                        "apartment": "Apartments",
                        "office": "Offices",
                        "commercialSpaces": "Commercial spaces"
                    },
                    "map": {
                        "botton": "Find us on Google Maps"
                    },
                    "navbar": {
                        'logo': 'Jaouda Immobilier',
                        "home": "Home",
                        "products": "Products",
                        "contact_us": "Contact Us",
                        "apartments": "Apartments",
                        "offices": "Offices",
                        "stores": "Stores",
                        "regions": {
                            "dar_bouazza": "Dar Bouazza",
                            "sidi_rahal": "Sidi Rahal",
                            "had_soualem": "Had Soualem"
                        }
                    },
                    "hero": {
                        "title": "Discover the perfect apartments, commercial Spases, or elevate your business with our office spaces."
                    },
                    "luxurySection": {
                        "intro": {
                            "title": "Introducing Our Luxury Offerings",
                            "description": "Discover a world of refined elegance and unparalleled sophistication with our premium properties, designed to elevate your living experience."
                        },
                        "luxuryContainer": {
                            "text": {
                                "title": "Elevate Your Lifestyle with Our Luxury Apartments",
                                "description": "Immerse yourself in the epitome of luxury living. Our exquisitely crafted apartments in Dar Bouazza, Had Soualem, and Sidi Rahal offer unrivaled sophistication, modern amenities, and breathtaking views."
                            },
                            "buttons": {
                                "exploreNow": "Explore Now"
                            }
                        }
                    },
                    "products": {
                        "title": "Our Products",
                        "description": "Find the perfect space that fits your needs! Whether you are looking for a luxurious apartment, a modern office, or a prime commercial space, we have top-tier properties designed to offer comfort, functionality, and style.",
                        "apt": "apartements",
                        "office": "offices",
                        "ce": "comercial spaces"
                    },
                    "footer": {
                        "brand": {
                            "name": "Jaouda Immobilier",
                            "tagline": "Your trusted partner in luxury real estate since 2020"
                        },
                        "products": {
                            "title": "Products",
                            "links": {
                                "apartments": "Apartments",
                                "offices": "Offices",
                                "stores": "Stores"
                            }
                        },
                        "company": {
                            "title": "Company",
                            "links": {
                                "about": "About",
                                "team": "Our Team",
                                "careers": "Careers",
                                "blog": "Blog"
                            }
                        },
                        "contact": {
                            "title": "Contact",
                            "info": {
                                "address": "Dar Bouazza, Casablanca",
                                "phone": "+212 661-986-244",
                                "email": "contact@jaouda-immo.com"
                            }
                        },
                        "followUs": "Follow Us",
                        "socialLinks": {
                            "facebook": "Facebook",
                            "instagram": "Instagram",
                            "linkedin": "LinkedIn",
                            "twitter": "Twitter"
                        },
                        "bottom": {
                            "rights": " Jaouda Immobilier. All rights reserved.",
                            "legal": {
                                "privacy": "Privacy",
                                "terms": "Terms",
                                "sitemap": "Sitemap"
                            }
                        },
                        "scrollToTop": {
                            "ariaLabel": "Back to Top"
                        }
                    }
                }
            },
            "ar": {
                "translation": {
                    "textsection": {
                        "title": "اكتشف العيش الفاخر في",
                        "letter": "ج",
                        "company": "ودة للعقار",
                        "paragraph": "مرحباً بكم في شركتنا الرائدة في بناء المباني الفاخرة، حيث نقدم مجموعة فريدة وأنيقة من الشقق الفاخرة، المكاتب، والمساحات التجارية في وسط دار بوعزة، سيدي رحال، وحد السوالم."
                    },
                    "darBouaaza": {
                        "regionInfo": {
                            "title": "دار بوعزة",
                            "content": "تقدم دار بوعزة مجموعة متنوعة من مساحات السكن والعمل الحديثة، بما في ذلك الشقق، المكاتب، والمساحات التجارية. تقع بالقرب من مراكز التسوق الكبرى مثل ماكدونالدلز و ميني كالرفور، مما يوفر سهولة الوصول إلى الخدمات والمرافق الأساسية."
                        },
                        "apartments": {
                            "title": "شقق",
                            "content": "مرحبًا بكم في قسم الشقق لدينا! هنا نقدم لكم جميع التفاصيل الأساسية حول شققنا الفاخرة."
                        },
                        "offices": {
                            "title": "مكاتب",
                            "content": "مرحبًا بكم في قسم المكاتب لدينا! نقدم مساحات مكاتب فاخرة بتصاميم عصرية ومرافق ممتازة."
                        },
                        "commercialSpaces": {
                            "title": "مساحات تجارية",
                            "content": "مرحبًا بكم في قسم المساحات التجارية لدينا! استكشفوا مساحاتنا التجارية الفاخرة المصممة لتلبية احتياجات الأعمال المتنامية."
                        }
                    },
                    "hadSoualem": {
                        "regionInfo": {
                            "title": "حد السوالم",
                            "content": "تقدم جاودة مجموعة من الشقق والمساحات التجارية في حد السوالم."
                        },
                        "apartments": {
                            "title": "شقق",
                            "content": "مرحبًا بكم في قسم الشقق في حد السوالم! شقق مصممة بشكل جيد بمساحة 72م²."
                        },
                        "commercialSpaces": {
                            "title": "مساحات تجارية",
                            "content": "مرحبًا بكم في قسم المساحات التجارية في حد السوالم! استكشفوا مساحاتنا التجارية الفاخرة."
                        }
                    },
                    "sidiRahal": {
                        "regionInfo": {
                            "title": "سيدي رحال الشاطئ",
                            "content": "تقدم سيدي رحال الشاطئ مجموعة متنوعة من المساحات التجارية والشقق."
                        },
                        "apartments": {
                            "title": "شقق",
                            "content": "مرحبًا بكم في قسم الشقق لدينا في شاطئ سيدي رحال! اكتشفوا شققنا الفاخرة ذات التصاميم الحديثة، الواقعة على بعد 5 دقائق فقط من الشاطئ، وتوفر بيئة معيشية مريحة وممتعة. تتراوح المساحات المتوفرة من 50م²، 62م²، 74م²، 78م²، 80م² إلى 90م²، مع أسعار تبدأ من 370,000 درهم مغربي."
                        },
                        "commercialSpaces": {
                            "title": "مساحات تجارية",
                            "content": "استكشفوا مساحاتنا التجارية الفاخرة في سيدي رحال الشاطئ."
                        }
                    },
                    "productsList": {
                        "apartment": "شقق",
                        "office": "مكاتب",
                        "commercialSpaces": "مساحات تجارية"
                    },
                    "map": {
                        "botton": "اعثر علينا على خرائط جوجل"
                    },
                    "navbar": {
                        "logo": 'جودة للعقار',
                        "home": "الرئيسية",
                        "products": "المنتجات",
                        "contact_us": "اتصل بنا",
                        "apartments": "شقق",
                        "offices": "مكاتب",
                        "stores": "محلات",
                        "regions": {
                            "dar_bouazza": "دار بوعزة",
                            "sidi_rahal": "سيدي رحال",
                            "had_soualem": "حد السوالم"
                        }
                    },
                    "hero": {
                        "title": "اكتشف الشقق المثالية، المحلات التجاربة، أو ارتقِ بعملك مع مساحاتنا المكتبية."
                    },
                    "luxurySection": {
                        "intro": {
                            "title": "مقدمة عن عروضنا الفاخرة",
                            "description": "اكتشفوا عالمًا من الأناقة الرفيعة والفخامة مع عقاراتنا الفاخرة."
                        },
                        "luxuryContainer": {
                            "text": {
                                "title": "ارفعوا أسلوب حياتكم مع شققنا الفاخرة",
                                "description": "انغمس في أجواء الفخامة المطلقة. شققنا المصممة بإتقان في دار بوعزة، حد السوالم، وسيدي رحال، تُقدم رقيًا لا مثيل له، ووسائل راحة عصرية، وإطلالات خلابة."
                            },
                            "buttons": {
                                "exploreNow": "استكشاف الآن"
                            }
                        }
                    },
                    "products": {
                        "title": "منتجاتنا",
                        "description": "اعثر على المساحة المثالية التي تناسب احتياجاتك! سواء كنت تبحث عن شقة فاخرة، أو مكتب عصري، أو مساحة تجارية مميزة، فلدينا عقارات فاخرة مصممة لتوفير الراحة والعملية والأناقة.",
                        "apt": "شقق",
                        "office": "مكاتب",
                        "ce": "مساحات تجارية"
                    },
                    "footer": {
                        "brand": {
                            "name": "جودة العقار",
                            "tagline": "شريككم الموثوق في العقارات الفاخرة منذ 2020"
                        },
                        "products": {
                            "title": "منتجات",
                            "links": {
                                "apartments": "شقق",
                                "offices": "مكاتب",
                                "stores": "محلات"
                            }
                        },
                        "company": {
                            "title": "شركة",
                            "links": {
                                "about": "عن الشركة",
                                "team": "فريقنا",
                                "careers": "فرص العمل",
                                "blog": "مدونة"
                            }
                        },
                        "contact": {
                            "title": "اتصل بنا",
                            "info": {
                                "address": "دار بوعزة، الدار البيضاء",
                                "phone": "+212 661-986-244",
                                "email": "contact@jaouda-immo.com"
                            }
                        },
                        "followUs": "تابعنا",
                        "socialLinks": {
                            "facebook": "فيسبوك",
                            "instagram": "إنستغرام",
                            "linkedin": "لينكدإن",
                            "twitter": "تويتر"
                        },
                        "bottom": {
                            "rights": " جودة للعقار. جميع الحقوق محفوظة.",
                            "legal": {
                                "privacy": "الخصوصية",
                                "terms": "الشروط",
                                "sitemap": "خريطة الموقع"
                            }
                        },
                        "scrollToTop": {
                            "ariaLabel": "الرجوع إلى الأعلى"
                        }
                    }
                }
            },
            "fr": {
                "translation": {
                    "textsection": {
                        "title": "Découvrez le luxe de vie avec ",
                        "letter": "J",
                        "company": "aouda Immobilier",
                        "paragraph": "Bienvenue chez notre entreprise leader dans la construction de bâtiments de luxe, où nous offrons une gamme unique et élégante d'appartements de luxe, de bureaux et de magasins au cœur de Dar Bouazza, Sidi Rahal et Had Soualem."
                    },
                    "darBouaaza": {
                        "regionInfo": {
                            "title": "Dar Bouazza",
                            "content": "Dar Bouazza propose une variété d'espaces résidentiels et commerciaux modernes, y compris des appartements, des bureaux et des espaces commerciaux. Située à proximité des grands centres commerciaux comme MC et Mini Carrefour, elle offre un accès facile aux services et commodités essentielles. Que vous recherchiez un appartement confortable, un bureau professionnel ou un espace commercial pour développer votre activité, Dar Bouazza est l'endroit idéal avec un emplacement privilégié."
                        },
                        "apartments": {
                            "title": "Appartements",
                            "content": "Bienvenue dans notre section des appartements ! Ici, nous vous fournissons tous les détails essentiels sur nos appartements de luxe, y compris les superficies disponibles, les prix et les emplacements privilégiés."
                        },
                        "offices": {
                            "title": "Bureaux",
                            "content": "Bienvenue dans notre section des bureaux ! Découvrez nos espaces de bureaux luxueux, dotés de designs modernes, d'équipements haut de gamme et d'un emplacement privilégié au cœur de Dar Bouazza. Les prix commencent à partir de 520 000 MAD."
                        },
                        "commercialSpaces": {
                            "title": "Espaces Commerciaux",
                            "content": "Bienvenue dans notre section des espaces commerciaux ! Explorez nos espaces commerciaux haut de gamme, conçus pour répondre aux besoins croissants des entreprises, avec une architecture moderne, des équipements de qualité et un emplacement stratégique à Dar Bouazza. Les superficies disponibles varient de 20m², 22m², 25m², 35m², 47m² à 100m², toutes équipées d'un sous-sol et d'un étage supérieur."
                        }
                    },
                    "hadSoualem": {
                        "regionInfo": {
                            "title": "Had Soualem",
                            "content": "Jaouda propose une sélection d’appartements et d’espaces commerciaux à Had Soualem, une zone stratégique proche de Casablanca. Cette région offre un excellent accès à la ville tout en garantissant un cadre plus calme et relaxant. Que vous recherchiez un espace résidentiel ou un lieu pour démarrer votre activité, Jaouda vous propose des opportunités exceptionnelles à Had Soualem, avec une connexion facile à Casablanca et ses environs."
                        },
                        "apartments": {
                            "title": "Appartements",
                            "content": "Bienvenue dans notre section des appartements à Had Soualem ! Découvrez des appartements bien conçus de 72m², offrant un parfait équilibre entre confort et modernité. Chaque appartement comprend deux chambres, un salon de style marocain, un salon de style européen, une cuisine et une salle de bain. Ces appartements sont idéalement situés à Had Soualem, offrant un cadre de vie de qualité."
                        },
                        "commercialSpaces": {
                            "title": "Espaces Commerciaux",
                            "content": "Bienvenue dans notre section des espaces commerciaux à Had Soualem ! Découvrez nos espaces commerciaux haut de gamme, conçus pour les entreprises en pleine expansion. Avec une architecture moderne, des équipements de qualité et un emplacement stratégique au cœur de Had Soualem, ces espaces sont parfaits pour votre réussite."
                        }
                    },
                    "sidiRahal": {
                        "regionInfo": {
                            "title": "Sidi Rahal Plage",
                            "content": "Sidi Rahal Plage propose une variété d'espaces commerciaux et d'appartements. Située à seulement 5 minutes de la plage, elle permet un accès facile au littoral pour la détente et les loisirs. Cette région est idéale pour ceux qui recherchent un emplacement proche de la mer, offrant de belles opportunités tant pour les affaires que pour un usage personnel. Grâce à son emplacement privilégié, Sidi Rahal Plage offre un cadre de vie paisible et accessible."
                        },
                        "apartments": {
                            "title": "Appartements",
                            "content": "Bienvenue dans notre section des appartements à Sidi Rahal Plage ! Découvrez nos appartements de luxe aux designs modernes, situés à seulement 5 minutes de la plage, offrant un cadre de vie confortable et agréable. Les superficies disponibles varient de 50m², 62m², 74m², 78m², 80m² à 90m², avec des prix à partir de 370 000 MAD."
                        },
                        "commercialSpaces": {
                            "title": "Espaces Commerciaux",
                            "content": "Bienvenue dans notre section des espaces commerciaux à Sidi Rahal ! Découvrez nos espaces commerciaux haut de gamme, conçus pour les entreprises en pleine expansion, avec une architecture moderne, des équipements de qualité et un emplacement stratégique à Sidi Rahal, à quelques minutes de la plage."
                        }
                    },
                    "productsList": {
                        "apartment": "Appartements",
                        "office": "Bureaux",
                        "commercialSpaces": "Espaces commerciaux"
                    },
                    "map": {
                        "botton": "Retrouvez-nous sur Google Maps"
                    },
                    "navbar": {
                        'logo': 'Jaouda Immobilier',
                        "home": "Accueil",
                        "products": "Produits",
                        "contact_us": "Contactez-nous",
                        "apartments": "Appartements",
                        "offices": "Bureaux",
                        "stores": "Magasins",
                        "regions": {
                            "dar_bouazza": "Dar Bouazza",
                            "sidi_rahal": "Sidi Rahal",
                            "had_soualem": "Had Soualem"
                        }
                    },
                    "hero": {
                        "title": "Trouvez l’appartement parfait ou développez votre entreprise avec nos espaces de bureaux."
                    },
                    "luxurySection": {
                        "intro": {
                            "title": "Présentation de nos offres de luxe",
                            "description": "Découvrez un monde d’élégance raffinée et de luxe inégalé avec nos biens immobiliers haut de gamme, conçus pour sublimer votre expérience de vie."
                        },
                        "luxuryContainer": {
                            "text": {
                                "title": "Élevez votre style de vie avec nos appartements de luxe",
                                "description": "Plongez dans un univers de vie haut de gamme. Nos appartements magnifiquement conçus à Dar Bouazza, Had Soualem et Sidi Rahal vous offrent une élégance incontestable, des équipements modernes et des vues imprenables."
                            },
                            "buttons": {
                                "exploreNow": "Découvrez maintenant"
                            }
                        }
                    },
                    "products": {
                        "title": "Nos Produits",
                        "description": "Trouvez l’espace idéal qui répond à vos besoins ! Que vous recherchiez un appartement de luxe, un bureau moderne ou un espace commercial de premier choix, nous avons des propriétés de qualité supérieure conçues pour offrir confort, fonctionnalité et élégance. Explorez nos offres et faites le premier pas vers votre bien idéal dès aujourd’hui !",
                        "apt": "Appartements",
                        "office": "Bureaux",
                        "ce": "Magasins"
                    },
                    "footer": {
                        "brand": {
                            "name": "Jaouda Immobilier",
                            "tagline": "Votre partenaire de confiance en immobilier de luxe depuis 2020"
                        },
                        "products": {
                            "title": "Produits",
                            "links": {
                                "apartments": "Appartements",
                                "offices": "Bureaux",
                                "stores": "Magasins"
                            }
                        },
                        "company": {
                            "title": "Entreprise",
                            "links": {
                                "about": "À propos",
                                "team": "Notre équipe",
                                "careers": "Carrières",
                                "blog": "Blog"
                            }
                        },
                        "contact": {
                            "title": "Contactez-nous",
                            "info": {
                                "address": "Dar Bouazza, Casablanca",
                                "phone": "+212 661-986-244",
                                "email": "contact@jaouda-immo.com"
                            }
                        },
                        "followUs": "Suivez-nous",
                        "socialLinks": {
                            "facebook": "Facebook",
                            "instagram": "Instagram",
                            "linkedin": "LinkedIn",
                            "twitter": "Twitter"
                        },
                        "bottom": {
                            "rights": " Jaouda Immobilier. Tous droits réservés.",
                            "legal": {
                                "privacy": "Confidentialité",
                                "terms": "Conditions",
                                "sitemap": "Plan du site"
                            }
                        },
                        "scrollToTop": {
                            "ariaLabel": "Retour en haut"
                        }
                    }
                }
            },

        }
        ,
        detection: {
            order: ["htmlTag", "cookie", "localStorage", "navigator"],
        }
    });

i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
});

export default i18n;
