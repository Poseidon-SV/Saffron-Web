class Head extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `

    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <meta content="Where innovation meets automation at the forefront of technology. We are a passionate team of engineers, designers, and visionaries dedicated to shaping the future through the convergence of Robotics, Drones and AI Software" name="description">
    <meta content="Robotics, Robot, Drone, Drones, AI Software, Manufacture, Build" name="keywords">
    <meta name="author" content="Shubham Verma">
    <meta name="robots" content="index, follow">
    <meta name="twitter:image:src" content="https://github.com/Poseidon-SV/Poseidon-SV/blob/main/Saffron_logo.png?raw=true">
    <meta name="apple-itunes-app" content="app-id=1477376905, app-argument=https://github.com/Poseidon-SV/Poseidon-SV/blob/main/Saffron_logo.png?raw=true">
    <meta property="og:title" content="Portfolio - Saffron">
    <meta property="og:url" content="https://saffron.fr.to/#portfolio">
    <meta property="og:image" content="https://github.com/Poseidon-SV/Poseidon-SV/blob/main/Saffron_logo.png?raw=true">
    <meta property="og:description" content="Saffron • Enhancing the Flavor of Technology.">
    <meta property="og:image:height" content="600">
    <meta property="og:image:width" content="600">
  
    <link rel="canonical" href="https://saffron.fr.to/">
    <link rel="fluid-icon" href="https://github.com/Poseidon-SV/Poseidon-SV/blob/main/Saffron_logo.png?raw=true" title="Saffron">
  

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">
    <link herf="https://fonts.googleapis.com/css2?family=Montserrat:wght@200..900&display=swap" 
    
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