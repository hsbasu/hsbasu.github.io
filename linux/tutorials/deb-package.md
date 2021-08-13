#### get commits
git log --pretty="* %s"
#### Create changelog
dch -M --package <packagename> -D stable -v 1.0.0 --create
#### Modify changelog
dch -M -D distributionname(eg. stable) [optional] -v versionname (eg. 1.0.0)
##### Edit changelog
dch -e
#### Build deb package
dpkg-buildpackage -k<full_fingerprint> -b -nc -tc
#### Sign *.deb
dpkg-sig -k <full_fingerprint> --sign <signature> *.deb
#### Verify sign
gpg --verify simple-pwgen_*_all.deb
