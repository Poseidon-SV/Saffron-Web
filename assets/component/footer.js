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
                <strong>Email:</strong> 20shubh01@gmail.com <br>
              </p>
              <div class="social-links mt-3">
                <a href="https://github.com/Poseidon-SV" target="_blank" class="github"><i class="bx bxl-github"></i></a>
                <a href="https://www.linkedin.com/in/shubham-verma-72b52a217/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                <a href="https://instagram.com/20shubh01?igshid=MzMyNGUyNmU2YQ==" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#about">About</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#products">Products</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#partners">Partners</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#careers">Careers</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Our Focus</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#products">Transformable Robots</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#vision">Autonomous Systems</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#about">Verham AI</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get updates on our latest developments and product launches</p>
            <form action="https://formsubmit.co/20shubh01@gmail.com" method="post">
              <input type="text" name="_honey" style="display: none;">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_next" value="https://verham.robotics/success.html">
              <input type="email" name="Email" placeholder="Email" required>
              <input type="text" name="Subject" value="Newsletter Subscription" style="display: none;">
              <input type="submit" value="Subscribe">
            </form>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; 2025 <strong><span style="color: #FF914D">VERHAM ROBOTICS</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="index.html">Shubham Verma</a>
      </div>
    </div>
  </footer>
  `;
  }
}

customElements.define('footer-component', Footer);
