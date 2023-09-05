Webscraping in Node.js with Crawlee & Puppeteer

Web scraping in Node.js with Crawlee crawler from Apify and Puppeteer browser automation.

Piece of code to find page containing certain keywords or list of keywords in a list of websites and  print out the page list with keywords in front of the links. The crawler runs per a proxy pool configued through a proxy list file.


Follow the steps below to set your scraping project.

Go to your folder where you plan to run the scraper.
======================================

Put the code in this folder.
=====================

Initiate Your Project
===============
npm init


Install Packages for the Scraper
=======================

npm install apify

npm install crawlee 

npm install --save puppeteer



Prepare for 3 Input Files
====================
.txt files of the following names in the code:

keywordslist
-----------------
example entries:

artificial intelligence
money
finance
investment


start_urls
--------------
example entries:

https://money.com/
https://easywithai.com/
https://openaimaster.com/
https://www.fool.com/
https://towardsdatascience.com
https://aiforfinance.artefact.com/
https://aibusiness.com/
https://www.aifinancial.ca
https://aiinvestments.pl/


proxylist
-----------
example entris:

http://50.218.57.67:80
http://50.168.163.183:80
http://50.171.32.224:80
http://50.173.140.147:80
http://50.207.199.87:80
http://50.168.72.119:80
http://178.21.163.24:80
http://50.171.2.11:80
http://50.168.72.122:80
http://107.1.93.208:80


Run the Code in Commandline or within VSCode
=======================================

Node webscraping_nodejs_crawlee_puppeteer.js

