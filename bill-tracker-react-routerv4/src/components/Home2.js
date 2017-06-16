import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';



class Home extends Component {
  render() {
    return (
      // <p>
      //   <Header/>
      //   I am the main content on the home page.
      //   <Footer/>
      // </p>

      <body className="home">

        <div id="st-container" className="st-container">

        //  slide out mobile menu
          <div className="st-pusher">

            <nav className="st-menu st-effect-7" id="menu-7">
              <a id="logoText" href="/">
                <img id="logoImage" src="images/logo-balloon.png" alt="Bill Tracker logo" />
                Bill Tra<span className="fixBigKerningGap">c</span>k<span className="fixSmallKerningGap">e</span>r
              </a>
              <ul>
                <li>
                  <a href="/bill-listing.html">
                    <i class="fa fa-leanpub"></i>
                    &nbsp;Bills
                  </a>
                </li>
                <li>
                  <a href="/about-us.html">
                    <i className="fa fa-users"></i>
                    &nbsp;About Us
                  </a>
                </li>
                <li>
                  <a href="/blog.html">
                    <i className="fa fa-comments"></i>
                    &nbsp;Blog
                  </a>
                </li>
                <li>
                  <a href="/contact-us.html">
                    <i className="fa fa-envelope"></i>
                    &nbsp;Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            // regular content wrapper
            <div className="st-content">

                <div className="st-content-inner">
                  // extra div for emulating position:fixed of the menu
                <div className="banner homeSection">

                  <header>

                    <div className="container">

                      <a id="logoText" href="/">
                        <img id="logoImage" src="images/logo-balloon.png" alt="Bill Tracker logo" />
                        Bill Tra<span className="fixBigKerningGap">c</span>k<span className="fixSmallKerningGap">e</span>r
                      </a>

                      <div id="st-trigger-effects">
                        <button id="mobileMenuButton" data-effect="st-effect-7">
                          <i className="fa fa-bars"></i>
                        </button>
                      </div>

                      <ul id="ultraTopNav">
                        <li><a href="/bill-listing.html">Bills</a></li>
                        <li><a href="/about-us.html">About</a></li>
                        <li><a href="/blog.html">Blog</a></li>
                        <li><a href="/contact-us.html">Contact</a></li>
                        <li><a id="demo" href="javascript:void(0);">View Demo</a></li>
                      </ul>

                    </div>

                  </header>


                  // Content
                  <div className="container bannerContent">
                    <div id="page1" className="page">
                      <h1>Understand and create dialog about the proposed laws you care about.</h1>

                      <form action="/bills/" method="post" className="form">
                        // Placeholder for being able to select State or National, and Session
                        <span id="legis-session">Find a bill <em>Texas Session 84R</em></span>

                          // had to delete csrf token because react did not agree with it when commented.


                        // HARDCODE WARNING
                        <input type="hidden" name="session" value="84R" />

                        <div className="formBody">
                          // Dropdown to select where the bill originated: Senate or House
                          <span id="legis-chamber" data-step="1" data-intro="Choose senate or house">
                          // Senate or House Bill: br
                            <input type="radio" name="chamber_origin" checked="checked" value="S" id="SB" />
                            <label for="SB">Senate Bill</label>
                            <input type="radio" name="chamber_origin" value="H" id="HB" />
                            <label for="HB">
                              House Bill
                            </label>
                          </span>

                          <span id="bill-number" data-step="2" data-intro="Enter the bill number">
                            <input type="number" id="id_number" name="number" placeholder="Bill Number"
                            min="1" autofocus="autofocus" />
                          </span>

                          <span id="bill-submit">
                            <button type="submit" className="btn btn-info">
                              <i className="fa fa-pencil"></i>
                              &nbsp;Annotate Bill!
                            </button>
                          </span>
                        </div>

                      </form>
                    </div>
                  </div>

                </div>
                // banner

                <div className="container marketing homeSection">

                  <div className="row tripleIconRow">
                    <div className="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 marketingItem">
                      <i className="fa fa-leanpub"></i>
                      <h2>Find Bills</h2>
                      <p>Search any bills from the current Texas legislative session.  We can get bills from the Texas Senate or House.  Search by bill number, title or subject.</p>
                    </div>
                    <div className="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 marketingItem">
                      <i className="fa fa-pencil"></i>
                      <h2>Annotate</h2>
                      <p>Draw attention to the parts of bills you think warrant comment.  Highlight bill text you think needs comment or elaboration.  Then add your comment.</p>
                    </div>
                    <div className="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 marketingItem">
                      <i className="fa fa-bullhorn"></i>
                      <h2>Create Dialog</h2>
                      <p>Whether you're a non-profit, a corporation or a concerned citizen, join the dialog around emerging Texas bills and bring transparency to your cause.</p>
                    </div>
                  </div>
                  // tripleIconRow


                  // <hr className="featurette-divider">

                  <div className="row featurette">
                    <div className="col-sm-12">
                      <i className="fa fa-comment"></i>
                      <p className="lead">
                        <span className="featurette-heading">Open Texas legislation. <span className="text-muted">Comment Away.</span></span>
                        Bill Tracker is an open community platform for tracking and annotating Texas congressional bills.  Legislation is not only transparent here, but it's open for debate.  This is the agora where interested parties can compare notes, debate and discuss the particulars of proposed legislation which will affect them.
                      </p>
                    </div>
                  </div>

                  <hr className="featurette-divider"/>

                  <div className="row featurette">
                    <div className="col-sm-12">
                      <i className="fa fa-connectdevelop"></i>
                      <p className="lead leadNegativeMargin">
                        <span className="featurette-heading">Crowdsourced Knowledge. <span className="text-muted">Building Community.</span></span>
                        Building on the expertise of many, we all grow when we compare notes on the legislation we care about.  We seek to be the favored legislation hub for lawyers, political action committees, corporate representatives and community activists.  When we come together, we become something greater than just the sum of our parts.
                      </p>
                    </div>
                  </div>

                  // <hr className="featurette-divider"/>

                  <div className="row featurette">
                    <div className="col-sm-12">
                      <i className="fa fa-heartbeat"></i>
                      <p className="lead leadNoTopMargin quote">
                        <span className="featurette-heading">Dialog & Transparency. <span className="text-muted">Democracy's Heartbeat.</span></span>
                        <i className="quoteIcon fa fa-quote-left"></i>The whole purpose of democracy is that we may hold counsel with <br/><span class="endOfQuote">one another.<i class="quoteIcon fa fa-quote-right"></i> &mdash; <strong>Woodrow Wilson</strong></span>
                      </p>
                    </div>
                  </div>

                  <hr  />



                <footer>
                  <div className="container">
                    <p className="footerItem1">Texas capitol photo by <a target="_blank" href="https://www.flickr.com/photos/thelukeparker/14170034048/in/photolist-nAa8rS-nbT8E6-nbT3P6">Luke Parker</a>.</p>
                    <p className="footerItem2">See our code on <a target="_blank" href="https://github.com/bill-tracker/bill-tracker">Github</a>.</p>
                    <p className="footerItem3">An <a target="_blank" href="http://atxhackforchange.org/">ATX Hack For Change</a> 2015 project.</p>
                  </div>
                </footer>

              </div>
                // st-content-inner
            </div>
              // st-content
          </div>
            // st-pusher
        </div>
          // st-container
        // <script src="js/ajquery-1.10.2.min.js" type="text/javascript"></script>
        // <script src="js/bootstrap.min.js" type="text/javascript"></script>
        // <script src="js/global.js" type="text/javascript"></script>
        // <script src="js/classie.js"></script>
        // <script src="js/sidebarEffects.js"></script>
        // <script src="js/intro.js"></script>
        // <script src="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.4.5/js/bootstrapvalidator.min.js"></script>

      </body>
    );
  }
}

export default Home;
