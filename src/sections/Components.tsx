const Components = () => {
  return (
    <section id="components">
      <div className="section-head">
        <h2>Components</h2>
        <p>The same tokens above, doing actual work.</p>
      </div>
      <div className="comp-grid">
        <div className="comp-block">
          <h4>Buttons &amp; status</h4>
          <div className="btn-row">
            <button className="btn solid" type="button">
              Save changes
            </button>
            <button className="btn outline" type="button">
              Cancel
            </button>
          </div>
          <div className="pill-row">
            <span className="pill success">Verified</span>
            <span className="pill warning">Needs review</span>
            <span className="pill error">Draft</span>
            <span className="pill info">Heads up</span>
          </div>
        </div>
        <div className="comp-block">
          <h4>Toast</h4>
          <div className="toast-demo">
            <div className="dot">&#10003;</div>
            <div className="msg">Organization profile saved.</div>
          </div>
          <div className="toast-demo">
            <div
              className="dot"
              style={{
                background: "color-mix(in srgb, var(--error) 16%, transparent)",
                color: "var(--error)",
              }}
            >
              &#33;
            </div>
            <div className="msg">Couldn&apos;t save your changes.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Components;
