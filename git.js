//  -------------------------GIT config------------
// The git config command is used to configure settings and preferences for Git on your system. It allows you to set up various configurations like your username, email address, editor, and more. These configurations can be applied at different levels: system, global, or local (repository-specific).


//  -------------------------GIT------------
// git -> Git is a distributed version control system widely used for tracking changes in source code during software development.
// 1. local version controll
// 2. centralise version control system(cvcs)
// 2. distributed version control system(dvcs)

// git config 
// git config --global list // gives user details 
// git config --global user.name "name"  //set username
// git config --global user.email "email"  //set email

// --------------------------------git init-------------------
// git init is a command used to initialize a new Git repository in a directory. It sets up all the necessary files and directories that Git needs to track changes to your project. Here's what happens when you run git init:

// Creates a .git directory: This hidden directory contains all the metadata and object database for the repository, including information about commits, branches, and configuration settings.

// Begins tracking: The directory now becomes a Git repository, and Git can start tracking changes to files within it.

// --------------------------------rm -rf .git-------------------
// The command rm -rf .git is used to completely remove the .git directory from a project. Here's a breakdown of what it does:

// rm: The remove command in Unix/Linux, used to delete files and directories.
// -r: Stands for "recursive," which means it will delete the directory and all of its contents.
// -f: Stands for "force," which means it will remove files without prompting for confirmation.
// .git: The hidden directory that stores all the data and history for the Git repository.
// What Happens When You Run rm -rf .git?
// Removes the Git repository: The .git directory and everything inside it will be deleted, effectively "un-initializing" the repository.
// Deletes version history: All commit history, branches, and configuration settings stored in the .git folder will be lost.
// Leaves working directory intact: Your project files will remain, but they will no longer be tracked by Git.
// Use With Caution
// This command is irreversible. Once you delete the .git directory, you cannot recover the version history or any of the repository data unless you have a backup.


// --------------------------------git init -b master-------------------
// The command git init -b mastar initializes a new Git repository with the name of the default branch set to mastar. Here's what it does:

// git init: Initializes a new Git repository in the current directory.
// -b mastar: Specifies the name of the initial branch. In this case, the branch is named mastar instead of the default main or master.

// Why Use -b Option?
// By default, Git creates a branch named master or main when you initialize a repository. However, you might want to use a different branch name for your project. The -b option allows you to set that branch name during initialization.

// Common Mistake: Typo in Branch Name
// If you intended to name the branch master but accidentally typed mastar, you'd create a branch with the wrong name. If this was a mistake, you can rename the branch afterward:

// git branch -m mastar master


// --------------------------------git add-------------------
// The git add command is used to stage changes in your working directory for the next commit. Staging allows you to prepare selected changes (e.g., added or modified files) before actually committing them to the repository. This way, you can review and organize what gets included in each commit.

// How git add Works
// Staging Changes:

// When you modify files in your working directory, those changes are untracked by Git until you stage them.
// git add moves the changes from the working directory to the staging area, making them ready for the next commit.
// Selective Staging:

// You can stage all changes at once or choose specific files or parts of files to stage.


// --------------------------------git log-------------------
// The git log command is used to display the commit history of a Git repository. It provides detailed information about each commit, including the commit hash, author, date, and commit message. This command is essential for reviewing the changes made to a project over time

// git log --oneline
// Shows each commit in a single line, including the abbreviated commit hash and commit message.

// git log -n 5
// Displays only the last 5 commits (replace 5 with any number).

// git log -p
// Shows the differences (diffs) introduced in each commit, allowing you to see exactly what was changed.

// git log -- filename
// Shows the commit history for a specific file, useful for tracking changes to a particular file.

// git log --graph --oneline --all --decorate
// Displays a graphical representation of the commit history, including branches and merges. The options:


// git log --author="Author Name"
// Shows only the commits made by a specific author.

// git log --grep="keyword"
// Displays commits with messages containing the specified keyword.

// git log --since="2 weeks ago"
// git log --after="2023-01-01" --before="2023-02-01"
// Filters commits based on a time period.


//  -------------------------GIT commit -m "" ------------
// The git commit command is used to save changes to the local repository. When you commit, you're creating a snapshot of the current state of your project, recording changes that have been staged with git add. Each commit is a checkpoint in your project's history, allowing you to track and revert changes if necessary.

// Commits all staged changes with a descriptive message.
// The -m flag allows you to include the commit message directly in the command.

// git commit -a -m "Your commit message"
// The -a flag automatically stages all modified and deleted files (except untracked files) before committing.
// This combines the staging and committing steps into one command.



//  -------------------------GIT diff ------------
// The git diff command is used to display the differences between various states in your Git repository. It shows what changes have been made to files but not yet staged or committed. This is particularly useful for reviewing changes before you decide to stage or commit them.

// git diff --staged
// Displays differences between the staging area and the last commit.
// Useful for reviewing changes that are staged and ready to be committed.

// git diff filename
// Shows differences in a specific file that hasn't been staged.

// git diff commit1 commit2
// Compares changes between two specific commits.
// Replace commit1 and commit2 with commit hashes or branch names.

// git diff commit
// Shows the difference between a specific commit and your current working directory.
// Useful for seeing what has changed since a particular commit.

// git diff -w
// Shows differences while ignoring changes in whitespace, which is useful when whitespace changes are not significant.

// git diff branch1..branch2
// Compares changes between two branches, helping you understand what has been added or removed.

// git diff --word-diff
// Shows the changes at the word level instead of the line level, which can be more precise for certain types of changes.


//  -------------------------git rm --cached file ------------
// The git rm --cached file command is used to remove a file from the staging area (also known as the index) without deleting it from the working directory. This effectively "unstages" the file, meaning it will not be included in the next commit, but the file itself will remain on your filesystem.

// When to Use git rm --cached
// Unstage a File: If you've accidentally added a file to the staging area with git add, and you don't want to include it in the next commit, you can use git rm --cached to unstage it.
// Remove a Tracked File: If you want to stop tracking a file in Git but keep it on your local machine, this command will remove it from Git’s tracking without deleting it from your working directory. This is often used when you want to stop tracking files that were mistakenly added to the repository (e.g., configuration files or log files).


// --------------------------------git brach -M main-------------------
// he git branch -M main command is used to rename the current branch to main. The -M option forces the rename operation, even if the main branch already exists. This command is especially useful when you want to standardize your branch names, such as renaming the default branch from master to main.

// How It Works
// git branch -M main:
// -M: Stands for "move" and forces the rename operation.
// main: The new name for the current branch.
// When to Use This Command
// Renaming the Default Branch: If you have an existing repository where the default branch is named master and you want to rename it to main, this command will do that.
// Standardizing Branch Names: Many projects are transitioning from using master to main as the default branch name for inclusivity reasons.


//  -------------------------git remote add origin link------------
// The git remote add command is used to add a new remote repository to your Git project. This remote repository is typically hosted on a platform like GitHub, GitLab, or Bitbucket. The remote repository acts as a reference point for where your code can be pushed or pulled.

// How the Command Works
// git remote add: Adds a new remote repository.
// gitlink: This is a placeholder for the name you want to give to the remote. Common names are origin for the main remote repository, but you can name it anything you like.
// <URL>: The URL of the remote repository you want to add. This is the link to your repository on GitHub, GitLab, etc.

// git remote -v
// This command lists all configured remotes, showing their names and URLs.

//  -------------------------git push -u origin main------------
// The git push -u origin main command is used to push the main branch from your local repository to the origin remote repository. The -u flag sets up main as the upstream branch, meaning that in future you can simply use git push without specifying the branch name or remote.

// How It Works
// git push: Pushes your commits from the local branch to the remote branch.
// -u or --set-upstream: Sets the upstream tracking reference. This tells Git to remember which remote branch your local branch is associated with, so you don't need to specify it in future push or pull commands.
// origin: The name of the remote repository you're pushing to. origin is the default name given to the remote repository when you first add it using git remote add origin <URL>.
// main: The name of the branch you want to push to the remote repository.

// When to Use This Command
// Initial Push: When you first push a new branch to a remote repository.
// Setting Upstream: When you want to set the upstream branch so that future pushes and pulls can be done without specifying the branch name.


//  -------------------------git checkout branchname------------
// The git checkout command is used to switch branches or restore files in your working directory. It's a versatile command that allows you to navigate between different branches, inspect previous commits, or discard changes in your working directory.
// git checkout branch_name (1st time need to create)
// Switches to the branch named branch_name. Your working directory will be updated to match the state of that branch.

// git checkout -b new_branch_name
// Creates a new branch named new_branch_name and switches to it immediately.

// git checkout commit_hash
// Checks out the commit specified by commit_hash. This puts you in a "detached HEAD" state, meaning you're not on any branch, but rather viewing the repository at a specific commit.

// git checkout commit_hash -- filename
// Restores the specified filename to the state it was in at commit_hash without affecting the current branch or other files.

// git checkout -- filename
// Reverts filename to its last committed state, discarding any changes made in the working directory.


//  -------------------------git switch------------
// The git switch command is a more focused command in Git, introduced to specifically handle branch switching, making it easier and more intuitive compared to the older git checkout command, which handled multiple tasks (branch switching, file restoring, etc.). git switch is primarily used to switch between branches or to create and switch to a new branch.

// git switch branch_name
// Switches to the branch named branch_name.

// git switch -c new_branch_name
// Creates a new branch named new_branch_name and immediately switches to it.

// git switch --detach commit_hash
// Switches to a specific commit, putting you in a detached HEAD state. This allows you to view or work on a commit without being on any branch.

// git switch -
// Switches back to the last branch you were on, which can be useful for toggling between two branches.

// git switch -f branch_name
// Forces the switch to branch_name, discarding any local changes in your working directory that haven’t been committed.


//  -------------------------git branch------------
// The git branch command is used to manage branches in Git. Branches are essential for parallel development, allowing developers to work on separate features or bug fixes without affecting the main codebase. The command can be used to create, list, delete, or rename branches.

// git branch
// Displays a list of all local branches. The current branch will be highlighted with an asterisk (*).

// git branch <branch_name>
// Description: Creates a new branch named <branch_name> based on the current HEAD (latest commit of the current branch).
// Note: This command only creates the branch; it does not switch to it.
// git branch feature-login

// git branch -d <branch_name>
// Description: Deletes the specified branch. Git will prevent deletion if the branch contains unmerged changes to protect data.

// git branch -D <branch_name>
// Description: Forcefully deletes the branch, even if it contains unmerged changes. Use with caution.

// git branch -r
// Description: Lists only remote branches.
















// git config // done
// git config --global --list
// git config --global user.name ""
// git config --global user.emai ""
// git status // done
// git init //done
// git init -b main or any // done
// rm -rf .git  //done
// git add name // done
// git log  // done
// git commit -m "" //done
// git commit -a -m "" // done
// git diff // done
// git diff -staged // done
// git rm --cached filename // done
// git push origin main // done
// git remote -v // done
// git tag
// git tag -a 1.0 -m ""
// git show tagname
// git push oring tabname
// git checkout branchname // done
// git checkout -b branchname // done
// git branch // done
// git branch -all // done
// git switch branchname // done
// git switch -c branchname 
// git switch -
// git branch -d branchname
// git log --graph
// git merge brancename
// git pull origin branchname 
