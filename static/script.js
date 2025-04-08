/** Toggle FomanticUI sidebar component */
$('.hamburger').click(() => {

  $('.ui.sidebar')
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('setting', 'scrollLock', 'true')
    .sidebar('toggle')
    .removeClass('uncover') // if setting to overlay fails

});


/**
 * @function
 * @desc Toggle the theme between light and dark.
 */
$('#themeSwitch').click(() => {

  const userTheme = getCookie('userTheme') || $('html').attr('data-theme');
  let newTheme = userTheme;
  console.log(newTheme);

  // toggle theme
  switch (userTheme) {
    case 'light':
      newTheme = 'dark';
      break;
    case 'dark':
      newTheme = 'light';
      break;
  }

  // implement results
  $('html').attr('data-theme', newTheme);
  document.cookie = `userTheme=${newTheme}; path=/; secure`;
  console.log(newTheme);

});


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

// gives the 3 lines—<path>—the same click event as the glass—<rect>
$('.burger-lines').click(() => {
  console.log('lines');
  $('.hamburger > rect').click();
});


// window.onload = () => {

//   const userTheme = getCookie('userTheme') || 'light';
//   $('html').attr('data-theme', userTheme);

// }



