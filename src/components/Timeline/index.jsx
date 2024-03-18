import "./style.scss";

function TimelineComponent() {
  return (
    <section id="timeline">
      <h1>Timeline</h1>
      <div className="demo-card-wrapper">
        <div className="demo-card demo-card--step1">
          <div className="head">
            <div className="number-box">
              <span>01</span>
            </div>
            <h2>
              01:00 PM <br />
              <br />
              Opening ceremony and PS <br /> <br />
              discussion{" "}
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step2">
          <div className="head">
            <div className="number-box">
              <span>02</span>
            </div>
            <h2>
              02:00 PM <br /> <br />
              Coding Phase Begins
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step3">
          <div className="head">
            <div className="number-box">
              <span>03</span>
            </div>
            <h2>
              08:00 PM <br /> <br />
              Dinner Break
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step4">
          <div className="head">
            <div className="number-box">
              <span>04</span>
            </div>
            <h2>
              01:00 AM <br /> <br />
              Midnight Snacks
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step5">
          <div className="head">
            <div className="number-box">
              <span>05</span>
            </div>
            <h2>
              08:00 AM <br /> <br />
              Breakfast
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step6">
          <div className="head">
            <div className="number-box">
              <span>06</span>
            </div>
            <h2>
              12:00 PM <br /> <br />
              Lunch
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step7">
          <div className="head">
            <div className="number-box">
              <span>07</span>
            </div>
            <h2>
              02:00 PM <br /> <br />
              Coding Phase Ends
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step8">
          <div className="head">
            <div className="number-box">
              <span>08</span>
            </div>
            <h2>
              02:15 PM <br /> <br />
              Initial Juding Commences
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step9">
          <div className="head">
            <div className="number-box">
              <span>09</span>
            </div>
            <h2>
              05:15 PM <br /> <br />
              Initial Juding Concludes
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step10">
          <div className="head">
            <div className="number-box">
              <span>10</span>
            </div>
            <h2>
              05:45 PM <br /> <br />
              Winners Announcement and Closing Ceremony
            </h2>
          </div>
        </div>

        <div className="demo-card demo-card--step11">
          <div className="head">
            <div className="number-box">
              <span>11</span>
            </div>
            <h2>
              06:30 PM <br /> <br />
              Conclusion of Event
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export { TimelineComponent };
