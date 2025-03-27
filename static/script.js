// Toggle the sidebar on click
$('.hamburger').click(() => {
  $('.ui.sidebar').sidebar('toggle');
});

/**
 * @function
 * @desc Toggle the theme on a mouseup event.
 */
$('#themeSwitch').on('mouseup', () => {
  const userTheme = getCookie('userTheme') || 'Light';
  let newTheme = userTheme;
  // toggle theme
  switch (userTheme) {
    case 'Light':
      newTheme = 'Dark';
    case 'Dark':
      newTheme = 'Light';
  }
  // implement results
  $('html').attr('data-theme', newTheme);
  document.cookie = `userTheme=${newTheme}; path=/; secure`;
});

/**
 * @function getCookie
 * @param {string} whiteChoc @desc The name of the desired cookie.
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

window.onload = () => {
  const userTheme = getCookie('userTheme') || 'Light';
  $('html').attr('data-theme', userTheme);
}



