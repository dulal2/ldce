"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import QuestionCard from "@/components/QuestionCard"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const quizData = {
  important_days_and_dates: [
    {
      question: "When is World Braille Day celebrated?",
      options: ["January 4", "January 12", "January 25", "February 21"],
      correctAnswer: 0,
    },
    {
      question: "On which date is National Birds Day observed?",
      options: ["January 1", "January 3", "January 5", "January 8"],
      correctAnswer: 2,
    },
    {
      question: "What is the significance of January 6?",
      options: ["Pravasi Bharatiya Divas", "World War Orphans Day", "National Youth Day", "Army Day"],
      correctAnswer: 1,
    },
    {
      question: "Pravasi Bharatiya Divas is observed on which date?",
      options: ["January 9", "January 15", "January 26", "January 30"],
      correctAnswer: 0,
    },
    {
      question: "World Hindi Day is celebrated on?",
      options: ["January 10", "February 14", "March 8", "April 22"],
      correctAnswer: 0,
    },
    {
      question: "National Youth Day is celebrated in India to honor which leader?",
      options: ["Mahatma Gandhi", "Swami Vivekananda", "Subhash Chandra Bose", "Sardar Vallabhbhai Patel"],
      correctAnswer: 1,
    },
    {
      question: "When is Indian Army Day celebrated?",
      options: ["January 12", "January 15", "January 20", "January 25"],
      correctAnswer: 1,
    },
    {
      question: "Netaji Subhash Chandra Bose's birthday is celebrated on?",
      options: ["January 21", "January 23", "January 25", "January 30"],
      correctAnswer: 1,
    },
    {
      question: "What is the theme of National Girl Child Day?",
      options: ["Women Empowerment", "Save the Girl Child", "Beti Bachao, Beti Padhao", "Girls' Education First"],
      correctAnswer: 2,
    },
    {
      question: "When is India Tourism Day celebrated?",
      options: ["January 18", "January 20", "January 25", "February 1"],
      correctAnswer: 2,
    },
    {
      question: "National Voters Day is observed to encourage voter participation in India. When is it celebrated?",
      options: ["January 23", "January 25", "January 26", "January 30"],
      correctAnswer: 1,
    },
    {
      question: "Republic Day of India is celebrated on?",
      options: ["January 15", "January 20", "January 26", "January 30"],
      correctAnswer: 2,
    },
    {
      question: "Martyr’s Day is observed in India on?",
      options: ["January 23", "January 25", "January 30", "February 14"],
      correctAnswer: 2,
    },
    {
      question: "When is World Environment Day celebrated?",
      options: ["June 5", "April 22", "March 21", "September 16"],
      correctAnswer: 0,
    },
    {
      question: "Which day is observed as International Women's Day?",
      options: ["March 8", "February 14", "May 1", "November 19"],
      correctAnswer: 0,
    },
    {
      question: "When is World Wetlands Day celebrated?",
      options: ["February 1", "February 2", "February 5", "February 10"],
      correctAnswer: 1,
    },
    {
      question: "On which date is World Cancer Day observed?",
      options: ["February 4", "February 7", "February 10", "February 14"],
      correctAnswer: 0,
    },
    {
      question: "What is the significance of February 6?",
      options: [
        "World Cancer Day",
        "International Day of Zero Tolerance for Female Genital Mutilation",
        "World Day of Social Justice",
        "International Mother Language Day",
      ],
      correctAnswer: 1,
    },
    {
      question: "World Day of Social Justice is observed on which date?",
      options: ["February 10", "February 15", "February 20", "February 25"],
      correctAnswer: 2,
    },
    {
      question: "When is International Mother Language Day celebrated?",
      options: ["February 18", "February 19", "February 20", "February 21"],
      correctAnswer: 3,
    },
    {
      question: "What is the date of World Thinking Day?",
      options: ["February 20", "February 21", "February 22", "February 23"],
      correctAnswer: 2,
    },
    {
      question: "National Science Day is celebrated in India on?",
      options: ["February 25", "February 26", "February 27", "February 28"],
      correctAnswer: 3,
    },
    {
      question: "When is Zero Discrimination Day observed?",
      options: ["March 1", "March 8", "March 15", "March 21"],
      correctAnswer: 0,
    },
    {
      question: "On which date is World Wildlife Day celebrated?",
      options: ["March 1", "March 3", "March 5", "March 7"],
      correctAnswer: 1,
    },
    {
      question: "When is World Hearing Day observed?",
      options: ["March 2", "March 3", "March 4", "March 5"],
      correctAnswer: 1,
    },
    {
      question: "No Smoking Day is observed on which day?",
      options: ["First Wednesday of March", "March 10", "March 15", "March 20"],
      correctAnswer: 0,
    },
    {
      question: "What is the significance of March 14?",
      options: ["World Hearing Day", "Pi Day", "World Consumer Rights Day", "World Water Day"],
      correctAnswer: 1,
    },
    {
      question: "World Consumer Rights Day is observed on?",
      options: ["March 10", "March 12", "March 15", "March 18"],
      correctAnswer: 2,
    },
    {
      question: "National Vaccination Day is celebrated in India on?",
      options: ["March 10", "March 16", "March 20", "March 25"],
      correctAnswer: 1,
    },
    {
      question: "When is the International Day of Happiness celebrated?",
      options: ["March 18", "March 19", "March 20", "March 21"],
      correctAnswer: 2,
    },
    {
      question: "On which date is World Water Day observed?",
      options: ["March 20", "March 21", "March 22", "March 25"],
      correctAnswer: 2,
    },
    {
      question: "When is World Tuberculosis (TB) Day observed?",
      options: ["March 22", "March 24", "March 26", "March 28"],
      correctAnswer: 1,
    },
    {
      question: "When is National Maritime Day celebrated in India?",
      options: ["April 5", "April 7", "April 15", "April 18"],
      correctAnswer: 0,
    },
    {
      question: "On which date is World Health Day observed?",
      options: ["April 5", "April 7", "April 10", "April 15"],
      correctAnswer: 1,
    },
    {
      question: "World Heritage Day is observed on?",
      options: ["April 10", "April 15", "April 18", "April 22"],
      correctAnswer: 2,
    },
    {
      question: "National Civil Service Day is celebrated on which date?",
      options: ["April 18", "April 19", "April 20", "April 21"],
      correctAnswer: 3,
    },
    {
      question: "When is World Earth Day observed?",
      options: ["April 20", "April 22", "April 25", "April 30"],
      correctAnswer: 1,
    },
    {
      question: "On which date is World Press Freedom Day celebrated?",
      options: ["May 1", "May 3", "May 5", "May 7"],
      correctAnswer: 1,
    },
    {
      question: "World Asthma Day is observed on?",
      options: ["First Tuesday of May", "May 5", "May 8", "May 10"],
      correctAnswer: 0,
    },
    {
      question: "World Red Cross Day is celebrated on?",
      options: ["May 5", "May 6", "May 8", "May 10"],
      correctAnswer: 2,
    },
    {
      question: "On which date is World Thalassaemia Day observed?",
      options: ["May 5", "May 7", "May 8", "May 9"],
      correctAnswer: 2,
    },
    {
      question: "International Museum Day is celebrated on?",
      options: ["May 15", "May 16", "May 18", "May 20"],
      correctAnswer: 2,
    },
    {
      question: "When is World Environment Day celebrated?",
      options: ["June 5", "April 22", "March 21", "September 16"],
      correctAnswer: 0,
    },
    {
      question: "On which date is World Oceans Day observed?",
      options: ["June 5", "June 8", "June 10", "June 15"],
      correctAnswer: 1,
    },
    {
      question: "World Refugee Day is observed on?",
      options: ["June 15", "June 18", "June 20", "June 25"],
      correctAnswer: 2,
    },
    {
      question: "International Yoga Day is celebrated on which date?",
      options: ["June 15", "June 18", "June 21", "June 25"],
      correctAnswer: 2,
    },
    {
      question: "When is National Statistics Day observed in India?",
      options: ["June 25", "June 26", "June 29", "June 30"],
      correctAnswer: 2,
    },
    {
      question: "On which date is National Doctor’s Day celebrated in India?",
      options: ["June 30", "July 1", "July 5", "July 10"],
      correctAnswer: 1,
    },
    {
      question: "World Population Day is observed on?",
      options: ["July 5", "July 10", "July 11", "July 15"],
      correctAnswer: 2,
    },
    {
      question: "Kargil Vijay Diwas is celebrated on?",
      options: ["July 24", "July 25", "July 26", "July 28"],
      correctAnswer: 2,
    },
    {
      question: "On which date is World Hepatitis Day observed?",
      options: ["July 25", "July 28", "July 30", "August 1"],
      correctAnswer: 1,
    },
    {
      question: "International Tiger Day is celebrated on?",
      options: ["July 27", "July 28", "July 29", "July 30"],
      correctAnswer: 2,
    },
    {
      question: "When is International Friendship Day celebrated?",
      options: ["Last Sunday of July", "July 30", "First Sunday of August", "August 5"],
      correctAnswer: 0,
    },
    {
      question: "When is Friendship Day celebrated in India?",
      options: ["First Sunday of August", "August 5", "July 30", "August 10"],
      correctAnswer: 0,
    },
    {
      question: "On which date is International Youth Day observed?",
      options: ["August 10", "August 12", "August 15", "August 20"],
      correctAnswer: 1,
    },
    {
      question: "World Elephant Day is observed on?",
      options: ["August 10", "August 12", "August 14", "August 16"],
      correctAnswer: 1,
    },
    {
      question: "Sadbhavna Diwas is celebrated on which date?",
      options: ["August 15", "August 18", "August 20", "August 25"],
      correctAnswer: 2,
    },
    {
      question: "When is Women’s Equality Day observed?",
      options: ["August 24", "August 26", "August 28", "August 30"],
      correctAnswer: 1,
    },
    {
      question: "On which date is National Sports Day celebrated in India?",
      options: ["August 25", "August 28", "August 29", "August 31"],
      correctAnswer: 2,
    },
    {
      question: "International Literacy Day is observed on?",
      options: ["September 5", "September 8", "September 10", "September 15"],
      correctAnswer: 1,
    },
    {
      question: "World Ozone Day is celebrated on?",
      options: ["September 14", "September 16", "September 18", "September 20"],
      correctAnswer: 1,
    },
    {
      question: "On which date is World Rhino Day observed?",
      options: ["September 20", "September 21", "September 22", "September 25"],
      correctAnswer: 2,
    },
    {
      question: "World Tourism Day is celebrated on?",
      options: ["September 25", "September 27", "September 29", "October 1"],
      correctAnswer: 1,
    },
    {
      question: "When is International Day of Non-Violence observed?",
      options: ["October 2", "October 5", "October 10", "October 15"],
      correctAnswer: 0,
    },
    {
      question: "On which date is International Day of the Girl Child observed?",
      options: ["October 10", "October 11", "October 12", "October 15"],
      correctAnswer: 1,
    },
    {
      question: "United Nations Day is celebrated on?",
      options: ["October 20", "October 22", "October 24", "October 26"],
      correctAnswer: 2,
    },
    {
      question: "When is World AIDS Day observed?",
      options: ["December 1", "December 5", "December 10", "December 15"],
      correctAnswer: 0,
    },
    {
      question: "On which date is Indian Navy Day celebrated?",
      options: ["December 2", "December 4", "December 6", "December 10"],
      correctAnswer: 1,
    },
    {
      question: "World Soil Day is observed on?",
      options: ["December 3", "December 4", "December 5", "December 6"],
      correctAnswer: 2,
    },
    {
      question: "Human Rights Day is celebrated on?",
      options: ["December 5", "December 8", "December 10", "December 12"],
      correctAnswer: 2,
    },
    {
      question: "On which date is International Mountain Day observed?",
      options: ["December 9", "December 11", "December 13", "December 15"],
      correctAnswer: 1,
    },
    {
      question: "Vijay Diwas is celebrated in India on?",
      options: ["December 14", "December 16", "December 18", "December 20"],
      correctAnswer: 1,
    },
    {
      question: "When is Kisan Diwas (Farmer's Day) celebrated in India?",
      options: ["December 20", "December 23", "December 25", "December 28"],
      correctAnswer: 1,
    },
    {
      question: "National Consumer Rights Day is observed on?",
      options: ["December 22", "December 24", "December 26", "December 28"],
      correctAnswer: 1,
    },
  ],
  Train_Manager: [
    {
           question: "Maximum speed of trains during thick and foggy weather in Absolute Block System is.... Kmph when signal is showing green.मोटे और कोहरे वाले मौसम में एब्सोल्यूट ब्लॉक सिस्टम के दौरान ट्रेनों की अधिकतम गति .... किमी प्रति घंटा होती है जब सिग्नल हरा दिखा रहा हो",
           options: ["60 kmph", "75 kmph", "60 kmph and 75 kmph when Fog Safe kmph Device(FSD) is provided in Locomotive", "Not more than 90"],
           correctAnswer: 2,
        },
        {
           question: "Catch Siding is provided to protect-कैच साइडिंग को सुरक्षित रखने के लिए प्रदान किया जाता है-",
           options: ["Block Section", "Station Section", "Station Limit", "Neutral Section"],
           correctAnswer: 1,
        },
        {
           question: "At a C class station, in absence of a Starter, .... signal is the Last Stop Signal.एक 'सी' श्रेणी के स्टेशन पर, स्टार्टिंग सिग्नल की अनुपस्थिति में, .... सिग्नल अंतिम स्टॉप सिग्नल होता है।",
           options: ["Outer", "Home", "Routing", "Distant"],
           correctAnswer: 1,
        },
        {
           question: "A light waved violently shall be used as a Stop signal only when the red light is not available.एक रोशनी जो जोरदार लहराई जाती है, उसे केवल तभी स्टॉप सिग्नल के रूप में उपयोग किया जाएगा जब लाल रोशनी उपलब्ध न हो।",
           options: ["White", "Green", "Both of the above", "None of the above"],
           correctAnswer: 0,
        },
        {
           question: "When a train has to be admitted on loop line, Distant signal will show ... light where Inner Distant is provided.जब किसी ट्रेन को लूप लाइन पर प्रवेश करना हो, तो दूरस्थ सिग्नल .... रोशनी दिखाएगा जहां आंतरिक दूरस्थ सिग्नल प्रदान किया गया हो।",
           options: ["Yellow", "Double Yellow", "Green", "No light"],
           correctAnswer: 1,
        },
        {
           question: "Outer, Home and...... cannot be used during Shunting operation-आउटर, होम और...... शंटिंग संचालन के दौरान उपयोग नहीं किए जा सकते।",
           options: ["Calling-on Signal", "Starter Signal", "Last Stop Signal", "First Stop Signal"],
           correctAnswer: 2,
        },
        {
           question: "Slip Siding is intended to protectस्लिप साइडिंग का उद्देश्य सुरक्षा प्रदान करना है।",
           options: ["Station Section", "Station Limit", "Block Section", "Neutral Section"],
           correctAnswer: 2,
        },
        {
           question: "In regard to Multiple-Aspect signals, the minimum visibility distance for all signals shall be-मल्टीपल-अस्पेक्ट सिग्नलों के संबंध में, सभी सिग्नलों के लिए न्यूनतम दृश्यता दूरी होगी।",
           options: ["200m", "400m", "1.2km", "Signal shall be visible for a minimum period of 5 sec at m.p.s. of the section"],
           correctAnswer: 3,
        },
        {
           question: "Home Signal of Intermediate Block Post is identified by .. marker.इंटरमीडिएट ब्लॉक पोस्ट का होम सिग्नल .... मार्कर द्वारा पहचाना जाता है।",
           options: ["R", "g", "IB", "1D"],
           correctAnswer: 2,
        },
        {
           question: "The Loco Pilot of a train shall not pass a stop signal without proper authority except.. . which can be passed conditionally-एक ट्रेन का लोको पायलट बिना उचित प्राधिकरण के स्टॉप सिग्नल को पार नहीं करेगा, सिवाय .... जिसे सशर्त पार किया जा सकता है।",
           options: ["1BSS", "GSS", "Automatic Stop Signal", "All of the above"],
           correctAnswer: 3,
        },
        {
           question: "Station Section is a part of Station Limit and is provided at __________ class station only.स्टेशन सेक्शन, स्टेशन सीमा का एक भाग है और इसे केवल __________ श्रेणी के स्टेशन पर प्रदान किया जाता है",
           options: ["‘W’", "‘B’", "‘C’", "‘Special’"],
           correctAnswer: 1,
        },
        {
           question: "Minimum equipment of fixed signals at a ‘B’ class station provided with MOMA signaling shall be:'MOMA' सिग्नलिंग से सुसज्जित 'बी' श्रेणी के स्टेशन पर स्थिर सिग्नलों के लिए न्यूनतम उपकरण होगा:",
           options: ["Warner, Home, and Starter", "Distant and Home", "Distant, Home, and Starter", "Distant, Home, Starter, and Advanced Starter"],
           correctAnswer: 2,
        },
        {
           question: "The ‘S’ marker board is provided at a distance of __________ meters in the facing points of every outlying siding.'S' मार्कर बोर्ड को हर बाहरी साइडिंग के अग्र भाग में __________ मीटर की दूरी पर प्रदान किया जाता है।",
           options: ["30m", "45m", "800m", "1200m"],
           correctAnswer: 0,
        },
        {
           question: "The form number of the Advance Pilot-in-Memo is:एडवांस पायलट-इन-मेमो का प्रपत्र संख्या है:",
           options: ["T/351", "T/369(1)", "T/369(3b)", "T/375"],
           correctAnswer: 1,
        },
        {
           question: "The form number of the Pilot-in and Pilot-out memo is:पायलट-इन और पायलट-आउट मेमो का प्रपत्र संख्या है:",
           options: ["T/351", "T/369(1)", "T/369(3b)", "T/375"],
           correctAnswer: 2,
        },
        {
           question: "USR stands for:USR का पूर्ण रूप है:",
           options: ["Unified Special Restriction Rules", "Unified Subsidiary Rules", "Under Special Restriction", "None of the above"],
           correctAnswer: 1,
        },
        {
           question: "The form number for Disconnection/Re-connection Notice is:डिस्कनेक्शन/री-कनेक्शन नोटिस के लिए प्रपत्र संख्या है:",
           options: ["T/351", "T/369(1)", "T/369(3b)", "T/375"],
           correctAnswer: 0,
        },
        {
           question: "When a signal shows more than one aspect simultaneously, such a signal is treated as:जब कोई सिग्नल एक साथ एक से अधिक पहलू दिखाता है, तो ऐसे सिग्नल को माना जाता है:",
           options: ["Correct signal", "Defective signal", "Following signal", "None of the above"],
           correctAnswer: 1,
        },
        {
           question: "The stop board is fixed in the __________ of the train during C&W examination of a rake.सी एंड डब्ल्यू परीक्षण के दौरान ट्रेन के __________ में स्टॉप बोर्ड लगाया जाता है।",
           options: ["Left", "Right", "Middle", "None of the above"],
           correctAnswer: 2,
        },
        {
           question: "The station at which an authority to proceed is given is known as:जिस स्टेशन पर आगे बढ़ने की अनुमति दी जाती है, उसे कहा जाता है:",
           options: ["Notice station", "Interlocked station", "Block station", "Non-block station"],
           correctAnswer: 2,
        },
        {
           question: "For passing a Gate Stop signal at ‘ON’, the Loco Pilot has to wait ___minutes in the daytime and ___minutes at night.गेट स्टॉप सिग्नल को 'ऑन' पर पार करने के लिए, लोको पायलट को दिन के समय ___ मिनट और रात में ___ मिनट प्रतीक्षा करनी होगी",
           options: ["1 & 2", "2 & 3", "2 & 5", "5 & 5"],
           correctAnswer: 0,
        },
        {
           question: "No LP/ALP should be put on independent duty unless they take Road Learning of the section initially for at least _ trips in a    Normal section and ___ trips in an Automatic or Ghat section.कोई भी एलपी/एएलपी स्वतंत्र ड्यूटी पर नहीं लगाया जाना चाहिए जब तक कि वे सामान्य सेक्शन में कम से कम _ यात्राओं और ऑटोमैटिक या घाट सेक्शन में ___ यात्राओं के लिए रोड लर्निंग न कर लें।",
           options: ["1 & 2", "3 & 3", "3 & 6", "6 & 6"],
           correctAnswer: 2,
        },
        {
           question: "Station Limit is situated between the __ of the station.स्टेशन सीमा स्टेशन के __के बीच स्थित होती है।",
           options: ["Outermost stop signals", "Outermost signals", "Both of the above", "None of the above"],
           correctAnswer: 1,
        },
        {
           question: "The sequence of taking off through signals at a station where MACL signals are provided for run-through trains with an Advanced Starter is:उस स्टेशन पर सिग्नलों के क्रम को हटाने की प्रक्रिया, जहां रन-थ्रू ट्रेनों के लिए एडवांस्ड स्टार्टर के साथ MACL सिग्नल प्रदान किए गए हैं:",
           options: ["Home, Starter, then Adv. Starter", "Starter, Home, and then Adv. Starter", "Main Home, Adv. Starter, and then Main Starter", "None of the above"],
           correctAnswer: 2,
        },
        {
           question: "__is provided in a long block section to split it into two portions, each constituting a separate block section by providing an Intermediate Block Post._________ लंबे ब्लॉक सेक्शन में प्रदान किया जाता है ताकि इसे दो भागों में विभाजित किया जा सके, प्रत्येक को एक अलग ब्लॉक सेक्शन बनाते हुए, एक इंटरमीडिएट ब्लॉक पोस्ट प्रदान करके।",
           options: ["Automatic Signaling", "MLQ Signaling", "Intermediate Block Signaling", "MACL Signaling"],
           correctAnswer: 2,
        },
        {
           question: "On Single Line Intermediate Block Signaling, the line between two adjacent block stations is divided into two subsections. The 1st section is termed as ‘Station controlled intermediate block section,’ and the 2nd section is termed as:सिंगल लाइन इंटरमीडिएट ब्लॉक सिग्नलिंग में, दो समीपवर्ती ब्लॉक स्टेशनों के बीच की लाइन को दो उप-खंडों में विभाजित किया जाता है। पहला खंड 'स्टेशन नियंत्रित इंटरमीडिएट ब्लॉक सेक्शन' कहलाता है और दूसरा खंड कहलाता है:",
           options: ["Block controlled intermediate block section", "Section controlled block section", "Advance block section", "Rear block section"],
           correctAnswer: 0,
        },
        {
           question: "A train carrying passengers can be admitted into a goods yard or on the goods loop at a restricted speed of:यात्री ले जाने वाली ट्रेन को एक माल यार्ड या माल लूप में प्रतिबंधित गति से प्रवेश कराया जा सकता है:",
           options: ["08 kmph", "10 kmph", "12 kmph", "15 kmph"],
           correctAnswer: 1,
        },
        {
           question: "If the Distant signal of an Intermediate Block Post is defective and cannot be kept in the ‘ON’ position, the Intermediate Block Stop signal shall also be treated as:यदि इंटरमीडिएट ब्लॉक पोस्ट का दूरस्थ सिग्नल दोषपूर्ण है और इसे 'ऑन' स्थिति में नहीं रखा जा सकता है, तो इंटरमीडिएट ब्लॉक स्टॉप सिग्नल को भी इस रूप में माना जाएगा।",
           options: ["Inactive", "Active", "Defective", "None of the above"],
           correctAnswer: 2,
        },
        {
           question: "When the distant signal shows a ‘Proceed’ aspect and the Home signal displays ‘Yellow with route/lunar indication,’ it will be treated as:जब दूरस्थ सिग्नल 'प्रोसीड' पहलू दिखाता है और होम सिग्नल 'पीला मार्ग/लूनर संकेत' प्रदर्शित करता है, तो इसे इस रूप में माना जाएगा:",
           options: ["Conflicting signal", "Defective signal", "None of the above", "Both (a) and (b)"],
           correctAnswer: 3,
        },
         {
           question: "If a fixed signal displays more than one aspect, the Loco Pilot shall act according to its most __________ aspect.यदि कोई स्थिर सिग्नल एक से अधिक पहलू प्रदर्शित करता है, तो लोको पायलट को इसके सबसे __________ पहलू के अनुसार कार्य करना चाहिए",
           options: ["Defective", "Restrictive", "Active", "Passive"],
           correctAnswer: 1,
        },
        {
           question: "In case of frequent aspect changing and flickering/bobbing of a Color Light Signal, the Loco Pilot shall treat the signal as defective if it does not assume a steady aspect for at least __________ seconds.यदि रंगीन प्रकाश सिग्नल बार-बार बदलता है और झिलमिलाता है, तो लोको पायलट को इसे दोषपूर्ण मानना चाहिए यदि यह कम से कम __________ सेकंड तक स्थिर पहलू नहीं रखता है।",
           options: ["30", "60", "120", "15"],
           correctAnswer: 1,
        },
        {
           question: "In case of doubling a Single Line (S/L) or tripling a Double Line (D/L) or more, no separate road learning of the 2nd, 3rd, or 4th line is given. LP/ALPs may run the first trip at a restricted speed of __________ Kmph.यदि किसी सिंगल लाइन (S/L) को डबल लाइन (D/L) या अधिक किया जाता है, तो दूसरी, तीसरी या चौथी लाइन के लिए अलग से रोड लर्निंग नहीं दी जाती है। LP/ALPs पहली यात्रा __________ किमी प्रति घंटे की प्रतिबंधित गति से चला सकते हैं।",
           options: ["25/8", "40/15", "15/10", "Sectional speed"],
           correctAnswer: 1,
        },
        {
           question: "If a Loco Pilot explodes detonator, they must take control of the train and proceed cautiously for up to __________ km before resuming the authorized speed.यदि कोई लोको पायलट डेटोनेटर विस्फोट करता है, तो उसे ट्रेन को नियंत्रित करना चाहिए और अधिकृत गति फिर से शुरू करने से पहले __________ किमी तक सतर्कता से आगे बढ़ना चाहिए।",
           options: ["800 m", "1 km", "1200 m", "1.5 km"],
           correctAnswer: 3,
        },
        {
           question: "During foggy weather, in an Automatic Block territory, after passing an automatic stop signal at Double Yellow, the speed should not exceed __________ Kmph.कोहरे के मौसम में, स्वचालित ब्लॉक क्षेत्र में, यदि स्वचालित स्टॉप सिग्नल डबल येलो दिखा रहा है, तो गति __________ किमी प्रति घंटे से अधिक नहीं होनी चाहिए",
           options: ["60/75", "30", "Cautious", "15"],
           correctAnswer: 1,
        },
        {
           question: "During foggy weather, in an Automatic Block territory, after passing an automatic stop signal at Green, the speed should not exceed __________ Kmph.कोहरे के मौसम में, स्वचालित ब्लॉक क्षेत्र में, यदि स्वचालित स्टॉप सिग्नल ग्रीन दिखा रहा है, तो गति __________ किमी प्रति घंटे से अधिक नहीं होनी चाहिए।",
           options: ["60/75", "30", "Cautious", "15"],
           correctAnswer: 0,
        },
        {
           question: "During foggy weather, in an Automatic Block territory, after passing an automatic stop signal at Yellow, the speed should not exceed __________ Kmph, further restricted so as to be prepared to stop at the next stop signal.कोहरे के मौसम में, स्वचालित ब्लॉक क्षेत्र में, यदि स्वचालित स्टॉप सिग्नल येलो दिखा रहा है, तो गति _____किमी प्रति घंटे से अधिक नहीं होनी चाहिए और अगले स्टॉप सिग्नल पर रुकने के लिए तैयार रहना चाहिए।",
           options: ["60/75", "30", "Further restricted speed so as to be prepared to stop at the next stop signal", "15"],
           correctAnswer: 2,
        },
        {
           question: "At a Class ‘D’ station, a ‘PH’ marker post shall be provided at a distance of __________ meters from the center of the station.'डी' श्रेणी के स्टेशन पर, 'PH' मार्कर पोस्ट स्टेशन के केंद्र से __________ मीटर की दूरी पर प्रदान किया जाएगा।",
           options: ["200", "400", "800", "1200"],
           correctAnswer: 1,
        },
        {
           question: "The Competency Certificate for Working Points and Signals (OP/TI/A) shall be issued by:संकेतों और पॉइंट्स के संचालन के लिए दक्षता प्रमाणपत्र (OP/TI/A) जारी किया जाएगा।",
           options: ["Station Superintendent (SS)", "Chief Yard Master (CYM)", "Divisional Traffic Inspector (DTI)", "All of the above"],
           correctAnswer: 3,
        },
        {
           question: "The Competency Certificate for Working Panel/Route Relay Interlocking is issued by BSI and DTI on form number:(Competency Certificate) BSI और DTI द्वारा फॉर्म नंबर पर जारी किया जाता है।",
           options: ["OP/TI/A", "OP/TI/B", "OP/TI/C", "None of the above"],
           correctAnswer: 2,
        },
        {
           question: "The Station Master (SM) should maintain the correct standard time by ascertaining it from the section controller daily at:(SM) को दैनिक रूप से सेक्शन कंट्रोलर से सही मानक समय की पुष्टि करके उसे बनाए रखना चाहिए।",
           options: ["18.00 hrs", "00.00 hrs", "12.00 hrs", "16.00 hrs"],
           correctAnswer: 3,
        },
        {
           question: "No trains carrying passengers must be allowed to start before the departure time notified in the:कोई भी यात्री ले जाने वाली ट्रेन को अधिसूचित प्रस्थान समय से पहले शुरू नहीं किया जाना चाहिए।",
           options: ["Working Time Table", "Working Time Table", "Public Time Table", "None of these"],
           correctAnswer: 2,
        },
        {
           question: "For starting a train from the station, a Loco Pilot needs:स्टेशन से ट्रेन को शुरू करने के लिए, एक लोको पायलट को चाहिए:",
           options: ["Guard’s Signal", "Correct departure signals", "Correct authority to proceed", "All of the above"],
           correctAnswer: 3,
        },
        {
           question: "Guard has to set his watch with correct timing from:गार्ड को अपनी घड़ी को सही समय से सेट करना होता है:",
           options: ["Driver's watch", "SCR watch", "Station clock or clock of reporting place", "CYM watch"],
           correctAnswer: 2,
        },
        {
           question: "Guard of a Passenger train shall report for duty ______ before the departure of a train.Guard of a Passenger train shall report for duty ______ before the departure of a train.एक पैसेंजर ट्रेन के गार्ड को ट्रेन के प्रस्थान से____मिनट पहले ड्यूटी पर रिपोर्ट करना होगा।",
           options: ["45 mins", "20 mins", "30 mins", "25 mins"],
           correctAnswer: 2,
        },
        {
           question: "Guard of a Goods train shall report for duty as per the time prescribed by:एक मालगाड़ी के गार्ड को ड्यूटी पर रिपोर्ट करना होगा जैसा कि निर्धारित समय के अनुसार:",
           options: ["PCOM", "GM", "CPTM", "DRM"],
           correctAnswer: 3,
        },
        {
           question: "The direction of train on a double line is generally on the left-hand line. It can be changed by the approval of:दोहरी लाइन पर ट्रेन की दिशा सामान्यतः बाईं लाइन पर होती है, इसे स्वीकृति द्वारा बदला जा सकता है:",
           options: ["GM", "CRS", "DRM", "PCOM"],
           correctAnswer: 1,
        },
        {
           question: "WTT stands for:",
           options: ["Working Time Table", "Wagon Turn Table", "Wagon Time Table", "None of these"],
           correctAnswer: 0,
        },
        {
           question: "WTT is issued by:",
           options: ["GM", "DRM", "CPTM", "PCOM"],
           correctAnswer: 3,
        },
        {
           question: "WTT is issued:",
           options: ["Zone wise", "Division wise", "Notice station wise", "For entire railway"],
           correctAnswer: 1,
        },
        {
           question: "Sectional Speed for the section is set by:सेक्शन के लिए खंडीय गति सेट की जाती है:",
           options: ["CRS", "PCOM", "GM", "DRM"],
           correctAnswer: 0,
        },
        {
           question: "MPS of a section is sanctioned by:एक सेक्शन की अधिकतम अनुमत गति (MPS) को स्वीकृत किया जाता है:",
           options: ["CRS", "PCOM", "GM", "DRM"],
           correctAnswer: 0,
        },
        {
           question: "When the speedometer of a train becomes defective en route, the train shall work with speed:जब ट्रेन के स्पीडोमीटर में मार्ग में खराबी हो जाती है, तो ट्रेन को",
           options: ["10% less than permissible speed", "8% less than MPS", "15% less than sectional speed", "5% less than MPS"],
           correctAnswer: 0,
        },
        {
           question: "When the speedometer of a train becomes defective:जब ट्रेन के स्पीडोमीटर में खराबी हो जाती है:",
           options: ["Only MPS reduces by 10%", "Only sectional speed reduces by 10%", "Both MPS and sectional speed reduce by 10%", "None of these"],
           correctAnswer: 2,
        },
        {
           question: "Caution order is issued for a train by:चेतावनी आदेश एक ट्रेन के लिए जारी किया जाता है:",
           options: ["Guard of the Train", "PWI of the section", "DSO", "Station Master"],
           correctAnswer: 3,
        },
        {
           question: "There are ______ types of caution orders.",
           options: ["Two", "Four", "Three", "Five"],
           correctAnswer: 2,
        },
        {
           question: "Reminder caution is issued in prescribed form no:रीमाइंडर चेतावनी निर्धारित फार्म संख्या में जारी की जाती है:",
           options: ["T/409", "T/A-409", "T/B-409", "None"],
           correctAnswer: 2,
        },
        {
           question: "Notice Station issues the caution order for a train in form no:नोटिस स्टेशन किसी ट्रेन के लिए चेतावनी आदेश किस फार्म संख्या में जारी करता है:",
           options: ["T/409", "T/A-409", "T/B-409", "None"],
           correctAnswer: 0,
        },
        {
           question: "When a new signal is erected or there is a change in the location, a Caution Order shall be issued for a period of:जब नया सिग्नल स्थापित किया जाता है या स्थान में बदलाव होता है, तो चेतावनी आदेश कितने समय के लिए जारी किया जाता है:",
           options: ["15 days", "90 days", "30 days", "45 days"],
           correctAnswer: 1,
        },
        {
           question: "A Caution Order is issued for a train when:चेतावनी आदेश एक ट्रेन के लिए तब जारी किया जाता है जब:",
           options: ["Train will receive on a non-signal line", "Home signal is defective", "Train will stable at the next station", "Vehicle will be detached at the next station"],
           correctAnswer: 0,
        },
        
         {
        `   question: "Form no. of caution order register/urgent order book is:चेतावनी आदेश रजिस्टर/अर्जेंट आदेश पुस्तक का फार्म नंबर:",
           options: ["OP/T 469", "OP/T 421", "OP/T 28 R", "OP/T 28"],
           correctAnswer: 0,
        },
        {
           question: "Preservative period of caution order register is:चेतावनी आदेश रजिस्टर का संरक्षण अवधि:",
           options: ["1 year", "2 years", "3 years", "4 years"],
           correctAnswer: 0,
        },
        {
           question: "Reminder caution order is issued when-रीमाइंडर चेतावनी आदेश तब जारी किया जाता है जब:",
           options: [
            "DCO is not issued",
            "NIL caution order is issued",
            "Caution order is included in DCO but train is scheduled to stop or stop out of course",
            "None of these"
            ],
           correctAnswer: 2,
        },
        {
           question: "A caution order may be-",
           options: [
            "Authority for shunting",
            "Authority to proceed",
            "Authority for advance pilot in",
            "Authority for pilot in"
            ],
           correctAnswer: 1,
        },
        {
           question: "Permanent speed restriction is mentioned in-स्थायी गति सीमा का उल्लेख:",
           options: ["WTT", "Caution order register", "DCO", "Reminder caution order"],
           correctAnswer: 0,
        },
        {
           question: "For the departure of a train from station, a loco pilot must have-किसी ट्रेन के स्टेशन से प्रस्थान के लिए, लोको पायलट के पास क्या होना चाहिए:",
           options: [
            "Authority to proceed",
            "Caution order",
            "Guard’s signal",
            "All of these"
            ],
           correctAnswer: 3,
        },
        {
           question: "Reminder caution must be issued to all:रीमाइंडर चेतावनी सभी को जारी की जानी चाहिए:",
           options: [
            "Scheduled stopping train",
            "Passenger train",
            "Superfast train",
            "Light engine"
            ],
           correctAnswer: 0,
        },
        {
           question: "Reminder caution order may be issued to through trains-स्मरण सावधानी आदेश ट्रेनों को जारी किया जा सकता है-",
           options: [
            "With tangible Authority",
            "By stopping it out of course",
            "Through Walkie Talkie",
            "None of these"
            ],
           correctAnswer: 0,
        },
        {
           question: "Caution order summary at station is prepared by,स्टेशन पर सावधानी आदेश सारांश तैयार किया जाता है--",
           options: [
            "PWI of the section",
            "On duty ASM",
            "Station Master (incharge)",
            "On duty SCR"
            ],
           correctAnswer: 2,
        },
        {
           question: "Caution order summary is prepared on every-सावधानी आदेश सारांश प्रत्येक दिन तैयार किया जाता है-",
           options: ["Sunday", "Thursday", "Saturday", "Monday"],
           correctAnswer: 3,
        },
        {
           question: "The serial no. of Caution order register must be of one set which is commenced from the day of-सावधानी आदेश रजिस्टर का क्रमांक एक सेट का होना चाहिए, जो दिन से प्रारंभ होता है-",
           options: ["1st Jan", "1st Dec", "1st July", "1st April"],
           correctAnswer: 0,
        },
        {
           question: "The LP must hand over the caution order after completion of journey to-लोको पायलट को यात्रा समाप्ति के बाद सावधानी आदेश सौंपना आवश्यक है-",
           options: ["SM", "Guard", "DSO", "Not required to hand over"],
           correctAnswer: 0,
        },
        {
           question: "Speed over non-interlocked point is,non-interlockedपॉइंट पर गति-",
           options: [
            "Not exceed than 15 kmph","Not exceed than 30 kmph", "As per SM advice","As per approved special instruction"],
           correctAnswer: 1,
        },
        {
           question: "Speed over turnout is prescribed by-टर्नआउट पर गति निर्धारित की जाती है-",
           options: ["CRS", "PCOM", "GM", "PCE"],
           correctAnswer: 0,
        },
        {
           question: "Max. speed of train while pushing-ट्रेन की अधिकतम गति जब पीछे की ओर धक्का दिया जा रहा हो-",
           options: ["25 kmph", "40 kmph", "15 kmph", "30 kmph"],
           correctAnswer: 0
        },
        {
           question: "Max. speed of patrol or search light special with one or more vehicles leading-एक या अधिक वाहनों के साथ पेट्रोल या सर्चलाइट विशेष की अधिकतम गति-",
           options: ["25 kmph", "40 kmph", "15 kmph", "30 kmph"],
           correctAnswer: 1,
        },
        {
           question: "When the headlight is defective speed of the train is-जब हेडलाइट खराब हो, तो ट्रेन की गति: कम कर दी जाती है।",
           options: ["20 kmph", "40 kmph", "15 kmph", "30 kmph"],
           correctAnswer: 0,
        },
        {
           question: "When the headlight is defective train will proceed up to,जब हेडलाइट खराब हो जाती है, तो ट्रेन आगे बढ़ेगी",
           options: [
            "Up to next station","Up to destination","First station where repairing facility exists","Up to notice station"
            ],
           correctAnswer: 2,
        },
       {
        question: "Which coupling is in the engine? इंजन में कौन coupling है",
        options: ["Tc", "shaku", "H", "Nt"],
        correctAnswer: 0,
      },
      {
        question: "What type of accident is a passenger run-over? Passenger का रन ओवर किस प्रकार की दुर्घटना है",
        options: ["P", "R", "Q", "L"],
        correctAnswer: 0,
      },
      {
        question: "In which part of SWR is line blocking mentioned? लाइन को ब्लॉक करना SWR के किस भाग में है",
        options: ["9", "7", "6", "5"],
        correctAnswer: 1,
      },
      {
        question: "Full form of MMD? फुल फॉर्म ऑफ MMD",
        options: ["All", "Multy model dimensions", "Multiple model dimensions", "Multy moving dimensions"],
        correctAnswer: 3,
      },
      {
        question: "IBS is a station of which type? IBS एक स्टेशन है",
        options: ["Un manned", "All", "D class", "Manned"],
        correctAnswer: 3,
      },
      {
        question: "How many constitutions are currently in force? वर्तमान में कितना संविधान चल रहा है",
        options: ["128", "129", "130", "121"],
        correctAnswer: 1,
      },
      {
        question: "Number of explosive wagons allowed in parcel and mixed trains? पार्सल और मिक्सड ट्रेन में विस्फोटक वैगन की संख्या",
        options: ["2", "5", "8", "3"],
        correctAnswer: 3,
      },
      {
        question: "India's shortest NH is in which state? भारत का सबसे छोटा NH किस राज में है",
        options: ["Sikkim", "Arunachal Pradesh", "Goa", "Kerala"],
        correctAnswer: 3,
      },
      {
        question: "Lobby VKI number in Adra division? आद्रा division में लॉबी vki संख्या",
        options: ["6", "4", "5", "7"],
        correctAnswer: 1
      },
      {
        question: "Prize money for the first winner of Premchand & Maithili Sharan Gupta Award? प्रेमचंद & मैथिली शरण गुप्त अवार्ड में प्रथम विजेता को कितनी राशि दी जाती है",
        options: ["50000", "10000", "5000", "15000"],
        correctAnswer: 3,
      },
      {
        question: "Section clearing speed for a flat tire train? Flat टायर युक्त ट्रेन की सेक्शन क्लियरिंग स्पीड",
        options: ["30", "25", "40", "20"],
        correctAnswer: 3,
      },
      {
        question: "Authority communication breaks down on D/L? D/L पर संचार व्यवस्था भंग होने पर क्या दिया जाएगा",
        options: ["Nt", "T/A602", "T/C602", "T/B602"],
        correctAnswer: 3
      },
      {
        question: "Mata Vaishno Devi Katra station is in which division? Mata Vaishno Devi कटरा स्टेशन किस डिविजन में है",
        options: ["Jammu", "Ambala", "Ludhiana", "Firozpur"],
        correctAnswer: 3,
      },
      {
        question: "Who invented the gas engine? गैस इंजन कि खोज किसने की",
        options: ["none of these", "Stephenson", "Daimler/डेमलर", "Jems watt/जेम्स वॉट"],
        correctAnswer: 2,
      },
      {
        question: "Btpn ka loading time",
        options: ["3", "4.5", "5", "4"],
        correctAnswer: 2,
      },
      {
        question: "Rail Minister Essay Competition is held in which month? रेल मंत्री निबंध प्रतियोगिता का आयोजन किया जाता हैं",
        options: ["September /सितंबर", "March /मार्च", "April/अप्रैल", "January/जनवरी"],
        correctAnswer: 3,
      },
      {
        question: "Which company is building India's first private coach factory? पहला प्राइवेट कोच फैक्ट्री कौन कंपनी बना रही है",
        options: ["सीमेंस", "Alstom", "Adani", "Medha"],
        correctAnswer: 3,
      },
      {
        question: "hat % of CTG is given for a 20 km transfer based on basic? 20km दूरी में ट्रांसफर होने पर कितना %CTG मिलेगा बेसिक का",
        options: ["50", "10", "20", "30"],
        correctAnswer: 3,
      },
      {
        question: "color of T/509",
        options: ["black", "red", "blue", "green"],
        correctAnswer: 2,
      },
      {
        question: "Who is the current Foreign Secretary? वर्तमान में विदेश सचिव कौन है",
        options: ["Suman beri", "Bikram Mistry", "Sanjay Malhotra", "Rajeev kumar"],
        correctAnswer: 1,
      },
      {
        question: "How many copies of the parcel summary are made? पार्सल समरी कितना कॉपी में बनता है",
        options: ["3", "4", "5", "2"],
        correctAnswer: 3,
      },
      {
        question: "Head of the Operating Department in the Railway Board? Railway board में ऑपरेटिंग विभाग का हेड है",
        options: ["Operation & Business Development", "None of these", "Chief of traffic", "member of railway board operation"],
        correctAnswer: 0,
      },
      {
        question: "Identification of an auto signal? Auto सिग्नल की पहचान",
        options: ["yellow circle with white A/पिला चक्री में सफेद", "black circle with white A/काला चक्री में सफेद A", "White circle with black A/सफेद चक्री में काला A", "White circle with illuminated A/सफेद चक्री में illuminated A"],
        correctAnswer: 2,
      },
      {
        question: "In which part of the fog signal register is detonator testing mentioned? डेटोनेटर की टेस्टिंग फाग सिग्नल रजिस्टर के किस पार्ट में है",
        options: ["3", "4", "2", "1"],
        correctAnswer: 1,
      },
      {
        question: "Adequate distance in an automatic(S/L) section ? S/L automatic section में पर्याप्त दूरी है",
        options: ["400", "120", "180", "240"],
        correctAnswer: 2,
      },
      {
        question: "TA for duty travel exceeding 6 hours? 6 घंटे से अधिक समय यात्रा ड्यूटी पर कितना TA मिलता है",
        options: ["Nt", "100%", "70%", "30%"],
        correctAnswer: 2,
      },
      {
        question: "How many copies of the forwarding note are made?",
        options: ["4", "3", "5", "2"],
        correctAnswer: 0,
      },
      {
        question: "Number of berths in LHB AC-2 coach?",
        options: ["48", "42", "46", "68"],
        correctAnswer: 2,
      },
      {
        question: "Minimum distance for parcels?",
        options: ["5", "2", "4", "3"],
        correctAnswer: 2,
      },
      {
        question: "Premium BPC enroute %?",
        options: ["95", "90", "70", "75"],
        correctAnswer: 3,
      },
      {
        question: "GDR time for 24 to 96 hours of stable load? 24 से 96 घंटे स्टेबल होने पर GDR का समय",
        options: ["90", "120", "45", "30"],
        correctAnswer: 0,
      },
      {
        question: "General Electric belongs to which country? General इलेक्ट्रिकल किस देश की कंपनी है",
        options: ["American", "Indian", "Japanese", "Russian"],
        correctAnswer: 0,
      },
      {
        question: "Number of detonators used for train protection in the pilot guard system? पायलट गार्ड सिस्टम में ट्रेन की सुरक्षा कितना पटाखा से होता है",
        options: ["1", "3", "2", "4"],
        correctAnswer: 1,
      },
      {
        question: "When is WTT implemented? WTT कब लागू किया जाता है",
        options: ["जून", "नवम्बर", "अक्टूबर", "जुलाई"],
        correctAnswer: 2,
      },
      {
        question: "Authority for sending relief engines in an auto section? ऑटो सेक्शन में रिलीफ इंजन भेजने की ऑथोरिटी",
        options: ["T/D912", "T/C912", "T/B912", "T/A912"],
        correctAnswer: 1,
      },
      {
        question: "Maximum speed in the pilot guard system? पायलट गार्ड सिस्टम में कितना मैक्सिमम स्पीड है",
        options: ["25", "50", "30", "40"],
        correctAnswer: 0,
      },
      {
        question: "Kandla Port is in which state? कांडला बंदरगाह किस राज्य में है",
        options: ["तमिलनाडु", "गुजरात", "कर्नाटक", "ओडिशा"],
        correctAnswer: 1,
      },
      {
        question: "Hospital leave duration?",
        options: ["6", "28", "12", "24"],
        correctAnswer: 1,
      },
      {
        question: "Which copy of the luggage ticket is given to the passenger? लगेज टिकट का कौन सा प्रति यात्री को दिया जाता है",
        options: ["second", "none of these", "first", "third"],
        correctAnswer: 0,
      },
      {
        question: "Maximum days for booking a locker? लॉकर को अधिकतम कितने दिनों के लिए बुक किया जा सकता है",
        options: ["15", "7", "1", "30"],
        correctAnswer: 1,
      },
      {
        question: "Who is the secretary of DRUCC? DRUCC का सचिव कौन होता है",
        options: ["ADRM", "Sr. DPO", "Sr.DCM", "DRM"],
        correctAnswer: 2,
      },
      {
        question: "Discount percentage for national-level athletes in sleeper or second class? राष्ट्रीय स्तरीय खिलाड़ियों को स्लीपर अथवा द्वितीय श्रेणी में कितना प्रतिशत कार्यालय दिया जाता है",
        options: ["25%", "75%", "50%", "100%"],
        correctAnswer: 1,
      },
      {
        question: "Free allowance for first-class pass holders? प्रथम दर्जा पास पर फ्री अलाउंस कितना है",
        options: ["70kg", "100kg", "50kg", "140kg"],
        correctAnswer: 0,
      },
      {
        question: "Under which section of the Railways Act, 1989, is an application for compensation made to the Railway Claims Tribunal? रेल अधिनियम 1989 के किस धारा के अनुसार हर्जाने के भुगतान के   लिए प्रार्थना पत्र रेल दावा अधिकरण को दिया जाता है",
        options: ["धारा 124", "धारा 125", "धारा 130", "धारा 121"],
        correctAnswer: 1,
      },
      {
        question: "Which chapter of G&SR contains rules for absence from duty? G&SR ke किस चैप्टर में ड्यूटी पर अनुपस्थिति होने का नियम है",
        options: ["2.10", "2.09", "2.07", "2.08"],
        correctAnswer: 3,
      },
      {
        question: "Free allowance for Second Class 'A' pass holders? द्वितीय दर्जा 'A' पास पर फ्री अलाउंस कितना है",
        options: ["50kg", "35kg", "40kg", "70kg"],
        correctAnswer: 0,
      },
      {
        question: "Maximum number of passengers allowed on one UTS ticket? एक UTS टिकट पर अधिकतम कितने यात्रियों की संख्या हो सकती है",
        options: ["3", "6", "4", "2"],
        correctAnswer: 2,
      },
      {
        question: "Which sub-committee of the Parliamentary Official Language Committee inspects the Ministry of Railways? रेल मंत्रालय का निरीक्षण संसदीय राजभाषा समिति की कौन सी उप समिति करती है",
        options: ["पहले", "इनमें से कोई नहीं", "तीसरी", "दूसरे"],
        correctAnswer: 3,
      },
      {
        question: "Minimum luggage fare per consignment? लगेज का न्यूनतम भाड़ा प्रति कंसाइनमेंट कितना रुपया है",
        options: ["50", "30", "10", "100"],
        correctAnswer: 1,
      },
      {
        question: "Travel allowance for staying away from headquarters for more than 6 hours but less than 12 hours? यदि मुख्यालय से 6 घंटे से अधिक परंतु 12 घंटे से कम , रहने पर यात्रा भत्ता दिया जाएगा",
        options: ["70%", "None of these", "100%", "30%"],
        correctAnswer: 0,
      },
      {
        question: "How many types of outstanding are there? आउटस्टैंडिंग कितने प्रकार के होते हैं",
        options: ["3", "1", "2", "4"],
        correctAnswer: 0,
      },
      {
        question: "Weight charged for a dog booked with a passenger in AC First Class? एक कुत्ते का वजन ऐसी प्रथम श्रेणी में यात्री के साथ बुक करने पर कितना किलोग्राम चार्ज किया जाएगा",
        options: ["20", "40", "30", "60"],
        correctAnswer: 4
      },
      {
        question: "How many hours notice is required before booking a motor car? मोटर कर बुक करने से पहले पार्टी द्वारा कम से कम कितने घंटे पहले नोटिस दिया जाएगा",
        options: ["72", "48", "24", "12"],
        correctAnswer: 1,
      },
      {
        question: "Validity of the certificate for concessions for mute or deaf persons? गूंगे या बहरे व्यक्ति को रियायत के लिए जो प्रमाण पत्र बनता है उसकी वैधता कितने साल की होती है",
        options: ["5", "7", "2", "10"],
        correctAnswer: 0,
      },
      {
        question: "Conduct rule of railway servants is mentioned in which chapter of G&SR? रेल सेवकों का आचरण G&SR के किस चैप्टर से है",
        options: ["2.11", "2.01", "None of these", "2.10"],
        correctAnswer: 3,
      },
      {
        question: "When was the Parliamentary Official Language Committee formed? संसदीय राजभाषा समिति का गठन कब हुआ",
        options: ["1955", "1957", "1976", "1967"],
        correctAnswer: 2,
      },
      {
        question: "Free allowance in AC 2 Tier/First Class (in kg)? AC2 टियर/प्रथम श्रेणी में free अलाउंस कितना है किलोग्राम में",
        options: ["50", "70", "100", "150"],
        correctAnswer: 0,
      },
      {
        question: "Engineering allowance for loco men and traffic men is mentioned in? इंजिनियरिंग अलाउंस लोको मेन और ट्रेफिक मेन उल्लेखित है",
        options: ["G and SR", "SWR", "WTT", "Block manual"],
        correctAnswer: 2,
      },
      {
        question: "Color of the VTO? दृश्यता परीक्षण खंभा का रंग होता है",
        options: ["Black and Whiteकाला एवं सफेद", "Black and Redसफेद एवं लाल", "Only Whiteकेवल सफेद", "Black and Yellowकाला एवं पीला"],
        correctAnswer: 3,
      },
      {
        question: "Validity of BPC for Intercity/DEMU trains? इंटरसिटी / डेमू  ट्रेन की बी .पी .सी की वैधता..",
        options: ["3500 किलोमीटर + 10 दिन", "350 किलोमीटर + 7 दिन", "3000 किलोमीटर + 7 दिन", "3500 किलोमीटर + 7 दिन"],
        correctAnswer: 3,
      },
      {
        question: "Number of brake cylinders in a BVZC wagon? BVZCबैगन में ब्रेक सिलेंडर की संख्या कितनी होती है",
        options: ["1", "2", "4", "8"],
        correctAnswer: 0,
      },
      {
        question: "Number of axles in a Co-Co locomotive? Co-Co मे कितना एक्सेल होता है",
        options: ["6", "8", "12", "16"],
        correctAnswer: 2,
      },
      {
        question: "After how many years did India win the ICC World Cup title? भारत ने कितने साल बाद आईसीसी विश्व कप खिताब जीता",
        options: ["10 साल", "11 साल", "12 साल", "13 साल"],
        correctAnswer: 3,
      },
      {
        question: "Signal given by train manager in case of a falling mark jam? फॉलिंग मार्क जाम होने पर स्टेशन मास्टर को ट्रेन मैनेजर रात में कौन सा संकेत बताएगा",
        options: ["GREEN", "YELLOW", "RED", "WHITE"],
        correctAnswer: 2,
      },
      {
        question: "Coach code for a kitchen car? Kitchen car का कोच कोड क्या होता है",
        options: ["CR", "CL", "Cz", "CD"],
        correctAnswer: 1,
      },
      {
        question: "Where was the first platform ticket issued? सबसे पहले प्लेटफार्म टिकट कहां जारी हुआ था",
        options: ["NEW DELHI", "MUMBAI", "KARACHI", "LAHORE"],
        correctAnswer: 3,
      },
      {
        question: "When was Indian Railways nationalized? भारतीय रेलवे का राष्ट्रीयकरण कब हुआ",
        options: ["1905", "1890", "1984", "1950"],
        correctAnswer: 3,
      },
      {
        question: "Who presented the first Railway Budget? प्रथम रेल बजट किसने पेश किया था",
        options: ["आसिफ अली", "लाल बहादुर शास्त्री", "जॉन मथाई", "जगजीवन राम"],
        correctAnswer: 2,
      },
      {
        question: "Number of non-AC travel classes in Indian Railways? भारतीय रेलवे में यात्रा करने की नॉन एसी श्रेणियां कितनी है",
        options: ["TWO", "THREE", "FOUR", "FIVE"],
        correctAnswer: 1,
      },
      {
        question: "Number of AC travel classes in Indian Railways? भारतीय रेलवे में यात्रा करने की कितनी AC श्रेणियां है",
        options: ["2", "5", "4", "6"],
        correctAnswer: 3,
      },
      {
        question: "Color of PW BIL? PW BIL का रंग कैसा होता है",
        options: ["GREEN", "CHOCOLATE", "WHITE", "BROWN"],
        correctAnswer: 0,
      },
      {
        question: "Number of DTC book? DTC बुक का नंबर क्या है",
        options: ["SN- 27", "SN-1", "SN-21", "SN-22"],
        correctAnswer: 3,
      },
      {
        question: "Which class of students are issued free MST? किस कक्षा के छात्रों को फ्री MST जारी की जाती है",
        options: ["8", "10", "12", "Graduate"],
        correctAnswer: 2,
      },
      {
        question: "Total number of PRS in Indian Railways? भारतीय रेलवे में कुल कितने PRS है",
        options: ["16", "5", "4", "इनमें से कोई नहीं"],
        correctAnswer: 1,
      },
      {
        question: "In which part of the fog signal register is detonator testing mentioned? डेटोनेटर की टेस्टिंग फाग सिग्नल रजिस्टर के किस पार्ट में है",
        options: ["3", "4", "2", "1"],
        correctAnswer: 1,
      },
      {
        question: "Adequate distance in an automatic section (S/L)? S/L automatic section में पर्याप्त दूरी है",
        options: ["400", "120", "180", "240"],
        correctAnswer: 2,
      },
      {
        question: "TA for duty travel exceeding 6 hours? 6 घंटे से अधिक समय यात्रा ड्यूटी पर कितना TA मिलता है",
        options: ["Nt", "100%", "70%", "30%"],
        correctAnswer: 2,
      },
      {
        question: "Number of copies of the forwarding note? Forwarding note kitna कॉपी में बनता हैं",
        options: ["4", "3", "5", "2"],
        correctAnswer: 0,
      },
      {
        question: "Number of berths in LHB AC-2 coach? LHB कोच ऐसी2 में बर्थ की संख्या",
        options: ["48", "42", "46", "68"],
        correctAnswer: 2,
      },
       {
      question: "ON aspect means. ऑन अस्पेक्ट का मतलब क्या होता हैं.",
      options: ["Danger", "Caution", "Most restrictive", "Proceed"],
      correctAnswer: 2,
    },
    {
      question: "calling on signal is identified by. कालिंग ऑन सिग्नल की पहचान क्या है.",
      options: ["G MARKER", "C MARKER", "P MARKER", "ALL THE ABOVE"],
      correctAnswer: 1,
    },
    {
      question: "Which one of the following is permissive signal.निम्न में परमिसिव सिग्नल कौन हैं.",
      options: ["HOME", "STARTER", "DISTANT", "NONE OF THE ABOVE"],
      correctAnswer: 2,
    },
    {
      question: "LTM is prepared by. LTM किसके द्वारा तैयार किया जाता हैं.",
      options: ["LP", "TM", "SM", "SCNL"],
      correctAnswer: 1,
    },
    {
      question: "How many wagon does a standard NMG rake consist of? मानक NMG रेक में कितने वैगन होते हैं.",
      options: ["25", "30", "58", "59"],
      correctAnswer: 0,
    },
    {
      question: "permanenet speed restriction are notified through. स्थाई गति प्रतिबंध का उल्लेख कँहा रहता हैं.",
      options: ["PTT", "WTT", "SWR", "GWR"],
      correctAnswer: 1,
    },
    {
      question: "whistle code for Train Parting is. गाड़ी बिखंडन के लिए सिटी कोड क्या हैं.",
      options: ["Four short", "long short long short", "Three long", "two short"],
      correctAnswer: 1,
    },
    {
      question: "Turning time of MRV single exit is.सिंगल निकासी में MRV को बाहर करने का समय क्या हैं.",
      options: ["20 minutes", "25 minutes", "45 minutes", "30 minutes"],
      correctAnswer: 1,
    },
    {
      question: "CRIS was established in the year. क्रिस की स्थापना कब हुई थी.",
      options: ["1982", "1986", "1988", "1984"],
      correctAnswer: 1,
    },
    {
      question: "CBC Means. CBC का मतलब क्या होता हैं.",
      options: ["Centre Buffer coupling", "IR Coupling", "Centre Ball Bearing", "none of the above"],
      correctAnswer: 0,
    },
    {
      question: "What is the Colour of Feed pipe? फीड पाइप का रंग क्या होता हैं.",
      options: ["GREEN", "WHITE", "RED", "NONE OF THE ABOVE"],
      correctAnswer: 1,
    },
    {
      question: "Trap point in Loop line protect which line. लूप लाइन का ट्रैप पॉइंट किसकी रक्षा करती हैं.",
      options: ["Running line", "Main line", "Siding line", "None of the above"],
      correctAnswer: 1,
    },
    {
      question: "RDSO Situated at. RDSO का मुखयालय कँहा हैं.",
      options: ["Mumbai", "Kanpur", "Lucknow", "Kolkata"],
      correctAnswer: 2,
    },
    {
      question: "WLRRM means in LHB Coach. WLRRM का मतलब क्या होता LHB कोच में.",
      options: ["AC 2 TIER", "AC 3 TIER", "GENRAL COACH", "TM VAN"],
      correctAnswer: 3,
    },
    {
      question: "SHUNTING order FORM no is. शटिंग के लिए फॉर्म क्या हैं.",
      options: ["T/806", "T/B 912", "T/369 (3B)", "T/B 602"],
      correctAnswer: 0,
    },
    {
      question: "WHICH occasion the PN book used by TM. ट्रैन मैनेजर PN बुक का उपयोग कब करता हैं.",
      options: ["COMPLETE ARRIVAL", "TRAIN PARTING", "DIVIDING", "SHUNTING"],
      correctAnswer: 0,
    },
    {
      question: "MOCK DRILL to be conducted once in.मॉक ड्रिल कितने महीने में किया जाता हैं.",
      options: ["THREE MONTH", "TWO MONTH", "SIX MONTH", "FIVE MONTH"],
      correctAnswer: 2,
    },
    {
      question: "MAXIMUM NUMBER of LHB COACH. LHB रेक में अधिकतम कितने कोच होते हैं.",
      options: ["22+2", "20+2", "24+2", "25"],
      correctAnswer: 1,
    },
    {
      question: "HOW many brake cylinder are available in BOXNHL wagon. BOXNHL वैगन में कितना ब्रेक सिलिंडर होता हैं.",
      options: ["TWO", "FOUR", "ONE", "EIGHT"],
      correctAnswer: 1,
    },
    {
      question: "The code for eight wheeler Brake van is. आठ व्हिलेर ब्रेक वान का कोड क्या होता हैं.",
      options: ["BV", "BVZC", "BVZI", "BVCM"],
      correctAnswer: 2,
    },
     {
      question: "Principle of making time table is. समय सारणी बनाने का सिद्धांत क्या हैं?",
      options: ["Passenger convenience", "Operational need", "Running time of train", "All the above"],
      correctAnswer: 3,
    },
    {
      question: "SPAD of passenger train comes under which class of accident? यात्री गाड़ी की SPAD किस क्लास का दुर्घटना हैं?",
      options: ["D", "B", "H1", "H2"],
      correctAnswer: 2,
    },
    {
      question: "What is the duration of IOH Maintenance for conventional loco for coaching train? कोचिंग लोको जो कान्वेंशनल टाइप का होता हैं उसका IOH का समय क्या होता हैं?",
      options: ["4 Hours", "6 Hours", "6 days", "9 days"],
      correctAnswer: 3,
    },
    {
      question: "Type of marshaling yard is. मार्शलिंग यार्ड के प्रकार हैं?",
      options: ["Flat yard", "Hump yard", "Gravity yard", "All the above"],
      correctAnswer: 3,
    },
    {
      question: "Escaping of wagon in right line on D/L section what beats given to advance station? डबल लाइन के सेक्शन में सही लाइन से गाड़ी भागने पर क्या बीट दिया जाता हैं?",
      options: ["6 pause 4", "6 pause 5", "6 pause 1", "6 pause 2"],
      correctAnswer: 1,
    },
    {
      question: "Gross clearance of C class ODC is. C क्लास ODC के लिए कितना ग्रॉस क्लियरन्स होना चाहिए?",
      options: ["more than 3 inch and less than 6 inch", "more than 6 inch and less than 9 inch", "more than 9 inch", "All the above"],
      correctAnswer: 0,
    },
    {
      question: "Validity of special premium BPC is. स्पेशल प्रीमियम BPC की बैधता क्या होती हैं?",
      options: ["12 + 3 days", "12+ 5 days", "20+ 5 days", "none of the above"],
      correctAnswer: 1,
    },
    {
      question: "Master chart is prepared by. मास्टर चार्ट किसके द्वारा तैयार किया जाता हैं?",
      options: ["Sr. DOM", "PCOM", "Chief controller", "AOM"],
      correctAnswer: 2,
    },
    {
      question: "Roll on -Roll off plan was introduced first where? रोल ऑन रोल ऑफ योजना कहाँ प्रारम्भ किया गया था?",
      options: ["ECR", "ER", "KOKAN RAILWAY", "NR"],
      correctAnswer: 2,
    },
    {
      question: "Standard rake of BOXNHL is. BOXNHL का मानक रेक कितने वैगन का होता हैं?",
      options: ["59", "58", "42", "35"],
      correctAnswer: 1,
    },
    {
      question: "What is the full form of POH? POH का फुल फॉर्म क्या होता हैं?",
      options: ["Partial overhauling", "Periodical overhauling", "Particular overhauling", "Part overhauling"],
      correctAnswer: 1,
    },
    {
      question: "Block Back and Block Forward are related to. ब्लॉक बैक और ब्लॉक फॉरवर्ड किससे सम्बन्धित हैं?",
      options: ["Signal failure", "Shunt movement", "Caution movement", "Block failure"],
      correctAnswer: 1,
    },
    {
      question: "Which is not a caution order form? कौन सा सावधानी आदेश प्रपत्र नहीं है?",
      options: ["T/409", "T/A 409", "T/B 409", "T/609"],
      correctAnswer: 3,
    },
    {
      question: "How much depth of ballast is available in BG group A route below the bottom of the sleeper? BG में A मार्ग में स्लीपर के नीचे बल्लास्ट की गहराई कितना होता है।",
      options: ["300MM", "250MM", "200MM", "150MM"],
      correctAnswer: 0,
    },
    {
      question: "Creep is related to. क्रीप का सम्बन्ध किस से हैं?",
      options: ["wagon", "engine", "track", "none of the above"],
      correctAnswer: 2,
    },
    {
      question: "The normal height of contact wire in regulated OHE section is. रेगुलेटेड OHE सेक्शन में कॉन्टेक्ट तार की ऊंचाई क्या होती हैं?",
      options: ["5.75m", "5.60m", "5.65m", "4.65m"],
      correctAnswer: 1,
    },
    {
      question: "Which loco is used for both services (passenger and freight)? किस लोको का उपयोग दोनों सर्विस में होता हैं?",
      options: ["WAG5", "WAG7", "WAM4", "WAP4"],
      correctAnswer: 2,
    },
    {
      question: "What type of pantograph is used in Indian railway for 25KV AC electric loco? भारतीय रेलवे में 25 KV AC के लिए किस प्रकार के पेंटोग्राफ का उपयोग होता हैं?",
      options: ["AM12", "AM10", "AM14", "All the above"],
      correctAnswer: 0,
    },
    {
      question: "Under Running staff review, 1 (one) shunter is demanded for rest giver for how many shunters? कितने शंटर के लिए एक शंटर की व्यवस्था रनिंग स्टाफ रिव्यू के अंतर्गत की जाती हैं?",
      options: ["6", "8", "4", "10"],
      correctAnswer: 0,
    },
    {
      question: "Wagon km is an example of? वैगन किलोमीटर किस इकाई का उदाहरण हैं?",
      options: ["Primary unit", "Fundamental unit", "Derived unit", "None of the above"],
      correctAnswer: 2,
    },
    {
      question: "Division time table meeting is held in which month? मण्डल समय सारणी की बैठक किस माह में होती हैं?",
      options: ["October", "September", "December", "June"],
      correctAnswer: 1,
    },
      {
      question: "Authority to start a train from non-signalled line of a station is. किसी स्टेशन की गैर-सिग्नल लाइन से ट्रेन खुलाने के लिए प्राधिकार है..",
      options: ["T/369(3b)", "T/511", "T/512", "T/509"],
      correctAnswer: 1,
    },
    {
      question: "Authority to start a train from a line with common starter signal is सामान्य स्टार्टर सिग्नल वाली लाइन से ट्रेन खुलाने के लिए प्राधिकार है?",
      options: ["T/512", "T/511", "T/509", "T/510"],
      correctAnswer: 0,
    },
    {
      question: "Shunting order form is शंटिंग ऑर्डर फॉर्म है......?",
      options: ["T/806", "T/608", "T/511", "T/B806"],
      correctAnswer: 0,
    },
    {
      question: "Authority to proceed without line clear is लाइन क्लियर के बिना आगे बढ़ने का प्राधिकार _ है?",
      options: ["T/B602", "T/C602", "T/A602", "T/D602"],
      correctAnswer: 2,
    },
    {
      question: "Paper line clear ticket for UP direction is अप दिशा के लिए पेपर लाइन क्लियर टिकट _____ है।",
      options: ["T/D 1425", "T/B 1425", "T/C 1425", "T/A 1425"],
      correctAnswer: 2,
    },
    {
      question: "Conditional line clear ticket is सशर्त लाइन क्लियर टिकट _ है।",
      options: ["T/G 602", "T/F 602", "T/E 602", "T/I 602"],
      correctAnswer: 0,
    },
    {
      question: "Authority for temporary single line working on double line in absolute block section is पूर्ण ब्लॉक सेक्शन में डबल लाइन पर काम करने वाली अस्थायी सिंगल लाइन के लिए प्राधिकरण है।",
      options: ["T/A 602", "T/B 602", "T/C 602", "T/D 602"],
      correctAnswer: 3,
    },
    {
      question: "Maximum speed while shunting on T/806 is _KMPH.  टी/806 पर शंटिंग करते समय अधिकतम गति _ किमी प्रति घंटा है।",
      options: ["5", "10", "15", "20"],
      correctAnswer: 2,
    },
    {
      question: "Authority given during TFC on double line is डबल लाइन पर टीएफसी के दौरान दिया गया प्राधिकार ___ है।",
      options: ["T/A 602", "T/B 602", "T/C 602", "T/D 602"],
      correctAnswer: 2,
    },
    {
      question: "Train intact arrival register is. ट्रेन पूर्ण आगमन रजिस्टर __ है।",
      options: ["T/1410", "T/1525", "T/A1425", "TB 1425"],
      correctAnswer: 0,
    },
    {
      question: "Authority for temporary single line working on double line in automatic block section is स्वचालित ब्लॉक अनुभाग में डबल लाइन पर काम करने वाली अस्थायी सिंगल लाइन के लिए प्राधिकरण है।",
      options: ["T/B 912", "T/C 912", "T/D 912", "T/E 912"],
      correctAnswer: 3,
    },
    {
      question: "Authority to proceed for relief engine into an automatic block signalling section is स्वचालित ब्लॉक सिग्नलिंग अनुभाग में रिलीफ इंजन के लिए आगे बढ़ने का प्राधिकार _____ है।",
      options: ["T/A 912", "T/B 912", "T/C 912", "T/D 912"],
      correctAnswer: 2,
    },
    {
      question: "Motor trolley permit is ... मोटर ट्रॉली परमिट __ है।",
      options: ["T/1410", "T/1525", "T/1518", "T/1425"],
      correctAnswer: 1,
    },
    {
      question: "Authority to start a train from a line with common starter signal is सामान्य स्टार्टर सिग्नल वाली लाइन से ट्रेन खुलाने के लिए प्राधिकार है?",
      options: ["T/512", "T/511", "T/509", "T/510"],
      correctAnswer: 0,
    },
    {
      question: "Shunting order form is शंटिंग ऑर्डर फॉर्म है......?",
      options: ["T/806", "T/608", "T/511", "T/B806"],
      correctAnswer: 0,
    },
    {
      question: "Authority to proceed without line clear is लाइन क्लियर के बिना आगे बढ़ने का प्राधिकार _ है?",
      options: ["T/B602", "T/C602", "T/A602", "T/D602"],
      correctAnswer: 2,
    },
    {
      question: "Paper line clear ticket for UP direction is अप दिशा के लिए पेपर लाइन क्लियर टिकट _____ है।",
      options: ["T/D 1425", "T/B 1425", "T/C 1425", "T/A 1425"],
      correctAnswer: 2,
    },
        {
          question: "Authority to start a train from non-signalled line of a station is.किसी स्टेशन की गैर-सिग्नल लाइन से ट्रेन खुलाने के लिए प्राधिकार है..",
          options: ["T/369(3b)", "T/511", "T/512", "T/509"],
          correctAnswer:1,
        },
        {
         question: "The fixed stop signal of a station controlling the entry of trains into the next block section is",
         options: ["First Stop Signal", "Last Stop Signal", "Gate Stop Signal", "None of these"],
         correctAnswer: 1,
      },
      {
        question: "Shunt signal is a .... signal.",
        options: ["Subsidiary Signal", "Stop Signal", "Permissive Signal", "Special Signal"],
        correctAnswer: 0,
      },
      {
        question: "Detonating signals are otherwise known as..... Signal",
        options: ["Hand Signal", "Fog Signal", "Fixed Signal", "Warning Signal"],
        correctAnswer: 1,
      },
      {
        question: "Form Number of pilot in/out memo is",
        options: ["T/A602", "T/409", "T/806", "T/369/3b"],
        correctAnswer: 3,
      },
      {
        question: "Under approved special instructions, a colour light Distant signal may be combined with-",
        options: [
          "Last stop signal of rear station",
          "Gate stop signal",
          "Intermediate Block Stop Signal",
          "All of these",
        ],
        correctAnswer: 3,
      },
      {
        question: "Last Stop Signal may be either-",
        options: [
          "Advanced Starter of a station",
          "Starter signal if Advanced Starter is not provided",
          "Home signal at C class station",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question: "Intermediate Block Stop Signal is the......signal provided at intermediate Block Post.",
        options: ["Advanced starter", "Starter", "Home", "None of the above"],
        correctAnswer: 2,
      },
      {
        question: "Automatic Stop Signal is provided with .....marker",
        options: ["A marker", "B marker", "C marker", "D marker"],
        correctAnswer: 0,
      },
      {
        question: "A Calling-on signal may be provided below a stop signal except-",
        options: ["First Stop Signal", "Last Stop Signal", "Gate Stop Signal", "None of these"],
        correctAnswer: 1,
      },
      {
        question: "A miniature colour light Calling-on signal is provided with.....",
        options: ["C marker", "P marker", "A marker", "G marker"],
        correctAnswer: 0,
      },
      {
        question: "A Calling-on signal shall show....... in the on position.",
        options: ["Yellow light", "No light", "Red light", "Green light"],
        correctAnswer: 1,
      },
      {
        question: "A Calling-on signal can be used in-",
        options: [
          "To admit a train obstructed line",
          "To avoid Pilot-in and Pilot-out process",
          "During Shunting operation",
          "All of the above",
        ],
        correctAnswer: 3,
      },
      {
        question:
          "A Shunt signal may be placed on a post by itself or below a stop signal other than the.....of a station.",
        options: [
          "Last stop signal",
          "First stop signal",
          "Either First or Last stop signal",
          "Neither First or Last stop signal",
        ],
        correctAnswer: 1,
      },
      {
        question: "Co-acting signals are......signals fixed below ordinary signals.",
        options: ["Stop signals", "Permissive signals", "Duplicate signals", "None of the above"],
        correctAnswer: 2,
      },
      {
        question:
          "When a stop signal cannot be seen from the sighting distance on account of curves, Over bridges or other local conditions, a .... shall be provided.",
        options: ["Repeating signal", "Co-acting signal", "Shunt signal", "Calling-on signal"],
        correctAnswer: 0,
      },
      {
        question:
          "Where a colour light Distant Signal is combined with a Last Stop Signal, ....... Marker shall be dispensed with.",
        options: ["A", "S", "W", "P"],
        correctAnswer: 3,
      },
      {
        question:
          "Gate Stop signal provided in Automatic Block territory, letter A shall be lit only when the gates are closed and locked against....",
        options: ["Road traffic", "Rail traffic", "Either Road or Rail traffic", "None of the above"],
        correctAnswer: 0,
      },
      {
        question:
          "Signal Sighting Committee consists of DTI, LI, Signal Inspector and ..as a member in electrified sections.",
        options: ["PWI", "Train Examiner", "Driving Inspector", "Loco Inspector"],
        correctAnswer: 2,
      },
      {
        question: "Normal aspect of Gate cum Distant signal is..",
        options: ["Stop", "Proceed", "Caution", "None of the above"],
        correctAnswer: 0,
      },
      {
        question: "Fixed signals, except Automatic signals, shall always show their... Aspect in their normal position.",
        options: ["stop", "Proceed", "Most restrictive", "Proceed with caution"],
        correctAnswer: 2,
      },
      {
        question: "The normal aspect of an Automatic Stop signal is ...",
        options: ["stop", "Proceed", "Either Stop or Proceed", "Either On or Off"],
        correctAnswer: 1,
      },
      {
        question:
          "Slip Siding is provided where down gradient of ... or steeper is there from station section towards block section.",
        options: ["1:80", "1:100", "1:200", "1:260"],
        correctAnswer: 1,
      },
      {
        question: "Block Section Limit Board may be provided at... class of station on Double Line.",
        options: ["A", "B", "C", "D"],
        correctAnswer: 1,
      },
      {
        question: "The life span of Detonators is..... Years from the year of manufacture.",
        options: ["7", "5", "8", "10"],
        correctAnswer: 1,
      },
      {
        question: "The safety radius of Detonators is-",
        options: ["20m", "30m", "45m", "90m"],
        correctAnswer: 2,
      },
      {
        question:
          "Detonators shall be tested under the wheels of any empty wagon pushed by a locomotive at a restricted speed of",
        options: ["8 to 12 kmph", "10 to 15 kmph", "Up to 15 kmph", "5 to 8 kmph"],
        correctAnswer: 0,
      },
      {
        question: "Red flashing hand signal lamp at night or a red flag during day is a",
        options: ["Stop Signal", "Warner Signal", "Warning Signal", "Detonating Signal"],
        correctAnswer: 2,
      },
      {
        question: "The Form No. of Station Detonator Register is-",
        options: ["OP/T437", "OP/T28(R)", "OP/T48", "OP/T124"],
        correctAnswer: 3,
      },
      {
        question: "Fog Signal Post (FSP) is erected at a distance of..... meters from the First Stop Signal.",
        options: ["180m", "200m", "250m", "270m"],
        correctAnswer: 3,
      },
      {
        question: "Normal aspect of IB Signal is.......",
        options: ["stop", "Proceed", "caution", "Attention"],
        correctAnswer: 0,
      },
      {
        question:
          "Visibility Test Object (VTO) is provided for the judgment of Foggy weather at a distance of ..... meters from the centre of station building in MACLS-",
        options: ["45m", "120m", "180m", "270m"],
        correctAnswer: 2,
      },
      {
      "question": "Normal aspect of gate Signal is.......",
      "options": ["Stop", "Proceed", "Caution", "Attention"],
      "correctAnswer": 0
      },
       {
              "question": "Maximum speed of trains during thick and foggy weather in Absolute Block System is.... Kmph when signal is showing green.",
              "options": ["60 kmph", "75 kmph", "60 kmph and 75 kmph when Fog Safe kmph Device(FSD) is provided in Locomotive", "Not more than 90"],
              "correctAnswer": 2
          },
          {
              "question": "Catch Siding is provided to protect-",
              "options": ["Block Section", "Station Section", "Station Limit", "Neutral Section"],
              "correctAnswer": 1
          },
          {
              "question": "At a C class station, in absence of a Starter, .... signal is the Last Stop Signal.",
              "options": ["Outer", "Home", "Routing", "Distant"],
              "correctAnswer": 1
          },
          {
              "question": "A light waved violently shall be used as a Stop signal only when the red light is not available.",
              "options": ["White", "Green", "Both of the above", "None of the above"],
              "correctAnswer": 0
          },
          {
              "question": "When a train has to be admitted on loop line, Distant signal will show ... light where Inner Distant is provided.",
              "options": ["Yellow", "Double Yellow", "Green", "No light"],
              "correctAnswer": 1
          },
          {
              "question": "Outer, Home and...... cannot be used during Shunting operation-",
              "options": ["Calling-on Signal", "Starter Signal", "Last Stop Signal", "First Stop Signal"],
              "correctAnswer": 2
          },
          {
              "question": "Slip Siding is intended to protect",
              "options": ["Station Section", "Station Limit", "Block Section", "Neutral Section"],
              "correctAnswer": 2
          },
          {
              "question": "In regard to Multiple-Aspect signals, the minimum visibility distance for all signals shall be-",
              "options": ["200m", "400m", "1.2km", "Signal shall be visible for a minimum period of 5 sec at m.p.s. of the section"],
              "correctAnswer": 3
          },
          {
              "question": "Home Signal of Intermediate Block Post is identified by .. marker.",
              "options": ["R", "g", "IB", "1D"],
              "correctAnswer": 2
          },
          {
              "question": "The Loco Pilot of a train shall not pass a stop signal without proper authority except.. . which can be passed conditionally-",
              "options": ["1BSS", "GSS", "Automatic Stop Signal", "All of the above"],
              "correctAnswer": 3
          },
          {
              "question": "Station Section is a part of Station Limit and is provided at __________ class station only.",
              "options": ["‘W’", "‘B’", "‘C’", "‘Special’"],
              "correctAnswer": 1
          },
          {
              "question": "Minimum equipment of fixed signals at a ‘B’ class station provided with MOMA signaling shall be:",
              "options": ["Warner, Home, and Starter", "Distant and Home", "Distant, Home, and Starter", "Distant, Home, Starter, and Advanced Starter"],
              "correctAnswer": 2
          },
          {
              "question": "The ‘S’ marker board is provided at a distance of __________ meters in the facing points of every outlying siding.",
              "options": ["30m", "45m", "800m", "1200m"],
              "correctAnswer": 0
          },
          {
              "question": "The form number of the Advance Pilot-in-Memo is:",
              "options": ["T/351", "T/369(1)", "T/369(3b)", "T/375"],
              "correctAnswer": 1
          },
          {
              "question": "The form number of the Pilot-in and Pilot-out memo is:",
              "options": ["T/351", "T/369(1)", "T/369(3b)", "T/375"],
              "correctAnswer": 2
          },
          {
              "question": "USR stands for:",
              "options": ["Unified Special Restriction Rules", "Unified Subsidiary Rules", "Under Special Restriction", "None of the above"],
              "correctAnswer": 1
          },
          {
              "question": "The form number for Disconnection/Re-connection Notice is:",
              "options": ["T/351", "T/369(1)", "T/369(3b)", "T/375"],
              "correctAnswer": 0
          },
          {
              "question": "When a signal shows more than one aspect simultaneously, such a signal is treated as:",
              "options": ["Correct signal", "Defective signal", "Following signal", "None of the above"],
              "correctAnswer": 1
          },
          {
              "question": "The stop board is fixed in the __________ of the train during C&W examination of a rake.",
              "options": ["Left", "Right", "Middle", "None of the above"],
              "correctAnswer": 2
          },
          {
              "question": "The station at which an authority to proceed is given is known as:",
              "options": ["Notice station", "Interlocked station", "Block station", "Non-block station"],
              "correctAnswer": 2
          },
          {
              "question": "For passing a Gate Stop signal at ‘ON’, the Loco Pilot has to wait __________ minutes in the daytime and __________ minutes at night.",
              "options": ["1 & 2", "2 & 3", "2 & 5", "5 & 5"],
              "correctAnswer": 0
          },
          {
              "question": "No LP/ALP should be put on independent duty unless they take Road Learning of the section initially for at least __________ trips in a Normal section and __________ trips in an Automatic or Ghat section.",
              "options": ["1 & 2", "3 & 3", "3 & 6", "6 & 6"],
              "correctAnswer": 2
          },
          {
              "question": "“Station Limit” is situated between the __________ of the station.",
              "options": ["Outermost stop signals", "Outermost signals", "Both of the above", "None of the above"],
              "correctAnswer": 1
          },
          {
              "question": "The sequence of taking off through signals at a station where MACL signals are provided for run-through trains with an Advanced Starter is:",
              "options": ["Home, Starter, then Adv. Starter", "Starter, Home, and then Adv. Starter", "Main Home, Adv. Starter, and then Main Starter", "None of the above"],
              "correctAnswer": 2
          },
          {
              "question": "__________ is provided in a long block section to split it into two portions, each constituting a separate block section by providing an Intermediate Block Post.",
              "options": ["Automatic Signaling", "MLQ Signaling", "Intermediate Block Signaling", "MACL Signaling"],
              "correctAnswer": 2
          },
          {
              "question": "On Single Line Intermediate Block Signaling, the line between two adjacent block stations is divided into two subsections. The 1st section is termed as ‘Station controlled intermediate block section,’ and the 2nd section is termed as:",
              "options": ["Block controlled intermediate block section", "Section controlled block section", "Advance block section", "Rear block section"],
              "correctAnswer": 0
          },
          {
              "question": "A train carrying passengers can be admitted into a goods yard or on the goods loop at a restricted speed of:",
              "options": ["08 kmph", "10 kmph", "12 kmph", "15 kmph"],
              "correctAnswer": 1
          },
          {
              "question": "If the Distant signal of an Intermediate Block Post is defective and cannot be kept in the ‘ON’ position, the Intermediate Block Stop signal shall also be treated as:",
              "options": ["Inactive", "Active", "Defective", "None of the above"],
              "correctAnswer": 2
          },

 
    // Add more TRAIN MANAGER questions here
  ],
  RAJBHASA: [
    {
      question: "दो राज्यों या दो से अधिक राज्यों के बीच संपर्क की भाषा पर किस अनुच्छेद में वर्णन किया गया है ?",
      options: ["अनुच्छेद 345", "अनुच्छेद 346", "अनुच्छेद 348", "अनुच्छेद 347"],
      correctAnswer: 1,
    },
    {
      question: "केंद्रीय हिंदी संस्थान किस मंत्रालय के अधीन है ?",
      options: ["शिक्षा मंत्रालय", "विदेश मंत्रालय", "मानव संसाधन मंत्रालय", "गृह मंत्रालय"],
      correctAnswer: 2,
    },
    {
      question: "राज्य भाषा अधिनियम का पहला संशोधन कब हुआ?",
      options: ["1955 में", "1949 में", "1953 में", "1967 में"],
      correctAnswer: 3,
    },
    {
      question: "हिंदी प्रवोद, प्रवीण , प्राग पाठ्यक्रम की अवधि क्या है ?",
      options: ["महीना 12", "महीना 5", "महीना 7", "महीना 6"],
      correctAnswer: 1,
    },
    {
      question:
        "राजभाषा 1976 के 12 नियम है हिंदी में प्राप्त पत्रों का उत्तर हिंदी में दिया जाएगा यह नियम 5 में है। हिंदी के साथ इंग्लिश का प्रयोग का वर्णन किस नियम में दिया गया है ?",
      options: ["नियम 10 में है", "नियम आठ में है", "नियम 7 में है", "नियम 6 में है"],
      correctAnswer: 3,
    },
    {
      question: "रेल हिंदी सलाहकार समिति के अध्यक्ष कौन होते हैं?",
      options: ["प्रधानमंत्री", "एडीआरएम", "रेल मंत्री", "डीआरएम"],
      correctAnswer: 2,
    },
    {
      question: "राजभाषा अधिनियम 1963 कब लागू हुआ ?",
      options: ["19 मई 1963", "19 मई 1966", "26 जनवरी 1964", "26 जनवरी 1965"],
      correctAnswer: 3,
    },
    {
      question: "किसी भी कार्यालय में नया पुस्तकालय खोलने का आधार क्या है ?",
      options: [
        "कर्मचारियों की संख्या 200 या से अधिक हो",
        "कर्मचारियों की संख्या 300 या से अधिक हो",
        "कर्मचारियों की संख्या 500 या से अधिक हो",
        "कर्मचारियों की संख्या 400 या से अधिक हो",
      ],
      correctAnswer: 1,
    },
    {
      question: "संविधान का भाग 17 कब पारित हुआ?",
      options: ["1 मार्च 1971", "14/9/1949", "26 जनवरी 1976", "5 मई 1963"],
      correctAnswer: 1,
    },
    {
      question: "प्रथम राजभाषा आयोग का गठन कब हुआ था ?",
      options: ["7 जून 1955", "17 जून 1955", "7 अगस्त 1963 को", "14 अगस्त 1955"],
      correctAnswer: 0,
    },
    {
      question: "केंद्र सरकार के कर्मचारियों के लिए भाषा प्रशिक्षण हेतु कितने पाठ्यक्रम है ?",
      options: ["चार पाठ्यक्रम", "दो पाठ्यक्रम", "पाँच पाठ्यक्रम", "तीन पाठ्यक्रम"],
      correctAnswer: 0,
    },
    {
      question:
        "तकनीकी रेल विषय पर हिंदी में मौलिक पुस्तक लिखने की गई योजना लाल बहादुर शास्त्री तकनीकी मौलिक लेखन पुरस्कार योजना है प्रथम द्वितीय तृतीय पुरस्कार राशि बताएं",
      options: ["20000 10000 7000", "20000 10000 10000", "10000 5000 5000", "10000 10000 10000"],
      correctAnswer: 0,
    },
    {
      question:
        "कथा हिंदी संग्रह एवं उपन्यास लेखन के लिए दी जाने वाली पुरस्कार प्रेमचंद पुरस्कार योजना है इसका प्रथम द्वितीय और तृतीय पुरस्कार राशि क्या है",
      options: ["10000 5000 5000", "20000 10000 5000", "20000 10000 5000", "20000 10000 7000"],
      correctAnswer: 3,
    },
    {
      question: "हिंदी माध्यम से संपूर्ण शिक्षा देने वाली देश की पहली संस्था कौन है",
      options: ["मुंबई विश्वविद्यालय", "गुरुकुल कागनी हरिद्वार", "आर्यभट्ट विश्वविद्यालय", "महर्षि ब्रह्म ऋषि विश्वविद्यालय"],
      correctAnswer: 1,
    },
    {
      question: "संसदीय राजभाषा समिति की पहली बैठक कब हुई थी",
      options: ["14 सितंबर 1962 को", "10 जनवरी 1955 को", "16 नवंबर 1957 को", "14 सितंबर 1956 को"],
      correctAnswer: 2,
    },
    {
      question: "हिंदी में प्रवीणता प्राप्त अधिकारियों को कितने प्रतिशत कार्य हिंदी में करना है आदेशित किया गया है",
      options: ["90%", "100%", "80%", "70%"],
      correctAnswer: 1,
    },
    {
      question: "संविधान के किस अनुच्छेद के प्रावधानों के अनुसार राजभाषा अधिनियम 1963 पारित हुआ",
      options: ["धारा 343 (3)", "धारा 341(1)", "धारा 343", "धारा 343 (4)"],
      correctAnswer: 0,
    },
    {
      question: "केंद्र सरकार के कार्यालय का निरीक्षण संसदीय समिति की कौन सी उप समिति करती है",
      options: ["All", "दूसरी", "तीसरी", "पहले"],
      correctAnswer: 1,
    },
    {
      question: "राज्य भाषा अधिनियम का पहला संशोधन 1967 में किया गया और सिंधी को जोड़ा गया था वह कौन सा संशोधन था",
      options: ["51", "21", "59", "71"],
      correctAnswer: 1,
    },
    {
      question: "विधान मंडल में और संसद में प्रयोग की जाने वाली भाषा का उल्लेख किस अनुच्छेद में है",
      options: ["120 अनुच्छेद और 210 अनुच्छेद", "210 अनुच्छेद और 120 अनुच्छेद", "341 अनुच्छेद 210 अनुच्छेद", "210 अनुच्छेद और 341 अनुच्छेद"],
      correctAnswer: 1,
    },
    {
      question:
        "जिनका आठवीं स्तर तक मैट्रिक का ज्ञान है किंतु मैट्रिक या 10वीं कक्षा से कम है उनके लिए प्रराज्ञ हिंदी पाठ्यक्रम है वह कितना दिन का होता है",
      options: ["25", "20", "30", "15"],
      correctAnswer: 3,
    },
    {
      question: "बोडो डोंगरी मैथिली संथाली भाषा को आठवीं अनुसूची में कौन सा संशोधन करके जोड़ा गया था",
      options: ["52", "92", "88", "71"],
      correctAnswer: 1,
    },
    {
      question: "विश्व हिंदी दिवस और हिंदी दिवस कब मनाते हैं",
      options: ["10 जनवरी और 15 अगस्त", "10 जनवरी 26 जनवरी", "10 जनवरी 14 सितंबर", "दोनों 10 जनवरी को मानते हैं"],
      correctAnswer: 2,
    },
    {
      question: "राजभाषा नियम 1963 तथा 1967 की वो धाराएं जो कश्मीर में लागू नहीं होती थी",
      options: ["8, 7", "7 ,8", "6, 8", "6, 7"],
      correctAnswer: 3,
    },
    {
      question: "अनुशासनिक कार्यवाही संबंधी प्रलेख कर्मचारियों को किस भाषा में दिया जाने का प्रावधान है",
      options: ["हिंदी इंग्लिश दोनों में", "इंग्लिश में", "हिंदी में", "हिंदी/ इंग्लिश या कर्मचारी के इच्छा नुसार जो भाषा में डिमांड हो"],
      correctAnswer: 3,
    },
    {
      question: "राजभाषा विभाग का गठन कब हुआ था",
      options: ["जुलाई 1975 में", "अगस्त 1975 में", "जून 1975 में", "सितंबर 1975 में"],
      correctAnswer: 2,
    },
    {
      question: "संसदीय राजभाषा समिति अपनी रिपोर्ट किन्हे पेश करती है",
      options: ["भारत के रेल मंत्री को", "भारत के राष्ट्रपति को", "भारत के गृह मंत्री को", "भारत के प्रधानमंत्री को"],
      correctAnswer: 1,
    },
    {
      question: "राज्य भाषा अधिनियम का पहला संशोधन 1967 में किया गया और सिंधी को जोड़ा गया था वह कौन सा संशोधन था",
      options: ["59", "51", "21", "71"],
      correctAnswer: 2,
    },
    {
      question: "इनमें से कौन सी भाषा देवनागरी लिपि में नहीं लिखी जाती है",
      options: ["हिंदी", "संस्कृत", "मराठी", "गुजराती"],
      correctAnswer: 3,
    },
    {
      question: "हाई कोर्ट और सुप्रीम कोर्ट में प्रयोग की जाने वाली भाषा इंग्लिश होगी या किस अनुच्छेद में कहा गया है",
      options: ["अनुच्छेद 345", "अनुच्छेद 346", "अनुच्छेद 347", "अनुच्छेद 348"],
      answer: 3,
    },
    {
      question: "रेल यात्रा वृतांत पुरस्कार योजना में काम से कम कितने शब्दों में यात्रा वृतांत लिखा जाता है",
      options: ["2000 शब्दों में", "5000 शब्दों में", "3000 शब्दों में", "1000 शब्दों में"],
      answer: 2,
    },
    {
      question: "रेल मंत्री राजभाषा रजत पदक पुरस्कार में पुरस्कार राशि क्या है",
      options: ["8000", "10000", "7000", "9000"],
      answer: 0,
    },
    {
      question: "हिंदी सलाहकार समिति किस:किस मंत्रालय में गठित की जाती है",
      options: ["वित्त मंत्रालय", "गृह मंत्रालय", "सभी मंत्रालय में", "शिक्षा मंत्रालय"],
      answer: 2,
    },
    {
      question: "रक्षा मंत्रालय, गृह मंत्रालय ,संसदीय राजभाषा,  किस उप समिति के अंदर में आती है",
      options: ["पहले उप समिति", "तीसरी उप समिति", "नन ऑफ़ थिस", "दूसरी उप समिति"],
      answer: 0,
    },
    {
      question: "क्षेत्रीय रेलवे राजभाषा कार्यान्वयन  समिति के अध्यक्ष कौन होते हैं",
      options: ["डीआरएम", "एडीआरएम", "पीसी ओ एम", "Gm"],
      answer: 3,
    },
    {
      question: "संसद में संविधान का भाग 17 कब पारित हुआ",
      options: ["15 अगस्त 1947 को", "26 जनवरी 1950 को", "14 सितंबर 1949 को", "10 में 1963 को"],
      answer: 2,
    },
    {
      question:
        "किस धारा के अनुसार हिंदी के अतिरिक्त अंग्रेजी भाषा संघ की राजकीय कार्य तथा संसद के कार्य में व्यवहार के लिए प्रयोग की जाती है",
      options: ["धारा 5", "धारा 3(1)", "धारा 7", "धारा 10"],
      answer: 1,
    },
    {
      question: "*कोटी घ और *केंद्र सरकार के ग्रुप डी कर्मचारियों का पहला  पाठ्यक्रम कौन सा है",
      options: ["प्रवोध", "पारंगत", "प्राग", "प्रवीण"],
      answer: 0,
    },
    {
      question: "रेल कर्मचारियों को साहित्यिक काव्य संग्रह के लिए कौन सा पुरस्कार दिया जाता है",
      options: ["प्रेमचंद पुरस्कार", "मुंशी प्रेमचंद पुरस्कार", "राजीव गांधी स्मृति पुरस्कार", "मैथिलीशरण गुप्त पुरस्कार"],
      answer: 3,
    },
    {
      question: "संस्कृत किस राज्य की द्वितीय राजभाषा है",
      options: ["जम्मू कश्मीर", "मध्य प्रदेश", "उत्तराखंड", "तमिल नाडु"],
      answer: 2,
    },
    {
      question: "राजभाषा हिंदी से संबंधित पाठ्यक्रम की परीक्षा वर्ष में कितनी बार होती है ( **पाठ्यक्रम की अवधि 5 महीने की होती है)",
      options: ["एक बार होती है", "दो बार होती है दिसंबर में", "दो बार जून और दिसंबर में", "दो बार जून में"],
      answer: 2,
    },
    {
      question: "बोडो डोंगरी मैथिली संथाली भाषा को आठवीं अनुसूची में कौन सा संशोधन करके जोड़ा गया था",
      options: ["52", "92", "88", "71"],
      answer: 1,
    },
    {
      question: "हिंदी के विकास के लिए प्रावधान अनुच्छेद 351 में है और राजभाषा आयोग का प्रावधान किस अनुच्छेद में है",
      options: ["अनुच्छेद 344", "अनुच्छेद 345", "अनुच्छेद 346", "अनुच्छेद 343"],
      answer: 0,
    },
    {
      question: "राजभाषा नियम के अनुसार इनमें से कौन सा राज्य क क्षेत्र में नहीं आता है",
      options: ["राजस्थान", "हिमाचल प्रदेश", "छत्तीसगढ़", "पश्चिम बंगाल और गुजरात"],
      answer: 3,
    },
    {
      question: "संविधान के किस अनुच्छेद से किस अनुच्छेद तक राजभाषा लागू करने का प्रावधान दिया गया है",
      options: ["अनुच्छेद 343 से 350", "अनुच्छेद 343 से 345", "अनुच्छेद 343 से 348", "अनुच्छेद 343 से 351"],
      answer: 3,
    },
    {
      question: "विश्व की सबसे वैज्ञानिक लिपि देवनागरी है @ देवनागरी लिपि के वर्णमाला में शब्दों की संख्या कितनी है",
      options: ["52", "51", "50", "53"],
      answer: 0,
    },
    {
      question: "संसदीय राजभाषा समिति की पहली बैठक कब हुई थी",
      options: ["16 नवंबर 1957 को", "16 नवंबर 1963 को", "16 नवंबर 1976 को", "16 नवंबर 1955 को"],
      answer: 0,
    },
    {
      question: "राजभाषा आयोग की सिफारिश पर विचार करने के लिए गठित समिति के अध्यक्ष कौन थे",
      options: ["ओम मेहता", "जी बी पंत", "ललित नारायण मिश्र", "बालासाहेब गंगाधर खेर"],
      answer: 1,
    },
    {
      question: "राजभाषा अधिनियम की कौन सी धारा का संबंध संसदीय समिति के गठन से है",
      options: ["धारा 4", "धारा 5", "धारा 3", "धारा 5 और 1"],
      answer: 0,
    },
    {
      question: "विश्व हिंदी दिवस 10 जनवरी को मानते हैं महात्मा गांधी अंतरराष्ट्रीय हिंदी विश्वविद्यालय किस देश में है",
      options: ["अमेरिका", "नेपाल", "मॉरीशस", "भारत"],
      answer: 3,
    },
    {
      question: "उत्तराखंड के द्वितीय राजभाषा क्या है",
      options: ["हिंदी", "उर्दू", "संस्कृत", "इंग्लिश"],
      answer: 2,
    },
    {
      question: "दो राज्यों या दो से अधिक राज्यों के बीच संपर्क की भाषा का वर्णन किस अनुच्छेद में दिया गया है",
      options: ["349 अनुच्छेद", "347 अनुच्छेद", "345 अनुच्छेद", "346 अनुच्छेद"],
      answer: 3,
    },
    {
      question: "नेपाली मणिपुरी कोकणी आठवीं अनुसूची में 1992 में जोड़ा गया वह कौन सा संशोधन था",
      options: ["71", "92", "इनमें से कोई नहीं", "21"],
      answer: 0,
    },
    {
      question: "राजभाषा 1976 के 12 नियम हैं हिंदी में प्रवीणता का नियम 9 में है $ कार्य साधक ज्ञान की प्राप्ति वाला नियम कितना में है",
      options: ["नियम 6", "नियम8", "नियम10", "नियम7"],
      answer: 2,
    },
    {
      question: "राजभाषा 1976 के 12 नियम है नियम 12 में अनुपालन और उत्तरदायित्व का वर्णन है  @  नियम  1   में क्या है",
      options: [
        "अनुपालन और उत्तरदायित्व",
        "हिंदी में प्रवीणता",
        "संक्षिप्त नाम विस्तार और प्रारंभ",
        "हिंदी में प्राप्त पत्रों का उत्तर हिंदी में दिया जाएगा",
      ],
      answer: 2,
    },
    {
      question: "संघ की राजभाषा हिंदी और लिपि देवनागरी होगी यह किस अनुच्छेद में है",
      options: ["343 अनुच्छेद", "इनमें से कोई नहीं", "344 अनुच्छेद", "345 अनुच्छेद"],
      answer: 0,
    },
    {
      question: "जिनका हिंदी ज्ञान आठवीं कक्षा से कम है उनके लिए प्रवीण पाठ्यक्रम है वह कितने दिन का होता है",
      options: ["30", "20", "25", "15"],
      answer: 1,
    },
    {
      question: "Adra  divison मे आदरा  कितना पुस्तकालय है",
      options: ["5", "8", "7", "6"],
      answer: 2,
    },
    {
      question: "संविधान सभा ने किस वर्ष हिंदी को राजभाषा के रूप में स्वीकार किया",
      options: ["26 जनवरी 1950", "15 अगस्त 1947", "14 सितंबर 1949", "14 सितंबर 1947"],
      answer: 2,
    },
    {
      question: "Adra मंडल में हिंदी पुस्तकालयों की संख्या कितनी है",
      options: ["12", "14", "13", "15"],
      answer: 1,
    },
    {
      question: "राजभाषा नियम 1976 में आया उसका पहला संशोधन 1987 में हुआ था दूसरा और तीसरा कब कब हुआ",
      options: ["2007 और 2010", "2003 और 2007", "2007 और 2011", "2003 और 2011"],
      answer: 2,
    },
    {
      question: "विदेश में स्थित भारतीय कार्यालय में कितना प्रतिशत हिंदी में पत्राचार होगा",
      options: ["40", "50", "30", "20"],
      answer: 2,
    },
    {
      question: "किस राज्य ने उर्दू को द्वितीय राजभाषा के रूप में घोषित किया है",
      options: ["इनमें से कोई नहीं", "बिहार", "बिहार और आंध्र प्रदेश दोनों", "आंध्र प्रदेश"],
      answer: 2,
    },
    {
      question: "संसदीय राजभाषा समिति के अध्यक्ष कौन होते हैं",
      options: ["उपराष्ट्रपति", "भारत के प्रधानमंत्री श्री नरेंद्र मोदी", "केंद्रीय गृह मंत्री", "राष्ट्रपति"],
      answer: 2,
    },
    {
      question: "संसदीय समिति का पूर्ण गठन कब हुआ था",
      options: ["1955", "1976", "1963", "1971"],
      answer: 1,
    },
    {
      question: "राजभाषा हिंदी प्रशिक्षण के लिए पाठ्यक्रम कौन तैयार करता है",
      options: ["गृह मंत्रालय का राजभाषा विभाग", "भारत के प्रधानमंत्री", "लोकसभा और राज्यसभा मिलकर", "भारत के राष्ट्रपति"],
      answer: 0,
    },
    {
      question: "हिंदी प्रश्नों के उत्तर हिंदी में देने होंगे का नियम राजभाषा नियम 1976 के किस नियम में है",
      options: ["नियम5", "नियम4", "नियम7", "नियम6"],
      answer: 0,
    },
    {
      question: "मुख्य राजभाषा अधिकारी का कार्यकाल कितने वर्ष का होता है",
      options: ["All right", "1 वर्ष", "12 महीना", "365 दिन"],
      answer: 0,
    },
    {
      question: "पहली बार हिंदी दिवस भारत में कब मनाया गया था",
      options: ["1951 में", "1952 में", "1953", "1949"],
      answer: 2,
    },
    {
      question:
        "राजभाषा 1976 के 12 नियम है @भारत के राज्यों कार्यालय, केंद्र सरकार के कार्यालय के बीच पत्रों का आदान-प्रदान किस नियम में दिया गया है",
      options: ["नियम दो में", "नियम 3 में", "इनमें से कोई नहीं", "नियम 4 में"],
      answer: 1,
    },
    {
      question: "वर्ष 1973 में गठित पहली रेलवे हिंदी सलाहकार समिति की अध्यक्षता किसने की",
      options: ["ओम मेहता", "जीबी पंत", "बालासाहेब गंगाधर खेर", "ललित नारायण मिश्रा"],
      answer: 3,
    },
    {
      question: "दमन दीप और दादर नगर हवेली किस क्षेत्र में आता है",
      options: ["क  क्षेत्र", "घ  क्षेत्र", "ख  क्षेत्र", "ग  क्षेत्र"],
      answer: 2,
    },
    {
      question: "संसदीय राजभाषा समिति में सदस्यों की संख्या 30 है तो लोकसभा में सदस्यों की संख्या /राज्यसभा में सदस्यों की संख्या बताइए",
      options: ["10 /20", "20/10", "इनमें से कोई नहीं", "15 /15"],
      answer: 1,
    },
    {
      question: "हिंदी दिवस 14 सितंबर 2024 का थीम क्या है",
      options: [
        "हिंदी हमारी राजभाषा है",
        "हिंदी ज्ञान और बुद्धिमत्ता तक",
        "हिंदी ज्ञान से विज्ञान तक",
        "हिंदी पारंपरिक ज्ञान से कृत्रिम बुद्धिमत्ता तक",
      ],
      answer: 3,
    },
    {
      question: "हिंदी सलाहकार समिति का कार्यकाल कितने वर्षों का होता है",
      options: ["02", "01", "03", "04"],
      answer: 2,
    },
    {
      question: "काव्य गजल संग्रह हेतु दी जाने वाली पुरस्कार मैथिलीशरण गुप्त पुरस्कार है इसका प्रथम ,द्वितीय और तृतीय पुरस्कार राशि क्या है",
      options: ["10000   5000    5000", "20000   10000    7000", "20000    10000    5000", "10000   5000   2500"],
      answer: 1,
    },
    {
      question: "हिंदी में कार्य साधक ज्ञान प्राप्त कर्मचारियों की परिभाषा किस नियम के अंतर्गत दी जाती है",
      options: [
        "राजभाषा नियम 1976 के नियम 9 के अंतर्गत",
        "राजभाषा नियम 1976 के नियम 8 के अंतर्गत",
        "राजभाषा नियम 1976 के नियम 11 का अंतर्गत",
        "राजभाषा नियम 1976 के नियम 10 के अंतर्गत",
      ],
      answer: 3,
    },
    {
      question: "संविधान के अनुसार संवैधानिक के नियमो, विनियमों आदेशों का अनुवाद कौन मंत्रालय करता है",
      options: ["शिक्षा मंत्रालय", "विधि मंत्रालय", "नीति आयोग", "राजस्व मंत्रालय"],
      answer: 1,
    },
    {
      question: '10 जनवरी 2006 से विश्व हिंदी दिवस मनाते हैं  " विश्व हिंदी सचिवालय"  किस देश में स्थित है',
      options: ["अमेरिका", "मॉरीशस", "दक्षिण अफ्रीका", "भारत"],
      answer: 1,
    },
    {
      question: "(अब तक कुल 12 विश्व हिंदी सम्मेलन का आयोजन हो चुका है )    @विश्व हिंदी सचिवालय किस देश में स्थित है",
      options: ["मॉरीशस", "अमेरिका", "भारत", "साउथ अफ्रीका"],
      answer: 0,
    },
    {
      question: "नियमित हिंदी भाषा पाठ्यक्रम का सत्र किस महीने में आरंभ होता है",
      options: ["जनवरी और जून", "दिसंबर और जुलाई", "दिसंबर और जून", "जनवरी और जुलाई"],
      answer: 3,
    },
    {
      question:
        "संविधान के प्रारंभ से 15 वर्ष की समाप्ति पर भी हिंदी के अतिरिक्त अंग्रेजी भाषा राजकीय कार्य संसद में प्रयोग// किस धारा में कहा गया है",
      options: ["धारा 3.1 में", "धारा 9 में", "धारा 11 में", "धारा7"],
      answer: 0,
    },
    {
      question: "राजभाषा नियम 1976 में आया उसका पहला संशोधन 1987 में हुआ था दूसरा और तीसरा कब कब हुआ",
      options: ["2003 और 2007", "2003 और 2011", "2007 और 2011", "2007 और 2010"],
      answer: 2,
    },
    {
      question: "किन-किन राज्यों ने उर्दू को राजभाषा के रूप में घोषित किया है",
      options: ["आंध्र प्रदेश और बिहार", "आंध्र प्रदेश और जम्मू", "बिहार और दिल्ली", "बिहार और नागालैंड"],
      correct_option: 0,
    },
    {
      question: "जिन्हें हिंदी में प्राइमरी स्तर का ज्ञान नहीं है उनके लिए हिंदी पाठ्यक्रम प्रवोध है वह कितना दिन का होता है",
      options: ["15", "20", "30", "25"],
      correct_option: 3,
    },
    { options: ["15", "20", "30", "25"], correct_option: 3 },
    {
      question: "राज्यों को अपनी राजभाषा चुनने का अधिकार है यह किस अनुच्छेद में कहा गया है",
      options: ["अनुच्छेद 345", "अनुच्छेद 344", "अनुच्छेद 347", "अनुच्छेद 346"],
      correct_option: 0,
    },
    {
      question: "राजभाषा संसदीय समिति के गठन एवं कर्तव्य किस धारा में है",
      options: ["धारा 4 मे", "धारा 3 में", "धारा 9 में", "धारा 10 में"],
      correct_option: 0,
    },
    {
      question: "संसदीय राजभाषा की कितनी उप समितिया हैं",
      options: ["इनमें से कोई नहीं", "दो उप समितियां", "तीन उप समितियां", "एक उप समितियां"],
      correct_option: 2,
    },
    {
      question: "केंद्रीय हिंदी समिति के उपाध्यक्ष और अध्यक्ष कौन-कौन होते हैं",
      options: ["प्रधानमंत्री और प्रधानमंत्री", "मुख्यमंत्री और प्रधानमंत्री", "प्रधानमंत्री और शिक्षा मंत्री", "गृह मंत्री और प्रधानमंत्री"],
      correct_option: 3,
    },
    {
      question: "कार्य साधक ज्ञान प्राप्त सभी कार्मिक प्रशिक्षण हेतु पात्र हैं वह पाठ्यक्रम पारंगत है वह कितने दिन का होता है",
      options: ["25", "15", "30", "20"],
      correct_option: 3,
    },
    {
      question: "राजभाषा नियम 1976 में आया उसका पहला संशोधन 1987 में हुआ दूसरा 2007 में तीसरा संशोधन कब हुआ था",
      options: ["2008", "2011", "2009", "2010"],
      correct_option: 1,
    },
    {
      question:
        "विभागीय परीक्षा में हिंदी के प्रश्नों का उत्तर देना अनिवार्य नहीं है वैज्ञानिक वह तकनीकी शब्दावली आयोग की स्थापना कब की गई थी",
      options: ["1 अक्टूबर 1960 को", "1 अक्टूबर 1961 को", "1 अक्टूबर 1975 को", "1 अक्टूबर 1971 को"],
      correct_option: 1,
    },
    {
      question: "नियमित हिंदी भाषा पाठ्यक्रम का सत्र किस महीने में आरंभ होता है",
      options: ["जुलाई 12 महीने में एक बार", "जनवरी 12 महीने में", "इनमें से कोई नहीं", "जनवरी और जुलाई"],
      correct_option: 3,
    },
    {
      question: "राजभाषा अधिनियम कब बन्ना",
      options: ["7 जून 1963", "10 मई 1963", "14 अगस्त 1963", "26 जनवरी 1963"],
      correct_option: 1,
    },
    {
      question:
        "भारतीय रेल हिंदी पुस्तकालय निशुल्क होता है और परीक्षा में हिंदी के प्रश्नों का उत्तर देना अनिवार्य नहीं है बोकारो में कितने पुस्तकालय हैं",
      options: ["2", "4", "3", "1"],
      correct_option: 3,
    },
    {
      question: "10 जनवरी 2006 को विश्व हिंदी दिवस मनाने की शुरुआत हुई थी हिंदी सचिवालय की स्थापना कब हुई थी",
      options: ["2010 में", "2012 में", "2015 में", "2008 में"],
      correct_option: 3,
    },
    {
      question: "नगर राजभाषा कल्याण में समिति की बैठक कब-कब होती है",
      options: ["12 महीने में चार बार", "12 महीने में एक बार", "12 महीने में दो बार", "12 महीने में तीन बार"],
      correct_option: 2,
    },
    {
      question: "यूएनओ में पहली बार हिंदी भाषा से संबोधन करने वाले व्यक्ति",
      options: ["स्वर्गीय इंदिरा गांधी", "पीवी नरसिम्हा राव", "अटल बिहारी वाजपेई", "लालकृष्ण आडवाणी"],
      correct_option: 2,
    },
    {
      question: "राजभाषा के संबंध में संसदीय समिति की राय पर राष्ट्रपति ने प्रथम आदेश किस वर्ष जारी किए थे",
      options: ["1971 में", "1960 में", "1966 में", "इनमें से कोई नहीं"],
      correct_option: 1,
    },
    {
      question: "राजभाषा नियम 1976 का संशोधन तीन बार हुआ है वह कौन-कौन साल है",
      options: ["1987, 2007 और 2013", "1987, 2007 और 2012", "1987, 2007 और 2011", "1987, 2008 और 2011"],
      correct_option: 2,
    },
    {
      question: "कहानी उपन्यास संग्रह के लिए कौन सा पुरस्कार कर्मचारियों को दिया जाता है",
      options: ["प्रेमचंद पुरस्कार", "राजीव गांधी स्मृति पुरस्कार", "कालिदास पुरस्कार", "मैथिलीशरण गुप्त पुरस्कार"],
      correct_option: 0,
    },
    {
      question: "हिंदी का स्थान हमारी 22 भाषाओं में कितने क्रम पर रखा गया है",
      options: ["कोई प्रमाण नहीं है", "6", "4", "किन्हीं के पास प्रमाण है तो दीजिएगा"],
      correct_option: 2,
    },
    {
      question: "नियमित हिंदी भाषा पाठ्यक्रमों की परीक्षाएं किस-किस महीने में ली जाती है",
      options: ["जनवरी और दिसंबर में", "मई और नवंबर में", "जनवरी और फरवरी में", "जून और दिसंबर"],
      correct_option: 1,
    },
    {
      question: "रेलवे स्टेशन पर उद्घोषणा किस भाषा क्रम में होती है",
      options: [
        "हिंदी, प्रादेशिक भाषा, इंग्लिश",
        "प्रादेशिक भाषा, हिंदी ,इंग्लिश",
        "हिंदी, इंग्लिश ,प्रादेशिक भाषा",
        "इंग्लिश, हिंदी ,प्रादेशिक भाषा",
      ],
      correct_option: 1,
    },
    {
      question: "1957 में गठित प्रथम राजभाषा संसदीय समिति के अध्यक्ष कौन थे",
      options: ["पंडित गोविंद बल्लभ पंत", "बालासाहेब गंगाधर खेर", "ओम मेहता", "ललित नारायण मिश्रा"],
      correct_option: 0,
    },
    {
      question: "विश्व हिंदी सचिवालय मॉरीशस में है इसका निर्माण कब हुआ था",
      options: ["2007", "2008", "2010", "2006"],
      correct_option: 1,
    },
    {
      question: "हिंदी के विकास के लिए प्रावधान का निर्देश किस अनुच्छेद में है",
      options: ["अनुच्छेद 351", "अनुच्छेद 349", "अनुच्छेद 348", "अनुच्छेद 350"],
      correct_option: 0,
    },
    {
      question: "केंद्रीय अनुवाद ब्यूरो की स्थापना कब हुई थी",
      options: ["1 मार्च 1970", "1 मार्च 1972", "1 मार्च 1973", "1 मार्च 1971"],
      correct_option: 1,
    },
    {
      question: "राजभाषा आयोग के प्रथम अध्यक्ष कौन थे",
      options: ["बालासाहेब गंगाधर खेर", "इनमें से कोई नहीं", "ललित नारायण मिश्रा", "ओम मेहता"],
      correct_option: 0,
    },
    {
      question: "हिंदी में प्रवीणता प्राप्त कर्मचारी किसे कहा जाता है",
      options: [
        "मैट्रिक की परीक्षा हिंदी माध्यम से पास",
        "हिंदी में पास क्लास 8 तक",
        "मैट्रिक की परीक्षा हिंदी माध्यम में फेल",
        "हिंदी में पास क्लास 5 तक",
      ],
      correct_option: 1,
    },
    {
      question: "निर्मला के लेखक   और   रानी केतकी के लेखक कौन हैं",
      options: [
        "इंशा अल्लाह खान और प्रेमचंद",
        "दोनों ईशा अल्लाह खान लिखे थे",
        "दोनों प्रेमचंद लिखित है",
        "मुंशी प्रेमचंद और इंशा अल्लाह खान",
      ],
      correct_option: 3,
    },
    {
      question: "संविधान की आठवीं अनुसूची में टोटल 22 भाषा है तो 92वां संशोधन में कितने भाषाओं को जोड़ा गया था",
      options: ["दो भाषा को", "एक भाषा को", "तीन भाषा को", "चार भाषा को"],
      correct_option: 0,
    },
    {
      question: "यूनिकोड इनकोडिंग के लिए कितने 'बिट' और कितने 'बाइट' का प्रयोग करते हैं",
      options: ["दोनों में दो बीट दो बाइट होता है", "16 बीट एक बाइट", "16 बीट दो बाइट", "16 बीट तीन बाइट"],
      correct_option: 2,
    },
    {
      question: "यूनिकोड कितने कैरेक्टर के लिए कोड पॉइंट उपलब्ध करता है",
      options: ["10000", "65536", "50000", "655300"],
      correct_option: 1,
    },
    {
      question: "7 जून 1955 को गठित प्रथम राजभाषा आयोग का नाम क्या था",
      options: ["खेर आयोग", "बाला साहब खेल आयोग", "जीबी पंत आयोग", "ओम मेहता योग"],
      correct_option: 0,
    },
    {
      question: "याचना की भाषा और अनुरोध का वर्णन किस अनुच्छेद में है",
      options: ["अनुच्छेद 351", "अनुच्छेद 347", "अनुच्छेद 349", "अनुच्छेद 350"],
      correct_option: 3,
    },
    {
      question: "मंडल राजभाषा कार्यान्वयन समिति के अध्यक्ष कौन होते हैं",
      options: ["गृह मंत्री", "एडीआरएम", "रेल मंत्री", "डीआरएम"],
      correct_option: 3,
    },
    {
      question: "राजभाषा अधिनियम 10 में 1963 को बना और भारत में लागू कब से हुआ",
      options: ["26 जनवरी 1967", "20 जनवरी 1965", "26 जनवरी 1965", "19 मई 1963"],
      correct_option: 2,
    },
    {
      question: "महात्मा गांधी अंतरराष्ट्रीय हिंदी विश्वविद्यालय किस शहर में है",
      options: ["नई दिल्ली", "वर्धा", "नागपुर", "मुंबई"],
      correct_option: 1,
    },
  ],
}

export default function QuizPage({ params }: { params: { topic: string } }) {
  const router = useRouter()
  const topic = params.topic
  const [questions, setQuestions] = useState(quizData[topic as keyof typeof quizData] || [])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    setUserAnswers(new Array(questions.length).fill(-1))
  }, [questions])

  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const response = await fetch(`/api/update-questions?topic=${topic}`)
        if (!response.ok) throw new Error("Failed to fetch updated questions")
        const data = await response.json()

        if (data.questions && data.questions.length > 0) {
          setQuestions((prevQuestions) => [...prevQuestions, ...data.questions])
        }
      } catch (error) {
        console.error("Error checking for question updates:", error)
      }
    }

    // Check for updates every 5 minutes
    const intervalId = setInterval(checkForUpdates, 5 * 60 * 1000)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId)
  }, [topic])

  const handleAnswer = (selected: number) => {
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = selected
    setUserAnswers(newUserAnswers)
    setShowFeedback(true)

    if (selected === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setShowFeedback(userAnswers[currentQuestion - 1] !== -1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowFeedback(userAnswers[currentQuestion + 1] !== -1)
    }
  }

  const handleSubmit = () => {
    router.push(`/results/${topic}?score=${score}&answers=${userAnswers.join(",")}`)
  }

  if (questions.length === 0) {
    return <div>Loading questions...</div>
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 capitalize">{topic.replace(/_/g, " ")} Quiz</h1>
        <Progress value={progress} className="mb-6" />
        <QuestionCard
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          showFeedback={showFeedback}
          selectedOption={userAnswers[currentQuestion]}
          correctAnswer={questions[currentQuestion].correctAnswer}
        />
        <div className="mt-4 text-center">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="mt-6 flex justify-between">
          <Button onClick={handlePrevious} disabled={currentQuestion === 0}>
            Previous
          </Button>
          {currentQuestion === questions.length - 1 ? (
            <Button onClick={handleSubmit}>Submit Quiz</Button>
          ) : (
            <Button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

