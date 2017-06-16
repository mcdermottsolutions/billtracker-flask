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
        <Header/>
          <div className="container bannerContent">
            <div id="page1" className="page">
              <h1>Understand and create dialog about the proposed laws you care about.</h1>
                <form action="/bills/" method="post" className="form">
                  <span id="legis-session">Find a bill <em>Texas Session 84R</em></span>



                  <input type="hidden" name="session" value="84R" />

                  <div className="formBody">
                    <span id="legis-chamber" data-step="1" data-intro="Choose senate or house">

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



      <Footer/>
      </div>

      </body>
    );
  }
}

export default Home;
