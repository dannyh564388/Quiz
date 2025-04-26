// questions.js
// Holds all question banks for each section.
const quizData = {
  resistance: [
    {
      question: "According to the sources, what is the primary result of neural adaptations and increased muscle fiber size in resistance training?",
      options: [
        "Increased muscular endurance",
        "Increased muscle power",
        "Increased muscle flexibility",
        "Increase in the maximum force-producing capacity of muscle"
      ],
      answer: 3
    },
    {
      question: "Which component of muscle performance is defined as the work produced by a muscle per unit of time?",
      options: [
        "Strength",
        "Endurance",
        "Power",
        "Flexibility"
      ],
      answer: 2
    },
    {
      question: "The principle of Specificity of Training suggests that adaptive effects, such as improvements in strength or endurance, are highly specific to the training method employed. This includes incorporating the optimal:",
      options: [
        "Patient's age and gender",
        "Rest intervals between sets",
        "Equipment cost and availability",
        "Mode and velocity of exercise, patient or joint position, and movement patterns"
      ],
      answer: 3
    },
    {
      question: "The Transfer of Training effect, described in the sources, occurs on a very limited basis with respect to which two factors?",
      options: [
        "Frequency and duration",
        "Intensity and volume",
        "Velocity of training and the type or mode of exercise",
        "Periodization and integration of function"
      ],
      answer: 2
    },
    {
      question: "Adaptations of connective tissues, such as tendons and ligaments, to resistance exercise primarily result in:",
      options: [
        "Decreased vascularity",
        "Decreased mitochondrial density",
        "Increased tensile strength",
        "Increased hyperplasia"
      ],
      answer: 2
    },
    {
      question: "Which determinant of resistance exercise refers to the total number of repetitions and sets in an exercise session?",
      options: [
        "Intensity",
        "Frequency",
        "Duration",
        "Volume"
      ],
      answer: 3
    },
    {
      question: "For healthy but untrained adults, a typical training zone for intensity usually falls between what percentage of the baseline 1-RM?",
      options: [
        "10% and 30%",
        "30% and 40%",
        "40% and 70%",
        "80% and 100%"
      ],
      answer: 2
    },
    {
      question: "Training to improve muscle endurance involves performing many repetitions against a submaximal load. According to the sources, this can be initiated very early in a rehabilitation program with minimal risk of injury to healing tissues because:",
      options: [
        "It primarily targets Type IIX muscle fibers",
        "It is performed against very low levels of resistance",
        "It maximizes eccentric muscle contraction efficiency",
        "It requires high levels of neuromuscular control"
      ],
      answer: 1
    },
    {
      question: "Which of the following is listed as a contraindication for resistance exercise in the sources?",
      options: [
        "Mild pain",
        "Mild swelling",
        "Severe cardiopulmonary disease",
        "Muscle fatigue"
      ],
      answer: 2
    },
    {
      question: "Manual Resistance Exercise is most effective during the early stages of rehabilitation when muscles are weak, specifically listed as an MMT grade of:",
      options: [
        "3/5 or less",
        "4/5 or less",
        "5/5 or less",
        "Any grade"
      ],
      answer: 1
    },
    {
      question: "A key advantage of Manual Resistance Exercise is that the resistance can be adjusted throughout the ROM as the therapist responds to the patient's effort or a painful arc, and the muscle works maximally at all portions of the ROM. However, a key disadvantage is:",
      options: [
        "It cannot be used for static strengthening.",
        "It requires mechanical equipment.",
        "The exercise load is subjective and cannot be measured quantitatively.",
        "It is not effective for weak muscle groups."
      ],
      answer: 2
    },
    {
      question: "When applying manual resistance for an eccentric contraction, what is the recommended verbal command?",
      options: [
        "Hold",
        "Push",
        "Don't let me move you",
        "Slowly let go as I push or pull you"
      ],
      answer: 3
    },
    {
      question: "Proprioceptive Neuromuscular Facilitation (PNF) techniques are described as functionally based diagonal patterns of movement with techniques of neuromuscular facilitation. A key principle is Normal Timing, which means movements should typically occur with contractions in which direction?",
      options: [
        "Proximal to distal",
        "Medial to lateral",
        "Lateral to medial",
        "Distal to proximal"
      ],
      answer: 3
    },
    {
      question: "What is a significant advantage of Mechanical Resistance Exercise, particularly in intermediate and advanced phases of rehabilitation?",
      options: [
        "It allows for more finely graded resistance than manual resistance.",
        "It establishes a quantitative baseline measurement of muscle performance.",
        "It automatically accommodates for a painful arc of motion.",
        "It requires no patient education for home use."
      ],
      answer: 1
    },
    {
      question: "A key advantage of using elastic resistance devices for a home exercise program is that they are:",
      options: [
        "Not gravity dependent",
        "Automatically accommodate for a painful arc",
        "Portable and relatively inexpensive",
        "Provide quantitative measurement of resistance"
      ],
      answer: 2
    },
    {
      question: "A significant drawback to using elastic resistance is the difficulty in quantitatively determining the resistance level for each color-coded grade, making it hard to know which grade to select initially and how changing the grade alters resistance. Another disadvantage mentioned is:",
      options: [
        "They cannot be used for high-velocity training.",
        "They require the therapist's constant supervision.",
        "Some products contain latex, a common allergen.",
        "They only provide constant resistance."
      ],
      answer: 2
    },
    {
      question: "According to the sources, for healthy adults aged <50-60 performing resistance training, what is the recommended intensity range?",
      options: [
        "Low intensity (30% to 40% of 1-RM)",
        "Very high intensity (>80% of 1-RM)",
        "Moderate-intensity (60% to 80% of 1-RM)",
        "Any intensity that causes fatigue after 20 repetitions"
      ],
      answer: 2
    },
    {
      question: "When training children aged 6-17 with resistance exercise, a specific precaution is to avoid using near-maximal or maximal exercise loads and participating in power lifting or body building until:",
      options: [
        "They demonstrate proper form",
        "They reach a specific chronological age (e.g., 18)",
        "They can complete 15 repetitions comfortably",
        "Physical and skeletal maturity has been reached"
      ],
      answer: 3
    },
    {
      question: "The Progressive Resistance Exercise (PRE) system is described as applying a constant external load incrementally increased over time. The amount of resistance is based on:",
      options: [
        "Patient's perceived exertion (RPE)",
        "The strength of the therapist",
        "The Repetition Maximum (RM)",
        "Time under tension"
      ],
      answer: 2
    },
    {
      question: "A key advantage of variable-resistance weight machines is that the resistance is adjusted in an attempt to match a muscle's torque-generating capabilities throughout the ROM. However, a disadvantage is that most machines typically only allow:",
      options: [
        "Closed-chain movements",
        "Single-plane movements",
        "Exercises for multiple muscle groups simultaneously",
        "High-velocity training"
      ],
      answer: 1
    }
  ],

  soft: [
    {
      question: "According to the sources, what term describes a severe stress, stretch, or tear of soft tissues like a joint capsule, ligament, tendon, or muscle?",
      options: [
        "Strain",
        "Subluxation",
        "Dislocation",
        "Sprain"
      ],
      answer: 3
    },
    {
      question: "Which term is used to describe degeneration of a tendon caused by repetitive microtrauma?",
      options: [
        "Tendinitis",
        "Tenosynovitis",
        "Tenovaginitis",
        "Tendinosis"
      ],
      answer: 3
    },
    {
      question: "A Grade 1 (first degree) tissue injury is characterized by:",
      options: [
        "Moderate pain requiring stopping activity",
        "Partial tear of tissue fibers",
        "Full tear of tissue fibers",
        "Mild pain at the time of injury and local tenderness"
      ],
      answer: 3
    },
    {
      question: "In the stages of tissue healing, the Acute Stage (Inflammation) lasts approximately:",
      options: [
        "2-6 weeks",
        "3-6 weeks and beyond",
        "10-14 days",
        "4-6 days"
      ],
      answer: 3
    },
    {
      question: "During the Maximum Protection Phase (Phase I) of soft tissue management, which of the following is listed as the MOST IMPORTANT?",
      options: [
        "Initiation of active exercises",
        "Progression of stretching",
        "Return to high-demand activities",
        "Protection of the Injured Tissue"
      ],
      answer: 3
    },
    {
      question: "The Subacute Stage of tissue healing, characterized by Proliferation, Repair, and Healing, lasts approximately:",
      options: [
        "4-6 days",
        "2-6 weeks post injury",
        "3-6 weeks and beyond",
        "12-18 months"
      ],
      answer: 1
    },
    {
      question: "During the Moderate Protection/Controlled Motion Phase (Phase II), inflammation begins to decrease and repair starts. Criteria for progression to this phase include:",
      options: [
        "Return to high-demand activities",
        "Little or no protection required for operated tissues",
        "No pain at rest",
        "Complete healing of the tissue"
      ],
      answer: 2
    },
    {
      question: "The Chronic Stage of tissue healing, characterized by Maturation and Remodeling, typically begins:",
      options: [
        "4-6 days post injury",
        "Approx 2-6 weeks post injury",
        "3-6 weeks and beyond",
        "12-18 months"
      ],
      answer: 2
    },
    {
      question: "In the Minimum to No Protection/Return to Function Phase (Phase III), which coincides with the Maturation and Remodeling stage, what can continue for 12-18 months?",
      options: [
        "Maximum pain at rest",
        "Complete tissue tears",
        "Inflammation",
        "Maturation of Tissue"
      ],
      answer: 3
    },
    {
      question: "According to the sources, Cumulative Trauma: Chronic Recurring Pain can be caused by:",
      options: [
        "Acute, one-time injury",
        "Overuse, cumulative trauma, repetitive strain",
        "Appropriate tissue healing",
        "Timely return to function"
      ],
      answer: 1
    },
    {
      question: "For Chronic Pain Syndrome, management approaches listed include medical, psychological, and behavioral interventions. Patient education should involve helping patients understand that they are not causing continued tissue injury while being active and experiencing positive outcomes that do not worsen their perceived pain. Another key educational concept mentioned is:",
      options: [
        "The importance of complete rest and avoiding activity",
        "How to use imaging to diagnose pain",
        "Central sensitization and its relationship to persistent, chronic pain",
        "The need for increased pain medication"
      ],
      answer: 2
    },
    {
      question: "In managing Chronic Pain Syndrome, a time-contingent approach to physical activity is suggested. This involves emphasizing performing an activity for a specific period regardless of perceived pain, rather than counting repetitions. What is the stated benefit of this approach?",
      options: [
        "It increases pain facilitatory pathways in the brain.",
        "It primarily relies on medication for pain relief.",
        "It has been shown to deactivate the brain’s pain facilitatory pathways.",
        "It encourages activity based solely on pain levels."
      ],
      answer: 2
    },
    {
      question: "According to the sources, Rheumatoid Arthritis (RA) management in the subacute stage includes diminishing intensity of pain, joint swelling, morning stiffness, and systemic effects. Management in the chronic stage focuses on:",
      options: [
        "Aggressive strengthening exercises",
        "High-impact aerobic activity",
        "Joint protection and activity modification",
        "Complete bed rest"
      ],
      answer: 2
    },
    {
      question: "Osteoarthritis (OA) principles of management list pain, joint stiffness, decreased muscle performance, and decreased aerobic capacity affecting quality of life. Patient education for OA should include:",
      options: [
        "Aggressive joint mobilization",
        "Avoiding all physical activity",
        "High-intensity resistance training",
        "Joint protection, managing symptoms, and home exercise program (HEP)"
      ],
      answer: 3
    },
    {
      question: "For Fibromyalgia (FM), chronic widespread pain is characteristic, often with identification of 11 of 18 tender points. People with FM are described as:",
      options: [
        "Having decreased sensitivity to pain",
        "Rarely affected by environmental or emotional stress",
        "Experiencing rapid recovery after trauma",
        "Highly sensitized to pain"
      ],
      answer: 3
    },
    {
      question: "Factors contributing to Fibromyalgia Flares can include:",
      options: [
        "Moderate, rhythmic exercise",
        "Adequate sleep and rest",
        "Avoiding repetitive activities",
        "Environmental stresses like weather changes and physical stresses like prolonged sitting"
      ],
      answer: 3
    },
    {
      question: "For the management of Fibromyalgia, research supports the use of exercise, particularly:",
      options: [
        "High-intensity resistance training",
        "Aerobic exercise",
        "Maximal isometric contractions",
        "Passive stretching"
      ],
      answer: 1
    },
    {
      question: "Myofascial Pain Syndrome (MPS) is described as a chronic, regional pain syndrome characterized by myofascial trigger points (TrPs) in a muscle. The pain from these points is typically described as:",
      options: [
        "Sharp and shooting",
        "Numbness and tingling",
        "Burning and electrical",
        "Dull, aching, and deep"
      ],
      answer: 3
    },
    {
      question: "Potential causes of Myofascial Trigger Points (TrPs) include chronic overload of the muscle, acute overload, poorly conditioned muscles, postural stresses, and poor body mechanics. Which population is specifically mentioned as potentially getting TrPs in upper cross syndrome areas?",
      options: [
        "Elite athletes",
        "Children and older adults",
        "Desk workers",
        "Patients with severe cardiopulmonary disease"
      ],
      answer: 2
    },
    {
      question: "For patients diagnosed with Osteoporosis, diagnosed by a T-score of -2.5 or less on a BMD scan, which type of exercise or activity should be avoided due to the risk of vertebral compression fracture from changes in vertebral body shape leading to kyphosis?",
      options: [
        "Weight-bearing exercises",
        "Resistance exercise within structural capacity",
        "Flexion activities and exercise (e.g., supine curl-ups, sit-ups)",
        "Stretching"
      ],
      answer: 2
    }
  ],

  balance: [
    {
      question: "According to the sources, Balance requires the interaction of which three physiological systems?",
      options: [
        "Muscular, Skeletal, and Nervous",
        "Cardiovascular, Respiratory, and Metabolic",
        "Vestibular, Visual, and Somatosensory",
        "Proprioceptive, Kinesthetic, and Tactile"
      ],
      answer: 2
    },
    {
      question: "Which term describes the perimeter of the contact areas between the body and its support surface?",
      options: [
        "Center of Mass (COM)",
        "Limits of Stability",
        "Base of Support (BOS)",
        "Center of Pressure (COP)"
      ],
      answer: 2
    },
    {
      question: "Limits of stability refers to the sway boundaries that maintain equilibrium without:",
      options: [
        "Activating the vestibular system",
        "Increasing the ground reaction force",
        "Changing the Base of Support (BOS)",
        "Altering the center of pressure"
      ],
      answer: 2
    },
    {
      question: "The Ankle Strategy for balance is primarily used for:",
      options: [
        "Large, rapid perturbations",
        "Medial-lateral balance control",
        "Lowering the body's center of mass",
        "Small perturbations on a firm surface"
      ],
      answer: 3
    },
    {
      question: "Which postural strategy involves shifting weight side-to-side over one leg and primarily uses the hip abductors/adductors and ankle invertors/evertors?",
      options: [
        "Ankle Strategy",
        "Hip Strategy",
        "Stepping Strategy",
        "Weight-Shift Strategy (Lateral Strategy)"
      ],
      answer: 3
    },
    {
      question: "The Suspension Strategy is used to lower the body's center of mass during a perturbation (e.g., crouching slightly). Which muscles are primarily involved in this strategy?",
      options: [
        "Ankle plantarflexors only",
        "Trunk extensors",
        "Quadriceps (eccentric control), hip flexors/extensors, knee extensors, ankle dorsiflexors/plantarflexors",
        "Hip abductors and adductors only"
      ],
      answer: 2
    },
    {
      question: "When considering balance during whole-body lifting, loss of balance is described as more likely to occur if the person:",
      options: [
        "Underestimates the load",
        "Overestimates the load",
        "Overestimates or underestimates the load",
        "Maintains a neutral spine position"
      ],
      answer: 2
    },
    {
      question: "Regarding lifting style and balance, the sources state that loss of balance is more likely with knees:",
      options: [
        "Slightly extended",
        "Fully extended",
        "Flexed",
        "Not mentioned in relation to balance"
      ],
      answer: 2
    },
    {
      question: "The sources mention the Berg Balance Test as an outcome measure useful for:",
      options: [
        "Assessing muscle strength",
        "Determining limits of stability",
        "Management of Impaired Balance",
        "Quantifying aerobic capacity"
      ],
      answer: 2
    },
    {
      question: "Steady-State Static Balance Control training interventions might include:",
      options: [
        "Perturbations",
        "Functional reach tests",
        "Single leg stance",
        "Throwing a ball against a wall"
      ],
      answer: 2
    },
    {
      question: "When you narrow the Base of Support (BOS), the Hip Strategy is described as becoming the primary balance strategy. This statement is:",
      options: [
        "Incorrect, ankle strategy is always primary.",
        "Incorrect, stepping strategy is used.",
        "Correct.",
        "Not mentioned in the sources."
      ],
      answer: 2
    },
    {
      question: "Reactive Balance Control training interventions are aimed at improving responses to unexpected external perturbations. This is like:",
      options: [
        "Lifting a known weight",
        "Standing on a stable surface",
        "Someone pushing you and you react",
        "Walking on a treadmill"
      ],
      answer: 2
    },
    {
      question: "Sensory Reweighting Training is described as helping patients learn how to re-prioritize sensory information for balance control. If you change the flooring surface, you are primarily changing input from which sensory system?",
      options: [
        "Visual",
        "Vestibular",
        "Somatosensory",
        "Auditory"
      ],
      answer: 2
    },
    {
      question: "Closing the eyes during a balance activity primarily changes input from which sensory system, putting more pressure on the somatosensory/vestibular systems?",
      options: [
        "Visual",
        "Vestibular",
        "Somatosensory",
        "Auditory"
      ],
      answer: 0
    }
  ],

  aquatic: [
    {
      question: "According to the sources, the use of water for healing dates back centuries and is increasingly utilized to facilitate therapeutic exercises. Which type of patient is mentioned as benefiting from Aquatic Exercise?",
      options: [
        "Orthopedics",
        "Pediatrics",
        "Neurologic and Cardiopulmonary",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "The definition of Aquatic Exercise provided refers to the use of multi-depth immersion pools or tanks to facilitate various established therapeutic interventions, including:",
      options: [
        "Only cardiovascular exercise",
        "Only joint mobilization",
        "Stretching, strengthening, joint mobilization, balance and gait training, and endurance training",
        "Only functional activity replication"
      ],
      answer: 2
    },
    {
      question: "A key goal or indication for using Aquatic Exercise is to facilitate weight-bearing activities. What property of water provides relative weightlessness and joint unloading?",
      options: [
        "Hydrostatic Pressure",
        "Hydromechanics",
        "Thermodynamics",
        "Buoyancy"
      ],
      answer: 3
    },
    {
      question: "According to the table provided, approximately what percentage of body weight is borne when a person is immersed up to the Xiphoid Process?",
      options: [
        "10%",
        "30%",
        "50%",
        "33%"
      ],
      answer: 3
    },
    {
      question: "According to the table provided, approximately what percentage of body weight is borne when a person is immersed up to the ASIS (Anterior Superior Iliac Spine)?",
      options: [
        "10%",
        "50%",
        "75%",
        "90%"
      ],
      answer: 1
    },
    {
      question: "Which physical property of water states that as the density of water and depth of immersion increase, so does the pressure exerted on immersed objects?",
      options: [
        "Buoyancy",
        "Hydromechanics",
        "Thermodynamics",
        "Hydrostatic Pressure"
      ],
      answer: 3
    },
    {
      question: "In Hydromechanics, what type of flow is described as molecules moving parallel to each other?",
      options: [
        "Turbulent flow",
        "Drag",
        "Laminar flow",
        "Resistance flow"
      ],
      answer: 2
    },
    {
      question: "In aquatic exercise, moving water past the patient requires the patient to work harder due to which hydromechanical component?",
      options: [
        "Buoyancy",
        "Hydrostatic pressure",
        "Laminar flow",
        "Drag"
      ],
      answer: 3
    },
    {
      question: "According to the sources, water temperatures less than what degree Celsius make it difficult to maintain core temperature?",
      options: [
        "25C",
        "30C",
        "33C",
        "37C"
      ],
      answer: 0
    },
    {
      question: "For patients with acute injuries, which may include pain and muscle guarding, water temperatures around 33C are suggested as potentially beneficial for aquatic exercise primarily aimed at:",
      options: [
        "Aerobic conditioning",
        "High-intensity strengthening",
        "Plyometric training",
        "Mobility and Functional Control Exercise"
      ],
      answer: 3
    },
    {
      question: "When using equipment like webbed gloves for upper extremity exercise in the water, they are primarily used to:",
      options: [
        "Increase buoyancy",
        "Increase hydrostatic pressure",
        "Create resistance for arm workouts",
        "Improve balance"
      ],
      answer: 2
    },
    {
      question: "Kickboards are described as versatile tools in aquatic therapy. In addition to providing buoyancy in prone or supine, they can also be used to:",
      options: [
        "Measure hydrostatic pressure",
        "Decrease drag",
        "Create resistance to walking patterns",
        "Warm the water temperature"
      ],
      answer: 2
    },
    {
      question: "When performing Strengthening Exercises in the water without equipment, moving an arm up towards the surface works against gravity and buoyancy, while moving an arm down works against:",
      options: [
        "Hydrostatic pressure only",
        "Gravity only",
        "Resistance (surface tension) and works with gravity",
        "Buoyancy only"
      ],
      answer: 2
    },
    {
      question: "According to the discussion points, aquatic therapy is often considered:",
      options: [
        "A permanent replacement for land-based therapy",
        "The final stage of rehabilitation",
        "Only for patients who cannot tolerate any weight-bearing",
        "Just a start, and patients must progress to land-based therapy"
      ],
      answer: 3
    },
    {
      question: "For Medicare reimbursement, what is a required documentation point mentioned in the sources?",
      options: [
        "Patient's maximum heart rate during exercise",
        "The type of aquatic equipment used",
        "Why a patient can't tolerate land-based therapy",
        "The specific water temperature used"
      ],
      answer: 2
    },
    {
      question: "In Case Study #1, Mike tore his medial meniscus and is 2 weeks post-arthroscopic debridement. The surgeon states he has no limitations except pain. To facilitate ROM and strength in shallow water (4-ft depth), independent exercises might include activities that utilize:",
      options: [
        "Deep water jogging",
        "High-impact plyometrics",
        "Resistance from the water and weight-bearing assistance from buoyancy",
        "Maximal isometric contractions"
      ],
      answer: 2
    },
    {
      question: "In Case Study #1, Mike is anxious to return to basketball. How could aquatics be used to replicate the demands of basketball as he progresses?",
      options: [
        "Static standing only",
        "Slow, linear walking",
        "Incorporating jumping, lateral movements, and quick changes of direction",
        "Resting in the deep end"
      ],
      answer: 2
    },
    {
      question: "In Case Study #1, Mike needs to maintain his cardiovascular fitness while his knee heals. What can he do in the pool for this purpose?",
      options: [
        "Prolonged static stretching",
        "Maximal resistance weight training",
        "Deep water jogging or swimming",
        "Exercises performed only at the surface"
      ],
      answer: 2
    },
    {
      question: "In Case Study #2, Cecily has a calf strain and is 25% weight-bearing with crutches. At what depth of midwater would she need to be to gait train while maintaining approximately 25% weight-bearing?",
      options: [
        "Waist depth",
        "Xiphoid process depth",
        "ASIS depth",
        "Neck depth"
      ],
      answer: 3
    },
    {
      question: "In Case Study #2, Cecily is an elite marathon runner needing to maintain high cardiovascular fitness in deep water. What equipment might be useful for cardiovascular training in the deep water?",
      options: [
        "Weighted vest",
        "Resistance bands anchored to the pool floor",
        "Buoyancy belt or flotation device",
        "Free weights"
      ],
      answer: 2
    }
  ],

  nerve: [
    {
      question: "According to the sources, what structural feature of the nervous system allows mobility without undue stress on the nerve tissue as a joint moves?",
      options: [
        "Complete immobility of the nerve within the tissue bed",
        "Direct attachment of the nerve to bone",
        "The whole peripheral nerve moves and there is movement between connective tissues and neural tissues",
        "High vascularity of the nerve tissue"
      ],
      answer: 2
    },
    {
      question: "Which connective tissue layer surrounding a nerve specifically acts as the primary guard against excessive tension, allowing for 18% to 22% strain before failure?",
      options: [
        "Epineurium",
        "Endoneurium",
        "Mesoneurium",
        "Perineurium"
      ],
      answer: 3
    },
    {
      question: "Symptoms and signs of nerve impairments listed in the sources include:",
      options: [
        "Increased muscle strength and sensation",
        "Joint hypermobility",
        "Significant tissue hypertrophy",
        "Sensory changes or loss and motor weakness in the nerve distribution"
      ],
      answer: 3
    },
    {
      question: "According to the sources, movements of flexion and extension in the spinal canal may decrease space more, eliciting more symptoms related to compression at the nerve roots. This is often associated with pathologies such as:",
      options: [
        "Tendinopathy",
        "Muscle spasm",
        "Degenerative disc disease and degenerative joint disease",
        "Ligamentous sprains"
      ],
      answer: 2
    },
    {
      question: "Which myotome corresponds to Elbow Flexion and Wrist Extension?",
      options: [
        "C5",
        "C6",
        "C7",
        "C8"
      ],
      answer: 1
    },
    {
      question: "Which myotome corresponds to Ankle Dorsiflexion?",
      options: [
        "L3",
        "L4",
        "L5",
        "S1"
      ],
      answer: 1
    },
    {
      question: "Which myotome corresponds to Big Toe Extension?",
      options: [
        "L3",
        "L4",
        "L5",
        "S1"
      ],
      answer: 2
    },
    {
      question: "The Brachial Plexus, formed by nerve roots C5-T1, has primary sites for entrapment listed. Which area is bordered by the anterior and middle scalene muscles and the first rib?",
      options: [
        "Costoclavicular space",
        "Retropectoralis minor space",
        "Guyon's Canal",
        "Interscalene triangle"
      ],
      answer: 3
    },
    {
      question: "Wrist drop, described as the inability to actively extend the wrist and fingers, is a potential result of isolated injury to which nerve?",
      options: [
        "Median nerve",
        "Ulnar nerve",
        "Radial nerve",
        "Sciatic nerve"
      ],
      answer: 2
    },
    {
      question: "Pressure against the common fibular nerve can result in sensory changes and weakness in the muscles of which compartments of the leg?",
      options: [
        "Posterior and medial",
        "Anterior and medial",
        "Anterior and lateral",
        "Posterior and lateral"
      ],
      answer: 2
    },
    {
      question: "Foot drop and unopposed eversion during gait can result from a lesion of which specific nerve?",
      options: [
        "Common fibular nerve",
        "Superficial peroneal nerve",
        "Tibial nerve",
        "Deep peroneal nerve"
      ],
      answer: 3
    },
    {
      question: "Which mechanism of nerve injury involves segmental demyelination and typically results from mild ischemia from nerve compression or traction with recovery usually being complete?",
      options: [
        "Axonotmesis",
        "Neurotmesis",
        "Intraneural pathology",
        "Neuropraxia"
      ],
      answer: 3
    },
    {
      question: "Which nerve injury classification involves loss of axonal continuity but intact connective tissue coverings, with Wallerian degeneration distal to the lesion, muscle fiber atrophy, sensory loss, and incomplete recovery often requiring surgical intervention?",
      options: [
        "Neuropraxia",
        "Axonotmesis",
        "Neurotmesis",
        "Extra neural pathology"
      ],
      answer: 1
    },
    {
      question: "According to the sources, which peripheral nerve has Poor regenerative potential?",
      options: [
        "Radial nerve",
        "Median nerve",
        "Tibial nerve",
        "Fibular nerve"
      ],
      answer: 3
    },
    {
      question: "The Acute phase of nerve injury recovery occurs immediately after injury or surgery. During this phase, the emphasis is on healing and prevention of complications, including pain and edema management, and initiating ROM of uninvolved joints. This phase typically lasts:",
      options: [
        "Several months to a year",
        "Until reinnervation occurs",
        "Several days to 3 weeks",
        "When the potential for reinnervation has peaked"
      ],
      answer: 2
    },
    {
      question: "In the Recovery phase of nerve injury, signs of reinnervation (muscle contraction, increased sensitivity) appear. Management includes motor retraining, desensitization for hypersensitivity, and discriminative sensory re-education. Motor retraining may begin with:",
      options: [
        "Maximal resistance exercises",
        "High-velocity plyometrics",
        "Place-and-hold exercises by positioning the muscle in its shortened position",
        "Ballistic stretching"
      ],
      answer: 2
    },
    {
      question: "Neurodynamic disorders involve impaired nerve mobility. For a test to be considered positive, it must reproduce the patient's symptoms within the nerve distribution, demonstrate side-to-side differences, support other physical findings, and what other key criteria?",
      options: [
        "Imaging must confirm nerve compression.",
        "Symptoms must be relieved by medication.",
        "Sensitizing maneuvers must alter the patient’s symptoms.",
        "There must be complete motor paralysis."
      ],
      answer: 2
    },
    {
      question: "When performing a Neural sliding or flossing technique, as described in the sources, you position the patient at the point of tissue resistance or symptom onset, then move two joints simultaneously so that the neural tissue glides proximally or distally. For the median nerve, an example given is simultaneously performing:",
      options: [
        "Elbow extension with cervical ipsilateral side-bending",
        "Wrist extension with elbow extension",
        "Elbow flexion simultaneously with cervical contralateral side-bending",
        "Shoulder abduction with wrist flexion"
      ],
      answer: 2
    },
    {
      question: "A significant contraindication for nerve mobilization techniques listed in the sources is:",
      options: [
        "Muscle weakness",
        "Sensory changes",
        "Joint stiffness",
        "Cauda equina symptoms related to the spine"
      ],
      answer: 3
    },
    {
      question: "Complex Regional Pain Syndrome (CRPS) type I (RSD) is described as developing after an initiating noxious event that is:",
      options: [
        "A major nerve injury",
        "A complete severance of the nerve",
        "Non nerve origin",
        "Resolved with surgical intervention"
      ],
      answer: 2
    }
  ],

  aerobic: [
    {
      question: "The term Fitness is defined as the ability to perform physical work and requires which of the following?",
      options: [
        "Only muscular strength and endurance",
        "Only cardiorespiratory functioning",
        "Only musculoskeletal flexibility",
        "Cardiorespiratory functioning, muscular strength and endurance, and musculoskeletal flexibility"
      ],
      answer: 3
    },
    {
      question: "Aerobic Exercise Training (Conditioning) is described as augmentation of the energy utilization of the muscle by means of an exercise program. This results in increased levels of oxidative enzymes, increased mitochondrial density and size, and:",
      options: [
        "Decreased muscle fiber capillary supply",
        "Increased Type IIX fiber recruitment",
        "An increased muscle fiber capillary supply",
        "Decreased oxygen delivery"
      ],
      answer: 2
    },
    {
      question: "According to the Adaptation Principle, changes in the cardiovascular and muscular systems due to training typically occur within what timeframe?",
      options: [
        "1-2 weeks",
        "4-6 weeks",
        "10-12 weeks",
        "Several months"
      ],
      answer: 2
    },
    {
      question: "Deconditioning occurs with prolonged bed rest or extended illness. This leads to decreases in muscle mass, strength, and cardiovascular function. What other decrease is specifically listed?",
      options: [
        "Increased VO2max",
        "Increased cardiac output",
        "Increased bone mineral density",
        "Decreased exercise tolerance"
      ],
      answer: 3
    },
    {
      question: "Which Energy System is the major source of energy during the first 30 seconds of intense exercise?",
      options: [
        "Anaerobic Glycolytic System",
        "Aerobic System",
        "Phosphagen, or ATP-PC System",
        "Lactate System"
      ],
      answer: 2
    },
    {
      question: "Which Energy System primarily uses glucose as a fuel source, produces lactic acid, has an intermediate capacity and power, and is a major source of energy from the 30th to 90th second of exercise?",
      options: [
        "Phosphagen, or ATP-PC System",
        "Anaerobic Glycolytic System",
        "Aerobic System",
        "Fat oxidation System"
      ],
      answer: 1
    },
    {
      question: "Which Energy System predominates after the second minute of exercise and uses glycogen, fats, and proteins as fuel sources, requires O₂, has a great max capacity but small max power?",
      options: [
        "Phosphagen, or ATP-PC System",
        "Anaerobic Glycolytic System",
        "Aerobic System",
        "ATP hydrolysis"
      ],
      answer: 2
    },
    {
      question: "Which type of muscle fiber is characterized as Slow twitch fibers (Type I) with a slow contractile response, primarily suited for endurance activities?",
      options: [
        "Type IIX",
        "Type IIA",
        "Type I",
        "Fast Twitch fibers"
      ],
      answer: 2
    },
    {
      question: "Which type of muscle fiber is characterized as Fast Twitch fibers (Type IIA) that can use a mix of anaerobic and aerobic systems?",
      options: [
        "Type I",
        "Type IIX",
        "Type IIA",
        "Slow twitch fibers"
      ],
      answer: 2
    },
    {
      question: "MET is a unit used to quantify energy expenditure. One MET is equal to approximately how many mL of oxygen consumed per kilogram of body weight per minute?",
      options: [
        "1.0 mL/kg/min",
        "3.5 mL/kg/min",
        "6.0 mL/kg/min",
        "8.8 mL/kg/min"
      ],
      answer: 1
    },
    {
      question: "Moderate activity is defined in METs as ranging from:",
      options: [
        "1.0 to 2.9 METs",
        "3.0 to 5.9 METs",
        "6.0 to 8.8 METs",
        "Above 8.8 METs"
      ],
      answer: 1
    },
    {
      question: "During aerobic exercise, the Sympathetic Nervous System response includes generalized peripheral vasoconstriction in non-exercising muscles, increased myocardial contractility, an increased HR, and:",
      options: [
        "Decreased systolic blood pressure",
        "Decreased cardiac output",
        "An increased systolic blood pressure",
        "Increased total peripheral resistance"
      ],
      answer: 2
    },
    {
      question: "During heavy exercise, alveolar ventilation increases significantly (10- to 20-fold) to supply the additional oxygen needed and excrete the excess CO₂ produced. This occurs with the diffusion of gases across the:",
      options: [
        "Cell membrane",
        "Synaptic cleft",
        "Capillary-alveolar membrane",
        "Myocardial membrane"
      ],
      answer: 2
    },
    {
      question: "For individuals who are less physically active, which fitness test is suggested as appropriate?",
      options: [
        "1.5 mile run",
        "12 min distance run",
        "Bruce Protocol",
        "1-mile walk test, 6-minute walk test, and step tests"
      ],
      answer: 3
    },
    {
      question: "A primary purpose of Stress Testing is to evaluate Cardiovascular functional capacity. Another purpose listed is:",
      options: [
        "To diagnose musculoskeletal injury",
        "To measure bone mineral density",
        "To determine physical work capacity",
        "To assess nerve conduction velocity"
      ],
      answer: 2
    },
    {
      question: "During stress testing and exercise, monitoring is important. A normal increase in heart rate with exercise is approximately how many beats per minute per MET of physical activity?",
      options: [
        "1-2 beats per minute",
        "4-6 beats per minute",
        "8-12 beats per minute",
        "15-20 beats per minute"
      ],
      answer: 2
    },
    {
      question: "A normal increase in blood pressure (systolic) with exercise is approximately how many mmHg per MET of physical activity?",
      options: [
        "1-2 mmHg",
        "4-6 mmHg",
        "8-12 mmHg",
        "15-20 mmHg"
      ],
      answer: 2
    },
    {
      question: "What is listed as a reason to Terminate Stress Testing?",
      options: [
        "Reaching target heart rate",
        "Completing the planned duration",
        "Slight increase in heart rate and blood pressure",
        "Progressive angina"
      ],
      answer: 3
    },
    {
      question: "According to the sources, for Cardiovascular changes to occur from aerobic training, what is the general optimal frequency recommended?",
      options: [
        "1-2 times a week",
        "3-4 times a week",
        "5-6 times a week",
        "Daily"
      ],
      answer: 1
    },
    {
      question: "Detraining from aerobic exercise occurs rapidly when a person stops training. The sources state that only how many weeks are sufficient to lose progress?",
      options: [
        "1 week",
        "2 weeks",
        "4 weeks",
        "6 weeks"
      ],
      answer: 1
    }
  ],

  postsurgical: [
    {
      question: "Which of the following is listed as an indication for surgical intervention?",
      options: [
        "Mild pain with functional activities",
        "Slight limitation of motion",
        "Incapacitating pain at rest with functional activities",
        "Minimal tissue damage"
      ],
      answer: 2
    },
    {
      question: "A key benefit of preoperative contact with a patient is establishing a baseline for documenting postoperative improvement. Another benefit mentioned is:",
      options: [
        "Prescribing post-operative pain medication",
        "Performing the surgical procedure early",
        "Patient education about the scheduling surgery and components of postoperative rehabilitation",
        "Discouraging the patient from having surgery"
      ],
      answer: 2
    },
    {
      question: "Preoperative examination and evaluation should assess various factors to establish a baseline. Which of the following is listed as a component?",
      options: [
        "Scar tissue mobility",
        "Deep vein thrombosis risk",
        "Gait Analysis",
        "Nerve regeneration potential"
      ],
      answer: 2
    },
    {
      question: "According to the sources, should progression through the phases of postoperative rehabilitation be based solely on time or on the patient's attainment of predetermined criteria?",
      options: [
        "Solely on time",
        "Solely on predetermined criteria",
        "Ideally on criterion-based progression, but published guidelines are often time-based",
        "It is not discussed in the sources"
      ],
      answer: 2
    },
    {
      question: "The Maximum Protection phase of post-op rehab is the initial period where there is a high likelihood of tissue inflammation and pain. Immobilization may be required. This phase typically lasts:",
      options: [
        "Several days to 3 weeks",
        "2-6 weeks",
        "Typically a month to 6 weeks",
        "6-12 weeks"
      ],
      answer: 2
    },
    {
      question: "The Moderate Protection/Controlled Motion Phase is the intermediate phase of post-op rehab. Inflammation has subsided, and tissues can withstand gradual increases in stress. This phase typically lasts:",
      options: [
        "A month to 6 weeks post-op",
        "4-6 weeks post-op till an additional 4-6 weeks",
        "6-12 weeks post-op",
        "6 months post-op or beyond"
      ],
      answer: 1
    },
    {
      question: "Which of the following is listed as a criterion for progression from the Maximum Protection phase to the Moderate Protection phase?",
      options: [
        "Full or almost full pain free AROM",
        "Little or no protection of operated tissues required",
        "Ability to return to high-demand activities",
        "No pain at rest"
      ],
      answer: 3
    },
    {
      question: "The Minimum Protection/Return to Function Phase is the advanced phase where little or no protection of operated tissues is required. This phase typically lasts:",
      options: [
        "Initial period up to 6 weeks post-op",
        "4-6 weeks post-op till an additional 4-6 weeks",
        "6-12 weeks post-op till 6 months post-op or beyond",
        "12-18 months post-op"
      ],
      answer: 2
    },
    {
      question: "Which of the following is listed as a potential postoperative complication?",
      options: [
        "Increased muscle strength",
        "Full range of motion",
        "Restricted motion from adhesions and scar tissue formation",
        "Decreased pain"
      ],
      answer: 2
    },
    {
      question: "To reduce the risk of pulmonary complications postoperatively, interventions such as deep breathing exercises and early standing and ambulation are suggested. To reduce the risk of Deep Vein Thrombosis (DVT), what is recommended?",
      options: [
        "Avoiding all movement",
        "High-intensity exercise",
        "Static stretching",
        "Ankle pumps performed at regular intervals"
      ],
      answer: 3
    },
    {
      question: "Which of the following is listed as a triggering factor for Deep Vein Thrombosis (DVT)?",
      options: [
        "Light exercise",
        "Early mobilization",
        "Immobilization",
        "Moderate activity"
      ],
      answer: 2
    },
    {
      question: "The use of a patient's own tissue from a donor site in the body for a surgical procedure is called a(n):",
      options: [
        "Allograft",
        "Synthetic graft",
        "Autograft",
        "Xenograft"
      ],
      answer: 2
    },
    {
      question: "For a Muscle Repair, where the muscle is sutured and immobilized in a shortened position, what type of exercise may be initiated immediately after surgery?",
      options: [
        "Vigorous stretching",
        "High-repetition resistance exercises",
        "Full activity level",
        "Gradual, low-force muscle-setting exercise"
      ],
      answer: 3
    },
    {
      question: "For a Tendon Repair, which often requires longer immobilization due to poor vascular supply, what is initiated immediately after surgery to prevent adhesions and promote alignment of healing tissue?",
      options: [
        "Vigorous passive range of motion",
        "Maximal isometric contractions",
        "Heavy resistance exercise",
        "Gentle, low-force muscle setting"
      ],
      answer: 3
    },
    {
      question: "After immobilization is removed following a Muscle Repair, active ROM emphasizing controlled motion within a protected range may begin. Vigorous stretching or the return to full activity level are contraindicated until soft tissue healing is complete, which can be as long as:",
      options: [
        "2-3 weeks postoperatively",
        "4-6 weeks postoperatively",
        "6 to 8 weeks postoperatively",
        "12 weeks postoperatively"
      ],
      answer: 2
    },
    {
      question: "For Capsule Stabilization and Reconstruction procedures, the sources emphasize restoring ROM and strengthening which type of muscles?",
      options: [
        "Antagonists",
        "Synergists",
        "Static stabilizers",
        "Dynamic stabilizers"
      ],
      answer: 3
    },
    {
      question: "For Release, Lengthening, or Decompression of Soft Tissue (e.g., Myotomy, Tenotomy, Fasciotomy), the involved muscle group is often immobilized in a lengthened position. Strengthening of which muscles is started early to maintain control of movement?",
      options: [
        "The released/lengthened muscles",
        "Synergists to the released muscles",
        "Muscles not affected by the surgery",
        "Antagonists to the released/lengthened muscles"
      ],
      answer: 3
    },
    {
      question: "For Synovectomy procedures done via an arthroscopic approach, ROM progression is typically:",
      options: [
        "Slower than with an open approach",
        "Faster than with an open approach, with PROM/AAROM beginning almost immediately and progressing quickly to AROM",
        "Delayed until inflammation completely subsides",
        "Not necessary as the joint mobility is typically normal"
      ],
      answer: 1
    },
    {
      question: "Articular Cartilage Procedures, such as microfracture or osteochondral grafts, typically involve early PROM, CPM, and protected weight-bearing. The recovery period is described as prolonged, lasting:",
      options: [
        "4-6 weeks",
        "6-12 weeks",
        "6-12 months",
        "12-18 months"
      ],
      answer: 2
    },
    {
      question: "Which of the following is listed as a contraindication for joint replacement arthroplasty?",
      options: [
        "Moderate pain with functional activities",
        "Marked limitation of motion",
        "Significant tissue damage",
        "Active infection of the joint"
      ],
      answer: 3
    }
  ]
};

export default quizData;
