let lastUrl = location.href;

new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    if (isShortsPage(currentUrl)) {
      shortsToNormal();
    }
  }
}).observe(document, { subtree: true, childList: true });

window.onload = shortsToNormal();

function shortsToNormal() {
  var pathArray = window.location.pathname.split('/');
  
  if (pathArray[1] === 'shorts') {
    let query = pathArray[2];
    const newUrl = new URL('https://www.youtube.com/watch');
    newUrl.searchParams.set('v', query);
    history.replaceState(null, '', newUrl.toString()); // Replace the URL in the history
    location.href = newUrl;
  }
}

// check whether the current URL is YouTube Shorts
function isShortsPage(url) {
  var pathArray = new URL(url).pathname.split('/');
  return pathArray[1] === 'shorts';
}