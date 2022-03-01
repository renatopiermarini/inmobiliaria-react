import "../list.css";

export const LoadingScreen = () => {
  return (
    <div className="list">
      <div className="card">
        <div className="header">
          <img
            className="header-img skeleton"
            src="https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"
          />
          <div className="title" data-title>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
        <div data-body>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
  );
};
