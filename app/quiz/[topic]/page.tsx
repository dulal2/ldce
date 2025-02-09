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

