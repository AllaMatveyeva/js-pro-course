import "./modal.scss";
function GetModalWindow() {
  return (
    <div className="modal">
      <form
        action="#"
        name="form-contact"
        method="POST"
        className="contact-form"
      >
        <textarea
          className="textarea"
          type="text"
          placeholder="Write your message"
        ></textarea>
        <button
          className="button"
          type="button"
          onClick={() => {
            document.querySelector(".textarea").value = "";
            document.querySelector(".modal").style = "display:none";
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
console.log(GetModalWindow());
export default GetModalWindow;
