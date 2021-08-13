## Tutorial to create Custom Ubuntu from hard disk installation
1. Install ubuntu on a hard disk
2. Change it to your liking by installing themes and packages from **software-list.md**
3. Create backup of `/var/log/installer/initial-status.gz` using:
	```
	sudo cp /var/log/installer/initial-status.gz /var/log/installer/initial-status.gz.bak
	```
4. Add **timeshift icon** from **configs/timeshift-gtk.desktop**
5. Backup _dconf-settings_ using `dconf dump / > $HOME/dconf-backup
6. Copy **$HOME/.config** to **/etc/skel** using the script **scripts/backup-config.sh**
7. Install ubiquity using **scripts/install_packages.sh**
8. Mark all installed packages as auto-installed using **scripts/mark-installedpkgs-as-auto.sh** (**Highly Not advisable**)
9. Clean filesystem by running **bleachbit(root)**. Select all except **APT**, and _Localizations_ and _Memory_ in **System**
10. Backup using Timeshift

**Optional:**
1. If _Anydesk_ is installed, remove `/etc/anydesk/service.conf`
2. 

#### Preparing for iso
A clean distro-ISO is created using two steps:
1. **Step 1:** create an distro-ISO using **Pinguy Builder**.
	1. Install Pinguy Builder
	2. Use the **Distcdfs** option from Pinguy Builder
	3. Copy **filesystem.manifest-minimal-remove** and **filesystem.manifest-remove** from **to_include/casper**
	4. Copy **cli.seed, freedom.seed, ltsp.seed, ubuntu-mate.seed** from **to_include/preseed**
	5. delete **casper/filesystem.manifest-desktop** and **preseed/custom.seed**
	6. Copy contents of **dists** from **to_include** to **ISOTMP/dists** and remove **packages.gz**
	7. copy grub.cfg, loopback.cfg, isolinux.cfg and modify **initrd=/casper/initrd.gz**
	8. Create ISO using **Distiso** option of Pinguy Builder
2. **Step 2:** Edit the ISO using **CUbIC**, to get a _cleaner_ distro-ISO.
	1. Install CUbIC.
	2. Use **Custom ISO** options:
		```
		Version: 20.04.1
		filename: freedom-20.04.1-LTS-amd64.iso
		Volume ID: Freedom 20.04.1 LTS amd64
		Release: Focal Fossa
		Disk name: Freedom 20.04.1 LTS "Focal Fossa" - Release amd64
		Release url: https://freedom-os.sourceforge.io
		```
	3. In CUbIC chroot environment edit **/etc/apt/sources.list** to contain:
		```
		deb http://archive.ubuntu.com/ubuntu/ focal main restricted universe multiverse
		deb http://security.ubuntu.com/ubuntu/ focal-security main restricted universe multiverse
		deb http://archive.ubuntu.com/ubuntu/ focal-updates main restricted universe multiverse
		```
	4. Remove older **linux-headers, linux-image, linux-modules, linux-modules-extra** on chroot environment and keep only the latest.
	5. Set **GRUB_DEFAULT=0** in **/etc/default/grub**
	6. Modify .cfg files in **ISO Boot** tab from **to_include** directory.

#### References:
1. [MakeALiveCD By Ubuntu][1].
2. [Askubuntu][2]: How to use Cubic to create a custom Ubuntu live CD image?

[1]: https://help.ubuntu.com/community/MakeALiveCD/DVD/BootableFlashFromHarddiskInstall
[2]: https://askubuntu.com/questions/741753/how-to-use-cubic-to-create-a-custom-ubuntu-live-cd-image/741770#741770