import React from "react";

const Messages = props => {
  //try destrcturing(more readable)
  return (
    <section>
      {props.messages.map(m => {
        return (
          <div key={m.subject} className={getRowClass(m)}>
            <div className="col-xs-1">
              <div className="row">
                <div className="col-xs-2">
                  <input
                    type="checkbox"
                    checked={getSelected(m)}
                    onClick={() => props.onSelectedClick(m)}
                  />
                </div>
                <div className="col-xs-2">
                  <i
                    className={getStars(m)}
                    onClick={() => props.onStarClick(m)}
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-11">
              {getLabels(m)}
              <a href="">{m.subject}</a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

const getRowClass = m => {
  const cls = ["row", "message"];
  if (m.read) {
    cls.push("read");
  } else {
    cls.push("unread");
  }
  if (m.selected) {
    cls.push("selected");
  }

  return cls.join(" ");
};

const getLabels = m => {
  return m.labels.map(l => <span className="label label-warning">{l}</span>);
};

const getStars = m => {
  const cls = ["star", "fa"];
  if (m.starred) {
    cls.push("fa-star");
  } else {
    cls.push("fa-star-o");
  }

  return cls.join(" ");
};

const getSelected = m => {
  const checked = [];
  if (m.selected) {
    checked.push(" ");
  }
};

export default Messages;
