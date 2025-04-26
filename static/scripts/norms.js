/**
 * @function getCookie
 * @param {string} whiteChoc The name of the desired cookie.
 * @returns Value of whiteChoc cookie if present, null otherwise.
 */
function getCookie(whiteChoc) {

  let cookies = document.cookie.split(';');

  let cookieJar = {};
  cookies.forEach(cookie => {
      let cooKV = cookie.trim().split('=');
      cookieJar[cooKV[0]] = cooKV[1];      
  });

  return whiteChoc in cookieJar ? cookieJar[whiteChoc] : null;

}
  
// Assigns system preference
const lightPreference = window.matchMedia('(prefers-color-scheme: light)').matches;
const userPref = lightPreference ? 'light' : 'dark';

// Sets theme on load
// Manual theme or system default
const userTheme = getCookie('userTheme') || userPref;
$('html').attr('data-theme', userTheme);

$('document').ready(() => {
  $('link[rel="icon"]').attr('href', `static/photos/favicon_${userTheme}.svg`);
});