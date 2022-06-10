window.onload = function shortsToNormal() {
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

