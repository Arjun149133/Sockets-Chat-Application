import { socket } from "../socket";

const Input = ({ message, setMessage, onSubmit }) => {

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <div className=" flex justify-end items-center space-x-3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            id="message"
            type="text"
            placeholder="Message"
          />
          <button
            type="submit"
            className=" bg-blue-700 text-white p-2 text-sm rounded-lg font-bold border border-white hover:bg-sky-600"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
