// JavaScript Document
//https://docs.apify.com/sdk/js/docs/examples/puppeteer-recursive-crawl
//https://docs.apify.com/sdk/js/docs/examples/puppeteer-recursive-crawl
//https://crawlee.dev/docs/examples/puppeteer-recursive-crawl
//puppeteer-recursive-crawl
//Piece of code to find page containing certain keywords or
//list of keywords in a list of websites and 
//print out the page list with keywords in front of the links.

import { Actor } from 'apify';
import { PuppeteerCrawler, ProxyConfiguration } from 'crawlee';
import fs from 'fs';

await Actor.init();

//keywords file, here you shall modify it to your file location
const keywordslist= fs.readFileSync('C:\\XXXBackup\\zzzzsoftware\\000webcrawlerproject\\zzzdata\\wordlist.txt', 'utf-8');
const arrkeywords = keywordslist.split(/\r?\n/);
//console.log(arrkeywords);
console.info(arrkeywords);

// url file, here you shall modify it to your file location
const start_urls = fs.readFileSync('C:\\XXXBackup\\zzzzsoftware\\000webcrawlerproject\\zzzdata\\start_urls.txt', 'utf-8');
const arrurls = start_urls.split(/\r?\n/);
//console.log(arrurls);
console.info(arrurls);

//proxy file, here you shall modify it to your file location
const proxylist= fs.readFileSync('C:\\XXXBackup\\00WEBITSettings\\004Emails\\proxylist4mails\\000000proxylist4emailscraping.txt', 'utf-8');
const arrproxy = proxylist.split(/\r?\n/);
//console.log(arrproxy);
console.info(arrproxy);

const proxyConfiguration = new ProxyConfiguration({

    proxyUrls: arrproxy,   
    
});


const crawler = new PuppeteerCrawler({

    proxyConfiguration,    
    
    launchContext: {
        // Here you can set options that are passed to the playwright .launch() function.
        launchOptions: {
            headless: true,
        },
    },

    async requestHandler({ request, page, enqueueLinks }) {
        const title = await page.title();
        console.log(`Title of ${request.url}: ${title}`);        
        
        const html = await page.content();
        
        for (const keywords of arrkeywords) {  
            
            if (html.includes(keywords)) console.info(`${keywords} is found at ${request.loadedUrl}`); 

        //console.log(`The title of "${request.url}" is: ${title}.`);           
        }
        
        await enqueueLinks();
        
    },
    //maxRequestsPerCrawl: 100,
});


await crawler.addRequests(arrurls);

await crawler.run();

await Actor.exit();