// App.jsx
import React from "react";
import background from "./Images/background.png";
import bellsLogoRemovebgPreview1 from "./Images/logo.png";
import callSymbol from "./Images/call.png";
import gpsSymbol from "./Images/gps.png";
import line5 from "./Images/line5.svg";
import line6 from "./Images/line6.svg";
import line7 from "./Images/line7.svg";
import line8 from "./Images/line8.svg"; 
import mailSymbol from "./Images/mail.png";
import rectangle43 from "./Images/rectangle43.svg";
import "./index.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="page">
          <div className="header">
            <div className="CALENDAR">Calendar</div>
          </div>

          <img className="line" alt="Line" src={line8} />
        </div>

        <p className="this-section">
          This Section Outlines Key Dates For The Period From January To
          February That All Students Of The University Should Be Aware Of.
          <br />
          Please Ensure You Review And Adhere To These Important Timelines.
        </p>

        <div className="page-2">
          <div className="frame-wrapper">
            <div className="frame">
              <div className="ACADEMIC-EVENTS">Academic Events</div>
            </div>
          </div>

          <div className="page-3">
            <div className="rectangle" />

            <div className="rectangle-2" />

            <img className="img" alt="Line" src={line6} />

            <p className="text-wrapper">
              Meet top employees from various industries and explore internship
              opportunities
            </p>

            <div className="CAREER-FAIR">
              Career <br />
              fair
            </div>

            <div className="element-JAN">25th Jan. 2025</div>
          </div>

          <div className="page-4">
            <div className="rectangle" />

            <div className="rectangle-3" />

            <img className="line-2" alt="Line" src={line7} />

            <div className="GUEST-LECTURE">
              Guest
              <br />
              lecture
            </div>

            <p className="p">
              Hear from Dr. John Smith on the future of artificial intelligence
            </p>

            <div className="element-FEB">8th Feb. 2025</div>
          </div>

          <div className="page-5">
            <div className="rectangle-4" />

            <div className="rectangle-5" />

            <img className="line-3" alt="Line" src={line5} />

            <p className="LINKEDIN-RESUME">
              Linkedin &amp; Resume Building Workshop
            </p>

            <p className="text-wrapper-2">
              This hands-on workshop will help you optimise your LinkedIn
              profile. Career advisors will guide you through the best practices
              for creating a compelling profile and resume.
            </p>

            <div className="element-jan">15th Jan. 2025</div>
          </div>
        </div>

        <div className="overlap">
          <div className="container-BG">
            <div className="overlap-group">
              <img className="background" alt="Background" src={background} />

              <div className="rectangle-6" />
            </div>
          </div>

          <div className="div-wrapper">
            <div className="ANNOUNCEMENT-wrapper">
              <div className="ANNOUNCEMENT">Announcement</div>
            </div>
          </div>

          <div className="content-box">
            <div className="rectangle-7" />

            <img className="rectangle-8" alt="Rectangle" src={rectangle43} />

            <div className="rectangle-9" />
          </div>

          <p className="this-is-to-inform">
            This is to inform all students that the university library will be
            closed for the next two weeks due to maintenance and renovation
            work, and access to the&nbsp;&nbsp;building will be restricted.
            <br />
            <br /> We appreciate your understanding and cooperation. Thank you.
          </p>
        </div>

        <div className="context-box-wrapper">
          <div className="context-box">
            <div className="rectangle-10" />

            <div className="rectangle-11" />

            <p className="digital-notice-board">
              <span className="span">
                Digital
                <br />
              </span>

              <span className="text-wrapper-3">
                Notice
                <br />
              </span>

              <span className="text-wrapper-4">
                Board
                <br />
              </span>
            </p>

            <p className="welcome-to-the">
              <span className="text-wrapper-5">
                Welcome to the Univesity’s <br/>Digital Notice Board -
              </span>

              <span className="text-wrapper-6">
                {" "}
                <br />
                your central hub for <br/>important university <br/>announcements,
                updates, <br/>and events. <br/>
                <br />
                This platform is designed to <br/>keep students informed about <br/>key
                dates, deadlines, and essential information related to academic<br/>
                schedules, campus events, student services, and university
                policies.
              </span>
            </p>
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="logo">
              <img
                className="bells-logo-removebg"
                alt="Bells logo removebg"
                src={bellsLogoRemovebgPreview1}
              />
            </div>

            <header className="header-2">
              <p className="BELLS-UNIVERSITY-OF">
                <span className="text-wrapper-7">
                  BELLS UNIVERSITY OF TECHNOLOGY
                </span>

                <span className="text-wrapper-8">&nbsp;</span>
              </p>

              <p className="text-wrapper-9">Only The Best Is Good For Bells</p>
            </header>
          </div>
        </div>

        <div className="frame-2">
          <div className="group">
            <div className="page-6">
              <div className="rectangle-12" />

              <div className="rectangle-13" />

              <div className="element-th-jan">6-10th Jan. 2025</div>

              <p className="commencement-of-mid">
                Commencement Of Mid-semester Tests For All Students
              </p>
            </div>

            <div className="rectangle-14" />

            <div className="rectangle-15" />
          </div>

          <div className="group">
            <div className="page-6">
              <div className="rectangle-12" />

              <div className="rectangle-13" />

              <div className="element-th-jan">5th Jan. 2025</div>

              <div className="resumption-from">
                Resumption From Festive Break
              </div>
            </div>

            <div className="rectangle-14" />

            <div className="rectangle-15" />
          </div>

          <div className="group">
            <div className="page-6">
              <div className="rectangle-12" />

              <div className="rectangle-13" />

              <p className="element-jan-feb">20th Jan. - 7th Feb. 2025</p>

              <p className="first-semester">
                <span className="text-wrapper-10">
                  First Semester Examination for regular undegraduates
                  <br />
                </span>

                <span className="text-wrapper-11">
                  (300-500 Level) Students
                </span>
              </p>
            </div>

            <div className="rectangle-14" />

            <div className="rectangle-15" />
          </div>

          <div className="group">
            <div className="page-6">
              <div className="rectangle-12" />

              <div className="rectangle-13" />

              <div className="element-feb">2nd Feb. 2025</div>

              <p className="matriculation">
                Matriculation Ceremony For Newly Admitted Undergraduate Students
                And Post-graduate Students
              </p>
            </div>

            <div className="rectangle-14" />

            <div className="rectangle-15" />
          </div>

          <div className="group">
            <div className="page-6">
              <div className="rectangle-12" />

              <div className="rectangle-13" />

              <div className="element-th-st-feb">
                10th - 21st Feb.&nbsp;&nbsp;2025
              </div>

              <p className="first-semester-2">
                First Semester Examination For 100 - 200 Level Students
              </p>
            </div>

            <div className="rectangle-14" />

            <div className="rectangle-15" />
          </div>
        </div>

        <footer className="footer">
          <div className="frame-3">
            <div className="container">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-12">Stay Connected</div>

                  <p className="text-wrapper-13">
                    Thank you for visiting the Digital Notice Board! Stay
                    connected by the checking for updates and participating in
                    upcoming events.
                  </p>
                </div>
              </div>

              <div className="container-2">
                <div className="overlap-3">
                  <div className="text-wrapper-12">Legal Disclaimer</div>

                  <p className="text-wrapper-14">
                    The university is not responsible for the content of
                    student-run events. Please contact the relevant student
                    organisation for further information
                  </p>
                </div>
              </div>
            </div>

            <div className="contacts">
              <div className="KEY-CONTACTS">Key Contacts</div>

              <div className="call">
                <img className="img-2" alt="Call symbol" src={callSymbol} />

                <div className="text-wrapper-15">+234 812 037 8155</div>
              </div>

              <div className="mail">
                <img className="img-2" alt="Mail symbol" src={mailSymbol} />

                <div className="text-wrapper-15">
                  info@bellsuniversity.edu.ng
                </div>
              </div>

              <div className="address">
                <img className="gps-symbol" alt="Gps symbol" src={gpsSymbol} />

          <div className="text-wrapper-15">
                 Km. 8 Idiroko Rd,
                 Benja Village,
                 Ota 112104, Ogun State
                </div>

              </div>
            </div>
          </div>

          <p className="text-wrapper-16">&copy; Copyright 2025 All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};
export default Desktop;