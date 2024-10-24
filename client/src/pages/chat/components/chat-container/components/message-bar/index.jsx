import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";

const MessageBar = () => {
  const emojiRef = useRef(null); // Ref for the emoji picker
  const buttonRef = useRef(null); // Ref for the emoji button
  const [message, setMessage] = useState("");
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  // useEffect is a hook that runs after the first render and every update
  // handleClickOutside is a function that checks if the emojiRef is clicked or not
  // document.addEventListener listens for the mousedown event
  // the return statement removes the event listener when the component is unmounted
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the clicked element is neither the emoji picker nor the button
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setEmojiPickerOpen(false); // Close emoji picker
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [emojiRef, buttonRef]);

  // handleEmoji is a function that takes an emoji as an argument and sets the message state to the current message plus the emoji
  const handleEmoji = (emoji) => {
    setMessage((msg) => msg + emoji.emoji);
  };

  const handleMessage = async () => {
    // Logic to handle sending the message
  };

  return (
    <div className="h-[10vh] bg-[#1c1d25] flex justify-center items-center px-8 mb-6 gap-6">
      <div className="flex-1 flex bg-[#2a2b33] rounded-md items-center gap-5 pr-5">
        <input
          type="text"
          className="flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none"
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all">
          <GrAttachment className="text-lg" />
        </button>
        <div className="relative">
          <button
            ref={buttonRef} // Reference to the emoji button
            className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all"
            onClick={() => setEmojiPickerOpen((prev) => !prev)} // Toggle emoji picker
          >
            <RiEmojiStickerLine className="text-xl" />
          </button>
          {emojiPickerOpen && ( // Conditionally render emoji picker
            <div className="absolute bottom-16 right-0" ref={emojiRef}>
              <EmojiPicker
                theme="dark"
                onEmojiClick={handleEmoji}
                autoFocusSearch={false}
              />
            </div>
          )}
        </div>
      </div>
      <button
        className="bg-[#8417ff] rounded-md flex items-center justify-center p-5 focus:border-none hover:bg-[#741dba] focus:bg-[#741dba] focus:outline-none focus:text-white duration-300 transition-all"
        onClick={handleMessage}
      >
        <IoSend className="text-xl" />
      </button>
    </div>
  );
};

export default MessageBar;
