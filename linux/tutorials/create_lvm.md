# Setup Logical Volume Management (LVM)

1. List disks
	```bash
	lsblk
	```

## Create LVM
1. Create Physical Volume:
	```bash
	sudo pvcreate /dev/sdX(N) /dev/sdY(N)
	```
	Use `sdX` to add the whole disk, where `sdX` can be `sda` or `sdb` etc. To add a partition, use `sdXN`, where `sdXN` can be `sda2`, `sda3`, `sdb1` or `sdb4` etc.
2. Check
	```bash
	sudo pvdisplay or pvscan or pvs
	```
3. Create Volume Group
	```bash
	sudo vgcreate "vgname" /dev/sdX(X) /dev/sdY(Y)
	```
	`/dev/sdY(Y)` is optional if you want to add 
4. Check
	```bash
	sudo vgdisplay or vgscan or vgs
	```
5. Create Logical Volume
	```bash
	sudo lvcreate --name "lvname(home)" -l "size" "vgname(ubuntu)"		# use 10G as "size" for 10GB or +100%FREE to use the whole VG
	```
6. Check
	```bash
	sudo lvdisplay or lvscan or lvs
	```
## Extend LVM by adding another disk/partition
1. Create new Physical Volume with `/dev/sdY(Y)`:
	```bash
	sudo pvcreate /dev/sdY(Y)
	```
2. Check
	```bash
	sudo pvdisplay or pvscan or pvs
	```
3. Extend existing Volume Group:
	```bash
	sudo vgextend "existing vgname(ubuntu)" /dev/sdY(Y)
	```
4. Check
	```bash
	sudo vgdisplay or vgscan or vgs
	```
5. Extend existing Logical Volume
	```bash
	sudo lvextend -l "size" /dev/"existing vgname"/"existing lvname"
	```
	use `-l|--extents +100%FREE` to use the whole free space. For example, `-l +25%free` and `--extents +75%FREE` uses 25% and 75% of free disk space respectively. To use exact size, use `-L 25G` and `--size 75G` to create pool or partition of 25GB and 75GB respectively.
6. Check
	```bash
	sudo lvdisplay or lvscan or lvs
	```
7. resize existing Logical Volume
	```bash
	sudo resize2fs -p /dev/mapper/"existing vgname"-"existing lvname"
	```
8. Or **Steps 5 and 7** can be combined using
	```bash
	sudo lvextend --verbose --resizefs --extents "size" /dev/"existing vgname"/"existing lvname"
	```


## References
1. [create-lvm-storage-in-linux](https://www.tecmint.com/create-lvm-storage-in-linux/)
2. [beginners-guide-to-lvm](https://www.thegeekdiary.com/redhat-centos-a-beginners-guide-to-lvm-logical-volume-manager/)
3. [install_lvm_centos](https://linuxhint.com/install_lvm_centos/)
4. [create-lvm-in-linux-centos](https://webhostinggeeks.com/howto/create-lvm-in-linux-centos/)
5. [how-to-configure-lvm-on-linux-centos-redhat](https://www.itzgeek.com/how-tos/linux/centos-how-tos/how-to-configure-lvm-on-linux-centos-redhat.html/2)
6. [howto-add-disk-to-lvm-volume-on-linux-to-increase-size-of-pool](https://www.cyberciti.biz/faq/howto-add-disk-to-lvm-volume-on-linux-to-increase-size-of-pool/)
7. [how-to-reduce-or-shrink-physical-volume-in-linux](https://kifarunix.com/how-to-reduce-or-shrink-physical-volume-in-linux/)
8. [shrink-lvm-volume-in-linux](https://linuxopsys.com/topics/shrink-lvm-volume-in-linux)
