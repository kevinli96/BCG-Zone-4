# BC Golf Zone 4 Women - Official Site
### Modifying the github pages (test) site
GitHub uses a version control system called Git, whose full range of features is far beyond the understanding of the average software engineer. The basic idea is that there is a 'master' version of the repository, and a local version that is stored on a collaborator's computer.

1. Download and install Git.
https://git-scm.com/downloads

2. Copy the entirety of the 'master' version's contents to start off. Navigate to a directory you would like to store the project in terminal and execute the following command.

  ```console
  git clone https://github.com/kevinli96/BCGA-Zone-4-Women-s-
  ```

3. A folder named "BCGA-Zone-4-Women-s-" will be created." This may take time depending on your internet connection. When this is finished executing, you now have a local copy of the repository. You can browse all the code that is part of the repository, in the directory that was just created.

### Helpful git commands

```console
git status
```
"git status" checks the status of your local repository (whether any files have been added, committed, or if you have not made any changes at all). I use this command when I first begin working, to see if there were any files from a previous session that I did not commit to the master.

```console
git stash
```

If there have been files you worked on whose changes you would like to discard, "git stash" resets the state of your local repository to the last time you pushed to the master.

```console
git pull
```
Sometimes, you will need to incorporate changes made by another collaborator to your local codebase. "git pull" does exactly that, and takes all modified files from the master and syncs up the repository with your local. Be cautious using this if you know that other collaborators have changed files that you are working on (or vice versa, if you begin working on files that others have modified), as this can lead to merge conflicts.


### Committing and pushing local code to master

Although we have just created a clone of the repository, any changes you make to these files will not persist in the remote, or master version that is the repository at the GitHub link (https://github.com/kevinli96/BCGA-Zone-4-Women-s-). These files will have to be 'committed' and 'pushed' to the master, and by extension, the website hosted at https://kevinli96.github.io/BCGA-Zone-4-Women-s-/
Say you want to replace a file to the website, e.g. a team schedule or results page.

1. Execute the given change (e.g. pdf/excel/image replacement, small change to the home page text).

2. Execute the following commands in terminal/command line

```console
git add -A
git commit -m "commit message"
git push
```

Line by line:
1. We must incorporate all the changes we made to the repository, so we must add the files with the (-A) argument denoting 'all' changes to our files.
2. We commit, or persist the files we added to the local version of the repository. Every commit requires a commit message, therefore the (-m) argument gives the 'commit' a commit message of the following text in quotes. This is up to the user to fill in, and is for documentation purposes. E.g. it could range anywhere from "replaced team 1 results pdf" to "small style change to home page"
3. Push the committed code to the master version. If there is an error denoting upstream branches, execute the full command ("git push -u origin master"). Otherwise, "git push" will suffice.

If at any point something unexpected comes up, CTRL+D or CTRL+C will terminate command execution and will return you to the command prompt.


## Tutorials
## Git
https://www.youtube.com/watch?v=HVsySz-h9r4

### Basic terminal commands
PC: http://www.digitalcitizen.life/command-prompt-how-use-basic-commands/
MAC: https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855
