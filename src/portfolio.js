/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kashif Afrz",
  title: "Hi all, I'm Kashif Afraz",
  subTitle: emoji(
    "A passionate Front-End Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1w7ljvmJPwlNam-zPRgtOQtf0y3wSh4GY/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kashif-afraz",
  linkedin: "https://www.linkedin.com/in/kashif46/",
  gmail: "sardarkashif46@gmail.com",
  facebook: "https://www.facebook.com/sardar.kashif.54",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css4",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Foundation University School of Science & Technology",
      logo: require("./assets/images/University.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - July 2023",
      desc: "Silver Medalist in the program. Took courses about Software Engineering, Networking, Operating Systems, ...",
      descBullets: ["Enthusiastic Software Engineer", "Passionate about Coding and Innovation in Front End Technology", "Problem-solving" , "Eager to contribute to cutting-edge tech projects and make a positive impact"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "React js",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ReactJs Intern",
      company: "Ideofuzion",
      companylogo: require("./assets/images/ideofuzion.png"),
      date: "Sep 2023 – Present",
      descBullets: [
        "Developing web apps using HTML, CSS, BootStrap, JavaScript, ReactJs, to create dynamic web pages for a better user experience.",
        "Made reusable components, optimized for faster load times, improving user experience.",
        "Collaborated with the backend team to integrate APIs for smooth data flow and consistency across the platform.",
        "Created user-friendly interfaces, increasing customer engagement and satisfaction.",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Some Startup Personal Project For Practice",
  projects: [
    {
      image: require("./assets/images/meals.webp"),
      projectName: "Food Ordering App",
      projectDesc: "Use Static Content, where I post that content in firebase using FETCH. Use Hooks and Reuseable component and much more",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://food-orderning-app-validation-http.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/landingtemplate.jpg"),
      projectName: "Company Landing Page",
      projectDesc: "Use container, row, column class of BootStrap. Also use icons from 'FontAwesome' website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bootstrap-practice-page.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/Gaming website.png"),
      projectName: "Company Landing Page",
      projectDesc: "Use ReactJs and BootStrap also use transition transforms etc.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gaming-website-internship-task.vercel.app/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HTML and CSS in Depth",
      subtitle:
        "I completed this certificate which is offered my META, where I Learnt everything about HTML and CSS",
      image: require("./assets/images/Meta1.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1m3uF9Zw-pb5RitPQo0KtEYxT1C0O6h8N/view?usp=sharing"
        }
      ]
    },
    {
      title: "MERN Stack Course by PSEB",
      subtitle:
        "It was a PSEB MERN stck course whic was offered by Government Of Pakistan . Where I learnt basics of MERN Stack",
      image: require("./assets/images/PSEB.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NEZlU8sZ6uqZU1W7W-lUB1Uen4_PULr3/view?usp=sharing"
        }
      ]
    },

    {
      title: "Introduction To Front-End",
      subtitle: "It was a Front-End development course offer by META. Where I learnt alot about Front-End",
      image: require("./assets/images/Meta2.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1k_nsnaXJ510RfcJRnpCxWVsAk8TFcLhG/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3125999839",
  email_address: "sardarkashif46@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
