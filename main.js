let lastUrl = location.href;
new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        shortsToNormal();
    }
}).observe(document, {subtree: true, childList: true});

window.onload = shortsToNormal();

function shortsToNormal() {
    var pathArray = window.location.pathname.split('/');
    
    if (pathArray[1] === 'shorts') {
        let query = pathArray[2];
        const newUrl = new URL('https://www.youtube.com/watch');
        newUrl.searchParams.set('v', query);
        location.href = newUrl;
    } else {
        console.log('not YouTube shorts');
    }
}