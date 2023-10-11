
class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <!-- ======= Top Bar ======= -->
      <section id="topbar" class="d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope-fill"></i><a href="mailto:saffron.ai.tech@gmail.com">saffron.ai.tech@gmail.com</a>
            <i class="bi bi-phone-fill phone-icon"></i><a>+91 9212172636</a>
          </div>
          <div class="social-links d-none d-md-block">
          <a href="https://github.com/Poseidon-SV" target="_blank" class="github"><i class="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/shubham-verma-72b52a217/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          <a href="https://instagram.com/20shubh01?igshid=MzMyNGUyNmU2YQ==" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </section>

      <!-- ======= Header ======= -->
      <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">

          <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto" href="index.html">Home</a></li>
              <li><a class="nav-link scrollto" href="index.html#about">About</a></li>
              <li><a class="nav-link scrollto" href="index.html#services" name="services">Services</a></li>
              <li><a class="nav-link scrollto " href="index.html#portfolio">Portfolio</a></li>
              <li><a class="nav-link scrollto" href="index.html#faq-section">FAQs</a></li>
              <li><a class="nav-link scrollto" href="index.html#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav><!-- .navbar -->

        </div>
      </header><!-- End Header -->

      <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">

            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details</h2>

          </div>
        </section><!-- End Breadcrumbs -->        
    `;
  }
}

customElements.define('header-component', Header);