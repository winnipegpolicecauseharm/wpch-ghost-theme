const PercyScript = require('@percy/script');

const HOST = process.argv[2] || 'https://ghost-theme-sandbox-base.herokuapp.com/';
console.log(`Collecting Percy snapshots from host ${HOST}…`);

PercyScript.run(async (page, percySnapshot) => {
    await page.goto(`${HOST}`);
    await page.waitFor('footer');
    await percySnapshot('homepage');

    await page.goto(`${HOST}blog/a-post/`);
    await page.waitFor('h3');
    await percySnapshot('blog-post');

    await page.goto(`${HOST}a-page/`);
    await page.waitFor('h3');
    await percySnapshot('page');
});
