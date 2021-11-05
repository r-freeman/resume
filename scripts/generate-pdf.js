const puppeteer = require("puppeteer");
const author = require("../data/author.json");

(async function () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000/');
    await page.emulateMediaType('print');
    await page.pdf({
        path: `./public/${author.name} ${author.jobTitle} ${author.location}.pdf`,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '1cm',
            right: '1cm',
            bottom: '1cm',
            left: '1cm'
        }
    })

    await page.close();
    await browser.close();
})();
