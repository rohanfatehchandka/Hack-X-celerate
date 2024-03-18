import hackathonLogo from "./Assets/hackathonLogo.png";

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import ll from "./Assets/sponsorsLogos/ll.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import Replit from "./Assets/sponsorsLogos/replit.png";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import taskade from "./Assets/sponsorsLogos/taskade.png";
import lyin from "./Assets/teami/lyin.jpg";
import vjti from "./Assets/sponsorsLogos/vjti.png";
import vjti_tbi from "./Assets/sponsorsLogos/vjti_tbi.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import zoha from "./Assets/teami/zoha.png";

const TOP_SECTION = {
  TITLE: "Join HackXcelerate",
  Typed_effect: ["24 hours of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on 22nd-23rd March for 24 hours of creation, innovation, & fun. Grab the chances of winning exciting prizes and goodies.",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK: "https://forms.gle/hKPrtLuvBSzW5mbb6",
};

const SOCIALS = {
  instagram: "https://www.instagram.com/coc_vjti/",
  discord: "",
  linkedin: "https://www.linkedin.com/company/community-of-coders-vjti/",
  twitter: "",
  devpost: "",
  email: "",
  mail: "",
};

const MIDDLE_SECTION = {
  TITLE: "What is HackXcelerate?",
  LONG_DESCRIPTION:
    "HackXcelerate is a 24-hour long hackathon scheduled for March 22nd and 23rd. This event is tailored for FY and SY students, offering tracks in web development, app development, AI/ML, Blockchain and Cybersecurity. Participants will have unique opportunities to learn from each other and explore new technologies.  The winner will receive goodies in addition to a Rs.50,000 prize pool.  We are committed to fostering an all-inclusive and diverse environment, welcoming students from all backgrounds. Join us for an exhilarating hackathon experience!",
  LOGO: hackathonLogo,
};
const VISION_SECTION = {
  TITLE: "Vision",
  LONG_DESCRIPTION:
    "To cultivate a vibrant and collaborative community of innovators, where diverse talents converge to tackle real-world challenges through creative problem-solving and cutting-edge technology. Our vision is to inspire and empower participants to push the boundaries of innovation, fostering a culture of lifelong learning, experimentation, and impactful solutions that drive positive change in society.",
  LOGO: hackathonLogo,
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u",
  },
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u",
  },
  Privacy_policy: {
    required: true,
    src: "",
  },
  Terms_of_use: {
    required: true,
    src: "",
  },
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 12,
  year: 2021,
};

const schedule = [
  {
    day: "8-11-2021",
    events: [
      {
        title: "Intro to phycycology",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "5-12-2021",
    events: [
      {
        title: "Intro to deep learning",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
      {
        title: "Intro to deep learning",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "3-12-2021",
    events: [
      {
        title: "Intro to phycycology",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "1-12-2021",
    events: [
      {
        title: "Intro to deep learning",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "1-1-2022",
    events: [
      {
        title: "Intro to phycycology",
        timings: "12 AM - 1 Pm",
        link: "https://google.com",
      },
    ],
  },
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Track Winner",
      content:
        "First prize will be given to a project that outstands all other submissions. Each track will have an overall winner!",
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Best FY",
      content:
        "Special prize to the best team among all the First Year students!",
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Best SY",
      content:
        "Special prize to the best team among all the Second Year students!",
    },
  ],
  // [
  //   //Array 2
  //   {
  //     icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
  //     type: "Best Solo",
  //     content:
  //       "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team",
  //   },
  //   {
  //     icon: <i className="first fas fa-4x fa-trophy"></i>,
  //     type: " Best Beginner",
  //     content: "Your project will qualify for this category if atleast 50% ",
  //   },
  //   {
  //     icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
  //     type: "Best UI/UX",
  //     content: "Project with most creative designs will be UI/UX track",
  //   },
  // ],
  // [
  //   //Array 3
  //   {
  //     icon: <i className="fas fa-4x sixth fa-male"></i>,
  //     type: "Best Web App with Qoom",
  //     content: "Must use qoom in your project to win this category",
  //   },
  //   {
  //     icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
  //     type: "More prizes",
  //     content: "More prizes will be revealed later",
  //   },
  // ],
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Labib Asari: 9967547973',
      github: '',
      linkedin: '',
      img: zoha
    },
    {
      Name: 'Moon',
      role: 'Siddhant: 7400320017',
      github: '',
      linkedin: '',
      img: Ryah
    },
    // {
    //   Name: "Erika",
    //   role: "Organizer",
    //   github: "",
    //   linkedin: "",
    //   img: Ryah,
    // },
  ],
  // [
  //   //Array 2
  //   {
  //     Name: "Lyanola",
  //     role: "Organizer",
  //     github: "",
  //     linkedin: "",
  //     img: lyin,
  //   },
  //   {
  //     Name: "Zoheb",
  //     role: "Organizer",
  //     github: "",
  //     linkedin: "",
  //     img: zoha,
  //   },
  // ],
];

// const JudgesInfo = [
//   [
//     //Array 1
//     {
//       Name: "Rehan",
//       role: "Organizer",
//       github: "",
//       linkedin: "",
//       img: me,
//     },
//     {
//       Name: "Moon",
//       role: "Organizer",
//       github: "",
//       linkedin: "",
//       img: moon,
//     },
//     {
//       Name: "Ryah Garcia",
//       role: "Organizer",
//       github: "",
//       linkedin: "",
//       img: Ryah,
//     },
//   ],
//   [
//     //Array 2
//     {
//       Name: "Lyanola",
//       role: "Organizer",
//       github: "",
//       linkedin: "",
//       img: lyin,
//     },
//     {
//       Name: "Zoheb",
//       role: "Organizer",
//       github: "",
//       linkedin: "",
//       img: zoha,
//     },
//   ],
// ];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{ src: vjti_tbi }], //Array 1
  // [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  // [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  // [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  // [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a fun event where people gather to code cool projects in a short time, like a coding marathon!.'
      },
      {
        label: 'What can I gain from participating in a hackathon?',
        content:
          'Besides the chance to build something awesome, hackathons offer opportunities to learn new skills, network with industry professionals (Seniors and amazing peers as well!), and have a lot of fun with like-minded individuals!'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome seniors which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How to register myself in the hackathon?',
        content:
          "All you need is to fill our form above and join Discord, we will guide you through everything there"
      }
    ],
    [
      {
        label: 'What should I bring to a hackathon?',
        content:
          'Essentials include your laptop, chargers, any necessary hardware components and a positive attitude!'
      },
      {
        label: 'Do I need to be an experienced programmer to participate?',
        content:
          'Not at all! While some participants may have advanced coding skills, hackathons welcome people of all skill levels. Its a great opportunity to learn and collaborate.'
      },
      {
        label: 'Who can attend?',
        content:
          'This event is for all First and Second year students from all branches of VJTI!'
      },
      {
        label: 'I have more questions!',
        content: 'Contact our Coordinator: Siddhant or the Head Coordinator: Labib (contact info is mentioned below)'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  VISION_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  // JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
};
