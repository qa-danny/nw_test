const reqs = [];
module.exports = {
    before: async function(browser) {
        browser.globals.waitForConditionTimeout = 10000;
    },
    'Open Network Logging': async function(browser) {
        // Comment out this function to get the Attribute:
        browser.captureNetworkRequests((requestCalls) => {
            reqs.push(requestCalls);
        });
        await browser.navigateTo('https://www.amazon.com/Amazon-Essentials-Regular-Fit-Cotton-Pique/dp/B01IXFP9S6/');
    },
    'Get Element Attributes': async function(browser) {
        const elem = await browser.findElement(By.id('color_name_1'));
        console.log(elem);
        console.log(elem.getId());
        const attr = await browser.elementIdAttribute(elem.getId(), 'data-defaultasin');
        console.log('Attribute: ', attr);
    },
    'What is in the req array?': async function() {
        console.log('req array: ', reqs.length);
    }
}