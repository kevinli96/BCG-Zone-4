# BC Golf Zone 4 Women - Official Site

## Table of Contents

* [Maintenance](#maintenance)
  * [Teams](#teams)
  * [Tournaments](#tournaments)
  * [Tables](#Tables)
  * [Images](#Images)
* [Site Training](#site-training)
  * [Installations](#installations)
  * [Local Site Setup](#local-site-setup)
  * [Git Workflow](#git-workflow)
* [Tips](#tips)
  * [Helpful Git Commands](#helpful-git-commands)
  * [Helpful Terminal Commands](#helpful-terminal-commands)

## Maintenance

### Teams

The teams.html file is organized such that the code corresponding to each team (1, 2, 3) is automatically inserted into the "Info" tab (the first tab on the page). Therefore there is no need to make changes twice to modify the individual team information as well as the Info tab. 

### Tournaments

All the separate tournaments have been divided into their respective .html files located in the tournaments/ folder. The files are as follows

* tournaments/business_women.html (business women tournaments)
* tournaments/junior_girls.html (junior girls tournaments)
* tournaments/past_results.html (past results)
* tournaments/provincial.html (provincial tournaments)
* tournamentszone34.html (zone 3/4 tournaments)

### Tables

A simple way to convert excel spreadsheets to HTML table code is to use [Tableizer](http://tableizer.journalistopia.com/). Paste the relevant cells from the spreadsheet into Tableizer, and copy the output of Tableizer into the appropriate .html file located in the tables/ folder. The following tables are located in the tables/ folder. 

* tables/bw_executive_table.html (business women executive)
* tables/executive_table.html (zone 4 executive)
* tables/team1.html (team 1 schedule)
* tables/team2.html (team 2 schedule)
* tables/team3.html (team 3 schedule)

### Images

Images for the champions/juniors/assorted photos are located under img/gallery

## Site Training

### Installations

1. Download/install Git.
https://git-scm.com/downloads

2. Download/install Python 3.6.4 (or the latest 3.6.x version)
https://www.python.org/downloads/

3. Open terminal/command prompt and enter the following
    ```console
    git clone https://github.com/kevinli96/BCG-Zone-4
    ```
An alternative to the above terminal/command prompt step is to manually download the Git repository from the GitHub website [here](https://github.com/kevinli96/BCG-Zone-4). Click on the green 'Clone or download' button and then click 'Download ZIP.' A screenshot of the github homepage is located below.

<img src="img/github.png" width="600">

A folder named "BCG-Zone-4" will be created." This may take time depending on your internet connection. When this is finished executing, you now have a local copy of the repository. You can browse all the code that is part of the repository, in the directory that was just created.

### Local Site Setup

Because of [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (cross-origin resource sharing), we need to set up a local web server on our computer in order to fully run the website. Otherwise, a lot of the formatting and images will not come out as they are supposed to. However, setting up a local web server is really simple with python installed.

1. Navigate in terminal/command prompt to the "BCG-Zone-4" folder. Enter the following command:

  ```console
  python -m http.server 8888
  ```

  The number 8888 is an arbitrary port number. This can be any port, but the default is usually 8888. You should see something similar to the following:

  <img src="img/server_startup.png" width="600">

  The ~/workspace/BCGA/BCG-Zone-4 is the location of the terminal/command prompt. This will be different depending on where you have downloaded (git cloned) the BCG-Zone-4 directory. For example, this could be ~/Desktop/BCG-Zone-4, if you downloaded the directory onto your desktop.

2. Open a web browser (Chrome works best) and go to the address: *localhost:8888*

  <img src="img/localhost_chrome.png" width="800">

  Notice that the terminal/command prompt will output a few lines to confirm that you are retrieving resources (images and formatting scripts) from this local python web server.

  <img src="img/localhost_terminal_response.png" width="600">

### Git Workflow

1. Open Windows Powershell (or command prompt or terminal on Mac) and navigate to the BCG-Zone-4 directory (using cd commands, with "cd .." bringing you up a single directory)

2. Ensure that you have the latest changes from the GitHub repository by pulling

  ```console
  git pull
  ```

3. Start your work session (setting up python web server and sublime text editor)

4. Add, commit and push local code to the GitHub repository

  Although we have just created a clone of the repository, any changes you make to these files will not persist in the remote, or master version that is the repository at the GitHub link (https://github.com/kevinli96/BCG-Zone-4). These files will have to be 'committed' and 'pushed' to the master, and by extension, the website hosted at https://kevinli96.github.io/BCG-Zone-4/

  ```console
  git add -A
  git commit -m "commit message"
  git push (git push -u origin master)
  ```

  Line by line:
  1. We must incorporate all the changes we made to the repository, so we must add the files with the (-A) argument denoting 'all' changes to our files.
  2. We commit, or persist the files we added to the local version of the repository. Every commit requires a commit message, therefore the (-m) argument gives the 'commit' a commit message of the following text in quotes. This is up to the user to fill in, and is for documentation purposes. E.g. it could range anywhere from "replaced team 1 results pdf" to "small style change to home page"
  3. Push the committed code to the master version. If there is an error denoting upstream branches, execute the full command ("git push -u origin master"). Otherwise, "git push" will suffice.

  If at any point something unexpected comes up, CTRL+D or CTRL+C will terminate command execution and will return you to the command prompt.

## Tips

### Helpful Git Commands

```console
git status
```

"git status" checks whether any files have been added or committed, and is a useful check to determine which git command you should run next.

```console
git stash
```

If you run into a merge conflict, or there files you have worked on whose changes you would like to discard, "git stash" will do this. It resets the state of your local repository to the last time you pushed to the master.

```console
git pull
```

Sometimes, you will need to incorporate changes made by another collaborator to your local codebase. "git pull" does exactly that, and takes all modified files from the master and syncs up the repository with your local. Be careful using this if you know that other collaborators have changed files that you are working on (or vice versa, if you begin working on files that others have modified).


### Basic terminal commands
PC: http://www.digitalcitizen.life/command-prompt-how-use-basic-commands/

MAC: https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855
