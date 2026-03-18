export type QuizOption = {
    label: string;
    text: string;
    isCorrect: boolean;
    rationale: string;
};

export type QuizQuestion = {
    id: string;
    question: string;
    options: QuizOption[];
    correctAnswer: string;
};

export type GovQuizData = {
    [category: string]: {
        [level: string]: QuizQuestion[];
    };
};

export const govQuizData: GovQuizData = {
    "Federalism": {
        "Level 1": [
            {
                "id": "Fed-1-1",
                "question": "Which system of government concentrates all major authority and policy decisions in the national government, making subnational units dependent on it?",
                "options": [
                    {
                        "label": "A",
                        "text": "Unitary system",
                        "isCorrect": true,
                        "rationale": "In a unitary system, power flows from the top down, and the national government holds ultimate authority over the states or regions."
                    },
                    {
                        "label": "B",
                        "text": "Confederal system",
                        "isCorrect": false,
                        "rationale": "This system is the opposite, where authority is concentrated in subnational governments and the central government is weak."
                    },
                    {
                        "label": "C",
                        "text": "Federal system",
                        "isCorrect": false,
                        "rationale": "This system divides power between two relatively autonomous levels of government rather than concentrating it in one."
                    },
                    {
                        "label": "D",
                        "text": "Direct democracy",
                        "isCorrect": false,
                        "rationale": "This refers to a system where citizens vote on laws directly, rather than how power is divided between levels of government."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-2",
                "question": "Which constitutional clause is also known as the 'Elastic Clause' because it allows Congress to expand its authority to fulfill its duties?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Necessary and Proper Clause",
                        "isCorrect": true,
                        "rationale": "This clause in Article I, Section 8, enables the national government to make laws required to carry out its enumerated responsibilities."
                    },
                    {
                        "label": "B",
                        "text": "The Supremacy Clause",
                        "isCorrect": false,
                        "rationale": "This clause establishes that federal law trumps state law, but it does not specifically grant 'stretchy' or implied powers."
                    },
                    {
                        "label": "C",
                        "text": "The Full Faith and Credit Clause",
                        "isCorrect": false,
                        "rationale": "This clause focuses on how states must recognize each other's legal documents and court decisions."
                    },
                    {
                        "label": "D",
                        "text": "The Privileges and Immunities Clause",
                        "isCorrect": false,
                        "rationale": "This clause prevents states from discriminating against citizens from other states."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-3",
                "question": "Which amendment to the U.S. Constitution states that powers not delegated to the federal government are reserved to the states or the people?",
                "options": [
                    {
                        "label": "A",
                        "text": "Tenth Amendment",
                        "isCorrect": true,
                        "rationale": "The Tenth Amendment is the foundation of 'reserved powers,' ensuring states retain authority over matters not mentioned in the Constitution."
                    },
                    {
                        "label": "B",
                        "text": "First Amendment",
                        "isCorrect": false,
                        "rationale": "The First Amendment focuses on individual liberties like speech and religion, not the distribution of power between governments."
                    },
                    {
                        "label": "C",
                        "text": "Fourteenth Amendment",
                        "isCorrect": false,
                        "rationale": "This amendment places restrictions on states regarding due process and equal protection rather than reserving powers to them."
                    },
                    {
                        "label": "D",
                        "text": "Sixteenth Amendment",
                        "isCorrect": false,
                        "rationale": "This amendment granted the federal government the power to collect income taxes."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-4",
                "question": "What term is used to describe powers that are shared by both the federal and state governments, such as the power to tax and borrow money?",
                "options": [
                    {
                        "label": "A",
                        "text": "Concurrent powers",
                        "isCorrect": true,
                        "rationale": "Concurrent powers are those exercised by both levels of government simultaneously, including law enforcement and establishing courts."
                    },
                    {
                        "label": "B",
                        "text": "Enumerated powers",
                        "isCorrect": false,
                        "rationale": "These are powers specifically listed in the Constitution as belonging only to the national government."
                    },
                    {
                        "label": "C",
                        "text": "Reserved powers",
                        "isCorrect": false,
                        "rationale": "These are powers held exclusively by the states because they are not granted to the federal government."
                    },
                    {
                        "label": "D",
                        "text": "Inherent powers",
                        "isCorrect": false,
                        "rationale": "These are powers that governments naturally possess simply because they are sovereign nations, rather than shared powers."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-5",
                "question": "Which style of federalism is compared to a 'layer cake' because the levels of government stay in their own separate 'lanes' of authority?",
                "options": [
                    {
                        "label": "A",
                        "text": "Dual federalism",
                        "isCorrect": true,
                        "rationale": "Dual federalism describes a system where national and state governments act in distinctly delineated spheres with minimal overlap."
                    },
                    {
                        "label": "B",
                        "text": "Cooperative federalism",
                        "isCorrect": false,
                        "rationale": "This style is compared to a marble cake because responsibilities are blended between levels."
                    },
                    {
                        "label": "C",
                        "text": "New federalism",
                        "isCorrect": false,
                        "rationale": "This style focuses on devolution, or returning power to the states, rather than maintaining strictly separate spheres."
                    },
                    {
                        "label": "D",
                        "text": "Competitive federalism",
                        "isCorrect": false,
                        "rationale": "This refers to the modern dynamic of states competing for business and influence rather than a specific 'layer' structure."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-6",
                "question": "Justice Louis Brandeis famously referred to states as 'laboratories of democracy' for which of the following reasons?",
                "options": [
                    {
                        "label": "A",
                        "text": "States can experiment with new policies without putting the whole country at risk",
                        "isCorrect": true,
                        "rationale": "This concept highlights how successful state-level policy innovations (like fuel emission standards) can eventually be adopted nationally."
                    },
                    {
                        "label": "B",
                        "text": "States are the primary location where scientific research is conducted",
                        "isCorrect": false,
                        "rationale": "The term is a metaphor for political and policy experimentation, not literal scientific laboratories."
                    },
                    {
                        "label": "C",
                        "text": "States are required to test federal laws for effectiveness before they are passed",
                        "isCorrect": false,
                        "rationale": "Federal laws apply once passed; there is no constitutional requirement for state-level 'testing' periods."
                    },
                    {
                        "label": "D",
                        "text": "States can only pass laws that have been proven to work in other countries",
                        "isCorrect": false,
                        "rationale": "The 'laboratory' concept focuses on states creating 'novel' experiments, not copying existing international ones."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-7",
                "question": "Under the concept of 'Police Powers,' which level of government typically has the authority to regulate health, safety, morality, and public welfare?",
                "options": [
                    {
                        "label": "A",
                        "text": "State governments",
                        "isCorrect": true,
                        "rationale": "Police powers are part of the reserved powers of states, allowing them to regulate everything from restaurant hygiene to marriage laws."
                    },
                    {
                        "label": "B",
                        "text": "The federal government",
                        "isCorrect": false,
                        "rationale": "The federal government only has specific enumerated powers; general policing for health and morality is not one of them."
                    },
                    {
                        "label": "C",
                        "text": "The Supreme Court",
                        "isCorrect": false,
                        "rationale": "The court interprets laws but does not have the 'police power' to create regulations for public health or morality."
                    },
                    {
                        "label": "D",
                        "text": "The President",
                        "isCorrect": false,
                        "rationale": "The executive branch enforces laws but the 'police power' to regulate daily social welfare is primarily a state-level legislative function."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-8",
                "question": "Which of the following is an example of an enumerated power of the national government found in Article I, Section 8?",
                "options": [
                    {
                        "label": "A",
                        "text": "Coining money",
                        "isCorrect": true,
                        "rationale": "The Constitution specifically lists the power to coin money as a responsibility of the federal government to ensure national economic unity."
                    },
                    {
                        "label": "B",
                        "text": "Issuing driver's licenses",
                        "isCorrect": false,
                        "rationale": "This is a reserved power of the states, as license issuance is not mentioned in the Constitution."
                    },
                    {
                        "label": "C",
                        "text": "Setting local school curriculum",
                        "isCorrect": false,
                        "rationale": "Education is traditionally a state and local matter under the Tenth Amendment."
                    },
                    {
                        "label": "D",
                        "text": "Regulating garbage collection",
                        "isCorrect": false,
                        "rationale": "This is typically a local government function rather than a power explicitly granted to Congress."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-9",
                "question": "What does the 'Supremacy Clause' in Article VI of the Constitution declare?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Constitution and federal laws are the supreme law of the land",
                        "isCorrect": true,
                        "rationale": "This clause ensures that if a state law clashes with a valid federal law, the federal law prevails."
                    },
                    {
                        "label": "B",
                        "text": "The President is the supreme authority over the other branches of government",
                        "isCorrect": false,
                        "rationale": "The Constitution creates a system of checks and balances among co-equal branches, not a supreme leader."
                    },
                    {
                        "label": "C",
                        "text": "States have supreme authority over all matters within their borders",
                        "isCorrect": false,
                        "rationale": "This contradicts the Supremacy Clause, which places federal law above state law in cases of conflict."
                    },
                    {
                        "label": "D",
                        "text": "The Supreme Court is the only body that can pass laws in the United States",
                        "isCorrect": false,
                        "rationale": "The Court interprets laws, while Congress is the body that possesses the power to create them."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-10",
                "question": "In a confederal system of government, where is the most significant authority concentrated?",
                "options": [
                    {
                        "label": "A",
                        "text": "In the subnational or state governments",
                        "isCorrect": true,
                        "rationale": "In a confederation, the states are sovereign and the national government only has the power that the states choose to give it."
                    },
                    {
                        "label": "B",
                        "text": "In the central national government",
                        "isCorrect": false,
                        "rationale": "This describes a unitary system, which is the opposite of a confederal system."
                    },
                    {
                        "label": "C",
                        "text": "In the hands of the people through direct voting",
                        "isCorrect": false,
                        "rationale": "This describes a direct democracy rather than the structural relationship between levels of government."
                    },
                    {
                        "label": "D",
                        "text": "In the judicial branch of government",
                        "isCorrect": false,
                        "rationale": "Confederations are defined by the power of state legislatures/governors, not the dominance of a central court."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-11",
                "question": "Which system of government was used by the United States under the Articles of Confederation and by the Southern states during the Civil War?",
                "options": [
                    {
                        "label": "A",
                        "text": "Confederal system",
                        "isCorrect": true,
                        "rationale": "Both examples featured a weak central government and sovereign states that retained most of the power."
                    },
                    {
                        "label": "B",
                        "text": "Unitary system",
                        "isCorrect": false,
                        "rationale": "These examples are historical rejections of a strong central authority, which is the hallmark of a unitary system."
                    },
                    {
                        "label": "C",
                        "text": "Federal system",
                        "isCorrect": false,
                        "rationale": "The U.S. moved to a federal system with the Constitution because the previous confederal system was too weak."
                    },
                    {
                        "label": "D",
                        "text": "Parliamentary system",
                        "isCorrect": false,
                        "rationale": "This term refers to how the executive and legislative branches relate, not how power is divided geographically between governments."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-12",
                "question": "Which style of federalism is compared to a 'marble cake' because responsibilities are blended between levels?",
                "options": [
                    {
                        "label": "A",
                        "text": "Cooperative federalism",
                        "isCorrect": true,
                        "rationale": "This style describes a system where national and state governments work together on policy implementation."
                    },
                    {
                        "label": "B",
                        "text": "Dual federalism",
                        "isCorrect": false,
                        "rationale": "This style is compared to a layer cake, where levels remain separate."
                    },
                    {
                        "label": "C",
                        "text": "Unitary system",
                        "isCorrect": false,
                        "rationale": "This is a single-level system of government."
                    },
                    {
                        "label": "D",
                        "text": "Competitive federalism",
                        "isCorrect": false,
                        "rationale": "This refers to competition between state governments."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-13",
                "question": "What type of system does the United States have today?",
                "options": [
                    {
                        "label": "A",
                        "text": "Federal system",
                        "isCorrect": true,
                        "rationale": "The U.S. Constitution creates a federal system of government."
                    },
                    {
                        "label": "B",
                        "text": "Unitary system",
                        "isCorrect": false,
                        "rationale": "The U.S. does not have a single centralized government."
                    },
                    {
                        "label": "C",
                        "text": "Confederal system",
                        "isCorrect": false,
                        "rationale": "The U.S. replaced the confederal system with a federal one."
                    },
                    {
                        "label": "D",
                        "text": "Monarchy",
                        "isCorrect": false,
                        "rationale": "The U.S. is a republic."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-14",
                "question": "What modern dynamic describes states competing for business and influence?",
                "options": [
                    {
                        "label": "A",
                        "text": "Competitive federalism",
                        "isCorrect": true,
                        "rationale": "This is consistent with the study guide concept."
                    },
                    {
                        "label": "B",
                        "text": "Dual federalism",
                        "isCorrect": false,
                        "rationale": "Dual federalism is about separate layers."
                    },
                    {
                        "label": "C",
                        "text": "Cooperative federalism",
                        "isCorrect": false,
                        "rationale": "Cooperative federalism is about blended layers."
                    },
                    {
                        "label": "D",
                        "text": "Unitary system",
                        "isCorrect": false,
                        "rationale": "A unitary system has no state competition."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Fed-1-15",
                "question": "Which system of government is currently the most popular and common form of governance worldwide?",
                "options": [
                    {
                        "label": "A",
                        "text": "Federal system",
                        "isCorrect": false,
                        "rationale": "While large and diverse nations like the U.S. and India use federalism, it is not the most common system globally."
                    },
                    {
                        "label": "B",
                        "text": "Confederal system",
                        "isCorrect": false,
                        "rationale": "Confederations are very rare today because they often struggle with central authority and internal cohesion."
                    },
                    {
                        "label": "C",
                        "text": "Unitary system",
                        "isCorrect": true,
                        "rationale": "The majority of the world's nations (such as France, Japan, and the UK) utilize a unitary system where authority is concentrated in the national government."
                    },
                    {
                        "label": "D",
                        "text": "Direct democracy",
                        "isCorrect": false,
                        "rationale": "Most modern nations are representative democracies; direct democracy is generally only used for specific local referendums or initiatives."
                    }
                ],
                "correctAnswer": "C"
            }
        ],
        "Level 2": [
            {
                "id": "Fed-2-1",
                "question": "Which system of government is characterized by a voluntary union where subnational governments retain most of their independent authority and the central government is subordinate?",
                "options": [
                    {
                        "label": "A",
                        "text": "Unitary system",
                        "isCorrect": false,
                        "rationale": "In this system, authority is concentrated in the national government rather than the subnational units."
                    },
                    {
                        "label": "B",
                        "text": "Confederal system",
                        "isCorrect": true,
                        "rationale": "This arrangement prioritizes regional self-rule, making the central government dependent on the consent of the subnational governments."
                    },
                    {
                        "label": "C",
                        "text": "Federal system",
                        "isCorrect": false,
                        "rationale": "This structure divides power between two relatively autonomous levels rather than concentrating it in the states."
                    },
                    {
                        "label": "D",
                        "text": "Monarchical system",
                        "isCorrect": false,
                        "rationale": "This refers to a form of rule by a single individual rather than an allocation of power between levels of government."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-2",
                "question": "According to the source material, which of the following is considered the most common form of government worldwide today?",
                "options": [
                    {
                        "label": "A",
                        "text": "Federal system",
                        "isCorrect": false,
                        "rationale": "While used by large nations like the U.S. and India, it is actually less common than centralized structures."
                    },
                    {
                        "label": "B",
                        "text": "Confederal system",
                        "isCorrect": false,
                        "rationale": "This system is currently the least popular and has no true examples in the modern world."
                    },
                    {
                        "label": "C",
                        "text": "Unitary system",
                        "isCorrect": true,
                        "rationale": "Approximately 165 countries use this system where significant authority is concentrated in the national government."
                    },
                    {
                        "label": "D",
                        "text": "Direct Democracy",
                        "isCorrect": false,
                        "rationale": "This describes a method of decision-making rather than a structural arrangement of national and subnational power."
                    }
                ],
                "correctAnswer": "C"
            },
            {
                "id": "Fed-2-3",
                "question": "The power to 'coin money' and 'declare war' are examples of which type of constitutional power?",
                "options": [
                    {
                        "label": "A",
                        "text": "Reserved powers",
                        "isCorrect": false,
                        "rationale": "These are powers belonging to the states, and the Constitution explicitly prohibits states from coining money."
                    },
                    {
                        "label": "B",
                        "text": "Enumerated powers",
                        "isCorrect": true,
                        "rationale": "These are specific responsibilities granted to the national legislature in Article I, Section 8 of the Constitution."
                    },
                    {
                        "label": "C",
                        "text": "Concurrent powers",
                        "isCorrect": false,
                        "rationale": "These are shared powers, and it would be chaotic if every state had its own currency or declared its own wars."
                    },
                    {
                        "label": "D",
                        "text": "Police powers",
                        "isCorrect": false,
                        "rationale": "These refer to state-level regulations regarding health, safety, and morality."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-4",
                "question": "What constitutional provision serves as the basis for the 'implied powers' of the federal government?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Supremacy Clause",
                        "isCorrect": false,
                        "rationale": "This clause establishes the hierarchy of laws but does not grant the power to create new types of laws to fulfill duties."
                    },
                    {
                        "label": "B",
                        "text": "The Tenth Amendment",
                        "isCorrect": false,
                        "rationale": "This amendment is the source of state powers rather than federal extensions of power."
                    },
                    {
                        "label": "C",
                        "text": "The Necessary and Proper Clause",
                        "isCorrect": true,
                        "rationale": "Also known as the Elastic Clause, it allows Congress to pass laws required to carry out its enumerated responsibilities."
                    },
                    {
                        "label": "D",
                        "text": "The Full Faith and Credit Clause",
                        "isCorrect": false,
                        "rationale": "This provision governs how states must respect the public acts and records of other states."
                    }
                ],
                "correctAnswer": "C"
            },
            {
                "id": "Fed-2-5",
                "question": "Which of the following activities is an example of a 'concurrent power' shared by both the federal and state governments?",
                "options": [
                    {
                        "label": "A",
                        "text": "Establishing post offices",
                        "isCorrect": false,
                        "rationale": "This is an enumerated power exclusive to the national government to ensure a unified communication network."
                    },
                    {
                        "label": "B",
                        "text": "Levying taxes",
                        "isCorrect": true,
                        "rationale": "Both levels of government possess the authority to generate revenue to fund their respective operations."
                    },
                    {
                        "label": "C",
                        "text": "Regulating interstate commerce",
                        "isCorrect": false,
                        "rationale": "The Constitution grants this power to the federal government to prevent trade disputes between states."
                    },
                    {
                        "label": "D",
                        "text": "Ratifying amendments to the Constitution",
                        "isCorrect": false,
                        "rationale": "This is a function reserved specifically for the states as part of the formal amendment process."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-6",
                "question": "The Tenth Amendment states that powers not delegated to the United States nor prohibited to the states are granted to the states or the people. These are known as:",
                "options": [
                    {
                        "label": "A",
                        "text": "Enumerated powers",
                        "isCorrect": false,
                        "rationale": "These are specifically listed federal powers, whereas the amendment refers to those not listed."
                    },
                    {
                        "label": "B",
                        "text": "Implied powers",
                        "isCorrect": false,
                        "rationale": "These are logical extensions of federal power, not the powers kept by the states."
                    },
                    {
                        "label": "C",
                        "text": "Reserved powers",
                        "isCorrect": true,
                        "rationale": "This ensures that states maintain authority over matters the Constitution does not explicitly assign to the federal government."
                    },
                    {
                        "label": "D",
                        "text": "Inherent powers",
                        "isCorrect": false,
                        "rationale": "These are powers that any sovereign nation possesses, rather than those constitutionally set aside for subnational units."
                    }
                ],
                "correctAnswer": "C"
            },
            {
                "id": "Fed-2-7",
                "question": "Under the concept of 'police powers,' which level of government has the primary authority to regulate issues like marriage, divorce, and public health standards?",
                "options": [
                    {
                        "label": "A",
                        "text": "The National Government",
                        "isCorrect": false,
                        "rationale": "The federal government's authority is limited to enumerated areas, and family law is not among them."
                    },
                    {
                        "label": "B",
                        "text": "The State Governments",
                        "isCorrect": true,
                        "rationale": "States utilize these powers to protect the health, safety, morality, and general welfare of their residents."
                    },
                    {
                        "label": "C",
                        "text": "The Supreme Court",
                        "isCorrect": false,
                        "rationale": "The judiciary interprets laws but does not have the legislative 'police power' to create social regulations."
                    },
                    {
                        "label": "D",
                        "text": "International Organizations",
                        "isCorrect": false,
                        "rationale": "Domestic social policies in the U.S. are determined by internal constitutional structures, not external bodies."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-8",
                "question": "Which Supreme Court case established that the federal government could create a national bank under the doctrine of implied powers and that states could not tax federal institutions?",
                "options": [
                    {
                        "label": "A",
                        "text": "Arizona v. United States",
                        "isCorrect": false,
                        "rationale": "This case dealt with immigration and federal supremacy, but not the creation of a national bank."
                    },
                    {
                        "label": "B",
                        "text": "Marbury v. Madison",
                        "isCorrect": false,
                        "rationale": "This case established judicial review rather than the specific doctrine of implied powers for Congress."
                    },
                    {
                        "label": "C",
                        "text": "McCulloch v. Maryland",
                        "isCorrect": true,
                        "rationale": "The ruling affirmed the Elastic Clause and the Principle of National Supremacy, preventing states from 'destroying' federal tools through taxation."
                    },
                    {
                        "label": "D",
                        "text": "United States v. Windsor",
                        "isCorrect": false,
                        "rationale": "This case addressed same-sex marriage and federal definitions of marriage, not the banking system."
                    }
                ],
                "correctAnswer": "C"
            },
            {
                "id": "Fed-2-9",
                "question": "The metaphor of 'Layer Cake Federalism' is used to describe which era or style of government?",
                "options": [
                    {
                        "label": "A",
                        "text": "Cooperative Federalism",
                        "isCorrect": false,
                        "rationale": "This style is represented by a marble cake, where state and federal powers are mixed."
                    },
                    {
                        "label": "B",
                        "text": "Dual Federalism",
                        "isCorrect": true,
                        "rationale": "This system features clearly defined, separate jurisdictions for the national and state governments with minimal overlap."
                    },
                    {
                        "label": "C",
                        "text": "New Federalism",
                        "isCorrect": false,
                        "rationale": "This style focuses on decentralization and returning power to states rather than maintaining two strictly separate tiers."
                    },
                    {
                        "label": "D",
                        "text": "Competitive Federalism",
                        "isCorrect": false,
                        "rationale": "This refers to states competing for resources or interest groups choosing government levels, not a structural cake metaphor."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-10",
                "question": "Which historical event served as the primary catalyst for the transition from Dual Federalism to Cooperative Federalism?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Civil War",
                        "isCorrect": false,
                        "rationale": "While it settled the issue of secession, it did not immediately lead to the integrated 'marble cake' model of policy-making."
                    },
                    {
                        "label": "B",
                        "text": "The Great Depression",
                        "isCorrect": true,
                        "rationale": "The economic crisis led to the New Deal, which required unprecedented coordination and funding between federal and state levels."
                    },
                    {
                        "label": "C",
                        "text": "The Revolutionary War",
                        "isCorrect": false,
                        "rationale": "This event led to the creation of the nation, but federalism itself evolved much later."
                    },
                    {
                        "label": "D",
                        "text": "The Cold War",
                        "isCorrect": false,
                        "rationale": "This global conflict emphasized national security but was not the origin of domestic cooperative social programs."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-11",
                "question": "What does the term 'Laboratories of Democracy' refer to in American federalism?",
                "options": [
                    {
                        "label": "A",
                        "text": "Federal research facilities located in different states.",
                        "isCorrect": false,
                        "rationale": "This takes the word 'laboratory' too literally; it is a political metaphor, not a scientific location."
                    },
                    {
                        "label": "B",
                        "text": "The ability of states to experiment with novel social and economic policies without risking the whole nation.",
                        "isCorrect": true,
                        "rationale": "This concept, popularized by Justice Brandeis, allows successful state policies to eventually spread to other states or the federal level."
                    },
                    {
                        "label": "C",
                        "text": "A system where the federal government tests laws in small territories before applying them to states.",
                        "isCorrect": false,
                        "rationale": "The innovation flows from the states upward or outward, not from the federal government downward to territories."
                    },
                    {
                        "label": "D",
                        "text": "The requirement that all state laws be reviewed by federal scientists.",
                        "isCorrect": false,
                        "rationale": "This is not a feature of the U.S. system and would violate state autonomy."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-12",
                "question": "Which constitutional clause requires that states generally recognize and honor the legal contracts, court decisions, and public acts of other states?",
                "options": [
                    {
                        "label": "A",
                        "text": "Privileges and Immunities Clause",
                        "isCorrect": false,
                        "rationale": "This clause focuses on non-discrimination against out-of-staters rather than the validity of legal documents."
                    },
                    {
                        "label": "B",
                        "text": "Full Faith and Credit Clause",
                        "isCorrect": true,
                        "rationale": "Found in Article IV, Section 1, this ensures that a legal decision in one state remains valid if a person moves to another state."
                    },
                    {
                        "label": "C",
                        "text": "The Comity Clause",
                        "isCorrect": false,
                        "rationale": "The Comity Clause is another name for the Privileges and Immunities Clause, which covers different ground."
                    },
                    {
                        "label": "D",
                        "text": "The Necessary and Proper Clause",
                        "isCorrect": false,
                        "rationale": "This clause deals with federal legislative power, not state-to-state relations."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-13",
                "question": "The decision in Arizona v. United States (2012) was significant because the Supreme Court:",
                "options": [
                    {
                        "label": "A",
                        "text": "Ruled that states have equal authority with the federal government to regulate immigration.",
                        "isCorrect": false,
                        "rationale": "The court actually struck down most of Arizona's law, affirming that immigration regulation is a federal responsibility."
                    },
                    {
                        "label": "B",
                        "text": "Affirmed federal supremacy on immigration while striking down several provisions of a restrictive state law.",
                        "isCorrect": true,
                        "rationale": "The court ruled that the federal government's authority to establish a uniform Rule of Naturalization is 'broad and undoubted.'"
                    },
                    {
                        "label": "C",
                        "text": "Allowed states to arrest anyone they suspect of being an undocumented immigrant without a warrant.",
                        "isCorrect": false,
                        "rationale": "This specific provision was one of the ones struck down by the Supreme Court as a violation of federal authority."
                    },
                    {
                        "label": "D",
                        "text": "Legalized same-sex marriage in the state of Arizona.",
                        "isCorrect": false,
                        "rationale": "This case was entirely about immigration law and federalism, not marital rights."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-14",
                "question": "Which system of government existed in the United States under the Articles of Confederation?",
                "options": [
                    {
                        "label": "A",
                        "text": "Unitary system",
                        "isCorrect": false,
                        "rationale": "The U.S. moved away from the unitary model after the Revolution against the British crown."
                    },
                    {
                        "label": "B",
                        "text": "Confederal system",
                        "isCorrect": true,
                        "rationale": "The states were sovereign and powerful while the national government was weak and lacked the authority to tax or regulate trade."
                    },
                    {
                        "label": "C",
                        "text": "Federal system",
                        "isCorrect": false,
                        "rationale": "The federal system was the solution created by the 1787 Constitution to replace the failing initial structure."
                    },
                    {
                        "label": "D",
                        "text": "Parliamentary system",
                        "isCorrect": false,
                        "rationale": "This describes a relationship between branches of government, not the division between national and state power."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-15",
                "question": "The term 'Marble Cake Federalism' accurately represents Cooperative Federalism because:",
                "options": [
                    {
                        "label": "A",
                        "text": "State and national powers are stacked on top of each other but never touch.",
                        "isCorrect": false,
                        "rationale": "This describes Dual (Layer Cake) Federalism, where jurisdictions are distinct."
                    },
                    {
                        "label": "B",
                        "text": "The responsibilities and functions of the different levels of government blend together.",
                        "isCorrect": true,
                        "rationale": "In this model, national policy priorities are often implemented through state and local government coordination."
                    },
                    {
                        "label": "C",
                        "text": "It only allows the federal government to make decisions regarding health and safety.",
                        "isCorrect": false,
                        "rationale": "The metaphor implies a mixture of levels, not the total dominance of one level over another."
                    },
                    {
                        "label": "D",
                        "text": "It describes a system with no constitution.",
                        "isCorrect": false,
                        "rationale": "All forms of American federalism operate within the framework of the national constitution."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Fed-2-16",
                "question": "What does the 'Supremacy Clause' in Article VI of the Constitution declare?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Constitution and federal laws are the supreme law of the land",
                        "isCorrect": true,
                        "rationale": "This clause ensures that if a state law clashes with a valid federal law, the federal law prevails."
                    },
                    {
                        "label": "B",
                        "text": "The President is the supreme authority over the other branches of government",
                        "isCorrect": false,
                        "rationale": "The Constitution creates a system of checks and balances among co-equal branches, not a supreme leader."
                    },
                    {
                        "label": "C",
                        "text": "States have supreme authority over all matters within their borders",
                        "isCorrect": false,
                        "rationale": "This contradicts the Supremacy Clause, which places federal law above state law in cases of conflict."
                    },
                    {
                        "label": "D",
                        "text": "The Supreme Court is the only body that can pass laws in the United States",
                        "isCorrect": false,
                        "rationale": "The Court interprets laws, while Congress is the body that possesses the power to create them."
                    }
                ],
                "correctAnswer": "A"
            }
        ]
    },
    "Civil Liberties": {
        "Level 1": [
            {
                "id": "Civ-1-1",
                "question": "Which term best describes the limitations on the power of government designed to ensure personal freedoms?",
                "options": [
                    {
                        "label": "A",
                        "text": "Civil liberties",
                        "isCorrect": true,
                        "rationale": "This concept refers to specific protections that prevent the government from intruding on individual freedoms."
                    },
                    {
                        "label": "B",
                        "text": "Civil rights",
                        "isCorrect": false,
                        "rationale": "While related, this term specifically focuses on guarantees of equal treatment by government authorities based on characteristics like race or gender."
                    },
                    {
                        "label": "C",
                        "text": "Federalism",
                        "isCorrect": false,
                        "rationale": "This describes the structure of shared power between national and state governments rather than individual legal protections."
                    },
                    {
                        "label": "D",
                        "text": "Common law",
                        "isCorrect": false,
                        "rationale": "This refers to the legal system based on traditions and past court rulings rather than the specific constitutional limits on state power."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-2",
                "question": "What is the primary function of a writ of habeas corpus?",
                "options": [
                    {
                        "label": "A",
                        "text": "To ensure that a prisoner is brought before a judge to be told why they are being held",
                        "isCorrect": true,
                        "rationale": "This procedural right prevents the government from detaining individuals indefinitely without showing cause."
                    },
                    {
                        "label": "B",
                        "text": "To allow the government to search a home without a warrant",
                        "isCorrect": false,
                        "rationale": "This would be a violation of the Fourth Amendment, which is distinct from the protections of the writ."
                    },
                    {
                        "label": "C",
                        "text": "To guarantee a jury trial in all civil disputes",
                        "isCorrect": false,
                        "rationale": "Jury trials for civil cases are covered by the Seventh Amendment, not the writ of habeas corpus."
                    },
                    {
                        "label": "D",
                        "text": "To permit the President to suspend the Bill of Rights during wartime",
                        "isCorrect": false,
                        "rationale": "The writ is a protection against arbitrary power, though it has been controversially limited during national security crises."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-3",
                "question": "Which of the following describes an 'ex post facto' law?",
                "options": [
                    {
                        "label": "A",
                        "text": "A law that punishes people for an act that was not a crime when it was committed",
                        "isCorrect": true,
                        "rationale": "The Constitution prohibits these laws to ensure people have fair notice of what conduct is considered illegal."
                    },
                    {
                        "label": "B",
                        "text": "A law that inflicts punishment on a group without a formal trial",
                        "isCorrect": false,
                        "rationale": "This describes a 'bill of attainder,' which is another specific type of law prohibited by the Constitution."
                    },
                    {
                        "label": "C",
                        "text": "A law that requires the government to provide an attorney to a defendant",
                        "isCorrect": false,
                        "rationale": "This is a protection found in the Sixth Amendment rather than a prohibited legislative act."
                    },
                    {
                        "label": "D",
                        "text": "A law that allows the states to ignore federal court rulings",
                        "isCorrect": false,
                        "rationale": "The Supremacy Clause generally prevents states from overriding national laws or judicial decisions."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-4",
                "question": "The first ten amendments to the U.S. Constitution are collectively known as what?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Bill of Rights",
                        "isCorrect": true,
                        "rationale": "These amendments were added shortly after ratification to address concerns about individual liberties and state powers."
                    },
                    {
                        "label": "B",
                        "text": "The Articles of Confederation",
                        "isCorrect": false,
                        "rationale": "This was the first governing document of the United States, which the current Constitution replaced."
                    },
                    {
                        "label": "C",
                        "text": "The Declaration of Independence",
                        "isCorrect": false,
                        "rationale": "This document announced the colonies' separation from Britain but did not establish the U.S. legal framework."
                    },
                    {
                        "label": "D",
                        "text": "The Federalist Papers",
                        "isCorrect": false,
                        "rationale": "These were a series of essays written to persuade the states to ratify the new Constitution."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-5",
                "question": "In the landmark case Barron v. Baltimore (1833), what did the Supreme Court decide regarding the Bill of Rights?",
                "options": [
                    {
                        "label": "A",
                        "text": "It applied only to the federal government, not to state or local governments",
                        "isCorrect": true,
                        "rationale": "The Court initially held that the Bill of Rights was intended to restrain only the national government's power."
                    },
                    {
                        "label": "B",
                        "text": "It protected individuals from both state and federal interference",
                        "isCorrect": false,
                        "rationale": "This interpretation only developed later after the passage of the Fourteenth Amendment."
                    },
                    {
                        "label": "C",
                        "text": "It only applied to property owners and taxpayers",
                        "isCorrect": false,
                        "rationale": "The Bill of Rights was intended to protect 'persons,' though its application was initially limited by jurisdiction, not socioeconomic status."
                    },
                    {
                        "label": "D",
                        "text": "It allowed states to establish official state religions",
                        "isCorrect": false,
                        "rationale": "While the Bill of Rights didn't restrict states initially, many state constitutions already had their own religious protections."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-6",
                "question": "What is the 'incorporation doctrine' (or selective incorporation)?",
                "options": [
                    {
                        "label": "A",
                        "text": "The process of making Bill of Rights protections applicable to state governments through the Fourteenth Amendment",
                        "isCorrect": true,
                        "rationale": "Over time, the Supreme Court has ruled that most individual liberties must be respected by states as well as the federal government."
                    },
                    {
                        "label": "B",
                        "text": "The method by which new states are admitted into the United States",
                        "isCorrect": false,
                        "rationale": "This process is governed by Article IV of the Constitution and is unrelated to individual civil liberties."
                    },
                    {
                        "label": "C",
                        "text": "The rule that businesses must follow federal guidelines when hiring employees",
                        "isCorrect": false,
                        "rationale": "While federal laws regulate business practices, this does not describe the constitutional process of applying the Bill of Rights to states."
                    },
                    {
                        "label": "D",
                        "text": "The power of Congress to incorporate new territories as federal districts",
                        "isCorrect": false,
                        "rationale": "This is a geographic and administrative power rather than a judicial doctrine concerning civil liberties."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-7",
                "question": "Which amendment contains the Due Process clause used by the Supreme Court to apply the Bill of Rights to the states?",
                "options": [
                    {
                        "label": "A",
                        "text": "Fourteenth Amendment",
                        "isCorrect": true,
                        "rationale": "This amendment's requirement that states provide due process and equal protection became the foundation for selective incorporation."
                    },
                    {
                        "label": "B",
                        "text": "First Amendment",
                        "isCorrect": false,
                        "rationale": "This amendment lists specific freedoms but does not provide the mechanism for applying those freedoms to the states."
                    },
                    {
                        "label": "C",
                        "text": "Tenth Amendment",
                        "isCorrect": false,
                        "rationale": "The Tenth Amendment focuses on powers reserved to the states rather than the application of federal rights to them."
                    },
                    {
                        "label": "D",
                        "text": "Second Amendment",
                        "isCorrect": false,
                        "rationale": "The Second Amendment protects the right to bear arms, but it was itself incorporated via the Fourteenth Amendment."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-8",
                "question": "The First Amendment prevents the government from creating an official state religion. This is known as the ________.",
                "options": [
                    {
                        "label": "A",
                        "text": "Establishment clause",
                        "isCorrect": true,
                        "rationale": "This clause prohibits Congress from 'establishing' a religion or favoring one religion over another."
                    },
                    {
                        "label": "B",
                        "text": "Free exercise clause",
                        "isCorrect": false,
                        "rationale": "This clause protects the individual's right to practice their chosen religion without government interference."
                    },
                    {
                        "label": "C",
                        "text": "Due process clause",
                        "isCorrect": false,
                        "rationale": "Due process concerns fair legal procedures rather than the specific relationship between church and state."
                    },
                    {
                        "label": "D",
                        "text": "Supremacy clause",
                        "isCorrect": false,
                        "rationale": "The Supremacy Clause establishes that federal law takes precedence over state law but does not specifically address religion."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-9",
                "question": "True or False: The Free Exercise Clause allows individuals to perform any act, including illegal ones, as long as it is part of their religious practice.",
                "options": [
                    {
                        "label": "A",
                        "text": "False",
                        "isCorrect": true,
                        "rationale": "The Supreme Court has ruled that religious beliefs are absolute, but religious actions can be regulated if they harm the public or violate neutral laws."
                    },
                    {
                        "label": "B",
                        "text": "True",
                        "isCorrect": false,
                        "rationale": "While the First Amendment is broad, it does not provide an absolute shield for conduct that is dangerous or illegal for secular reasons."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-10",
                "question": "Which Supreme Court case ruled that teacher-led prayer in public schools is unconstitutional?",
                "options": [
                    {
                        "label": "A",
                        "text": "Engel v. Vitale (1962)",
                        "isCorrect": true,
                        "rationale": "The Court decided that even a non-denominational prayer written by the state violates the Establishment Clause when led by school officials."
                    },
                    {
                        "label": "B",
                        "text": "McDonald v. Chicago (2010)",
                        "isCorrect": false,
                        "rationale": "This case dealt with the incorporation of the Second Amendment rather than school prayer."
                    },
                    {
                        "label": "C",
                        "text": "Mapp v. Ohio (1961)",
                        "isCorrect": false,
                        "rationale": "This case established the exclusionary rule regarding illegal searches and seizures."
                    },
                    {
                        "label": "D",
                        "text": "Miranda v. Arizona (1966)",
                        "isCorrect": false,
                        "rationale": "This case established the requirement for police to inform suspects of their rights before interrogation."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-11",
                "question": "Wearing an armband or burning a flag to express a political opinion is known as ________.",
                "options": [
                    {
                        "label": "A",
                        "text": "Symbolic speech",
                        "isCorrect": true,
                        "rationale": "This form of expression involves non-verbal conduct that communicates a specific message or viewpoint."
                    },
                    {
                        "label": "B",
                        "text": "Prior restraint",
                        "isCorrect": false,
                        "rationale": "Prior restraint refers to government action that stops speech before it occurs, such as censoring a newspaper."
                    },
                    {
                        "label": "C",
                        "text": "Libel",
                        "isCorrect": false,
                        "rationale": "Libel is a written form of defamation that is not protected by the First Amendment."
                    },
                    {
                        "label": "D",
                        "text": "Direct incitement",
                        "isCorrect": false,
                        "rationale": "This describes speech that is intended to produce immediate lawless action, which is a limit on speech rather than a type of symbolic expression."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-12",
                "question": "In the case Texas v. Johnson (1989), the Supreme Court ruled that burning the American flag is protected because ________.",
                "options": [
                    {
                        "label": "A",
                        "text": "It is a form of protected symbolic speech under the First Amendment",
                        "isCorrect": true,
                        "rationale": "The Court found that the government cannot prohibit the expression of an idea simply because society finds it offensive."
                    },
                    {
                        "label": "B",
                        "text": "The flag is not considered a national symbol under federal law",
                        "isCorrect": false,
                        "rationale": "The flag is a recognized symbol, but the Court prioritized the right to free expression over the symbol's protection from desecration."
                    },
                    {
                        "label": "C",
                        "text": "Burning a flag is the only legal way to dispose of one",
                        "isCorrect": false,
                        "rationale": "While there is a proper way to retire a flag, the case was about using flag burning as a form of protest."
                    },
                    {
                        "label": "D",
                        "text": "The individual had a specific permit to conduct the fire",
                        "isCorrect": false,
                        "rationale": "The ruling focused on the content of the speech rather than the technicalities of fire safety or permits."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-13",
                "question": "What is the 'Imminent Lawless Action Test' used for?",
                "options": [
                    {
                        "label": "A",
                        "text": "Determining if advocacy of violence can be legally suppressed by the government",
                        "isCorrect": true,
                        "rationale": "Speech can only be punished if it is directed at producing immediate criminal acts and is likely to actually result in those acts."
                    },
                    {
                        "label": "B",
                        "text": "Evaluating whether a religious practice is central to a person's faith",
                        "isCorrect": false,
                        "rationale": "This would be more related to the Sherbert test or other religion-specific judicial standards."
                    },
                    {
                        "label": "C",
                        "text": "Testing if a search warrant was obtained with enough probable cause",
                        "isCorrect": false,
                        "rationale": "This is a Fourth Amendment procedural issue, not a test for the legality of speech."
                    },
                    {
                        "label": "D",
                        "text": "Deciding if a book or movie meets the legal definition of obscenity",
                        "isCorrect": false,
                        "rationale": "Obscenity is evaluated using the Miller test, which focuses on community standards and artistic value."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-14",
                "question": "Which amendment protects the 'right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures'?",
                "options": [
                    {
                        "label": "A",
                        "text": "Fourth Amendment",
                        "isCorrect": true,
                        "rationale": "This amendment requires that most searches be conducted with a warrant based on probable cause."
                    },
                    {
                        "label": "B",
                        "text": "Third Amendment",
                        "isCorrect": false,
                        "rationale": "The Third Amendment specifically prohibits the housing of soldiers in private homes during peacetime."
                    },
                    {
                        "label": "C",
                        "text": "Fifth Amendment",
                        "isCorrect": false,
                        "rationale": "While related to the rights of the accused, the Fifth Amendment focuses more on self-incrimination and double jeopardy."
                    },
                    {
                        "label": "D",
                        "text": "Sixth Amendment",
                        "isCorrect": false,
                        "rationale": "The Sixth Amendment provides protections for individuals during the trial process, such as the right to a lawyer."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-15",
                "question": "The 'exclusionary rule,' established in Mapp v. Ohio, states that ________.",
                "options": [
                    {
                        "label": "A",
                        "text": "Evidence obtained in an illegal search cannot be used against a defendant in court",
                        "isCorrect": true,
                        "rationale": "This rule is designed to deter police misconduct by removing the incentive to conduct searches without warrants."
                    },
                    {
                        "label": "B",
                        "text": "Lawyers must be excluded from the jury selection process in civil cases",
                        "isCorrect": false,
                        "rationale": "Jury selection rules are distinct from the Fourth Amendment's protections against illegal evidence."
                    },
                    {
                        "label": "C",
                        "text": "The government is excluded from taxing churches and other religious groups",
                        "isCorrect": false,
                        "rationale": "This describes tax-exempt status, which is a matter of the First Amendment and tax law."
                    },
                    {
                        "label": "D",
                        "text": "The President can exclude certain groups from entering the country for national security",
                        "isCorrect": false,
                        "rationale": "This concerns executive power and immigration policy rather than the rights of criminal suspects."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-16",
                "question": "Which case incorporated the Second Amendment to the states, ensuring that state and local governments cannot ban handguns in the home?",
                "options": [
                    {
                        "label": "A",
                        "text": "McDonald v. Chicago (2010)",
                        "isCorrect": true,
                        "rationale": "Following the Heller decision, the Court ruled that the individual right to bear arms is a fundamental liberty that states must respect."
                    },
                    {
                        "label": "B",
                        "text": "District of Columbia v. Heller (2008)",
                        "isCorrect": false,
                        "rationale": "While this case established the individual right to own a gun, it originally applied only to the federal government and territories."
                    },
                    {
                        "label": "C",
                        "text": "Barron v. Baltimore (1833)",
                        "isCorrect": false,
                        "rationale": "This early case did the opposite, stating that the Bill of Rights did not apply to state actions."
                    },
                    {
                        "label": "D",
                        "text": "Gideon v. Wainwright (1963)",
                        "isCorrect": false,
                        "rationale": "This case dealt with the right to an attorney in criminal cases rather than gun rights."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-17",
                "question": "The Fifth Amendment protection against 'double jeopardy' means that ________.",
                "options": [
                    {
                        "label": "A",
                        "text": "A person cannot be prosecuted twice for the same criminal act by the same level of government",
                        "isCorrect": true,
                        "rationale": "This prevents the government from repeatedly trying an individual for the same crime until they get a conviction."
                    },
                    {
                        "label": "B",
                        "text": "A person cannot be forced to testify against themselves in a criminal trial",
                        "isCorrect": false,
                        "rationale": "While also in the Fifth Amendment, this describes the right against self-incrimination, not double jeopardy."
                    },
                    {
                        "label": "C",
                        "text": "A person must be informed of their rights before being questioned by police",
                        "isCorrect": false,
                        "rationale": "This describes the Miranda warning requirement rather than the rule against multiple trials."
                    },
                    {
                        "label": "D",
                        "text": "The government cannot take private property without paying just compensation",
                        "isCorrect": false,
                        "rationale": "This describes the 'takings clause' or eminent domain, which is a different part of the Fifth Amendment."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-18",
                "question": "What does the 'Miranda warning' require police to do?",
                "options": [
                    {
                        "label": "A",
                        "text": "Inform suspects of their rights, such as the right to remain silent, before interrogation",
                        "isCorrect": true,
                        "rationale": "This requirement ensures that suspects are aware of their Fifth Amendment protections against self-incrimination."
                    },
                    {
                        "label": "B",
                        "text": "Obtain a search warrant from a judge before entering a suspect's vehicle",
                        "isCorrect": false,
                        "rationale": "This is a Fourth Amendment requirement and is separate from the Miranda rules for questioning."
                    },
                    {
                        "label": "C",
                        "text": "Provide a list of all evidence to the defense attorney before the trial starts",
                        "isCorrect": false,
                        "rationale": "This describes the discovery process in legal proceedings, not the warnings given during an arrest."
                    },
                    {
                        "label": "D",
                        "text": "Allow a suspect to call their spouse before being taken to the jail",
                        "isCorrect": false,
                        "rationale": "Miranda focuses on the right to an attorney and the right to remain silent, not on making personal phone calls."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-19",
                "question": "Which case established that the government must provide a lawyer to defendants in criminal cases who cannot afford one?",
                "options": [
                    {
                        "label": "A",
                        "text": "Gideon v. Wainwright (1963)",
                        "isCorrect": true,
                        "rationale": "The Court ruled that the Sixth Amendment right to counsel is a fundamental part of a fair trial and must be provided to the poor."
                    },
                    {
                        "label": "B",
                        "text": "Mapp v. Ohio (1961)",
                        "isCorrect": false,
                        "rationale": "This case was about the exclusionary rule for evidence, not the right to an attorney."
                    },
                    {
                        "label": "C",
                        "text": "Miranda v. Arizona (1966)",
                        "isCorrect": false,
                        "rationale": "This case focused on the notification of rights during interrogation rather than the provision of a lawyer for the trial itself."
                    },
                    {
                        "label": "D",
                        "text": "Griswold v. Connecticut (1965)",
                        "isCorrect": false,
                        "rationale": "This case was about the right to privacy and the use of contraception."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-20",
                "question": "The Eighth Amendment prohibits which of the following?",
                "options": [
                    {
                        "label": "A",
                        "text": "Cruel and unusual punishments",
                        "isCorrect": true,
                        "rationale": "This amendment limits the severity of penalties and forbids excessive bail and fines."
                    },
                    {
                        "label": "B",
                        "text": "Searches without a warrant",
                        "isCorrect": false,
                        "rationale": "Protection against warrantless searches is found in the Fourth Amendment."
                    },
                    {
                        "label": "C",
                        "text": "The quartering of soldiers in private homes",
                        "isCorrect": false,
                        "rationale": "This is the primary focus of the Third Amendment."
                    },
                    {
                        "label": "D",
                        "text": "Double jeopardy",
                        "isCorrect": false,
                        "rationale": "Double jeopardy is prohibited by the Fifth Amendment."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-21",
                "question": "The Ninth Amendment is important because it states that ________.",
                "options": [
                    {
                        "label": "A",
                        "text": "The list of rights in the Constitution is not exhaustive and people have other rights not listed",
                        "isCorrect": true,
                        "rationale": "This amendment acknowledges that natural and common-law rights exist beyond those specifically mentioned in the Bill of Rights."
                    },
                    {
                        "label": "B",
                        "text": "States have the power to override federal laws they find unconstitutional",
                        "isCorrect": false,
                        "rationale": "This describes 'nullification,' a theory that has generally been rejected by federal courts."
                    },
                    {
                        "label": "C",
                        "text": "The government can only search property if they have a written warrant",
                        "isCorrect": false,
                        "rationale": "This is a Fourth Amendment requirement, not a Ninth Amendment principle."
                    },
                    {
                        "label": "D",
                        "text": "Trial by jury is required in all civil cases involving more than $\\$20$",
                        "isCorrect": false,
                        "rationale": "This specific requirement is found in the Seventh Amendment."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-22",
                "question": "Although the word 'privacy' does not appear in the Constitution, the Supreme Court ruled in Griswold v. Connecticut (1965) that ________.",
                "options": [
                    {
                        "label": "A",
                        "text": "The Constitution implies a 'right to privacy' through several other amendments",
                        "isCorrect": true,
                        "rationale": "The Court found that various protections in the 1st, 3rd, 4th, 5th, and 9th amendments create a 'zone of privacy' around individuals."
                    },
                    {
                        "label": "B",
                        "text": "Privacy only exists within the confines of a public library",
                        "isCorrect": false,
                        "rationale": "The case focused on the intimate relationship of married couples in the home, not in public institutions."
                    },
                    {
                        "label": "C",
                        "text": "The government has an absolute right to monitor citizen communications during war",
                        "isCorrect": false,
                        "rationale": "The ruling established a limit on government power to intrude into personal lives, rather than granting monitoring authority."
                    },
                    {
                        "label": "D",
                        "text": "States can outlaw the use of birth control for unmarried individuals",
                        "isCorrect": false,
                        "rationale": "While Griswold initially focused on married couples, later rulings expanded the right to include all individuals."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-23",
                "question": "Which historical group was primarily responsible for demanding that a Bill of Rights be added to the U.S. Constitution before they would support its ratification?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Federalists",
                        "isCorrect": false,
                        "rationale": "The Federalists generally believed the Constitution as written was sufficient and that a Bill of Rights was unnecessary or even dangerous."
                    },
                    {
                        "label": "B",
                        "text": "The Anti-Federalists",
                        "isCorrect": true,
                        "rationale": "The Anti-Federalists feared that the new, stronger national government would infringe on individual and state liberties without explicit written protections."
                    },
                    {
                        "label": "C",
                        "text": "The Whigs",
                        "isCorrect": false,
                        "rationale": "The Whig Party formed much later in the 19th century, well after the ratification of the Constitution."
                    },
                    {
                        "label": "D",
                        "text": "The Progressives",
                        "isCorrect": false,
                        "rationale": "The Progressive movement emerged in the late 1800s and early 1900s, unrelated to the initial ratification debates."
                    }
                ],
                "correctAnswer": "B"
            }
        ],
        "Level 2": [
            {
                "id": "Civ-2-1",
                "question": "How do political scientists primarily distinguish 'civil liberties' from 'civil rights'?",
                "options": [
                    {
                        "label": "A",
                        "text": "Civil liberties are limitations on government power, while civil rights are guarantees of equal treatment.",
                        "isCorrect": true,
                        "rationale": "Civil liberties act as negative constraints on what the government can do to individuals, whereas civil rights involve positive actions the government takes to ensure equality."
                    },
                    {
                        "label": "B",
                        "text": "Civil liberties apply only to citizens, while civil rights apply to all persons within U.S. territory.",
                        "isCorrect": false,
                        "rationale": "This is a misconception, as the Constitution generally protects 'persons' regardless of citizenship status for most civil liberties."
                    },
                    {
                        "label": "C",
                        "text": "Civil liberties are found in the body of the Constitution, while civil rights are found in the Amendments.",
                        "isCorrect": false,
                        "rationale": "Both concepts are found throughout the Amendments, specifically the Bill of Rights and the Reconstruction Amendments."
                    },
                    {
                        "label": "D",
                        "text": "Civil liberties protect groups from discrimination, while civil rights protect individuals from government overreach.",
                        "isCorrect": false,
                        "rationale": "This reverses the definitions; civil liberties typically protect individual freedoms from government intrusion."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-2",
                "question": "In the original Constitution, what does the protection of 'habeas corpus' require of the government?",
                "options": [
                    {
                        "label": "A",
                        "text": "It requires that a prisoner be brought before a judge and told the reason for their detention.",
                        "isCorrect": true,
                        "rationale": "The writ of habeas corpus is a procedural protection ensuring that individuals cannot be held indefinitely without a legal justification presented in court."
                    },
                    {
                        "label": "B",
                        "text": "It prohibits the government from punishing an individual for an act that was legal when committed.",
                        "isCorrect": false,
                        "rationale": "This describes the prohibition against ex post facto laws, not the writ of habeas corpus."
                    },
                    {
                        "label": "C",
                        "text": "It prevents the passage of laws that declare a specific person guilty of a crime without a trial.",
                        "isCorrect": false,
                        "rationale": "This describes a bill of attainder, which is a separate protection found in Article I, Section 9."
                    },
                    {
                        "label": "D",
                        "text": "It ensures that all citizens have the right to a trial by a jury of their peers.",
                        "isCorrect": false,
                        "rationale": "While jury trials are a constitutional right, habeas corpus specifically addresses the initial legality of the detention itself."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-3",
                "question": "Which Supreme Court case initially established that the Bill of Rights applied only to the federal government and not to state governments?",
                "options": [
                    {
                        "label": "A",
                        "text": "Barron v. Baltimore (1833)",
                        "isCorrect": true,
                        "rationale": "In this case, Chief Justice Marshall ruled that the Constitution was intended to secure people against the federal government, not their own state governments."
                    },
                    {
                        "label": "B",
                        "text": "Mapp v. Ohio (1961)",
                        "isCorrect": false,
                        "rationale": "This case dealt with the exclusionary rule and occurred much later, during the era of selective incorporation."
                    },
                    {
                        "label": "C",
                        "text": "McCulloch v. Maryland (1819)",
                        "isCorrect": false,
                        "rationale": "This case focused on federalism and the 'necessary and proper' clause rather than the application of the Bill of Rights."
                    },
                    {
                        "label": "D",
                        "text": "McDonald v. Chicago (2010)",
                        "isCorrect": false,
                        "rationale": "This case actually incorporated the Second Amendment to the states, which is the opposite of the Barron ruling."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-4",
                "question": "The process of 'selective incorporation' relies primarily on which clause of the Fourteenth Amendment?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Due Process Clause",
                        "isCorrect": true,
                        "rationale": "The Supreme Court has used the phrase 'nor shall any State deprive any person of life, liberty, or property, without due process of law' to apply Bill of Rights protections to the states."
                    },
                    {
                        "label": "B",
                        "text": "The Equal Protection Clause",
                        "isCorrect": false,
                        "rationale": "While critical for civil rights, this clause is typically used to prevent discrimination rather than to incorporate specific liberties from the Bill of Rights."
                    },
                    {
                        "label": "C",
                        "text": "The Privileges or Immunities Clause",
                        "isCorrect": false,
                        "rationale": "Though some argued this should be the basis for incorporation, the Court historically limited its scope, leading to the use of the Due Process Clause instead."
                    },
                    {
                        "label": "D",
                        "text": "The Citizenship Clause",
                        "isCorrect": false,
                        "rationale": "This clause defines who is a citizen but does not serve as the legal mechanism for applying the Bill of Rights to state governments."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-6",
                "question": "According to the First Amendment's Free Exercise Clause, when can the government legally restrict a religious practice?",
                "options": [
                    {
                        "label": "A",
                        "text": "When the practice causes harm to the public or infringes on the rights of others.",
                        "isCorrect": true,
                        "rationale": "While beliefs are absolute, religious actions can be regulated if they pose a threat to public safety or the rights of other citizens."
                    },
                    {
                        "label": "B",
                        "text": "Whenever the government determines that a specific religious belief is blasphemous or misguided.",
                        "isCorrect": false,
                        "rationale": "The government cannot judge the truth or appropriateness of religious tenets under the First Amendment."
                    },
                    {
                        "label": "C",
                        "text": "Only during times of declared national emergency or war.",
                        "isCorrect": false,
                        "rationale": "Restrictions on harmful practices (like human sacrifice or non-vaccination in public schools) can exist during peacetime if they serve a compelling interest."
                    },
                    {
                        "label": "D",
                        "text": "Whenever a religious group attempts to recruit followers in a public space.",
                        "isCorrect": false,
                        "rationale": "The right to recruit and share faith is protected as part of free exercise and free speech."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-7",
                "question": "Which standard is currently used by the Supreme Court to determine if advocacy of illegal action is protected speech?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Imminent Lawless Action Test",
                        "isCorrect": true,
                        "rationale": "Established in Brandenburg v. Ohio, this test protects speech unless it is directed to inciting or producing immediate crime and is likely to succeed."
                    },
                    {
                        "label": "B",
                        "text": "The Clear and Present Danger Test",
                        "isCorrect": false,
                        "rationale": "This was an older, less protective standard from the early 20th century that has since been largely superseded by the 'imminent lawless action' standard."
                    },
                    {
                        "label": "C",
                        "text": "The Bad Tendency Test",
                        "isCorrect": false,
                        "rationale": "This is a historical standard that allowed the government to punish speech if it had a 'tendency' to lead to illegal acts, which is no longer the standard."
                    },
                    {
                        "label": "D",
                        "text": "The Undue Burden Test",
                        "isCorrect": false,
                        "rationale": "This test is specifically used in cases involving abortion rights rather than free speech."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-8",
                "question": "In Texas v. Johnson (1989), why did the Supreme Court rule that burning the American flag is protected under the First Amendment?",
                "options": [
                    {
                        "label": "A",
                        "text": "It is considered a form of symbolic speech that communicates a political idea.",
                        "isCorrect": true,
                        "rationale": "The Court found that flag burning is 'conduct' that is 'sufficiently imbued with elements of communication' to fall under the protection of free expression."
                    },
                    {
                        "label": "B",
                        "text": "The flag is private property, and owners can do what they want with their possessions.",
                        "isCorrect": false,
                        "rationale": "While property rights exist, the case turned on the 'expression' of the act rather than a simple property dispute."
                    },
                    {
                        "label": "C",
                        "text": "The Constitution specifically mentions the right to desecrate national symbols.",
                        "isCorrect": false,
                        "rationale": "The Constitution does not mention symbols; the right is derived from the broad protection of the 'freedom of speech'."
                    },
                    {
                        "label": "D",
                        "text": "The government failed to show that the flag was a 'venerated object' worth protecting.",
                        "isCorrect": false,
                        "rationale": "The Court acknowledged the flag was a venerated symbol but held that the government cannot prohibit the expression of an idea just because it is offensive."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-9",
                "question": "What does the 'Exclusionary Rule' establish regarding criminal evidence?",
                "options": [
                    {
                        "label": "A",
                        "text": "Evidence obtained through an illegal search or seizure cannot be used against a defendant in court.",
                        "isCorrect": true,
                        "rationale": "Derived from Mapp v. Ohio, this rule serves to deter police misconduct by making unconstitutionally obtained evidence inadmissible."
                    },
                    {
                        "label": "B",
                        "text": "The government must exclude all hearsay evidence from being presented to a jury.",
                        "isCorrect": false,
                        "rationale": "Hearsay rules are part of the rules of evidence but are distinct from the constitutional protections of the Fourth Amendment."
                    },
                    {
                        "label": "C",
                        "text": "Defendants can be excluded from their own trial if they refuse to testify.",
                        "isCorrect": false,
                        "rationale": "Defendants have a right to be present at their trial, and they have a right *not* to testify under the Fifth Amendment."
                    },
                    {
                        "label": "D",
                        "text": "Police must exclude the public from a crime scene until a warrant is issued.",
                        "isCorrect": false,
                        "rationale": "This is a procedural matter of crime scene management and does not define the legal 'exclusionary rule'."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-10",
                "question": "The Supreme Court case McDonald v. Chicago (2010) was significant because it:",
                "options": [
                    {
                        "label": "A",
                        "text": "Incorporated the Second Amendment's individual right to bear arms to the states.",
                        "isCorrect": true,
                        "rationale": "This ruling applied the individual right to own a handgun for self-defense, previously established in Heller, to state and local governments."
                    },
                    {
                        "label": "B",
                        "text": "Ruled that handgun bans are constitutional if they are passed by city councils.",
                        "isCorrect": false,
                        "rationale": "The case actually struck down Chicago's handgun ban as unconstitutional under the Second and Fourteenth Amendments."
                    },
                    {
                        "label": "C",
                        "text": "Established that the right to bear arms is a collective right of the state militia.",
                        "isCorrect": false,
                        "rationale": "The Court moved away from the collective rights view, affirming an individual rights interpretation."
                    },
                    {
                        "label": "D",
                        "text": "Determined that the Second Amendment only applies to federal territories like Washington D.C.",
                        "isCorrect": false,
                        "rationale": "This was the reach of the prior Heller decision; McDonald expanded that reach to include the states."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-11",
                "question": "Which amendment protects an individual from being subjected to 'double jeopardy'?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Fifth Amendment",
                        "isCorrect": true,
                        "rationale": "The Fifth Amendment prevents a person from being prosecuted twice for the same criminal act at the same level of government."
                    },
                    {
                        "label": "B",
                        "text": "The Sixth Amendment",
                        "isCorrect": false,
                        "rationale": "The Sixth Amendment focuses on trial rights, such as the right to a speedy trial and counsel, rather than repeated prosecution."
                    },
                    {
                        "label": "C",
                        "text": "The Fourth Amendment",
                        "isCorrect": false,
                        "rationale": "The Fourth Amendment governs searches and seizures, not the number of times one can be tried."
                    },
                    {
                        "label": "D",
                        "text": "The Eighth Amendment",
                        "isCorrect": false,
                        "rationale": "The Eighth Amendment prohibits excessive bail and cruel and unusual punishment."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-12",
                "question": "What is the primary function of a 'Grand Jury' in the American legal system?",
                "options": [
                    {
                        "label": "A",
                        "text": "To determine whether there is enough evidence of a crime to justify a formal indictment and trial.",
                        "isCorrect": true,
                        "rationale": "A grand jury acts as a preliminary filter to ensure the government has a reasonable basis for proceeding with serious criminal charges."
                    },
                    {
                        "label": "B",
                        "text": "To decide the final guilt or innocence of a defendant at the conclusion of a trial.",
                        "isCorrect": false,
                        "rationale": "This is the role of a petit jury (or trial jury), not a grand jury."
                    },
                    {
                        "label": "C",
                        "text": "To hear appeals from defendants who believe their constitutional rights were violated.",
                        "isCorrect": false,
                        "rationale": "Appeals are heard by panels of judges in appellate courts, not by a grand jury."
                    },
                    {
                        "label": "D",
                        "text": "To select the pool of citizens who will serve as jurors for civil litigation.",
                        "isCorrect": false,
                        "rationale": "Jury selection (voir dire) is a separate process involving the court and the attorneys in a specific case."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-15",
                "question": "Why is the Ninth Amendment considered significant in the debate over the 'Right to Privacy'?",
                "options": [
                    {
                        "label": "A",
                        "text": "It suggests that the people retain rights that are not explicitly listed in the Constitution.",
                        "isCorrect": true,
                        "rationale": "The Ninth Amendment allows for the interpretation of 'unenumerated' rights, such as privacy, which are not specifically named but are considered fundamental."
                    },
                    {
                        "label": "B",
                        "text": "It explicitly lists 'privacy' as one of the fundamental liberties of the people.",
                        "isCorrect": false,
                        "rationale": "The word 'privacy' does not appear in the Constitution; the right is inferred from various amendments."
                    },
                    {
                        "label": "C",
                        "text": "It requires that all privacy laws be passed by the states rather than the federal government.",
                        "isCorrect": false,
                        "rationale": "This is a misconception related to the Tenth Amendment (reserved powers) rather than the Ninth Amendment."
                    },
                    {
                        "label": "D",
                        "text": "It prohibits the government from using any technology to monitor private communications.",
                        "isCorrect": false,
                        "rationale": "While privacy rights may limit surveillance, the Ninth Amendment is a broad interpretive rule, not a specific ban on technology."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-16",
                "question": "Which of the following is an example of 'Ceremonial Deism' that is generally permitted by the courts?",
                "options": [
                    {
                        "label": "A",
                        "text": "The inclusion of 'In God We Trust' on U.S. currency.",
                        "isCorrect": true,
                        "rationale": "The courts view this as a historical and cultural acknowledgement of a creator rather than a government establishment of a specific religion."
                    },
                    {
                        "label": "B",
                        "text": "Mandatory teacher-led prayer at the beginning of a public school day.",
                        "isCorrect": false,
                        "rationale": "The Court ruled in Engel v. Vitale that this violates the Establishment Clause because it is a religious activity sanctioned by the state."
                    },
                    {
                        "label": "C",
                        "text": "Requiring all government employees to sign a statement of faith in a supreme being.",
                        "isCorrect": false,
                        "rationale": "Religious tests for public office are specifically prohibited by Article VI of the Constitution."
                    },
                    {
                        "label": "D",
                        "text": "Placing a religious monument in a courtroom to influence the outcome of a trial.",
                        "isCorrect": false,
                        "rationale": "While some displays are allowed for historical context, the primary purpose cannot be to promote a specific faith in a judicial setting."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-18",
                "question": "The Tenth Amendment is fundamentally different from the first nine because it focuses on:",
                "options": [
                    {
                        "label": "A",
                        "text": "The distribution of power between the federal government and the states.",
                        "isCorrect": true,
                        "rationale": "Instead of individual rights, the Tenth Amendment addresses the principle of federalism by reserving non-delegated powers to the states or the people."
                    },
                    {
                        "label": "B",
                        "text": "The rights of the accused during a military tribunal.",
                        "isCorrect": false,
                        "rationale": "The Fifth and Sixth Amendments address trial rights; the Tenth does not mention criminal procedure."
                    },
                    {
                        "label": "C",
                        "text": "The protection of religious freedom from state interference.",
                        "isCorrect": false,
                        "rationale": "This is primarily the domain of the First and Fourteenth Amendments."
                    },
                    {
                        "label": "D",
                        "text": "The right of individuals to own property and engage in commerce.",
                        "isCorrect": false,
                        "rationale": "Economic liberties are touched upon in the Fifth and Fourteenth Amendments, but are not the focus of the Tenth."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-19",
                "question": "In the case of Mapp v. Ohio (1961), the Supreme Court applied the 'Exclusionary Rule' to the states to protect which right?",
                "options": [
                    {
                        "label": "A",
                        "text": "The right to be secure against unreasonable searches and seizures.",
                        "isCorrect": true,
                        "rationale": "The case involved police entering a home without a valid warrant and seizing materials that were then used to convict Dolly Mapp."
                    },
                    {
                        "label": "B",
                        "text": "The right to have an attorney present during a police interrogation.",
                        "isCorrect": false,
                        "rationale": "This describes the Miranda warning or the Sixth Amendment right to counsel, which was not the focus of Mapp."
                    },
                    {
                        "label": "C",
                        "text": "The right to a speedy trial by an impartial jury.",
                        "isCorrect": false,
                        "rationale": "Trial procedure is governed by the Sixth Amendment, whereas Mapp focused on the Fourth Amendment."
                    },
                    {
                        "label": "D",
                        "text": "The right to avoid self-incrimination when testifying in court.",
                        "isCorrect": false,
                        "rationale": "This is protected by the Fifth Amendment, not the Fourth Amendment."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-20",
                "question": "What was the significance of the 'Miranda v. Arizona' (1966) ruling?",
                "options": [
                    {
                        "label": "A",
                        "text": "It required police to inform suspects of their rights before custodial interrogation.",
                        "isCorrect": true,
                        "rationale": "Suspects must be told they have the right to remain silent and the right to an attorney to protect against coerced self-incrimination."
                    },
                    {
                        "label": "B",
                        "text": "It established that everyone has a right to an attorney in a civil lawsuit.",
                        "isCorrect": false,
                        "rationale": "The right to counsel (Gideon) applies only to criminal cases where the defendant faces potential jail time."
                    },
                    {
                        "label": "C",
                        "text": "It ruled that the death penalty is unconstitutional for minors.",
                        "isCorrect": false,
                        "rationale": "This was the ruling in Roper v. Simmons (2005), not Miranda."
                    },
                    {
                        "label": "D",
                        "text": "It determined that search warrants are not needed if a suspect is caught 'red-handed'.",
                        "isCorrect": false,
                        "rationale": "This refers to the 'plain view' or 'hot pursuit' exceptions to the Fourth Amendment, which are unrelated to the Miranda warnings."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-21",
                "question": "Which of the following is NOT one of the 'Original Constitution' protections of liberty found in Article I, Section 9?",
                "options": [
                    {
                        "label": "A",
                        "text": "Freedom of Speech",
                        "isCorrect": true,
                        "rationale": "Freedom of speech is found in the First Amendment, which was added later as part of the Bill of Rights."
                    },
                    {
                        "label": "B",
                        "text": "Prohibition of Bills of Attainder",
                        "isCorrect": false,
                        "rationale": "This is one of the three specific protections explicitly listed in the original text of the Constitution before the Bill of Rights was added."
                    },
                    {
                        "label": "C",
                        "text": "Prohibition of Ex Post Facto laws",
                        "isCorrect": false,
                        "rationale": "This is explicitly prohibited in the original body of the Constitution to prevent the government from punishing retroactive crimes."
                    },
                    {
                        "label": "D",
                        "text": "Protection of the Writ of Habeas Corpus",
                        "isCorrect": false,
                        "rationale": "The 'Great Writ' is one of the fundamental protections included in the original document by the framers."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-23",
                "question": "Which amendment ensures that 'no soldier shall, in time of peace be quartered in any house'?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Third Amendment",
                        "isCorrect": true,
                        "rationale": "This amendment was a direct response to the British Quartering Acts that angered the colonists before the Revolution."
                    },
                    {
                        "label": "B",
                        "text": "The Second Amendment",
                        "isCorrect": false,
                        "rationale": "The Second Amendment focuses on the right to keep and bear arms."
                    },
                    {
                        "label": "C",
                        "text": "The Fourth Amendment",
                        "isCorrect": false,
                        "rationale": "The Fourth Amendment protects against unreasonable searches and seizures."
                    },
                    {
                        "label": "D",
                        "text": "The Fifth Amendment",
                        "isCorrect": false,
                        "rationale": "The Fifth Amendment deals with due process and self-incrimination."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-24",
                "question": "Which amendment prohibits 'excessive bail' and 'cruel and unusual punishment'?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Eighth Amendment",
                        "isCorrect": true,
                        "rationale": "This amendment limits the government's power to punish individuals in a way that is disproportionate or inhumane."
                    },
                    {
                        "label": "B",
                        "text": "The Seventh Amendment",
                        "isCorrect": false,
                        "rationale": "The Seventh Amendment ensures the right to a jury trial in civil cases at the federal level."
                    },
                    {
                        "label": "C",
                        "text": "The Fourth Amendment",
                        "isCorrect": false,
                        "rationale": "The Fourth Amendment protects against unreasonable searches and seizures."
                    },
                    {
                        "label": "D",
                        "text": "The Third Amendment",
                        "isCorrect": false,
                        "rationale": "The Third Amendment prevents the quartering of soldiers in private homes."
                    }
                ],
                "correctAnswer": "A"
            }
        ]
    },
    "Civil Rights": {
        "Level 1": [
            {
                "id": "Civ-1-1",
                "question": "Which term describes government guarantees of equal treatment for all citizens, particularly those in historically disadvantaged groups?",
                "options": [
                    {
                        "label": "A",
                        "text": "Civil Liberties",
                        "isCorrect": false,
                        "rationale": "Civil liberties refer to limitations on government power intended to protect individual freedoms, rather than guarantees of equal treatment."
                    },
                    {
                        "label": "B",
                        "text": "Civil Rights",
                        "isCorrect": true,
                        "rationale": "Civil rights are government guarantees that people will be treated equally regardless of their membership in a specific group."
                    },
                    {
                        "label": "C",
                        "text": "Ex Post Facto Laws",
                        "isCorrect": false,
                        "rationale": "This refers to laws that change the legal consequences of actions committed before the enactment of the law, unrelated to equal treatment guarantees."
                    },
                    {
                        "label": "D",
                        "text": "The Social Contract",
                        "isCorrect": false,
                        "rationale": "The social contract is a broad philosophical theory regarding the origin of society and the legitimacy of the state's authority over individuals."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-2",
                "question": "How do civil liberties differ from civil rights?",
                "options": [
                    {
                        "label": "A",
                        "text": "Civil liberties are what the government must do, while civil rights are what the government cannot do.",
                        "isCorrect": false,
                        "rationale": "This reverses the definitions; civil liberties are constraints on government, while civil rights require government action to ensure equality."
                    },
                    {
                        "label": "B",
                        "text": "Civil liberties protect groups, while civil rights protect only individuals.",
                        "isCorrect": false,
                        "rationale": "Both concepts can involve individuals and groups, but their distinction lies in whether they limit or require government power."
                    },
                    {
                        "label": "C",
                        "text": "Civil liberties are limitations on government power, while civil rights are guarantees of equal treatment.",
                        "isCorrect": true,
                        "rationale": "Civil liberties specify what the government cannot do (like infringing on speech), whereas civil rights specify how the government must treat people equally."
                    },
                    {
                        "label": "D",
                        "text": "There is no functional difference between the two terms in American law.",
                        "isCorrect": false,
                        "rationale": "The two terms are distinct in constitutional law, with different amendments and legal tests applied to each."
                    }
                ],
                "correctAnswer": "C"
            },
            {
                "id": "Civ-1-3",
                "question": "Which amendment to the U.S. Constitution effectively ended the institution of slavery?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Fourteenth Amendment",
                        "isCorrect": false,
                        "rationale": "The Fourteenth Amendment deals with citizenship and equal protection rather than the direct abolition of slavery."
                    },
                    {
                        "label": "B",
                        "text": "The Thirteenth Amendment",
                        "isCorrect": true,
                        "rationale": "Ratified after the Civil War, the Thirteenth Amendment prohibited slavery and involuntary servitude except as punishment for a crime."
                    },
                    {
                        "label": "C",
                        "text": "The Fifteenth Amendment",
                        "isCorrect": false,
                        "rationale": "The Fifteenth Amendment focused on voting rights for Black men, not the abolition of slavery."
                    },
                    {
                        "label": "D",
                        "text": "The Nineteenth Amendment",
                        "isCorrect": false,
                        "rationale": "The Nineteenth Amendment granted women the right to vote in 1920."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-4",
                "question": "What is the primary purpose of the Equal Protection Clause in the Fourteenth Amendment?",
                "options": [
                    {
                        "label": "A",
                        "text": "To guarantee that all states allow citizens to carry firearms.",
                        "isCorrect": false,
                        "rationale": "The right to bear arms is covered by the Second Amendment, not the Equal Protection Clause."
                    },
                    {
                        "label": "B",
                        "text": "To ensure that all people similarly circumstanced are treated alike by the law.",
                        "isCorrect": true,
                        "rationale": "The Equal Protection Clause requires states to treat residents equally, forming the constitutional basis for most civil rights claims."
                    },
                    {
                        "label": "C",
                        "text": "To establish the right to a trial by jury in civil cases.",
                        "isCorrect": false,
                        "rationale": "The Seventh Amendment guarantees the right to a jury trial in civil cases, whereas the Fourteenth focuses on equality."
                    },
                    {
                        "label": "D",
                        "text": "To grant the federal government the power to collect income taxes.",
                        "isCorrect": false,
                        "rationale": "The Sixteenth Amendment established the federal income tax."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-5",
                "question": "The Supreme Court decision in Plessy v. Ferguson (1896) is famous for establishing which legal doctrine?",
                "options": [
                    {
                        "label": "A",
                        "text": "Separate but equal",
                        "isCorrect": true,
                        "rationale": "Plessy v. Ferguson upheld state-mandated segregation, arguing that separate facilities did not violate the Fourteenth Amendment if they were equal."
                    },
                    {
                        "label": "B",
                        "text": "Clear and present danger",
                        "isCorrect": false,
                        "rationale": "This doctrine relates to the First Amendment and limitations on free speech, established in Schenck v. United States."
                    },
                    {
                        "label": "C",
                        "text": "One person, one vote",
                        "isCorrect": false,
                        "rationale": "This principle relates to legislative redistricting and was established much later in the 20th century."
                    },
                    {
                        "label": "D",
                        "text": "Judicial review",
                        "isCorrect": false,
                        "rationale": "Judicial review was established by Marbury v. Madison in 1803."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-6",
                "question": "Which landmark 1954 Supreme Court case overturned the Plessy v. Ferguson decision in the field of public education?",
                "options": [
                    {
                        "label": "A",
                        "text": "Roe v. Wade",
                        "isCorrect": false,
                        "rationale": "Roe v. Wade was a 1973 case focused on reproductive rights, not educational segregation."
                    },
                    {
                        "label": "B",
                        "text": "Brown v. Board of Education",
                        "isCorrect": true,
                        "rationale": "The court unanimously ruled that 'separate but equal' facilities in public schools were inherently unequal and unconstitutional."
                    },
                    {
                        "label": "C",
                        "text": "Obergefell v. Hodges",
                        "isCorrect": false,
                        "rationale": "Obergefell v. Hodges is the 2015 case that legalized same-sex marriage nationwide."
                    },
                    {
                        "label": "D",
                        "text": "Dred Scott v. Sandford",
                        "isCorrect": false,
                        "rationale": "This pre-Civil War case ruled that Black people could not be citizens, which is the opposite of expanding civil rights."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-7",
                "question": "What was the purpose of literacy tests and understanding tests used in the South during the Jim Crow era?",
                "options": [
                    {
                        "label": "A",
                        "text": "To improve the educational standards of all eligible voters.",
                        "isCorrect": false,
                        "rationale": "While presented as educational requirements, they were actually used selectively to prevent certain groups from voting."
                    },
                    {
                        "label": "B",
                        "text": "To disenfranchise Black voters by giving them more difficult questions or passages than White voters.",
                        "isCorrect": true,
                        "rationale": "These tests were designed to give officials the discretion to fail Black applicants and ensure they could not register to vote."
                    },
                    {
                        "label": "C",
                        "text": "To ensure that immigrants understood the U.S. Constitution before becoming citizens.",
                        "isCorrect": false,
                        "rationale": "While literacy tests were used against immigrants in the North, their primary function in the South was racial disenfranchisement."
                    },
                    {
                        "label": "D",
                        "text": "To identify gifted students for leadership roles in the state government.",
                        "isCorrect": false,
                        "rationale": "These tests were applied at polling places to adults, not for educational placement of students."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-8",
                "question": "The 'grandfather clause' was used by Southern states to:",
                "options": [
                    {
                        "label": "A",
                        "text": "Allow illiterate White men to vote while still requiring literacy tests for Black men.",
                        "isCorrect": true,
                        "rationale": "The clause exempted those whose ancestors could vote before the Civil War from literacy tests, which effectively only applied to White citizens."
                    },
                    {
                        "label": "B",
                        "text": "Provide social security benefits to the elderly during the Great Depression.",
                        "isCorrect": false,
                        "rationale": "Social Security was a federal program created in the 1930s, unrelated to these voting obstacles."
                    },
                    {
                        "label": "C",
                        "text": "Ensure that grandfathers had legal custody of their grandchildren.",
                        "isCorrect": false,
                        "rationale": "This term refers specifically to voting rights history, not family law or custody rights."
                    },
                    {
                        "label": "D",
                        "text": "Mandate that all voters be over the age of 65.",
                        "isCorrect": false,
                        "rationale": "The clause was a loophole based on ancestry, not a minimum age requirement for all voters."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-9",
                "question": "Which of the following describes a 'poll tax'?",
                "options": [
                    {
                        "label": "A",
                        "text": "A tax paid by corporations to support the election process.",
                        "isCorrect": false,
                        "rationale": "Poll taxes were individual fees, not corporate taxes."
                    },
                    {
                        "label": "B",
                        "text": "An annual fee that a person was required to pay in order to be allowed to vote.",
                        "isCorrect": true,
                        "rationale": "Poll taxes were used to make voting unaffordable for poor citizens, particularly African Americans."
                    },
                    {
                        "label": "C",
                        "text": "A tax on the results of public opinion polls.",
                        "isCorrect": false,
                        "rationale": "Despite the name 'poll,' it referred to the voting location (the polls), not statistical surveys."
                    },
                    {
                        "label": "D",
                        "text": "A refund given to citizens who participated in an election.",
                        "isCorrect": false,
                        "rationale": "A poll tax was a required payment to the government, not a benefit or refund to the voter."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-10",
                "question": "What did the Civil Rights Act of 1964 accomplish?",
                "options": [
                    {
                        "label": "A",
                        "text": "It granted women the right to vote in federal elections.",
                        "isCorrect": false,
                        "rationale": "Women's suffrage was achieved via the Nineteenth Amendment in 1920, decades before this act."
                    },
                    {
                        "label": "B",
                        "text": "It outlawed discrimination in public accommodations, employment, and voter registration.",
                        "isCorrect": true,
                        "rationale": "This broad legislation ended segregation in public places and banned employment discrimination based on race, color, religion, sex, or national origin."
                    },
                    {
                        "label": "C",
                        "text": "It established the 'separate but equal' doctrine as the law of the land.",
                        "isCorrect": false,
                        "rationale": "This act was designed to dismantle segregation, which was the opposite of the 'separate but equal' doctrine."
                    },
                    {
                        "label": "D",
                        "text": "It abolished the Electoral College.",
                        "isCorrect": false,
                        "rationale": "The Electoral College is established by the Constitution and was not altered by the 1964 Act."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-11",
                "question": "The Voting Rights Act of 1965 was particularly effective because it:",
                "options": [
                    {
                        "label": "A",
                        "text": "Lowered the voting age to eighteen.",
                        "isCorrect": false,
                        "rationale": "The voting age was lowered by the Twenty-Sixth Amendment in 1971."
                    },
                    {
                        "label": "B",
                        "text": "Banned literacy tests and provided federal oversight of elections in discriminatory areas.",
                        "isCorrect": true,
                        "rationale": "The act gave the federal government the power to intervene directly to ensure Black citizens could register and vote without harassment."
                    },
                    {
                        "label": "C",
                        "text": "Required all citizens to vote or face a fine.",
                        "isCorrect": false,
                        "rationale": "The U.S. does not have mandatory voting laws; this act focused on removing barriers for those who chose to vote."
                    },
                    {
                        "label": "D",
                        "text": "Eliminated the use of paper ballots in federal elections.",
                        "isCorrect": false,
                        "rationale": "The act regulated who could vote and protected that right, but did not mandate specific ballot technologies."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-12",
                "question": "What was the significance of the 1848 Seneca Falls Convention?",
                "options": [
                    {
                        "label": "A",
                        "text": "It was the first national convention held to advocate for women's rights in the U.S.",
                        "isCorrect": true,
                        "rationale": "Organized by Elizabeth Cady Stanton and Lucretia Mott, it marked the formal beginning of the organized women's rights movement."
                    },
                    {
                        "label": "B",
                        "text": "It was where the U.S. Constitution was originally written.",
                        "isCorrect": false,
                        "rationale": "The Constitutional Convention took place in Philadelphia in 1787."
                    },
                    {
                        "label": "C",
                        "text": "It was a meeting of Southern states to discuss secession before the Civil War.",
                        "isCorrect": false,
                        "rationale": "Seneca Falls is in New York, and the convention focused on social and political equality for women."
                    },
                    {
                        "label": "D",
                        "text": "It was the site of the first successful labor strike by factory workers.",
                        "isCorrect": false,
                        "rationale": "While labor issues were discussed, the primary and historical focus was on the civil rights of women."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-1-13",
                "question": "The 'Declaration of Sentiments' produced at Seneca Falls was intentionally modeled after which famous document?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Bill of Rights",
                        "isCorrect": false,
                        "rationale": "The Bill of Rights lists specific protections from government, whereas the Declaration of Sentiments used a different foundational text's structure."
                    },
                    {
                        "label": "B",
                        "text": "The Declaration of Independence",
                        "isCorrect": true,
                        "rationale": "The document began with the phrase 'all men and women are created equal' to highlight the hypocrisy of the original Declaration's exclusions."
                    },
                    {
                        "label": "C",
                        "text": "The Articles of Confederation",
                        "isCorrect": false,
                        "rationale": "The Articles were the first, failed framework of the U.S. government and were not used as a model for women's rights claims."
                    },
                    {
                        "label": "D",
                        "text": "The Emancipation Proclamation",
                        "isCorrect": false,
                        "rationale": "The Emancipation Proclamation was issued in 1863, fifteen years after the Seneca Falls Convention."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-14",
                "question": "Which amendment granted women the right to vote throughout the United States in 1920?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Fifteenth Amendment",
                        "isCorrect": false,
                        "rationale": "The Fifteenth Amendment, ratified in 1870, prohibited voting discrimination based on race, but not sex."
                    },
                    {
                        "label": "B",
                        "text": "The Nineteenth Amendment",
                        "isCorrect": true,
                        "rationale": "After decades of activism, the Nineteenth Amendment was ratified to ensure that the right to vote could not be denied based on sex."
                    },
                    {
                        "label": "C",
                        "text": "The Twenty-First Amendment",
                        "isCorrect": false,
                        "rationale": "The Twenty-First Amendment repealed Prohibition."
                    },
                    {
                        "label": "D",
                        "text": "The Twenty-Fourth Amendment",
                        "isCorrect": false,
                        "rationale": "The Twenty-Fourth Amendment abolished poll taxes in federal elections."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-17",
                "question": "Civil disobedience is best defined as:",
                "options": [
                    {
                        "label": "A",
                        "text": "Any violent protest directed at the government.",
                        "isCorrect": false,
                        "rationale": "Civil disobedience is specifically characterized by non-violence and a willingness to accept the legal consequences."
                    },
                    {
                        "label": "B",
                        "text": "The intentional, non-violent breaking of a law to show that it is unjust.",
                        "isCorrect": true,
                        "rationale": "Examples include the actions of Rosa Parks and the lunch counter sit-ins during the civil rights movement."
                    },
                    {
                        "label": "C",
                        "text": "Following all laws even if you disagree with them.",
                        "isCorrect": false,
                        "rationale": "This would be legal compliance, the opposite of disobedience."
                    },
                    {
                        "label": "D",
                        "text": "Changing laws through the standard legislative process.",
                        "isCorrect": false,
                        "rationale": "Civil disobedience occurs outside the legislative process, although it often aims to influence it."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-18",
                "question": "The 1957 integration of Central High School in Little Rock, Arkansas, required the intervention of:",
                "options": [
                    {
                        "label": "A",
                        "text": "The United Nations",
                        "isCorrect": false,
                        "rationale": "The UN does not have jurisdiction over domestic U.S. school integration."
                    },
                    {
                        "label": "B",
                        "text": "The 101st Airborne Division of the U.S. Army",
                        "isCorrect": true,
                        "rationale": "President Eisenhower sent federal troops to protect the 'Little Rock Nine' and enforce the court's integration order."
                    },
                    {
                        "label": "C",
                        "text": "The local police department",
                        "isCorrect": false,
                        "rationale": "Local authorities and the National Guard (initially) actually blocked the students' entry, requiring federal intervention."
                    },
                    {
                        "label": "D",
                        "text": "A volunteer group of parents",
                        "isCorrect": false,
                        "rationale": "The situation was too volatile and dangerous for civilian volunteers to manage alone, necessitating military force."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-19",
                "question": "What was a 'white primary'?",
                "options": [
                    {
                        "label": "A",
                        "text": "A primary election where all candidates were required to be White.",
                        "isCorrect": false,
                        "rationale": "The primary restriction was on who could vote in the election, not necessarily who could run."
                    },
                    {
                        "label": "B",
                        "text": "A primary election in which only White people were allowed to vote.",
                        "isCorrect": true,
                        "rationale": "Political parties claimed they were private organizations to bypass the Fifteenth Amendment and exclude Black voters."
                    },
                    {
                        "label": "C",
                        "text": "The first primary held in a presidential election cycle.",
                        "isCorrect": false,
                        "rationale": "This refers to the modern presidential selection process, unrelated to these discriminatory practices."
                    },
                    {
                        "label": "D",
                        "text": "A primary held specifically for choosing judges.",
                        "isCorrect": false,
                        "rationale": "White primaries were used for all Democratic party nominations in the South to ensure White dominance."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-20",
                "question": "Which clause in the Fourteenth Amendment defines who is a citizen of the United States?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Due Process Clause",
                        "isCorrect": false,
                        "rationale": "The Due Process Clause ensures fair legal procedures for all people, not the definition of citizenship."
                    },
                    {
                        "label": "B",
                        "text": "The Citizenship Clause",
                        "isCorrect": true,
                        "rationale": "It states that all persons born or naturalized in the U.S. are citizens, overturning the Dred Scott decision."
                    },
                    {
                        "label": "C",
                        "text": "The Necessary and Proper Clause",
                        "isCorrect": false,
                        "rationale": "This clause is found in Article I and grants Congress implied powers; it is not part of the Fourteenth Amendment."
                    },
                    {
                        "label": "D",
                        "text": "The Supremacy Clause",
                        "isCorrect": false,
                        "rationale": "The Supremacy Clause is in Article VI and establishes that federal law is the supreme law of the land."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-21",
                "question": "The Montgomery Bus Boycott was triggered by the arrest of which civil rights figure?",
                "options": [
                    {
                        "label": "A",
                        "text": "Malcolm X",
                        "isCorrect": false,
                        "rationale": "Malcolm X was a later leader in the Black Power movement and was not involved in the start of the Montgomery boycott."
                    },
                    {
                        "label": "B",
                        "text": "Rosa Parks",
                        "isCorrect": true,
                        "rationale": "Her refusal to give up her seat to a white passenger in 1955 led to a year-long boycott of the city's bus system."
                    },
                    {
                        "label": "C",
                        "text": "John Lewis",
                        "isCorrect": false,
                        "rationale": "John Lewis was a key leader in SNCC and participated in the Freedom Rides, but he did not trigger the bus boycott."
                    },
                    {
                        "label": "D",
                        "text": "Frederick Douglass",
                        "isCorrect": false,
                        "rationale": "Frederick Douglass was a 19th-century abolitionist who died decades before the Montgomery boycott."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-22",
                "question": "In the context of civil rights, what is 'de jure segregation'?",
                "options": [
                    {
                        "label": "A",
                        "text": "Segregation that happens naturally due to neighborhood housing patterns.",
                        "isCorrect": false,
                        "rationale": "This describes 'de facto' segregation, which results from private choices or social conditions rather than law."
                    },
                    {
                        "label": "B",
                        "text": "Segregation that results from government laws or policies.",
                        "isCorrect": true,
                        "rationale": "Examples include Jim Crow laws that mandated separate schools and facilities by law."
                    },
                    {
                        "label": "C",
                        "text": "Segregation that only occurs in private businesses.",
                        "isCorrect": false,
                        "rationale": "While it can happen in businesses, the 'de jure' distinction specifically refers to the force of law."
                    },
                    {
                        "label": "D",
                        "text": "The voluntary separation of different religious groups.",
                        "isCorrect": false,
                        "rationale": "Voluntary separation is a private choice, whereas 'de jure' implies legal compulsion by the state."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-23",
                "question": "The Supreme Court case of Dred Scott v. Sandford (1857) ruled that:",
                "options": [
                    {
                        "label": "A",
                        "text": "Slavery was unconstitutional in the territories.",
                        "isCorrect": false,
                        "rationale": "The court actually ruled that Congress could not ban slavery in the territories."
                    },
                    {
                        "label": "B",
                        "text": "Black people, whether enslaved or free, could not be U.S. citizens.",
                        "isCorrect": true,
                        "rationale": "This decision stated that Black people had no rights that White people were bound to respect."
                    },
                    {
                        "label": "C",
                        "text": "The 'separate but equal' doctrine was valid for another fifty years.",
                        "isCorrect": false,
                        "rationale": "This doctrine was established in Plessy v. Ferguson in 1896, not Dred Scott."
                    },
                    {
                        "label": "D",
                        "text": "States could not interfere with federal Fugitive Slave Laws.",
                        "isCorrect": false,
                        "rationale": "While the court supported the rights of enslavers, the core impact was the denial of citizenship to Black people."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-24",
                "question": "What does the Fifteenth Amendment specifically protect?",
                "options": [
                    {
                        "label": "A",
                        "text": "The right to a speedy trial.",
                        "isCorrect": false,
                        "rationale": "The Sixth Amendment protects the right to a speedy and public trial."
                    },
                    {
                        "label": "B",
                        "text": "The right to vote regardless of race, color, or previous condition of servitude.",
                        "isCorrect": true,
                        "rationale": "Ratified in 1870, it aimed to guarantee voting rights for Black men."
                    },
                    {
                        "label": "C",
                        "text": "The right of women to serve on juries.",
                        "isCorrect": false,
                        "rationale": "This right was secured much later through different legal challenges."
                    },
                    {
                        "label": "D",
                        "text": "The right of states to determine their own voting ages.",
                        "isCorrect": false,
                        "rationale": "The amendment restricts states by prohibiting racial discrimination in voting."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-1-25",
                "question": "What term specifically refers to practices, policies, and procedures that deny equal treatment to individuals or groups based on their gender?",
                "options": [
                    {
                        "label": "A",
                        "text": "Sexual harassment",
                        "isCorrect": false,
                        "rationale": "Sexual harassment is a specific form of discrimination involving unwelcome advances, but the broader term covers all unequal treatments."
                    },
                    {
                        "label": "B",
                        "text": "Gender discrimination",
                        "isCorrect": true,
                        "rationale": "This encompasses any institutional or individual practice that treats people unequally based on sex or gender."
                    },
                    {
                        "label": "C",
                        "text": "Women's suffrage",
                        "isCorrect": false,
                        "rationale": "Women's suffrage refers specifically to the right to vote, which is one part of the broader fight against discrimination."
                    },
                    {
                        "label": "D",
                        "text": "The gender wage gap",
                        "isCorrect": false,
                        "rationale": "This is an outcome of discrimination (unequal pay), but not the definition of the practices themselves."
                    }
                ],
                "correctAnswer": "B"
            }
        ],
        "Level 2": [
            {
                "id": "Civ-2-1",
                "question": "How does the text distinguish between civil liberties and civil rights?",
                "options": [
                    {
                        "label": "A",
                        "text": "Civil liberties are limitations on government power, while civil rights are guarantees of equal treatment by the government.",
                        "isCorrect": true,
                        "rationale": "Civil liberties protect fundamental freedoms by restricting government action, whereas civil rights require government action to ensure equality for historically marginalized groups."
                    },
                    {
                        "label": "B",
                        "text": "Civil liberties apply only to the federal government, while civil rights apply only to state governments.",
                        "isCorrect": false,
                        "rationale": "Both sets of protections apply across various levels of government through the Fifth and Fourteenth Amendments."
                    },
                    {
                        "label": "C",
                        "text": "Civil liberties focus on economic equality, while civil rights focus on political participation.",
                        "isCorrect": false,
                        "rationale": "Civil liberties are primarily about individual freedoms like speech and religion, not strictly economic status."
                    },
                    {
                        "label": "D",
                        "text": "Civil liberties are granted by the states, while civil rights are inherent and unchangeable.",
                        "isCorrect": false,
                        "rationale": "The source material defines both as constitutional concepts, with liberties acting as 'restraints' and rights as 'guarantees'."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-4",
                "question": "Which clause of the Fourteenth Amendment was used by the Supreme Court in Brown v. Board of Education to strike down public school segregation?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Citizenship Clause",
                        "isCorrect": false,
                        "rationale": "While it defines who is a citizen, it does not specifically address the equal treatment of those citizens in public facilities."
                    },
                    {
                        "label": "B",
                        "text": "The Due Process Clause",
                        "isCorrect": false,
                        "rationale": "This clause generally relates to legal procedures and fundamental fairness rather than group equality."
                    },
                    {
                        "label": "C",
                        "text": "The Equal Protection Clause",
                        "isCorrect": true,
                        "rationale": "The Court ruled that segregated schools inherently provided unequal treatment, violating the requirement that states treat all residents equally."
                    },
                    {
                        "label": "D",
                        "text": "The Privileges or Immunities Clause",
                        "isCorrect": false,
                        "rationale": "This clause was largely rendered ineffective by early court decisions and was not the basis for the Brown ruling."
                    }
                ],
                "correctAnswer": "C"
            },
            {
                "id": "Civ-2-5",
                "question": "What was the primary purpose of 'Black codes' passed in southern states after the Civil War?",
                "options": [
                    {
                        "label": "A",
                        "text": "To integrate African Americans into the political system.",
                        "isCorrect": false,
                        "rationale": "The codes were designed to exclude African Americans from political life, not integrate them."
                    },
                    {
                        "label": "B",
                        "text": "To reduce formerly enslaved people to the status of indentured servants or serfs.",
                        "isCorrect": true,
                        "rationale": "These laws used vagrancy and labor contracts to maintain a system of control and forced labor similar to slavery."
                    },
                    {
                        "label": "C",
                        "text": "To provide educational funding for freedmen's schools.",
                        "isCorrect": false,
                        "rationale": "Black codes specifically excluded Black people from public schools and resources."
                    },
                    {
                        "label": "D",
                        "text": "To enforce the provisions of the Thirteenth Amendment.",
                        "isCorrect": false,
                        "rationale": "Black codes were an attempt to circumvent the Thirteenth Amendment."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-6",
                "question": "Which Supreme Court case established the 'separate but equal' doctrine, allowing state-sponsored segregation to flourish for decades?",
                "options": [
                    {
                        "label": "A",
                        "text": "Dred Scott v. Sandford",
                        "isCorrect": false,
                        "rationale": "This case occurred before the Civil War and focused on the citizenship status of enslaved people."
                    },
                    {
                        "label": "B",
                        "text": "Plessy v. Ferguson",
                        "isCorrect": true,
                        "rationale": "The Court ruled in 1896 that segregated facilities did not violate the Fourteenth Amendment as long as they were nominally equal."
                    },
                    {
                        "label": "C",
                        "text": "Bolling v. Sharpe",
                        "isCorrect": false,
                        "rationale": "This case dealt with school segregation in Washington D.C. and was decided alongside Brown v. Board of Education."
                    },
                    {
                        "label": "D",
                        "text": "Shelby County v. Holder",
                        "isCorrect": false,
                        "rationale": "This is a modern case that dealt with the Voting Rights Act of 1965."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-7",
                "question": "How did the 'grandfather clause' facilitate disenfranchisement while protecting poor white voters?",
                "options": [
                    {
                        "label": "A",
                        "text": "It allowed those whose ancestors could vote before the Civil War to avoid literacy tests.",
                        "isCorrect": true,
                        "rationale": "Because African Americans were enslaved and could not vote before the war, they were forced to take the tests, while illiterate whites were exempted."
                    },
                    {
                        "label": "B",
                        "text": "It provided a tax credit for elderly voters to pay their poll taxes.",
                        "isCorrect": false,
                        "rationale": "The clause specifically targeted literacy requirements, not the financial burden of poll taxes."
                    },
                    {
                        "label": "C",
                        "text": "It required all voters to prove they were at least two generations removed from slavery.",
                        "isCorrect": false,
                        "rationale": "This would have disenfranchised the very white voters the states were trying to protect."
                    },
                    {
                        "label": "D",
                        "text": "It limited the right to vote to individuals who owned land passed down through their families.",
                        "isCorrect": false,
                        "rationale": "The grandfather clause was based on previous voting status, not property ownership."
                    }
                ],
                "correctAnswer": "A"
            },
            {
                "id": "Civ-2-8",
                "question": "What was the significance of the 1954 Brown v. Board of Education decision regarding the Plessy v. Ferguson precedent?",
                "options": [
                    {
                        "label": "A",
                        "text": "It upheld Plessy but required that facilities be truly equal.",
                        "isCorrect": false,
                        "rationale": "The Brown decision explicitly rejected the logic of Plessy rather than trying to fix it."
                    },
                    {
                        "label": "B",
                        "text": "It overturned Plessy as it applied to public education, stating that separate facilities are inherently unequal.",
                        "isCorrect": true,
                        "rationale": "The Court found that segregation created a sense of inferiority that could not be remedied by 'equal' funding."
                    },
                    {
                        "label": "C",
                        "text": "It ruled that segregation was only allowed if approved by a majority of local voters.",
                        "isCorrect": false,
                        "rationale": "The ruling declared segregation unconstitutional regardless of local popularity."
                    },
                    {
                        "label": "D",
                        "text": "It delayed integration by another fifty years to allow states to adjust.",
                        "isCorrect": false,
                        "rationale": "While integration was slow, the legal principle of 'separate but equal' was ended immediately."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-10",
                "question": "What is the difference between de jure segregation and de facto segregation?",
                "options": [
                    {
                        "label": "A",
                        "text": "De jure is based on private choices, while de facto is mandated by law.",
                        "isCorrect": false,
                        "rationale": "This reverses the definitions; de jure is the legally mandated form."
                    },
                    {
                        "label": "B",
                        "text": "De jure segregation results from government laws, while de facto segregation results from private individual choices or social patterns.",
                        "isCorrect": true,
                        "rationale": "Jim Crow laws are de jure, whereas segregated neighborhoods based on personal preference are de facto."
                    },
                    {
                        "label": "C",
                        "text": "De jure segregation applies to schools, while de facto applies to employment.",
                        "isCorrect": false,
                        "rationale": "Both types can exist in any sector of society; the difference is the source."
                    },
                    {
                        "label": "D",
                        "text": "De jure was made legal by Brown v. Board, while de facto was banned.",
                        "isCorrect": false,
                        "rationale": "Brown v. Board banned de jure segregation in public schools."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-13",
                "question": "Who were the primary organizers of the 1848 Seneca Falls Convention?",
                "options": [
                    {
                        "label": "A",
                        "text": "Susan B. Anthony and Alice Paul",
                        "isCorrect": false,
                        "rationale": "Susan B. Anthony became a leader later, and Alice Paul was part of the 20th-century movement."
                    },
                    {
                        "label": "B",
                        "text": "Elizabeth Cady Stanton and Lucretia Mott",
                        "isCorrect": true,
                        "rationale": "They organized the convention after being denied the right to speak at an anti-slavery convention in London."
                    },
                    {
                        "label": "C",
                        "text": "Sojourner Truth and Harriet Tubman",
                        "isCorrect": false,
                        "rationale": "While influential abolitionists, they were not the lead organizers of this specific convention."
                    },
                    {
                        "label": "D",
                        "text": "Abigail Adams and Martha Washington",
                        "isCorrect": false,
                        "rationale": "These women were influential in the Revolutionary era, long before the 1848 convention."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-14",
                "question": "Which document, modeled after the Declaration of Independence, was adopted at the Seneca Falls Convention?",
                "options": [
                    {
                        "label": "A",
                        "text": "The Bill of Rights for Women",
                        "isCorrect": false,
                        "rationale": "This is not the historical name of the document produced at the convention."
                    },
                    {
                        "label": "B",
                        "text": "The Declaration of Sentiments",
                        "isCorrect": true,
                        "rationale": "The document famously stated that 'all men and women are created equal'."
                    },
                    {
                        "label": "C",
                        "text": "The Equal Rights Amendment",
                        "isCorrect": false,
                        "rationale": "The ERA was a proposed constitutional amendment that came much later in the 1920s."
                    },
                    {
                        "label": "D",
                        "text": "The Suffrage Manifesto",
                        "isCorrect": false,
                        "rationale": "This term is not used in the source material."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-15",
                "question": "What was the result of Susan B. Anthony's attempt to vote in her hometown in 1872?",
                "options": [
                    {
                        "label": "A",
                        "text": "She was granted a special exemption by the governor.",
                        "isCorrect": false,
                        "rationale": "No such exemption was granted; her act was treated as a crime."
                    },
                    {
                        "label": "B",
                        "text": "She was arrested, convicted, and fined, which she refused to pay.",
                        "isCorrect": true,
                        "rationale": "Anthony used the arrest and trial as an act of civil disobedience to publicize the cause of women's suffrage."
                    },
                    {
                        "label": "C",
                        "text": "Her vote was counted because she owned property.",
                        "isCorrect": false,
                        "rationale": "Even property-owning women were denied the right to vote in most states at that time."
                    },
                    {
                        "label": "D",
                        "text": "She was deported to London as an 'agitator'.",
                        "isCorrect": false,
                        "rationale": "She was a U.S. citizen and was tried within the American legal system."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-17",
                "question": "The Nineteenth Amendment, ratified in 1920, guarantees what right?",
                "options": [
                    {
                        "label": "A",
                        "text": "The right to equal pay for equal work.",
                        "isCorrect": false,
                        "rationale": "This right is addressed by the Equal Pay Act of 1963, not the Nineteenth Amendment."
                    },
                    {
                        "label": "B",
                        "text": "The right of citizens to vote shall not be denied or abridged on account of sex.",
                        "isCorrect": true,
                        "rationale": "This amendment ended the legal exclusion of women from the polling place nationwide."
                    },
                    {
                        "label": "C",
                        "text": "The right to attend any public university.",
                        "isCorrect": false,
                        "rationale": "Title IX addresses discrimination in education, but is a statute rather than an amendment."
                    },
                    {
                        "label": "D",
                        "text": "The right to hold any political office.",
                        "isCorrect": false,
                        "rationale": "While it allowed women to vote, the amendment focuses explicitly on the act of voting."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-21",
                "question": "In the context of the 1960s civil rights movement, what is 'civil disobedience'?",
                "options": [
                    {
                        "label": "A",
                        "text": "The use of violent force to overthrow an unjust government.",
                        "isCorrect": false,
                        "rationale": "Civil disobedience is rooted in non-violence and the willingness to accept legal consequences."
                    },
                    {
                        "label": "B",
                        "text": "The intentional, non-violent refusal to obey an unjust law to draw attention to its unfairness.",
                        "isCorrect": true,
                        "rationale": "Examples include Rosa Parks refusing to move on the bus or sit-ins at lunch counters."
                    },
                    {
                        "label": "C",
                        "text": "Writing letters to Congress to ask for a change in the law.",
                        "isCorrect": false,
                        "rationale": "This is a form of lobbying, which is legal and not 'disobedient'."
                    },
                    {
                        "label": "D",
                        "text": "Filing a lawsuit in federal court to challenge a law's constitutionality.",
                        "isCorrect": false,
                        "rationale": "Litigation follows legal procedures and is not a form of disobedience."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-22",
                "question": "Which amendment ended slavery in the United States?",
                "options": [
                    {
                        "label": "A",
                        "text": "Twelfth Amendment",
                        "isCorrect": false,
                        "rationale": "The Twelfth Amendment deals with the Electoral College."
                    },
                    {
                        "label": "B",
                        "text": "Thirteenth Amendment",
                        "isCorrect": true,
                        "rationale": "Ratified in 1865, it formally abolished slavery and involuntary servitude."
                    },
                    {
                        "label": "C",
                        "text": "Fourteenth Amendment",
                        "isCorrect": false,
                        "rationale": "The Fourteenth Amendment focuses on citizenship and equal protection."
                    },
                    {
                        "label": "D",
                        "text": "Fifteenth Amendment",
                        "isCorrect": false,
                        "rationale": "The Fifteenth Amendment protects the right to vote regardless of race."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-23",
                "question": "What did the Citizenship Clause of the Fourteenth Amendment establish?",
                "options": [
                    {
                        "label": "A",
                        "text": "That only white people could be citizens.",
                        "isCorrect": false,
                        "rationale": "This was the ruling in Dred Scott that the Fourteenth Amendment reversed."
                    },
                    {
                        "label": "B",
                        "text": "That all persons born or naturalized in the United States are citizens of the United States and the state where they reside.",
                        "isCorrect": true,
                        "rationale": "This guaranteed that race could not be a barrier to citizenship for anyone born on U.S. soil."
                    },
                    {
                        "label": "C",
                        "text": "That people must pass a test to become citizens.",
                        "isCorrect": false,
                        "rationale": "While naturalization has requirements, birthright citizenship is automatic."
                    },
                    {
                        "label": "D",
                        "text": "That citizenship is a privilege that can be revoked by the governor.",
                        "isCorrect": false,
                        "rationale": "The clause defines citizenship as a right, limiting the power of states to deny it."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-24",
                "question": "How did the 'white primary' disenfranchise African Americans even if they were registered to vote?",
                "options": [
                    {
                        "label": "A",
                        "text": "It required them to pay a higher fee than white voters in the primary.",
                        "isCorrect": false,
                        "rationale": "This would be a poll tax, but the white primary functioned by total exclusion."
                    },
                    {
                        "label": "B",
                        "text": "It excluded non-white voters from the Democratic primary, which effectively determined the winner in the one-party South.",
                        "isCorrect": true,
                        "rationale": "Because the Democratic nominee always won the general election, being barred from the primary meant having no say."
                    },
                    {
                        "label": "C",
                        "text": "It forced them to vote for the Republican candidate.",
                        "isCorrect": false,
                        "rationale": "The white primary simply prevented them from participating in the most important election."
                    },
                    {
                        "label": "D",
                        "text": "It only allowed those who had a college degree to vote in the primary.",
                        "isCorrect": false,
                        "rationale": "The exclusion was based on race."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-25",
                "question": "What was the goal of the 'Little Rock Nine' in 1957?",
                "options": [
                    {
                        "label": "A",
                        "text": "To protest the lack of voting rights in Arkansas.",
                        "isCorrect": false,
                        "rationale": "Their struggle was specifically about education and school integration."
                    },
                    {
                        "label": "B",
                        "text": "To integrate Central High School following the Brown v. Board ruling.",
                        "isCorrect": true,
                        "rationale": "They were the first African American students to attend the school, requiring federal troop protection."
                    },
                    {
                        "label": "C",
                        "text": "To start a new political party for African Americans.",
                        "isCorrect": false,
                        "rationale": "They were high school students focused on accessing their right to an integrated education."
                    },
                    {
                        "label": "D",
                        "text": "To boycott the local bus system in Little Rock.",
                        "isCorrect": false,
                        "rationale": "The bus boycott was in Montgomery, Alabama."
                    }
                ],
                "correctAnswer": "B"
            },
            {
                "id": "Civ-2-26",
                "question": "The Civil Rights Act of 1964 prohibited discrimination based on which characteristics?",
                "options": [
                    {
                        "label": "A",
                        "text": "Race, color, religion, and age.",
                        "isCorrect": false,
                        "rationale": "Age was not part of the original 1964 Act."
                    },
                    {
                        "label": "B",
                        "text": "Race, color, religion, sex, or national origin.",
                        "isCorrect": true,
                        "rationale": "These are the protected classes established in the landmark legislation for employment and public accommodations."
                    },
                    {
                        "label": "C",
                        "text": "Socioeconomic status and political affiliation.",
                        "isCorrect": false,
                        "rationale": "The act does not explicitly protect based on income or party."
                    },
                    {
                        "label": "D",
                        "text": "Weight, height, and athletic ability.",
                        "isCorrect": false,
                        "rationale": "These are not protected classes under the Civil Rights Act of 1964."
                    }
                ],
                "correctAnswer": "B"
            }
        ]
    }
};
