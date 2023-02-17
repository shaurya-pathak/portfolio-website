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
  username: "Shaurya Pathak",
  title: "Hello, I'm Shaurya",
  subTitle: emoji(
    "A passionate Computer Science Student with experience with Machine Learning, Front End Development, and Algorithmic Design."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RyLm2NuOxBCBAKaBMQxUb63YeRD-2LPU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shaurya-pathak",
  linkedin: "https://www.linkedin.com/in/shaurya-pathak-b0614a1b2/",
  gmail: "shauryapathak24@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Student Researcher who wants to surpass what was previously thought possible",
  skills: [
    emoji(
      "⚡ Expertise in Machine Learning and Deep Learning, including prediction models using ConvLSTM neural networks and interpolation deep learning models with 82% accuracy."
    ),
    emoji("⚡ Proficient in implementing artificial intelligence models into cloud platforms such as Google Cloud Platform, AWS, and creating APIs for easy access to the data."),
    emoji(
      "⚡ Experience in developing highly interactive front-end user interfaces for web and mobile applications using Angular and other front-end development frameworks."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: ""
    },
    {
      skillName: "ARCGIS",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Pandas/Numpy",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Neural Networks",
      fontAwesomeClassname: "fab "
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: ""
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab "
    },
    {
      skillName: "React",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: ""
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of California, Riverside",
      logo: require("./assets/images/ucrLogo.png"),
      subHeader: "Bachelor of Science in Computer Science with Business Application",
      duration: "September 2021 - June 2025",
      desc: "3.7 GPA",
      descBullets: [
        "Relevant Coursework: Data Structures and Algorithms, Discrete Math, Linear Algebra, Software Engineering"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Researcher",
      company: "City of Los Angeles / NASA",
      companylogo: require("./assets/images/laLogo.jpeg"),
      date: "September 2021 – Present",
      desc: "Participated in research applying machine learning models in Air Quality Prediction.",
      descBullets: [
        "Predicted spatiotemporal air pollution in LA using ConvLSTM neural networks.",
        "Implemented AWS functions to serve my Machine Learning Model on a public website",
        "Created state of the art interpolation deep learning models using only satellite data for worldwide coverage at 82% accuracy."
      ]
    },
    {
      role: "Machine Learning Development Intern",
      company: "CityScape",
      companylogo: require("./assets/images/cityscapeLogo.png"),
      date: "August 2022 – October 2022",
      desc: "Used machine learning and NLP to compile information from various sources to create a more efficient workflow for the company."
    },
    {
      role: "Front End Development Intern",
      company: "Klear.ai",
      companylogo: require("./assets/images/klearaiLogo.png"),
      date: "June 2021 – Sep 2021",
      desc: "Developed Front End for an automated claims management system using Angular, making API calls to a backend server to retrieve data."
    }
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
  title: "Fun Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/cutieLogo.png"),
      projectName: "Cutie Sentimental",
      projectDesc: "Created a sentiment analysis model to predict the sentiment of a text using a machine learning model, interactable as a discord chat bot, that will record general sentiment analysis along with analysis in regards to a specific topic.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kavinphab.github.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/canvasLogo.png"),
      projectName: "Canvas To Spreadsheet",
      projectDesc: "Created a python script to traverse through the Canvas API for all courses and create a spreadsheet with all assignments of the course.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shaurya-pathak.github.io/canvas-to-spreadsheet.github.io/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Published Research"),
  subtitle:
    "Some of my research work that I have done and published",

  achievementsCards: [
    {
      title: "High-Resolution Spatiotemporal PM2.5 Prediction with Deep Convolutional LSTM using Atmospheric and Ground-level Data",
      subtitle:
        "ICDATA 2022 Conference, Compared the usage of satellite and ground level data in the prognostication of ground level PM2.5 levels. Worked on creating more advanced interpolation techniques to increase accuracy.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [

        {name: "Link to forecasting", url: "ai-aq.com"},
      ]
    },
    {
      title: "Multi-Pollutant Ground-level Air Pollution Prediction through Deep MeteoGCN-ConvLSTM",
      subtitle:
        "CSCI 2022 Conference, Created advanced air quality prediction models using a combination of satellite data and ground level data for the prediction of multiple pollutants in major cities.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "",
      footerLink: [
      ]
    },

    {
      title: "Global High-Resolution PM2. 5 Prediction Applying Multisource Big Data through Deep Convolutional LSTM",
      subtitle: "AGU Conference 2022, Calculate wildfire risk in Southern California using satellite data and machine learning models.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+1-562-330-8614",
  email_address: "shauryapathak24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
