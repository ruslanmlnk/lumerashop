const { chromium } = require('playwright');

(async () => {
    try {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            viewport: { width: 1920, height: 1080 }
        });
        const page = await context.newPage();
        console.log('Navigating to https://lumerashop.cz/ ...');
        await page.goto('https://lumerashop.cz/', { waitUntil: 'networkidle', timeout: 60000 });
        console.log('Taking full page screenshot...');
        await page.screenshot({ path: 'full_screenshot.png', fullPage: true });
        await browser.close();
        console.log('Screenshot saved to full_screenshot.png');
    } catch (err) {
        console.error('Error taking screenshot:', err);
        process.exit(1);
    }
})();
