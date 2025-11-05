import React, { useState } from 'react';

// --- SVG Icons ---
// Moved to top to prevent "undefined" error during initialization
const IconLightbulb = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.7.8 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </svg>
);

const IconShip = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    <path d="M19.38 19.38A2.4 2.4 0 0 0 21 17l-1-4-3-2-3 2-1 4a2.4 2.4 0 0 0 1.62 2.38"/>
    <path d="M12 11V4.07a.5.5 0 0 1 .5-.5h0a.5.5 0 0 1 .5.5V11"/>
    <path d="M12 4h.01"/>
  </svg>
);

const IconStatue = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12v-2a1 1 0 0 1 1-1h.5A2.5 2.5 0 0 1 13 11.5v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z"/>
    <path d="M6 12v5a1 1 0 0 0 1 1h1"/>
    <path d="M15 12v5a1 1 0 0 1-1 1h-1"/>
    <path d="M12 12v9"/>
    <path d="M9 21h6"/>
    <path d="m14 4 1 2-1 2"/>
    <path d="m10 4-1 2 1 2"/>
    <path d="M14 10V6.2c0-1.4-1.1-2.5-2.5-2.5h0A2.5 2.5 0 0 0 9 6.2V10"/>
    <path d="M16 4h.5A2.5 2.5 0 0 1 19 6.5v0A2.5 2.5 0 0 1 16.5 9H14"/>
  </svg>
);

const IconTag = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
    <path d="M7 7h.01"/>
  </svg>
);

const IconUsers = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconStethoscope = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <path d="M18 18a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <circle cx="6" cy="4" r="2"/>
    <circle cx="18" cy="4" r="2"/>
  </svg>
);

const IconFileText = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);

const IconDollarSign = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const IconTicket = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a3 3 0 0 1 0-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
    <path d="M13 12v.01"/>
    <path d="M13 6v.01"/>
    <path d="M13 18v.01"/>
  </svg>
);

const IconMapPin = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconArrowLeft = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const IconArrowRight = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);


// --- Data for Stops ---
// All text content is now stored here for easy editing.
const stopsData = [
  {
    id: 1,
    title: "The Journey to America",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Steerage_passengers_on_deck_of_SS_Pennland_c1893.jpg",
    imgAlt: "Steerage passengers crowd the deck of the S.S. Pennland during their journey to America, circa 1893.",
    text: [
      "Before even seeing Ellis Island, immigrants first had to endure a long and difficult voyage across the Atlantic. For the more than 75% of passengers traveling in 'steerage' (the lowest class), this meant spending up to two weeks in cramped, noisy, and foul-smelling quarters below the ship's waterline.",
      "These decks were overcrowded with diverse groups of people fleeing poverty, famine, religious persecution, and political unrest. They had little fresh air, shared few toilets, and ate simple food like stew and bread. Their one hope was for a new life in America, but first, they had to survive the journey and the inspection to come."
    ],
    modals: [
      { id: 'fact1', label: "Fun Fact: First-Class Passengers", icon: <IconLightbulb /> },
      { id: 'fact1_extra', label: "Did You Know? Steerage Decks", icon: <IconShip /> }
    ]
  },
  {
    id: 2,
    title: "The Arrival",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Ellis_Island_Arrival.jpg",
    imgAlt: "A ferry crowded with immigrants arrives at the main processing building on Ellis Island.",
    text: [
      "When ships pulled into New York Harbor, the first sight for many was the Statue of Liberty, a powerful symbol of freedom. But anxiety quickly set in. Before anyone could disembark, U.S. Public Health Service doctors boarded the ship to perform a brief inspection.",
      "First and second-class passengers were inspected in the comfort of their cabins and, if cleared, were allowed to land directly in Manhattan. Only the steerage passengers were herded onto crowded ferries for the transfer to Ellis Island, where their fate would be decided."
    ],
    modals: [
      { id: 'fact2', label: "Fun Fact: Ship Inspections", icon: <IconLightbulb /> },
      { id: 'fact2_extra', label: "Did You Know? Statue of Liberty", icon: <IconStatue /> }
    ]
  },
  {
    id: 3,
    title: "The Baggage Room",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Baggage_room_in_main_building%2C_Ellis_Island%2C_New_York_City_LCCN2003653195.jpg",
    imgAlt: "Immigrants wait amidst massive piles of luggage in the Ellis Island Baggage Room.",
    text: [
      "The first stop on the island itself was the chaotic Baggage Room on the ground floor. Immigrants left their worldly possessions—trunks, sacks, and bundles—to be inspected later. They carried only their most valuable items, like money and identification papers, with them.",
      "For many, this was a moment of great fear. They were given a baggage tag and had to trust that their one bag, containing everything they owned, would not be lost or stolen. After checking their luggage, they were directed up the main staircase to the Great Hall."
    ],
    modals: [
      { id: 'fact3', label: "Fun Fact: What They Brought", icon: <IconLightbulb /> },
      { id: 'fact3_extra', label: "Did You Know? Baggage Tags", icon: <IconTag /> }
    ]
  },
  {
    id: 4,
    title: "Registration and Waiting",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Immigrants_in_Great_Hall_at_Ellis_Island_c1907.jpg",
    imgAlt: "Immigrants wait in long lines for processing in the Great Hall (Registry Room) at Ellis Island, circa 1907.",
    text: [
      "The massive Registry Room, known as the Great Hall, was the main processing center. It was a terrifying and confusing place, filled with the sounds of thousands of people and dozens of languages. Immigrants waited in long, winding lines for their turn to be inspected, a process that could take three to five hours.",
      "Officials used ship 'manifests'—lists of passenger names and information—to process people. Interpreters were crucial, shouting out names and trying to organize the chaos. Many immigrants feared their names would be misspelled or 'changed,' but inspectors were generally working from the lists provided by the steamship companies."
    ],
    modals: [
      { id: 'fact4', label: "Fun Fact: Time on the Island", icon: <IconLightbulb /> },
      { id: 'fact4_extra', label: "Did You Know? 'Tower of Babel'", icon: <IconUsers /> }
    ]
  },
  {
    id: 5,
    title: "Medical Inspection",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Doctor_examining_immigrant_children_at_Ellis_Island_c1911.jpg",
    imgAlt: "A doctor in uniform performs a medical examination on immigrant children at Ellis Island.",
    text: [
      "As immigrants walked up the stairs to the Great Hall, doctors watched them closely in what became known as the '6-second medical exam.' They looked for any sign of illness, physical disability, or mental conditions. If a doctor saw a potential problem, they would mark the immigrant's coat with a chalk letter (e.g., 'H' for heart, 'X' for mental defect).",
      "Those marked with chalk were pulled from the line for a more thorough examination. The most feared diagnosis was 'trachoma,' a highly contagious eye disease that caused blindness. Being diagnosed with trachoma meant mandatory detention and almost certain deportation back to Europe."
    ],
    modals: [
      { id: 'fact5', label: "Fun Fact: The Buttonhook Test", icon: <IconLightbulb /> },
      { id: 'fact5_extra', label: "Did You Know? The Island Hospital", icon: <IconStethoscope /> }
    ]
  },
  {
    id: 6,
    title: "A Family’s Story",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ellis_Island_Family.jpg",
    imgAlt: "An immigrant family with identification tags on their clothes waits at Ellis Island.",
    text: [
      "For families, the inspection process was especially terrifying due to the risk of being separated. If one family member was detained for medical or legal reasons, the entire family faced a terrible choice: stay with them, or continue on and split the family apart.",
      "Even simple misunderstandings could cause delays. In one famous story, a mother was nearly detained for a 'disability' because she was stumbling. Her children finally explained to the inspector that she was simply wearing high-heeled shoes for the first time. The inspector laughed and allowed them to pass."
    ],
    modals: [
      { id: 'fact6', label: "Fun Fact: The Heel Story", icon: <IconLightbulb /> },
      { id: 'fact6_extra', label: "Did You Know? Family Separation", icon: <IconUsers /> }
    ]
  },
  {
    id: 7,
    title: "Legal Inspection",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Immigrants_questioned_by_officials_at_Ellis_Island_1907.jpg",
    imgAlt: "Immigrant families stand before inspectors' desks for legal questioning in the Registry Room.",
    text: [
      "After the medical check, immigrants faced a legal inspector who would ask a series of 29 questions. Standing at a tall desk, the inspector, often with an interpreter, would verify the answers from the ship's manifest: 'What is your name?' 'What is your occupation?' 'Who paid for your passage?' 'Do you have a job waiting for you?' 'How much money do you have?'",
      "The primary goal was to ensure the immigrant could support themselves and was not a criminal. The most common reason for detention was being marked 'LPC'—Likely to Become a Public Charge. This meant the inspector believed the person was too old, too sick, or too unskilled to find work and would end up relying on the government for support."
    ],
    modals: [
      { id: 'fact7', label: "Fun Fact: 29 Questions", icon: <IconLightbulb /> },
      { id: 'fact7_extra', label: "Did You Know? Board of Inquiry", icon: <IconFileText /> }
    ]
  },
  {
    id: 8,
    title: "The Money Exchange",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Ellis_Island_Money_exchange_LCCN2002716757.jpg",
    imgAlt: "Immigrants exchange their foreign currency for U.S. dollars at the money exchange counter.",
    text: [
      "For the 80% of immigrants who passed all inspections, the final stops were sources of great relief. In the Money Exchange office, they converted their home currency into U.S. dollars. This was a required stop, designed to protect them from being scammed by dishonest money changers once they reached Manhattan.",
      "Inspectors often required immigrants to prove they had a certain amount of money (around $25) to show they were not 'LPC.' After exchanging their money, immigrants who were traveling beyond New York City would purchase train tickets to their final destinations."
    ],
    modals: [
      { id: 'fact8', label: "Fun Fact: Passports and Visas", icon: <IconLightbulb /> },
      { id: 'fact8_extra', label: "Did You Know? Show Me the Money", icon: <IconDollarSign /> }
    ]
  },
  {
    id: 9,
    title: "The Ferry to Manhattan",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Ellis_Island_ferry_to_Manhattan.jpg",
    imgAlt: "The ferry boat 'Immigrant' waits to take cleared immigrants from Ellis Island to Manhattan.",
    text: [
      "After being cleared, immigrants had two main paths. About one-third, who were staying in New York City, would board the 'Ellis Island' ferry for the short trip to Manhattan. This ferry, often just as crowded as the one that brought them, symbolized the true beginning of their new life.",
      "The other two-thirds of immigrants would proceed to the railroad ticket office and board ferries to train terminals in New Jersey, where they would begin longer journeys to join relatives in cities like Chicago, Cleveland, or farming communities across the Midwest."
    ],
    modals: [
      { id: 'fact9', label: "Fun Fact: The Manhattan Ferry", icon: <IconLightbulb /> },
      { id: 'fact9_extra', label: "Did You Know? The 1-Cent Ride", icon: <IconTicket /> }
    ]
  },
  {
    id: 10,
    title: "The Kissing Post",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/7/73/Reunion_of_immigrant_families_at_Ellis_Island.jpg",
    imgAlt: "A joyful family reunion at the 'Kissing Post' at Ellis Island, where relatives embrace.",
    text: [
      "At the very end of the long process, on the first floor near the exit, was an area that earned the nickname the 'Kissing Post.' This was not an official sign but a location known to all: the spot where families, after being processed and cleared, would finally reunite with their loved ones who were waiting for them.",
      "After weeks of travel and hours of agonizing inspection, this was a place of overwhelming emotion. Families embraced, wept with joy, and kissed after separations that had often lasted for years. It was the end of one journey and the true beginning of their new life in America."
    ],
    modals: [
      { id: 'fact10', label: "Fun Fact: The Kissing Post", icon: <IconLightbulb /> },
      { id: 'fact10_extra', label: "Did You Know? Not an Official Sign", icon: <IconMapPin /> }
    ]
  }
];

// --- Data for Modals ---
// All modal content is now stored here for easy editing.
const modalsData = {
  'fact1': { title: "Fun Fact — First-Class Passengers", content: "Wealthier passengers in first and second class were seen as less of a risk. They underwent a brief inspection aboard their ship and, if cleared, were allowed to disembark directly at the pier in Manhattan, completely bypassing Ellis Island." },
  'fact1_extra': { title: "Did You Know? — Steerage Decks", content: "Steerage decks were often just 2-3 feet above the water line, with hundreds of people sharing a single large, windowless room with rows of triple-decker bunk beds. The stench from unwashed bodies, seasickness, and shared toilets was overwhelming." },
  'fact2': { title: "Fun Fact — Ship Inspections", content: "The first inspection in the harbor was to check for outbreaks of highly contagious diseases like cholera, typhus, or smallpox. If such a disease was found, the entire ship and all its passengers could be 'quarantined' (isolated) for weeks." },
  'fact2_extra': { title: "Did You Know? — Statue of Liberty", content: "For many, the first sight of the Statue of Liberty was a powerful emotional moment. They called her 'Lady Liberty' or the 'Mother of Freedom.' For some, it was a symbol of hope; for others, it was a sign that their terrifying inspection was about to begin." },
  'fact3': { title: "Fun Fact — What They Brought", content: "Immigrants often carried sentimental keepsakes like photos, family Bibles, or small musical instruments. They also brought practical items like feather beds, linens, and tools for their trade, such as carpentry or sewing supplies." },
  'fact3_extra': { title: "Did You Know? — Baggage Tags", content: "Immigrants were given baggage tags that matched the manifest number on their inspection card. This was a crucial, (mostly) reliable system for helping them reclaim their correct luggage after their inspection was complete." },
  'fact4': { title: "Fun Fact — Time on the Island", content: "While the *average* processing time was 3-5 hours, about 20% of all immigrants were detained overnight or longer for medical or legal reasons. This could turn into days or even weeks of anxious waiting." },
  'fact4_extra': { title: "Did You Know? — 'Tower of Babel'", content: "The Great Hall was often nicknamed the 'Tower of Babel' because of the overwhelming, echoing noise. With officials shouting and thousands of people from dozens of countries speaking different languages, the sound was described as a deafening roar." },
  'fact5': { title: "Fun Fact — The Buttonhook Test", content: "To check for trachoma, a doctor would use a tool called a buttonhook (or their bare fingers) to flip the immigrant's eyelid inside out. This was painful and terrifying, especially for children, and helped spread the disease." },
  'fact5_extra': { title: "Did You Know? — The Island Hospital", content: "About 2% of immigrants were sent to the island's hospital. It was actually one of the most advanced hospitals in the world at the time, with 22 separate buildings, operating rooms, a morgue, and a contagious disease ward." },
  'fact6': { title: "Fun Fact — The Heel Story", content: "The story of the woman in high heels is a famous piece of Ellis Island oral history, told by her daughter. It highlights how any unusual behavior or appearance could lead to a 'chalk mark' and potential detention by the observant doctors." },
  'fact6_extra': { title: "Did You Know? — Family Separation", content: "If a child under 11 was found to be sick, one parent was required to stay with them in the island's hospital, while the rest of the family had to continue their journey. This led to heartbreaking separations." },
  'fact7': { title: "Fun Fact — 29 Questions", content: "The 29 questions were surprisingly practical. They included 'Are you an anarchist?' and 'Are you a polygamist?' Inspectors also had to note the immigrant's race, which was often based on their own visual judgment." },
  'fact7_extra': { title: "Did You Know? — Board of Inquiry", content: "Immigrants who were detained for legal reasons (like being 'LPC') had the right to a hearing. A 'Board of Special Inquiry,' made of three inspectors, would listen to their case and vote on whether to admit or deport them. Their decision was usually final." },
  'fact8': { title: "Fun Fact — Passports and Visas", content: "For most of Ellis Island's peak years, passports and visas were not required to enter the United States. It was only after World War I, with the Quota Acts of the 1920s, that these documents became mandatory." },
  'fact8_extra': { title: "Did You Know? — Show Me the Money", content: "The amount of money required fluctuated, but for a long time, immigrants had to show they had about $25 (worth over $800 today). If they didn't, a waiting relative could show the money for them." },
  'fact9': { title: "Fun Fact — The Manhattan Ferry", content: "The ferry that ran from Ellis Island to the Battery in Manhattan was named 'Immigrant.' It ran constantly, carrying thousands of newly arrived Americans to their new lives in the city." },
  'fact9_extra': { title: "Did You Know? — The 1-Cent Ride", content: "The ferry ride to Manhattan was not free! It cost 1 cent. However, the cost was paid by the steamship company that brought the immigrant to America, as part of their contract to transport them." },
  'fact10': { title: "Fun Fact — The Kissing Post", content: "The Kissing Post earned its name because it was the one place on the island where public displays of affection were common. After the rigid, non-emotional inspection process, it was a site of joyous, tearful reunions." },
  'fact10_extra': { title: "Did You Know? — Not an Official Sign", content: "There was never an official sign that said 'Kissing Post.' It was a nickname for the area on the first floor, near the exit, where families would wait. Today, a plaque in the museum marks the spot where so many families reunited." },
};

// --- Main App Component ---
export default function EllisIslandWebtour() {
  const [modal, setModal] = useState(null);
  const [currentStop, setCurrentStop] = useState(1); // Start at stop 1

  const open = (id) => setModal(id);
  const close = () => setModal(null);

  const goToNext = () => {
    if (currentStop < 10) {
      setCurrentStop(currentStop + 1);
    }
  };

  const goToPrev = () => {
    if (currentStop > 1) {
      setCurrentStop(currentStop - 1);
    }
  };

  // Helper function for image fallbacks
  const addImageFallback = (event) => {
    const text = event.target.alt || "Image Placeholder";
    event.target.onerror = null; // Prevent infinite loop
    event.target.src = `https://placehold.co/600x400/f0f9ff/333?text=${encodeURIComponent(text)}`;
  };

  // Find the data for the currently active stop
  const activeStop = stopsData.find(stop => stop.id === currentStop);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900 p-4 md:p-8 font-sans">
      <header className="max-w-6xl mx-auto py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900">Ellis Island: An Interactive Field Trip</h1>
        <p className="mt-3 text-lg text-gray-700 max-w-4xl">
          Journey through ten immersive stops on Ellis Island to experience what immigrants encountered upon arriving in America. Click on the interactive panels to reveal fun facts and details.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg text-sky-800">Learning Intention</h3>
            <p className="mt-2 text-sm text-gray-600">
              Students will explore and analyze the immigration process through Ellis Island and understand the personal and cultural impact of immigration on American history.
            </p>
          </div>
          <div className="p-5 bg-white shadow-lg rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg text-sky-800">Success Criteria</h3>
            <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>Explain what immigrants experienced at each stage of Ellis Island processing.</li>
              <li>Identify key facts about inspection, legal processing, and family reunification.</li>
              <li>Use information from each stop to accurately answer the web tour quiz questions.</li>
            </ul>
          </div>
        </div>
      </header>

      {/* --- Main Content: Renders only the active stop --- */}
      <main className="max-w-6xl mx-auto my-12">
        {activeStop && (
          <section className="p-4 md:p-6 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image Column: Alternates side based on stop number */}
              <div className={`w-full ${currentStop % 2 === 0 ? 'md:order-2' : ''}`}>
                <h2 className="text-3xl font-bold text-sky-900 mb-4 md:hidden">Stop {activeStop.id} — {activeStop.title}</h2>
                <img 
                  src={activeStop.imgSrc} 
                  alt={activeStop.imgAlt} 
                  className="w-full h-full object-cover rounded-md shadow-inner" 
                  onError={addImageFallback}
                />
              </div>
              
              {/* Text & Interaction Column */}
              <div className={`flex flex-col justify-center ${currentStop % 2 === 0 ? 'md:order-1' : ''}`}>
                <h2 className="text-3xl font-bold text-sky-900 mb-4 hidden md:block">Stop {activeStop.id} — {activeStop.title}</h2>
                {activeStop.text.map((paragraph, index) => (
                  <p key={index} className="mt-3 text-gray-700">{paragraph}</p>
                ))}
                
                {/* Interactive Buttons */}
                <div className="mt-6 space-y-3">
                  {activeStop.modals.map((modal, index) => (
                    <button 
                      key={modal.id}
                      onClick={() => open(modal.id)} 
                      className={`w-full flex items-center p-3 rounded-lg shadow-sm transition-all font-medium text-left ${
                        index === 0 
                          ? 'bg-sky-50 hover:bg-sky-100 text-sky-800' 
                          : 'bg-amber-50 hover:bg-amber-100 text-amber-800'
                      }`}
                    >
                      {React.cloneElement(modal.icon, { className: "w-5 h-5 mr-3 shrink-0" })}
                      {modal.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* --- Navigation Footer --- */}
      <footer className="max-w-6xl mx-auto flex justify-between items-center py-8 border-t border-gray-200">
        <button 
          onClick={goToPrev}
          disabled={currentStop === 1}
          className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-white rounded-lg shadow-md font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <IconArrowLeft className="w-5 h-5 mr-2" />
          Previous Stop
        </button>
        <span className="text-gray-600 font-medium text-sm md:text-base">
          Stop {currentStop} of 10
        </span>
        <button 
          onClick={goToNext}
          disabled={currentStop === 10}
          className="flex items-center px-4 py-2 md:px-6 md:py-3 bg-sky-600 text-white rounded-lg shadow-md font-medium hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next Stop
          <IconArrowRight className="w-5 h-5 ml-2" />
        </button>
      </footer>

      {/* --- Modal Container --- */}
      {/* Renders the active modal based on the 'modal' state */}
      {modal && modalsData[modal] && (
        <Modal 
          title={modalsData[modal].title} 
          onClose={close}
        >
          {modalsData[modal].content}
        </Modal>
      )}
    </div>
  );
}

// --- Modal Component (Unchanged) ---
function Modal({ title, children, onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-xl w-full p-6 m-4"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-sky-800">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-700 text-3xl leading-none font-bold transition-colors"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="mt-4 text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}

// --- SVG Icons (Unchanged) ---
// --- [This section is now at the top of the file] ---


