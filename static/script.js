$('.hamburger').click(() => {
  $('.ui.sidebar').sidebar('toggle');
});

function getCookie(whiteChoc) {
  let cookies = document.cookie.split(';');
  let cookieJar = {};
  cookies.forEach(cookie => {
    let cooKV = cookie.trim().split('=');
    cookieJar[cooKV[0]] = cooKV[1];      
  });
  return whiteChoc in cookieJar ? cookieJar[whiteChoc] : null;
}

window.onload = () => {
  const userTheme = getCookie('userTheme') || 'light';
  $('html').attr('data-theme', userTheme);
}

