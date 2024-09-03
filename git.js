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



//  -------------------------GIT commit -m "" ------------





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
// git diff 
// git diff -staged
// git rm --cached filename 
// git push origin main 
// git remote -v 
// git tag
// git tag -a 1.0 -m ""
// git show tagname
// git push oring tabname
// git checkout branchname 
// git checkout -b branchname 
// git branch 
// git branch -all
// git switch branchname 
// git switch -c branchname 
// git switch -
// git branch -d branchname
// git log --graph
// git merge brancename
// git pull origin branchname 
