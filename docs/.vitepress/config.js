module.exports = {
  title: "Awesome Music Playlist 🎧",
  description: "List of music playlist from many platform",
  lang: "en-US",

  themeConfig: {
    repo: "satyawikananda/awesome-music-playlist",
    docsDir: "docs",
    nav: [
      {
        text: "Home",
        link: "/",
        activeMatch: "^/$|^/home/"
      },
    ],
    sidebar: {
      "/": getMenuSidebar(),
    },
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    docsBranch: "main"
  }
}

function getMenuSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'About', link: '/' },
        { text: 'Contribution', link: '/contribution' },
      ]
    },
    {
      text: 'List Playlist',
      children: [
        { text: 'Blues', link: '/playlist/blues' },
        { text: 'Campursari', link: '/playlist/campursari' },
        { text: 'Dangdut', link: '/playlist/dangdut' },
        { text: 'DJ Indo', link: '/playlist/dj-indo' },
        { text: 'Electronic Dance Music', link: '/playlist/edm' },
        { text: 'Epic and Melodic', link: '/playlist/epic-melodic' },
        { text: 'Eurobeat', link: '/playlist/eurobeat' },
        { text: 'Instrumental', link: '/playlist/instrumental' },
        { text: 'J-Pop', link: '/playlist/jpop' },
        { text: 'Kawaii Metal', link: '/playlist/kawaii-metal' },
        { text: 'K-Pop', link: '/playlist/kpop' },
        { text: 'Lofi Hiphop', link: '/playlist/lofi-hiphop' },
        { text: 'Metal', link: '/playlist/metal' },
        { text: 'Murottal', link: '/playlist/murottal' },
        { text: 'Podcast', link: '/playlist/podcast' },
        { text: 'Pop', link: '/playlist/pop' },
        { text: 'R&B', link: '/playlist/r&b' },
        { text: 'Rap', link: '/playlist/rap' },
        { text: 'Rock', link: '/playlist/rock' },
        { text: 'Soul', link: '/playlist/soul' },
        { text: 'Trap', link: '/playlist/trap' }
      ]
    }
  ]
}
