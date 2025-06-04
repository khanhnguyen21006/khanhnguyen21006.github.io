// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Please see my Google Scholar page for a complete list of publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects. To be introduced. 😅",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Khanh Nguyen (updated Jan 2025)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-has-been-accepted-at-tmlr-2025",
          title: 'Our paper []) has been accepted at TMLR 2025! 🥳.',
          description: "",
          section: "News",},{id: "news-excited-to-present-our-paper-show-interpret-amp-amp-tell-accepted-at-aaai-2023",
          title: 'Excited to present our paper Show, Interpret &amp;amp;amp; Tell, accepted at AAAI 2023!...',
          description: "",
          section: "News",},{id: "news-the-neurips-2023-competition-on-privacy-preserving-federated-learning-document-vqa-is-on-we-also-organize-a-workshop-in-the-context-of-the-challenge-at-the-conference-see-you-at-new-orleans",
          title: 'The NeurIPS 2023 competition on Privacy-Preserving Federated Learning Document VQA is on 🔥!....',
          description: "",
          section: "News",},{id: "news-two-papers-fldocvqa-and-pfl-docvqa-dataset-has-been-accepted-at-icdar-2024-see-you-in-athens",
          title: 'Two papers FLDocVQA and PFL-DocVQA Dataset has been accepted at ICDAR 2024. See...',
          description: "",
          section: "News",},{id: "news-the-challenge-inference-attacks-against-document-vqa-has-been-accepted-at-ieee-satml-2025",
          title: 'The challenge Inference Attacks Against Document VQA has been accepted at IEEE SatML...',
          description: "",
          section: "News",},{id: "news-our-paper-docmia-has-been-accepted-at-iclr-2025-see-you-in-singapore",
          title: 'Our paper DocMIA has been accepted at ICLR 2025. See you in Singapore!...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
