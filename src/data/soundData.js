export const soundCategories = [
    { id: "all", label: "All" },
    { id: "intro", label: "Introductions" },
    { id: "projects", label: "Project Walkthroughs" },
    { id: "support", label: "IT & Support" },
  ];
  
  export const soundTracks = [
    {
      id: "s1",
      category: "intro",
      tag: "intro",
      title: "Welcome message",
      description: "A short audio introduction — who I am and what I do.",
      duration: "0:45",
      src: "/audio/welcome.mp3",
    },
    {
      id: "s2",
      category: "projects",
      tag: "web_dev",
      title: "Hospital system walkthrough",
      description: "A narrated walkthrough of the hospital management system's dashboard.",
      duration: "2:10",
      src: "/audio/hospital-walkthrough.mp3",
    },
    {
      id: "s3",
      category: "projects",
      tag: "database",
      title: "Database design explained",
      description: "A short explanation of the schema design behind the employee system.",
      duration: "1:35",
      src: "/audio/database-explained.mp3",
    },
    {
      id: "s4",
      category: "support",
      tag: "it_support",
      title: "Troubleshooting a network issue",
      description: "A recorded walkthrough of diagnosing a dropped connection on-site.",
      duration: "1:58",
      src: "/audio/network-troubleshooting.mp3",
    },
  ];