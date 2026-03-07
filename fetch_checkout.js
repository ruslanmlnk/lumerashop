const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    try {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            viewport: { width: 1920, height: 1080 }
        });
        const page = await context.newPage();

        console.log('Navigating to product...');
        const productUrl = 'https://lumerashop.cz/product/velka-italska-shopper-kabelka-z-prave-kuze-patrizia-taupe/';
        await page.goto(productUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

        console.log('Adding to cart...');
        // Wait for add-to-cart button
        const addToCartBtn = await page.locator('button[name="add-to-cart"]');
        await addToCartBtn.waitFor({ state: 'visible', timeout: 20000 });
        await addToCartBtn.click();

        console.log('Waiting for cart to update...');
        await page.waitForTimeout(5000);

        console.log('Navigating to checkout...');
        await page.goto('https://lumerashop.cz/checkout/', { waitUntil: 'networkidle', timeout: 60000 });

        console.log('Extracting checkout HTML...');
        // Main wrapper
        await page.waitForSelector('.woocommerce-checkout', { timeout: 20000 }).catch(e => console.log('Could not find .woocommerce-checkout'));

        const html = await page.content();
        fs.writeFileSync('temp_checkout.html', html);
        await page.screenshot({ path: 'checkout_screenshot.png', fullPage: true });

        await browser.close();
        console.log('HTML saved to temp_checkout.html');
    } catch (err) {
        console.error('Error fetching checkout:', err);
        process.exit(1);
    }
})();
