1. Create Apache server:
	1. Install Apache server using:
		```
		sudo apt update
		sudo apt install apache2
		```
	2. Rename the original `index.html` file in `/var/www/html` to `index.html.bak`
	3. Create a symlink of a directory in `/var/www/html` using:
		```
		sudo ln -s /full/path/to/directory /var/www/html
		```
	4. To access the server with hostname(eg. example.com):
		1. Backup original `/etc/apache2/sites-available/000-default.conf` to `000-default.conf.bak` using:
			```
			sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf.bak
			```
		2. Add `ServerName example.com` to top of file `/etc/apache2/sites-available/000-default.conf`
	5. Restart Apache Server:
		```
		sudo systemctl restart apache2
		sudo systemctl status apache2
		```

2. Set up `https` for Apache Server
	1. Install `openssl` as `sudo apt-get install openssl`
	2. Enable SSL module of Apache: `sudo a2enmod ssl` and `sudo a2enmod rewrite`
	3. Backup original `/etc/apache2/apache2.conf` to `apache2.conf.bak` using:
		```
		sudo cp /etc/apache2/apache2.conf /etc/apache2/apache2.conf.bak
		```
	4. Add
		```
		<Directory /var/www/html>
			AllowOverride All
		</Directory>
		```
		to `/etc/apache2/apache2.conf` after the block ```<Directory /var/www/> ... </Directory>```. The final `/etc/apache2/apache2.conf` will look like:
		```
		...
		<Directory /var/www/>
			...
		</Directory>
		
		<Directory /var/www/html>
			AllowOverride All
		</Directory>
		...
		```
	5. Create a private key and the website certificate using the OpenSSL command as:
		```
		mkdir -p /etc/apache2/certificate
		cd /etc/apache2/certificate
		openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out apache-certificate.crt -keyout apache.key
		```
		And enter requested informations as
		```
		Country Name (2 letter code) [AU]:IN
		State or Province Name (full name) [Some-State]:WB
		Locality Name (eg, city) []:Kolkata
		Organization Name (eg, company) [Internet Widgits Pty Ltd]:hsbasu
		Organizational Unit Name (eg, section) []:hsbasu
		Common Name (e.g. server FQDN or YOUR name) []:freedomrepo.myftp.org
		Email Address []:
		```
	6. Edit the Apache configuration file `/etc/apache2/sites-available/000-default.conf` for the default website and add the following lines:
		```
		<VirtualHost *:443>
	        ServerAdmin webmaster@localhost
	        DocumentRoot /var/www/html
	        ErrorLog ${APACHE_LOG_DIR}/error.log
	        CustomLog ${APACHE_LOG_DIR}/access.log combined
	        SSLEngine on
	        SSLCertificateFile /etc/apache2/certificate/apache-certificate.crt
	        SSLCertificateKeyFile /etc/apache2/certificate/apache.key
		</VirtualHost>
		```
		The final form of `/etc/apache2/sites-available/000-default.conf` should be:
		```
		ServerName example.com
		...
		<VirtualHost *:80>
			...
		</VirtualHost>
		
		<VirtualHost *:443>
	        ServerAdmin webmaster@localhost
	        DocumentRoot /var/www/html
	        ErrorLog ${APACHE_LOG_DIR}/error.log
	        CustomLog ${APACHE_LOG_DIR}/access.log combined
	        SSLEngine on
	        SSLCertificateFile /etc/apache2/certificate/apache-certificate.crt
	        SSLCertificateKeyFile /etc/apache2/certificate/apache.key
		</VirtualHost>
		```
	7. Restart Apache Server:
		```
		sudo systemctl restart apache2
		sudo systemctl status apache2
		```

3. Set up password-protected apache server using `htpasswd`
	1. install `htpasswd`, part of the `apache2-utils` package:
	```
	sudo apt-get install apache2-utils
	```
	2. Create the Password File and save it:
	```
	sudo vi /etc/apache2/.htpasswd
	```
	3. Create username and password:
	```
	sudo htpasswd -c /etc/apache2/.htpasswd userid1
	```
	To add another user:
	```
	sudo htpasswd /etc/apache2/.htpasswd userid2
	```
	4. Check password file:	```cat /etc/apache2/.htpasswd```
	5. Configure Apache Password Authentication:
		1. Use either **Option 1** or **Option 2**.
		2. **Option 1:** within the Virtual Host Definition
			1. Edit `/etc/apache2/sites-available/000-default.conf` using: ```sudo vi /etc/apache2/sites-available/000-default.conf```
			2. Add
			```
			<Directory "/var/www/html/secure/directory">
				AuthType Basic
				AuthName "Restricted Content"
				AuthUserFile /etc/apache2/.htpasswd
				Require valid-user
			</Directory>
			```
			between ``` <VirtualHost *:portnumber> contents </VirtualHost>``` for both ports **80** and **443**.
		3. **Option 2:** within the directory using `.htaccess`
			1. Create `.htaccess` file in `/path/to/secure/directory` as:
			`vi /path/to/secure/directory/.htaccess` and save.
			2. Add the following lines to `/path/to/secure/directory/.htaccess`
				```
				AuthType Basic
				AuthName "Restricted Content"
				AuthUserFile /etc/apache2/.htpasswd
				Require valid-user
				```
	4. Restart Apache Server:
	```
	sudo systemctl restart apache2
	sudo systemctl status apache2
	```
