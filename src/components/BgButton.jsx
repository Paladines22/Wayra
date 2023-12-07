function bgButton({ text }) {
  return (
    <div className="mx-auto">
      <a href="https://Wa.me/3157317717" target="_blank">
        <button className="hover:opacity-70 transition duration-500 bg-[#111112]/30 border border-2 text-2xl lg:text-3xl border w-50  cursor-pointer flex gap-4 ">
          <p className="font-bold my-4 mx-auto text-white">{text}</p>
        </button>
      </a>
    </div>
  );
}

export default bgButton;
