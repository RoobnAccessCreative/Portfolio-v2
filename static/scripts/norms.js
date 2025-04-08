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
  
// Sets theme on load
const userTheme = getCookie('userTheme') || 'light';
$('html').attr('data-theme', userTheme);