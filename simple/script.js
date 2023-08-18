const body = document.body;

const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

// Set the initial theme to dark
addThemeClass('dark', 'fa-sun');

const isDark = () => body.classList.contains('dark');

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(isDark() ? 'dark' : 'light');
  body.classList.add(bodyClass);

  btnTheme.classList.remove(isDark() ? 'fa-sun' : 'fa-moon');
  btnTheme.classList.add(btnClass);

  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

const toggleTheme = () => {
  if (isDark()) {
    setTheme('light', 'fa-moon');
  } else {
    setTheme('dark', 'fa-sun');
  }
};

btnTheme.addEventListener('click', toggleTheme);

const displayList = () => {
  const navUl = document.querySelector('.nav__list');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

btnHamburger.addEventListener('click', displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');

  if (
    body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

document.addEventListener('scroll', scrollUp);
