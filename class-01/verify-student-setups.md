# Verify student computer setups

This checklist is intended to help instructional staff verify that students successfully completed the computer setup portions of the prework.

## Windows/WSL students *only*

- Ask them how it went
- `cdwr` should take them to their Ubuntu root
- Once there, try `chrome` and `code` commands to open files
- If not installed properly, go thru prework setup. This will take a while; try to do multiple students simultaneously if possible.

## Mac students *only*

- verify Homebrew (`which brew`)
- Run these commands individually: `brew update`, `brew upgrade`, `brew cleanup`, `brew doctor`

## All students

Run the following shell commands *individually* in the students' terminals. Each of these commands should return something; if they do not, there is an issue to be addressed. Refer back to the corresponding instructions in the prework.

### Installations

- `code --version`
- `git --version`
- `npm --version`
- `eslint --version`
- `live-server --version`
- `tree --version`

### Configs

- `echo $PS1` *(Direct the student to http://ezprompt.net to create a PS1)*
- `ls ~/codefellows` *(Guide them through creating these directories if they do not exist)*
- `cat ~/.gitconfig` *(If this comes back blank, investigate their Git and GitHub setups)*

### ESLint

- Make sure they have the ESLint extension installed and enabled in VSCode
- Create a `.eslintrc.json` file in their `~/codefellows/201/` directory.
- Copy the content of that same file from the root level of the class repository
- Create a test JS file to see that the linter is working

### Additional VSCode settings

In the lower left-hand corner of VSCode, click on the gear icon and select "Settings". Use the search functionality to set up the following values.

- "editor.tabSize" should be set to **2**
- "editor.detectIndentation" should be set to **true**
- "editor.wordWrap" should be set to **on**
- "editor.minimap.enabled" should be set to **true**
