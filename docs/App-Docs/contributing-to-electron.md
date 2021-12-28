---
sidebar_position: 3
title: 💖 Contributing to Electron Development
id: contribute-electron
tags:
    - Electron
    - App
    - Contributing
    - Contribute
    - Development
slug: ./contributing-to-electron
---

:::info
If you want to learn more about the Electron framework, you can view it [here](https://electronjs.org).
:::

## 📚 Getting Started

If you are new to Electron, you can start by reading the [Getting Started](https://www.electronjs.org/docs/latest) guide. This guide will walk you through the basic steps to get started with Electron. 

We will be using the [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) to develop our Electron application. Read the [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) guide to be able to contribute to WALDO.

**In this guide, it will be explained how to:**

- create a *new fork* of the waldo.desktop.app repository to your personal repositories.
- add changes to the *new fork*
- create a *pull request* to the waldo.desktop.app repository.

all under the rules of the [contributing agreement](https://docs.waldo.vision/docs/contributing/) and the [code of conduct](https://docs.waldo.vision/docs/contributing#code-of-conduct) attached to WALDO's repositories.

## Why use the fork workflow?

**Good question!**

We are using the [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) to develop our Electron application. This workflow is designed to make it easier for developers to contribute to WALDO. This is because it is a way to make sure that the code is up to date and that the code is being used by the community. This also makes updating the code easier and faster. It also makes it more difficult for the community to get into a situation where they are not using the latest code which would ultimately suck. If you are not familiar with the forking workflow, please read the [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) guide to be able to contribute to WALDO. Any questions about the forking workflow can be asked in the [discord](https://bit.ly/3mqDTV0).

## 🍽️ Forking

When you fork a repository, you will be able to make changes to the repository on your own personal repository. Meaning you will be able to make changes to the code and add new features without breaking the original code. We are going to fork the repository through GitHub. 

Navigate to the [GitHub repository](https://github.com/waldo-vision/waldo.desktop.app) and click on the **Fork button** on the top right of the page.

![GitHub Forking](/img/forking-ss.png) 
A notification will open, where you can see the **Forks** section. Click on the **Fork** button to create a new fork and set it to your personal organisation or account you want to work on. Example, in this case, I would fork the repository to my personal account [tsundDev](https://github.com/tsundDev).

![GitHub Forking](/img/forking-not-ss.png)

When forked, you will see a new repository in your organisation or account. You can see the repository in the **Forks** section. Congratulations, you have created a fork of the waldo.desktop.app repository! 

## 📦 Adding Changes

If your want to make changes to the code, you can do so by adding changes to the *new fork*. Once you have made changes, you can push them to the *new fork* by clicking on the **Commit** button. For more information on how to push changes to the *new fork*, please refer to the [GitHub documentation](https://help.github.com/en/articles/using-git-commands-to-manage-your-repository-and-files). Click on the **Commit** button and add a message to describe the changes you have made.

:::important
Please note that any changes to the `package.json`, `craco.config.js`, `.gitignore` or `yarn.lock` files will be ignored unless you have a specific reason to do so. 
:::

## 📌 Pull Request

:::note
Before making your pull request, please make sure your fork is up to date with the latest changes in the original repository and that you have tested your changes. 
:::

When you have made changes to the *new fork*, you can create a *pull request* to the waldo.desktop.app repository. This will allow you to make a request to the original repository to merge your changes. 

To create a new pull request to the waldo.desktop.app repository, navigate to your *new fork* and click on the **Pull Request** button. Click on the **New Pull Request** button and make sure that the PR is directing to the develop branch. 

![PR](/img/PR-branch-ss.png)

Then, add a title and a description for your pull request.

- Title: **feature / hotfix / bug** title
- Description: **description of all the changes you have made.** This includes any changes to any files, removed files, added files, etc. Make sure to give an accurate description of the changes you have made otherwise the pull request will be rejected.

Then, click on the **Create Pull Request** button.
Congratulations, you have created a pull request to the waldo.desktop.app repository! Please wait for the maintainers to review your pull request. They will be able to merge your changes if they approve. If you want to update your pull request, you can do so by clicking on the **Edit** button and making any changes you want. For more information on how to update your pull request, please refer to the [GitHub documentation](https://help.github.com/en/articles/about-pull-requests). 
