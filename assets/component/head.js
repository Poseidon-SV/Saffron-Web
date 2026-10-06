class Head extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Verham Robotics</title>
  <meta content="Building the future of transforming multi-mode robotics. Developing Morph T-series platforms for defense, inspection, and autonomous operations." name="description">
  <meta content="Robotics, Transforming Robots, Morph-BT, Morph T-1700, Autonomous Robots, Defense Robotics, AI Robotics" name="keywords">
  <meta name="author" content="Shubham Verma">
  <meta name="robots" content="index, follow">
  <meta name="twitter:image:src" content="https://github.com/Poseidon-SV/Saffron-Web/blob/main/verham-logo.png?raw=true">
  <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/Poseidon-SV/Saffron-Web/blob/main/verham-logo.png?raw=true">
  <meta property="og:title" content="Verham Robotics">
  <meta property="og:url" content="https://verhamrobotics.com/">
  <meta property="og:image" content="https://github.com/Poseidon-SV/Saffron-Web/blob/main/verham-logo.png?raw=true">
  <meta property="og:description" content="Verham Robotics • Engineering the Future of Autonomous Systems">
  <meta property="og:image:height" content="600">
  <meta property="og:image:width" content="600">

  <link rel="canonical" href="https://verhamrobotics.com/">
  <link rel="fluid-icon" href="https://github.com/Poseidon-SV/Saffron-Web/blob/main/verham-logo.png?raw=true" title="Verham Robotics">

  <!-- Favicons -->
  <link href="assets/img/verham-icon.png" rel="icon">
  <link href="assets/img/apple-touch-verham.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
  
  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

`;
  }
}

customElements.define('head-component', Head);


class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

  <!-- ======= Header ======= -->

        <ul>
          <li><a class="nav-link scrollto" href="index.html">Home</a></li>
          <li><a class="nav-link scrollto" href="index.html#about">About</a></li>
          <li><a class="nav-link scrollto" href="index.html#vision">Vision</a></li>
          <li><a class="nav-link scrollto active" href="index.html#products">Products</a></li>
          <li><a class="nav-link scrollto" href="index.html#projects">Projects</a></li>
          <li><a class="nav-link scrollto" href="index.html#partners">Partners</a></li>
          <li><a class="nav-link scrollto" href="index.html#careers">Careers</a></li>
          <li><a class="nav-link scrollto" href="service-3DPrinting.html">3D Printing</a></li>
          <li><a class="nav-link profile-nav-link" href="shubham-verma.html" style="color: #f76f34;">Shubham Verma</a></li>
          <li><a class="nav-link scrollto" href="index.html#contact"><span style="color: #f76f34;">&lt&lt</span>GET IN TOUCH<span
                style="color: #f76f34;">&gt&gt</span></a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      
    `;

    // Remove the wrapper, leaving the menu directly inside .navbar. header-component, footer-component { display: contents; } FOR anything interactive 
    this.replaceWith(...this.childNodes);
  }
}

customElements.define('header-component', Header);

