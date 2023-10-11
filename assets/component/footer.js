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
              <!-- <h3 style="color: #FF914D">SAFFRON</h3> -->
              <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" style="max-width: 50%;"></a>
              <p>
                22 Gautam Nagar <br>
                New Delhi, India <br><br>
                <strong>Phone:</strong> +91 9212172636 <br>
                <strong>Email:</strong> saffron.ai.tech@gmail.com <br>
              </p>
              <div class="social-links mt-3">
                <a href="https://github.com/Poseidon-SV" target="_blank" class="github"><i class="bx bxl-github"></i></a>
                <a href="https://www.linkedin.com/in/shubham-verma-72b52a217/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                <a href="https://instagram.com/20shubh01?igshid=MzMyNGUyNmU2YQ==" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#about">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://github.com/Poseidon-SV" target="_blank">Github</a></li>
              <!-- <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> -->
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Robotics</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">Drones</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html#services">AI Software</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Get the latest updates of fresh on the shelf items and offers</p>
          <form action="https://formsubmit.co/saffron.ai.tech@gmail.com" method="post">
            <input type="text" name="_honey" style="display: none;">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_next" value="http://127.0.0.1:5500/success.html">

            <input type="email" name="Email" placeholder="Email" required>
            <input type="text" name="Subject" value="Newsletter" style="display: none;">
            <input type="submit" value="Subscribe">
          </form>
        </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; 2023 <strong><span style="color: #FF914D">SAFFRON</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/day-multipurpose-html-template-for-free/ -->
        Designed by <a href="index.html">Shubham Verma</a>
      </div>
    </div>
  </footer><!-- End Footer --> 
  `;
  }
}

customElements.define('footer-component', Footer);