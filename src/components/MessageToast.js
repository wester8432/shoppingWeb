import { useSelector } from "react-redux";

export default function Message() {
  const messages = useSelector((state) => state.message);

  return (
    <div
      className="toast-container position-fixed"
      style={{ top: "69px", right: "15px" }}
    >
      {messages?.map((msg) => {
        return (
          <div
            key={msg.id}
            className="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className={`toast-header text-white bg-${msg.type}`}>
              <strong className="me-auto">{msg.title}</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
            <div className="toast-body">{msg.text}</div>
          </div>
        );
      })}
      {/* {message.title && (
          <div
            className="toast show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className={`toast-header text-white bg-${message.type}`}>
              <strong className="me-auto">{message.title}</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
            <div className="toast-body">{message.text}</div>
          </div>
        )} */}
    </div>
  );
}
