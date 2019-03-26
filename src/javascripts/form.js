// eventos del menú


const app = {
  pages: [],
  show: new Event('show'),
  init: () => {
    app.pages = document.querySelectorAll('.page'); //identifica las secciones que tienen la clase page
    app.pages.forEach((pg) => {
      pg.addEventListener('show', app.pageShown);
    })
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', app.nav);
    })
    history.replaceState({}, 'Login', '#login');
    window.addEventListener('popstate', app.poppin);
  },
  nav: (ev) => {
    ev.preventDefault(); //mata evento que te lleva al inicio de la página (href="#")
    let currentPage = ev.target.getAttribute('data-target');
    console.log(currentPage);
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
    //recuerda la página a la que se mueve, y le agrega # a la url de la página donde está posicionado
    history.pushState({}, currentPage, `#${currentPage}`)
  },
  pageShown: (ev) => {

  },
  poppin: (ev) => {
    console.log(location.hash);
    const hash = location.hash.replace('#', '');
    console.log(hash);
    const active = document.querySelector('.active');
    const active1 = active.classList.remove('active');
    console.log(active1);
    document.getElementById(hash).classList.add('active');
  }
}
document.addEventListener('DOMContentLoaded', app.init);
