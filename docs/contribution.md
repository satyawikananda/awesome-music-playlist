---
title: Contribution
sidebarDepth: 2
---

# Contribution

## Add new playlist
If you want to add new playlist, please sort alphabetically A-Z.

## Add new genre
If you want to add new genre, please sort alphabetically A-Z in `getMenuSidebar()` function inside [config.js]() file and then create a new markdown file inside playlist directory and follow this template:

```md
---
sidebarDepth: 2
title: Genre's name
---

| Playlist Name | Playlist Link | Platform | Playlist Author Name/Contributor Name | Note | Subgenre |
| ------------- |-------------- | -------- | ------------------------------------- | ---- | -------- |
```

## Create a pull request

1. Fork this repository project on GitHub
2. Clone the project which you had been forked before
3. Edit that what you want to change
4. Create your feature branch: `git checkout -b your-new-branch`
5. Add your change to the staging area git: `git add .`
6. Commit your change: `git commit -m "some message"`
7. Push to the branch: `git push -u origin your-new-branch`
8. Submit a pull request :D
