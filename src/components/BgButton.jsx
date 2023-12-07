function bgButton({ text }) {
  return (
    <div className="mx-auto">
      <button className="hover:opacity-70 transition duration-500 bg-[#111112]/30 border border-2 text-2xl lg:text-3xl border w-50  cursor-pointer flex gap-4 ">
        <a href="https://Wa.me/3157317717" target="_blank">
          <p className="font-bold my-4 mx-auto text-white">{text}</p>
        </a>
      </button>
    </div>
  );
}

export default bgButton;
