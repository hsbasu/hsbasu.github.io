# Git Tutorial

## Install git
```bash
sudo apt install git
```
## Configure
### Configure the git with name & email:
```bash
git config --global user.name "John Doe"
git config --global user.email "john.doe@example.com"
```

### Sign commits
```bash
git config --global user.signingkey XXXXXXXXXXXXXXXX
git config --global commit.gpgSign true
git config --global tag.gpgSign true
```

### Set editor

Setting VS code as default editor:

```
git config --global core.editor "code -w"
```

### Git Basic about Repository
Go to repo directory. Then in terminal:
1. Initialize Git Repository:
	```bash
	git init	# Not necessary if alredy initialized
	```
2. Update `master` branch of repository with remote:
`git pull origin master`
3. Commiting files into the git repo:
	```bash
	git add <File_Names>  # For number of Files
	git add .	# For all the files in current Directory
	```
4. To check, if files are added or not:

	`git status`
5. Commit a file into the git repo is to write a commit message:

	`git commit -m "Initial Commit"`
6. Final `push` to remote branch named `master`:
	
	`git push origin master`

### Git Branch
1. Show all branches

	`git branch`
2. Check current branch

	`git branch --show-current`
3. Create new branch

	`git checkout -b BranchName`
4. Change branch

	`git checkout BranchName`
5. Delete branch

	`git branch -D local-branch-name`
6. New branch from <upstream>/<branchname>

	`git checkout -b <local_branch_name> <remote_name>/<remote_branch_name>`

### Git issues
1. Link commit to issue:
	```bash
	git commit -m "fixes #<issue_number>, closes #<issue_number>; commit message"
	```
Any one of `fixes #<issue_number>` or `closes #<issue_number>` will close `#<issue_number>`

### Git tags
1. list existing tags:

	`git tag -l`
2. Add tag:

	`git tag <tag_name>`	# tag_name example: v1.0, 1.0.1
3. Add tag with annotation/message

	`git tag -a <tag_name> -m "Initial release"`
4. Push tag/s to remote:
	```bash
	git push origin <tag_name>	# for single tag
	git push origin --tags		# for all tags
	```
5. Delete tag/s from local and then remote:
	```bash
	git tag -d <tag_name>					# delete locally
	git push origin :refs/tags/<tag_name>	# deletes from remote
	```
6. Delete tag/s directly from remote:

	`git push origin --delete <tag_name>`

### Git Remote management
1. Add remote location to locally created repo:

	`git remote add <origin> git@github.com:gitusername/myreponame.git`

2. To check

	`git remote -v`

3. Add upstream repo:

	`git remote add <upstream> git@github.com:upstreamusername/upstreamreponame.git`

4. Pull from upstream repo:

	`git pull <upstream> <upstreambranchname>`


## References

1. [How to get just one file from another branch?](https://stackoverflow.com/questions/2364147/how-to-get-just-one-file-from-another-branch)

2. [Git Cheat Sheet - The Ultimate Guide](https://blog.maateen.me/git-cheat-sheet-the-ultimate-guide/)
