// changing this file will result an edit in global site,
// useful if u wanna make changes from my site and make adjustments.

const siteInfos = {
  siteName: "welkin's space"
}

const footerLinkGroups = [
  {
    groupName: "Space",
    groupItems: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "Blogs",
        link: "/posts"
      },
      {
        name: "About Me",
        link: "/about-me"
      },
    ],
    groupClass: "font-fira flex flex-1 flex-col gap-1 min-w-32"
  },
  {
    groupName: "Projects",
    groupItems: [
      {
        name: "Personal Site",
        link: "/"
      },
      {
        name: "MuseDash Loader Companion",
        link: "#"
      },
    ],
    groupClass: "font-fira flex flex-1 flex-col gap-1 min-w-40"
  },
  {
    groupName: "Social",
    groupItems: [
      {
        name: "GitHub",
        link: "https://github.com/FlameChart"
      },
      {
        name: "LinkedIn",
        link: "https://linkedin.com/in/anonym-he"
      },
      {
        name: "Nostr (via Iris)",
        link: "https://iris.to/welkin"
      }
    ],
    groupClass: "font-fira flex flex-1 flex-col gap-1 min-w-40"
  },
];

export default { siteInfos, footerLinkGroups }
