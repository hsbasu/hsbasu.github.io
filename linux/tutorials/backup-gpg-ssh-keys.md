## To Restore the ssh keys:

1. Copy `id_rsa` and `id_rsa.pub` to ~/.ssh on remote computer
2. Run the following commands: 
    ```
    eval $(ssh-agent)
    ssh-add
    ```
3. From guest run:
    `ssh-copy-id userid@host-ip`
    
## Generate and Restore/Port GnuPG PGP keys:

1. Generate pgp key:
    1. run in terminal:
    ```
    gpg --full-generate-key
    ```
    2. At the prompt, specify the kind of key you want, or press `Enter` to accept the default and best `RSA and RSA`.
    3. Enter the desired key size. Your key must be at least **4096** bits.
    4. Enter the validity of key. Best practice is **365 days** or **1 year**.
    5. Enter your name and mail-id
    6. Type a strong passphrase.
    7. Save your **passphrase** in a password manager(eg. Firefox/Google/MS authenticator)[Very important]
    8. Set proper permission to `~/.gnupg`:
        ```
        find ~/.gnupg -type d -exec chmod 700 {} \;
        find ~/.gnupg -type f -exec chmod 600 {} \;
        ```
2. Same PGP keys can be used on multiple systems or can be restored in case of system failure.
    1. Backup your PGP keys:
        1. Check generated keys:
            ```
            gpg --list-secret-keys --keyid-format LONG
            ```
            Sample output:
            ```
            sec     rsa4096/XXXXEFC47549XXXX 2020-12-07 [SC] [expires: 2022-01-01]
                    XXXX9D769D1647CA5687F9D5XXXXEFC47549XXXX
            uid                 [ultimate] HIMADRI SEKHAR BASU (pgp on 07-12-2020) <hsb10@iitbbs.ac.in>
            ssb     rsa4096/XXXX36324DA6XXXX 2020-12-07 [E] [expires: 2022-01-01]
            ```
            where, in `rsa4096/XXXXEFC47549XXXX`, `XXXXEFC47549XXXX` is the `key-id`. This is the last `16` character of the `40` character fingerprint in second line.
        2. To back-up the private key with `key-id: XXXXEFC47549XXXX`:
            ```
            gpg --armor --export-secret-keys XXXXEFC47549XXXX > /path/to/key/XXXXEFC47549XXXX.asc
            ```
        3. Copy the `XXXXEFC47549XXXX.asc` to another machine or save it somewhere safe for future use.
    2. To restore/reuse on a system:
        1. copy the `XXXXEFC47549XXXX.asc` and run:
           ```
           gpg --import XXXXEFC47549XXXX.asc
           ```
           and enter the passphrase you used to generate the key.
        2. Check the pgp keys:
            ```
            gpg --list-secret-keys --keyid-format LONG
            ```
            Sample output:
            ```
            sec     rsa4096/XXXXEFC47549XXXX 2020-12-07 [SC] [expires: 2022-01-01]
                    XXXX9D769D1647CA5687F9D5XXXXEFC47549XXXX
            uid                 [unknown] HIMADRI SEKHAR BASU (pgp on 07-12-2020) <hsb10@iitbbs.ac.in>
            ssb     rsa4096/XXXX36324DA6XXXX 2020-12-07 [E] [expires: 2022-01-01]
            ```
        3. If you didn’t back up your trust database, the restored GPG key will have an `unknown` trust level. To set it to `ultimate` or another trust level, run the following command:
            ```
            gpg --edit-key XXXXEFC47549XXXX # Replace "XXXXEFC47549XXXX" with yours
            gpg> trust # Choose "ultimate" or other trust level
            gpg> save # Save the changes
            ```
    Now you have fully restored the pgp key.
    
## References:

[Q: "gpg: what do I need to backup?" on Serverfault](https://serverfault.com/questions/86048/gpg-what-do-i-need-to-backup/1040984#1040984)

[Blog of Risan Bagja Pradana](https://risanb.com/code/backup-restore-gpg-key)

[Q: "How to migrate or export all GnuPG (gpg) public and private keys from one user to another" on Red Hat Customer Portal](https://access.redhat.com/solutions/2115511)

[Sami Niiranen(saminiir)'s hacker blog](https://www.saminiir.com/paper-storage-and-recovery-of-gpg-keys)