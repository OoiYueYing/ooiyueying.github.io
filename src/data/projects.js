export const projects = {
  "personal-website": {
    id: "personal-website",
    name: "👩‍🎨 personal website",
    cover: { srcPath: "headshot(YY).jpg" },
    date: "2021-05-15",
    summary: [
      "My personal website to document my journey in software engineering",
    ],
    githubRepo: {
      owner: "ooiyueying",
      repo:
        "https://github.com/OoiYueYing/ooiyueying.github.io/tree/master-source",
    },
    tags: [{ name: "Gatsby" }, { name: "graphql" }, { name: "tailswindcss" }],
  },
  "specular-highlight": {
    id: "specular-highlight",
    name: "📸 specular highlight",
    cover: { srcPath: "specularhighlight.jpg" },
    date: "2021-05-07",
    summary: [
      "A deep learning final year project that aims to remove specular highlight from facial images",
    ],
    githubRepo: {
      owner: "ooiyueying",
      repo: "https://github.com/OoiYueYing/specular-highlight-removal.git",
    },
    tags: [
      { name: "Python" },
      { name: "Autoencoder" },
      { name: "Maya" },
      { name: "Deep Learning" },
    ],
  },
}
