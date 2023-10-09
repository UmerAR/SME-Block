// Create a MutationObserver
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        localStorage.clear();
        console.log('Local Storage cleared');
        break;
      }
    }
  
});
// Observer entire document
observer.observe(document, { childList: true, subtree: true });


