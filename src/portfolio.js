import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1200
};

// Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "刘娜",
  title: "各位早上好、中午好、下午好、晚上好！我是刘娜",
  subTitle: emoji(
    "自壬寅至丙午，从初见校门的惶然，到挥手作别时的从容，一千多个日夜，藏着迷茫与坚定、汗水与欢笑。那些与同窗共赴的深夜、与晚风同行的归途，都成了我青春里最温润的注脚。这里是我与这段时光的温柔道别，也是给未来的一封回信。愿此去，前程似锦，岁岁安然！"
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media

const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "",
  display: false
};

// Skills

const skillsSection = {
  title: "我的故事",
  subTitle: "这里记录了我的大学时光、青春记忆。",
  skills: [
    emoji("🌸 记录那些难忘的大学日子"),
    emoji("📷 收藏青春里的照片与故事"),
    emoji("🎓 为四年时光留下一个温柔的句号")
  ],

  softwareSkills: [
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],

  display: true
};

// 全部关闭不用的模块

const educationInfo = {
  display: false
};

const techStack = {
  viewSkillBars: false,
  displayCodersrank: false
};

const workExperiences = {
  display: false
};

const openSource = {
  showGithubProfile: false,
  display: false
};

const bigProjects = {
  display: false
};

const achievementSection = {
  display: false
};

const blogSection = {
  display: false
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

const resumeSection = {
  display: false
};

const contactInfo = {
  title: emoji("联系我 ☎️"),
  subtitle: "感谢你来看我的毕业纪念网站。",
  number: "",
  email_address: ""
};

const isHireable = false;

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
  isHireable,
  resumeSection
};