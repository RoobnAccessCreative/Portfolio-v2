/** Toggle FomanticUI sidebar component */
$('.ui.sidebar').sidebar({
  scrollLock: true, // doesn't work but gives class
  transition: 'overlay',
  mobileTransition: 'overlay',
})
  .sidebar('attach events', '.hamburger', 'show')
  .sidebar('attach events', '.close-sidebar', 'hide');


/**
 * @function changeTheme
 * @desc Toggle the theme between light and dark.
 */
$('.themeSwitch').click(() => {

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
  $('link[rel="icon"]').attr('href', `static/photos/favicon_${newTheme}.svg`);
});


// gives the 3 lines—<path>—the same click event as the glass—<rect>
$('.burger-lines').click(() => {
  console.log('lines');
  $('.hamburger > rect').click();
});





