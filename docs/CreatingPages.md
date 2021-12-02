---
sidebar_position: 3
title: 📄 Creating and Editing Pages
id: Create-Delete-Pages
tags:
    - Introduction
    - Admin
slug: create-delete-pages
---

# Creating, Deleting or Editing Docs 📄
> Further doumentaation check out: Docusaurus ~ [`v2.0.0-beta.9`](https://docusaurus.io/docs) 
>  Only limited markdown knowledge needed [learn more...](https://www.markdownguide.org/cheat-sheet/)

## Setting up ⚙️

###  Using terminal
##### Change directory into your project folder:
```shell
$ cd .\projects\waldo\repo\docs\
```
##### Initialise a new git enviroment, download [here...](https://git-scm.com/download/) and set up git remote branch either through ssh or https [read more...](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)
```shell
$ git init
# Create new git env

$ git remote add origin https://github.com/waldo-vision/docs.waldo.vision.git
# Set new remote
```

##### Pull the repo to your local repository 
`origin` as organisation repository
`master` as repository branch to pull
```shell
$ git pull origin master
```
##### Open with your favourite IDE *(showcaase will be on visual studio code)*
Locate to the `./docs/` directory, this is where all documents are stored.

![Docs Directory](https://i.ibb.co/YQzDpDT/image.png)

### Using GitHub Directly (no directories)
#### You can commit directly to the github develop branch *(never commit directly to the master branch)*
Go to the develop branch:

![Develop Branch](https://i.ibb.co/Lh56DpQ/image.png)

Direct to the `./docs/` directory, this is where all documents are stored.

## Creating a new document

To create a new document just add a file with a `.md` ending.
>If you want to create sub directories, docusaurus will automatically separate render them within folders. ***(If commiting directly to the develop branch you will not be able to create sub directories)***

*What ever name you give the folders it will show up in the final build*

![New doc](https://i.ibb.co/yBBcw0D/image.png)

### Structure
```yaml
 # Structure of the docs directory
docs
├── intro.md
└── sub-directory
    ├── intro.md
    └── sub-directory
        ├── ...
        └── ...
```

Make sure to create an `intro.md` in every folder. (Set slug to `./`)

### Creating File
When creating a file, make sure to add a header with the following format:
```markdown 
---
sidebar_position: 1      
title: 👋 Introduction      
id: anlysis-new-approach-intro       
tags:
    - Admin
slug: ./
---
```
`sidebar_position:` is the position of the page in the sidebar.

`title:` is the title of your page and it will be used in the sidebar. If you create a `#` at the start of the file it will be used as the title of the page and over ride the `title:` tag.

`id:` is the id of the page and it will be used to link pages to eachother. Make sure to use a unique id for each page. e.g. use directory names as ids.

`tags:` is the tags of the page and can be discovered by searching from the tags list.

`slug:` is the slug of the page and it will be used to link to the page. 

*Example:*

`./intro.md` https://docs.waldo.vision/docs/intro.md -> `./` https://docs.waldo.vision/docs/


**Then you can add your content to the file. For more information on markdown check out the *[cheat sheet](https://www.markdownguide.org/cheat-sheet/)***

## Deleting a document
To delete a document just delete the file, if the file is the only item in the sub directory you can delete the sub directory as well.

## Editing a document
If you want to edit a document just open the file in your favourite editor and make your changes.
If you are using GitHub directly you can edit the file directly in the develop branch.

## Pushing / Updating Files to GitHub (terminal)
To push to GitHub you can use the following commands:
```shell
$ git add .
# Add all files to staging

$ git commit -m "message"
# Commit all staged files

$ git push origin develop
# Push all staged files to develop branch
```
After pushing to GitHub you can see the changes in the develop branch. After testing your changes can be pushed to the master branch, make a PR request and merge the PR.
