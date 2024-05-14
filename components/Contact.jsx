const Contact = () => {
  return (
    <div className="heading">
      <h1 className="font-bold p-4 m-2 text-2xl">Contact us</h1>
      <form action="">
        <input
          type="text"
          className="border border-black p-4 mx-2 my-2"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border border-black p-4 mx-2 my-2"
          placeholder="message"
        ></input>
        <button className="border border-black p-4 mx-2 my-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
