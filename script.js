
// json of human diseases
let humanDisease = {
    respiratoryDiseases: {
        tuberculosis: {
            discription: "Tuberculosis is primarily disease of lungs which cause pnuemonitis",
            organismName: "Mycobacterium Tuberculosis",
            causes: "pnuemonia",
            symtoms: [
                "anorexia",
                "weight loss",
                "fatigue",
                "fever",
                "chillness",
                "night sweating",
                "severe cough"
            ],
            transmission: [
                "by droplets",
                "by dust particles coated with sputum",
                "by cattle",
                "overcrowding",
                "poor nutrition",
                "unhygienic living condition"
            ],
            diagnosis: [
                "tuberculin test",
                "microscopy",
                "polymerase chain reaction (PCR)",
                "phage typing",
                "serological test"
            ],
            treatment: [
                "isoniazid",
                "streptomycin",
                "oflaxacin"
            ],
            prevention: [
                "cattle care",
                "reducing the reservoir of infection",
                "wash hand after handshaking"
            ],
        },
        influenza: {
            discription: "it is an acute respiratory disease",
            organismName: "influenza virus A,B,C",
            causes: [
                "epidemic influenza",
                "pandemic influenza"
            ],
            symtoms: [
                "chills",
                "fever",
                "myalgia",
                "headache"
            ],
            transmission: "virus transmit by air particles then activate",
            diagnosis: [
                "isolation of virus",
                "serological identification"
            ],
            treatment: "by vaccine prophylaxis",
            prevention: [
                "breath in clean environment",
                "use proper mask when in outdoor"
            ]
        },
        measles: {
            discription: "its an acute  communicable disease caused by a member of Paramyxoviridae",
            organismName: "measles virus",
            causes: "cause of death in children",
            symtoms: [
                "inflammation of respiratory passage",
                "skin rash",
                "fever"
            ],
            transmission: "from person tp person",
            diagnosis: [
                "isolation of virus",
                "serological identification"
            ],
            treatment: [
                "complete bed rest",
                "antibiotics is indicate in secondary infections"
            ],
            prevention: [
                "immunized passively children during pregnancy",
                "attenuated vaccine of measles-mumps-rubella (MMR)"
            ],

        },
        diphtheria: {
            discription: "formation of false membrane on upper respiratory track and on skin",
            organismName: "corynebacterium diphtheriae",
            causes: "iin severe cases caused death",
            symtoms: "",
            transmission: [
                "by droplets",
                "from mouth to nose",
                "by cups",
                "by toys",
                "eaten utensils contaminate by buccal or nasal secreation"
            ],
            diagnosis: [
                "schick test",
                "isolation of diphtheria bacilli",
                "demonstration of toxin production",
                "microscopy"
            ],
            treatment: [
                "use of antitoxin",
                "penicillin",
                "erythromycin",
                "tetracycline"
            ],
            prevention: "immunization", "avoid to overcrowed"

        },
        pneumonia: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        mumps: {
            discription: "mumps is ab acute contagious disease prevalent in winter and early spring",
            organismName: "mumps virus",
            causes: [
                "orchitis",
                "pancreatitis",
                "hepatitis"
            ],
            symtoms: [
                "inflammation of parotid glands",
                "swelling on parotid glands"
            ],
            transmission: "",
            diagnosis: [
                "isolation of virus from saliva",
                "detect by immunofluorescence",
                "hemadsorption"
            ],
            treatment: "analgesics are used to relieve in pain",
            prevention: "prevent by active immunized",

        }
    },
    digestiveDiseases: {
        cholera: {
            discription: "it is an infectious disease affects the lower portion of intestine",
            organismName: "vibrio cholerae",
            symtoms: [
                "vomiting",
                "muscular cramps",
                "suspension of urine",
                "rapid collapse"
            ],
            transmission: "",
            diagnosis: [
                "micrpscopy",
                "culture",
                "oxidase test"
            ],
            treatment: [
                "cotrimoxazole",
                "erythromycin",
                "doxycycline",
                "chloramphenicol",
                "furazolidoene"
            ],
            prevention: [
                "propal disposable of human facese",
                "eliminating of drinking water",
                "wash hand before in contact with eatable items",
                "avoid raw fruits, vegetables"
            ],

        },
        shigellosis: {
            discription: "shigellosis is a bacillary dysentry",
            organismName: "",
            symtoms: [
                "painful diarrhea",
                "passage of blood in faces",
                "pain in enterons",
                "inflammation in intestine"
            ],
            transmission: [
                "contaminated food",
                "contaminated water",
                "contaminated finger",
                "contaminated objects like vehicles", "flies are factor"
            ],
            diagnosis: [
                "direct plating on agar media",
                "enrichment of stool specimens"
            ],
            treatment: [
                "ampicillin",
                "sulfamethoxazole",
                "ciprofloxacin",
                "tetracyclin"
            ],
            prevention: [
                "use of insceticides",
                "wash hand",
                "good hygiene"
            ]
        },
        salmonellosis: {
            discription: "iclinical pattern of infection caused by 2000 serotype caused typhoid",
            organismName: "salmonella",
            causes: "typhoid",
            symtoms: "",
            transmission: "",
            diagnosis: [
                "widal test",
                "enrichment culture",
                "slide agglitination test",
                "biochemical test"
            ],
            treatment: [
                "ceftraixone",
                "ciprofloxacin",
                "perforated illeum requires surgery"
            ],
            prevention: [
                "proper sewage disposable ",
                "protects the processsed food",
                "water purification",
                "animal slaughtering",
                "vaccination"
            ]
        },
        jaundice: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        diarrhea: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        hepatitis: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        }
    },
    centralNervousDiseases: {
        poliomyelitis: {
            discription: "poliomyelitis is an acute infection affect the brain, spinal cord, certain nerves",
            organismName: "poliovirus",
            symtoms: [
                "prolonged muscular paralysis",
                "pulmonary infectiion",
                "urinary infection",
                "hyperpyrexia"
            ],
            transmission: [
                "contaminated food by faeces",
                "contaminated water by faeces",
                "contaminated hand by faeces",
            ],
            diagnosis: [
                "cultivation techniques",
                "neutralization test",
                "serological test",
                "complement fixation test"
            ],
            treatment: [
                "complete bed rest",
                "nursing care",
                "fluid and electrolyte balance"
            ],
            prevention: [
                "educate the public",
                "isolate the patients and treat them",
                "proper dispose human and animal feaces"
            ]

        },
        rabies: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        meningitis: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        epilepsy: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        alzheimerDisease: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        mumps: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        }
    },
    liverDiseases: {
        hepatitisA: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        hepatitisB: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        hepatitisC: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        hepatitisE: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        liverCancer: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        bileDuctCancer: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        liverAdenoma: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        }
    },
    skinDiseases: {
        tetanus: {
            discription: "characterised by muscular spasms in tetanus",
            organismName: "clostridium tetani",
            symtoms: [
                "spams on face",
                "spams on neck",
                "spams on other body parts",
                "lockjaw"
            ],
            transmission: [
                "deep wound",
                "by flies",
                "by soil"
            ],
            diagnosis: "isolated from wound",
            treatment: [
                "human tetanus antitoxin",
                "intramuscular injection"
            ],
            prevention: [
                "infants should immunized",
                "infected person shoulld immunized bypassive immunization",
                "actively immunized for childbearing women"
            ]
        },
        dermatomycosis: [
            {
                tineaCapitis: {
                    discription: "chronic infection of scalp of hairs",
                    organismName: "Microsporum",
                    symtoms: [
                        "inflmmation from mild scaling to boggy",
                        "lesions",
                        "painfull swelling",
                        "patches on scalp"
                    ],
                    transmission: [
                        "direct contact from infected individaul",
                        "animals",
                        "contamineted fomites",
                        "combs",
                        "overcrowding",
                        "poor hygiene",
                        "protein mal nutrition"
                    ],
                    diagnosis: [
                        "microscopy",
                        "cultivation"
                    ],
                    treatment: [
                        "tolnaftate",
                        "miconazole",
                        "clotrimazole"
                    ],
                    prevention: [
                        "daily bath",
                        "trimminf of nails",
                        "removal of loose and dead skin",
                        "avoid direct contact with infected Animals"
                    ]

                },
                tineaBarbae: {
                    discription: "chronic infection of beard area of male",
                    organismName: "T.verrucosum",
                    symtoms: [
                        "superficial lesion",
                        "hair follicles",
                        "deeper lesion appear pustular and nodular",
                        "in severe case loss of hair permenantly"
                    ],
                    transmission: "contamineted towel",
                    diagnosis: [
                        "microscopy",
                        "cultivation"
                    ],
                    treatment: [
                        "tolnaftate",
                        "miconazole",
                        "clotrimazole"
                    ],
                    prevention: [
                        "daily bath",
                        "trimminf of nails",
                        "removal of loose and dead skin",
                        "avoid direct contact with infected Animals"
                    ]

                },
                tineaFavosa: {
                    discription: "",
                    organismName: "",
                    causes: "",
                    symtoms: "",
                    transmission: "",
                    diagnosis: "no diagnosis ",
                    treatment: "",
                    prevention: "",

                },
                tineaCorporis: {
                    discription: "dermatophytic infection of child and adults",
                    organismName: "trichophyton",
                    symtoms: "scalp and hair producing cup shaped struture",
                    transmission: [
                        "overcrowding",
                        "mal nutrition",
                        "poverty",
                        "unhygienic condition",
                    ],
                    diagnosis: "no diagnosis",
                    diagnosis: [
                        "microscopy",
                        "cultivation"
                    ],
                    treatment: [
                        "tolnaftate",
                        "miconazole",
                        "clotrimazole"
                    ],
                    prevention: [
                        "daily bath",
                        "trimminf of nails",
                        "removal of loose and dead skin",
                        "avoid direct contact with infected Animals"
                    ]

                },
                tineaCruris: {
                    discription: "chornic, superfacial dermatophtic infection",
                    organismName: "T.rubrum",
                    symtoms: "lesion on upper and inner thighs",
                    transmission: "exchange of clothes and towel",
                    diagnosis: [
                        "microscopy",
                        "cultivation"
                    ],
                    treatment: [
                        "tolnaftate",
                        "miconazole",
                        "clotrimazole"
                    ],
                    prevention: [
                        "daily bath",
                        "trimminf of nails",
                        "removal of loose and dead skin",
                        "avoid direct contact with infected Animals"
                    ]

                },
                tineaPedis: {
                    discription: "tineaPedis disease of athlets's foot",
                    organismName: "M.canis",
                    symtoms: [
                        "severe itching on toes",
                        "severe burning on toes"
                    ],
                    transmission: [
                        "conatminated swimming pools",
                        "common use of locker of athelets player"
                    ],
                    diagnosis: [
                        "microscopy",
                        "cultivation"
                    ],
                    treatment: [
                        "tolnaftate",
                        "miconazole",
                        "clotrimazole"
                    ],
                    prevention: [
                        "daily bath",
                        "trimminf of nails",
                        "removal of loose and dead skin",
                        "avoid direct contact with infected Animals"
                    ]

                },
                tineaImbricata: {
                    discription: "dermatophytic infection of male",
                    organismName: "T.concentricum",
                    symtoms: [
                        "lesion are sacly",
                        "ring like patches on skin"
                    ],
                    transmission: "",
                    diagnosis: [
                        "microscopy",
                        "cultivation"
                    ],
                    treatment: [
                        "tolnaftate",
                        "miconazole",
                        "clotrimazole"
                    ],
                    prevention: [
                        "daily bath",
                        "trimminf of nails",
                        "removal of loose and dead skin",
                        "avoid direct contact with infected Animals"
                    ]

                },
                tineaUnguium: {
                    discription: "infection of nails of toes and finger",
                    organismName: "T.violacem",
                    symtoms: [
                        "discoloration of nails",
                        "keratinazation of nails",
                        "distortion of nails"
                    ],
                    transmission: "unhygienic conditions",
                    diagnosis: [
                        "microscopy",
                        "cultivation"
                    ],
                    treatment: [
                        "tolnaftate",
                        "miconazole",
                        "clotrimazole"
                    ],
                    prevention: [
                        "daily bath",
                        "trimminf of nails",
                        "removal of loose and dead skin",
                        "avoid direct contact with infected Animals"
                    ]
                }
            }
        ],
        gasGangrene: {
            discription: "gasGangrene is highly fatal disease",
            organismName: "C.perfringens",
            symtoms: [
                "air filled condition on wound",
                "wound on tissues"
            ],
            transmission: [
                "by soil",
                "from wound infected person"
            ],
            diagnosis: "no diagnosis",
            treatment: "benzylpenicillin",
            prevention: [
                "adequate claening",
                "removal of necrotic tissue",
                "maintainance of drainage"
            ],

        },
        carbuncle: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        furuncle: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        cellulitis: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        impetigo: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        }
    },
    heartDiseases: {
        cardiovascularDisease: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        mycocarditis: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },

        heartFailure: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        carditis: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        eisenmengerSyndrome: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        }
    },
    allergy: {
        asthma: {
            discription: "",
            organismName: "by air droplets",
            causes: [
                "swelling on lungs",
                "inflammation on lungs"
            ],
            symtoms: [
                "Coughing",
                "Wheeze",
                "Shortness of breath",
                "Chest tightness "
            ],
            transmission: "by Air pollution",
            diagnosis: "",
            treatment: [
                "Ventolin",
                "Bricanyl"
            ],
            prevention: [
                "Flixotide",
                "Flixotide"
            ],
        },
        eczema: {
            discription: "Eczema is a pattern of itchy skin rash consisting of tiny pink bumps",
            organismName: "no organisms",
            causes: [
                "by external agents/factors",
                "cold and extremes of dryness",
                "humidity"
            ],
            symtoms: "rashes on skin",
            transmission: "from person to person",
            treatment: [
                "Hydrocortisone",
                "Betnovate",
                "Dermovate"
            ],
            prevention: "proper hygiene",

        },
        drugAllergy: {
            discription: "drug causes an unexpected reaction in gastric track",
            organismName: "no organisms",
            symtoms: [
                "swelling on face and throat",
                "difficulty in breathing",
                "itchy rash (urticaria)",
                " tight chest with wheeze"
            ],
            transmission: "spread by drug",
            treatment: "ointments",
            prevention: "avoid use of excees drug",
        },
        foodAllergy: {
            discription: "Food Hypersensitivity. FHS reactions involving the immune system are known as food allergy",
            organismName: "no organisms",
            causes: "Food Intolerance",
            symtoms: [
                "hay fever",
                "itching of the lips",
                "itching mouth and ears"
            ],
            transmission: [
                "by milk",
                "egg",
                "peanuts",
                "sesame seeds",
                "kiwi fruit",
                "fish",
                "shellfish",
                "tree nuts",
                "wheat",
                "soy"
            ],
            diagnosis: "antibody test",
            prevention: "donot use contaminated food",

        },
        rhinitis: {
            discription: "Rhinitis means inflammation of the lining of the nose",
            organismName: "no organisms involved",
            causes: [
                "inhalant allergens",
                "allergens such as pets",
                " House dust",
                "mite"
            ],
            symtoms: [
                "runny nose itching",
                "sneezing",
                "nasal blockage",
            ],
            transmission: "by air droplets",
            treatment: [
                "anti-leukotriene tablets ",
                "chromones",
                "pratropium"
            ],
            prevention: "donot use contaminated food",

        },
        skinAllergy: {
            discription: "red itchy bumpy rash can appear in various shapes and sizes anywhere on the body",
            organismName: [
                "by foods",
                "by drugs",
                "by insect stings",
                "by sunshine",
                "by water",
                " by exercise and stress"
            ],
            causes: "allergic reactions by all of above",
            symtoms: [
                "swellings on lips",
                "swellings on eyelids",
                "swellings on tongue",
                "swellings on hand",
            ],
            transmission: [
                "by foods",
                "by drugs",
                "by insect stings"
            ],
            treatment: "antihistamines",
            prevention: "proper hygiene",

        }
    },
    respiratoryDiseases: {
        tuberculosis: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",
        },
        influenza: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        measles: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        diphtheria: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        pneumonia: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        mumps: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        }
    },
    respiratoryDiseases: {
        tuberculosis: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",
        },
        influenza: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        measles: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        diphtheria: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        pneumonia: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        },
        mumps: {
            discription: "",
            organismName: "",
            causes: "",
            symtoms: "",
            transmission: "",
            diagnosis: "",
            treatment: "",
            prevention: "",

        }
    },






}