class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="footer-info">
              <a href="index.html" class="logo"><img src="assets/img/verham-logo.png" alt="" style="max-width: 50%;"></a>
              <p>
                <br>
                <strong>Phone:</strong> +91 9212172636 <br>
                <strong>Email:</strong> contact@verhamrobotics.com <br>
              </p>
              <div class="social-links mt-3">
                <a href="https://github.com/Poseidon-SV" target="_blank" class="github"><i class="bx bxl-github"></i></a>
                <a href="https://www.linkedin.com/in/shubham-verma-vmr/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                <a href="https://instagram.com/20shubh01?igshid=MzMyNGUyNmU2YQ==" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
          </div>

            <div class="col-lg-3 col-md-6 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#about">About</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#products">Products</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#partners">Partners</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#careers">Careers</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="shubham-verma.html">Shubham Verma</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Focus</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#products">Transformable Robots</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#vision">Autonomous Systems</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#about">Verham AI</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="3d-printing.html">3D Printing</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; 2025 <strong><span style="color: #f76f34">VERHAM ROBOTICS</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <a href="shubham-verma.html">Shubham Verma</a> — Founder &amp; Director, Verham Robotics
      </div>
    </div>
  </footer>
  `;
  }
}

customElements.define('footer-component', Footer);


class ProductNavigation extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `

      <div class="product-navigation">
        <div class="product-navigation-grid">
          <a class="product-navigation-card" href="product-MorphT1700.html">
            <span class="product-navigation-status">Development Complete</span>
            <h3 class="product-navigation-name">Morph T-1700</h3>
            <p class="product-navigation-tagline">First-generation transformable platform combining aerial drone
              capabilities with ground mobility.</p>
          </a>
          <a class="product-navigation-card" href="product-MorphT1280.html">
            <span class="product-navigation-status">Under Active Development</span>
            <h3 class="product-navigation-name">Morph-BT</h3>
            <p class="product-navigation-tagline">Advanced hybrid tricopter platform combining aerial and ground 
              mobility with improved stability and intelligent control.</p>
          </a>
        </div>
        <div class="product-navigation-grid">
          <a class="product-navigation-card" href="product-MorphT1280SM.html">
            <span class="product-navigation-status">Active Development</span>
            <h3 class="product-navigation-name">Morph T-1280 SM</h3>
            <p class="product-navigation-tagline">Lighter, energy-efficient variant optimised for endurance and agile
              field operations.</p>
          </a>
          <a class="product-navigation-card" href="product-MorphQT.html">
            <span class="product-navigation-status">Prototype Validated</span>
            <h3 class="product-navigation-name">Morph-QT</h3>
            <p class="product-navigation-tagline">Transformable quadrotor platform combining aerial flight with 
              powered ground mobility for versatile field operations.</p>
          </a>
        </div>
      </div>

  `;
  }
}

customElements.define('product-navigation-component', ProductNavigation);