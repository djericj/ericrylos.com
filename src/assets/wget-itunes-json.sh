#!/bin/bash
PATH='./'

URL='https://itunes.apple.com/search?term=Downgrooves&limit=100'
FILENAME='itunes.json'
cd $PATH
/usr/bin/sudo /usr/bin/wget -O $FILENAME $URL

URL='https://itunes.apple.com/search?term=Downgrooves&limit=100'
FILENAME='downgrooves.json'
cd $PATH
/usr/bin/sudo /usr/bin/wget -O $FILENAME $URL

URL='https://itunes.apple.com/search?term=Evotone&limit=100'
FILENAME='evotone.json'
cd $PATH
/usr/bin/sudo /usr/bin/wget -O $FILENAME $URL
