# Build packages in Launchapd PPA

## On local computer
1. Install and configure tools
	1. `sudo apt install gnupg pbuilder ubuntu-dev-tools apt-file arch-test --no-install-recommends`
	2. Create your GPG key and upload to Launchpad
	3. Create your SSH key and upload to Launchpad
	4. Configure your shell for `dch` and `debuild`. Add the lines to `~/.bashrc`:
		```bash
		export DEBFULLNAME="John Doe"
		export DEBEMAIL="john.doe@example.com"
		```
	5. Set up `pbuilder`:
	```bash
	pbuilder-dist <release> create		# eg. pbuilder-dist focal create
	```
3. Build a debian package:
	1. Get source of a debian package from Github/GitLab/Launchpad using git/bzr
	2. Move/copy the directory to ~/pbuilder
	3. open terminal in the source directory
	4. Make desired changes and (optionally) commit
	5. run 
		```bash
		debuild -S -us -uc -d(optional, used to skip dependency check)
		pbuilder-dist <release> build ../<package>_<version>.dsc
		```
		this step is likely to fail if the dependencies are not installed on host system.
	6. On **success**, the resulting **`*.deb`** file(s) will be stored in `<release>_result`. to test install the package(s).
	7. Finally build source packages using only one of the following:
		```bash
		debuild -S -d	# build source package,
						# use -d to build without checking build-depends
		or
		debuild -S -sd -d	# build source package,
							# will be uploaded without the .orig.tar.gz file
		or
		debuild -S -sa -d	# build source package,
							# will be uploaded with the .orig.tar.gz file
							# (eg. while building plymouth)
		```
		This will create a file in `~/pbuilder` as **\<Package\>\_\<version\>\_\<source.changes\>**
4. Uploading to Launchpad PPA:
	```bash
	dput ppa:your-lp-id/ppa <Package>_<version>_<source.changes>
	```
5. Check the PPA page for the **package**

# References
1. [Ubuntu Packaging Guide](https://packaging.ubuntu.com/html/getting-set-up.html)
2. [Building a source package](https://help.launchpad.net/Packaging/PPA/BuildingASourcePackage)
3. [PbuilderHowto](https://wiki.ubuntu.com/PbuilderHowto)
4. [pbuilder-docs](https://buildmedia.readthedocs.org/media/pdf/pbuilder-docs/latest/pbuilder-docs.pdf)
