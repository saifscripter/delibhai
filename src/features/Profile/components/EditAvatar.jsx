import { AiFillCamera } from "react-icons/ai";
import { GiResize } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { EditOption } from "./EditOption";

export const EditAvatar = ({
  onFileChoose,
  handleEdit,
  showResize,
  removeImage,
  cropData,
  edit,
}) => {
  const options = [
    {
      icon: <GiResize />,
      text: "ছবি রিসাইজ",
      type: "button",
      onClick: showResize,
      show: Boolean(cropData),
    },
    {
      icon: <AiFillCamera />,
      text: "ছবি আপলোড",
      type: "file",
      onChange: onFileChoose,
      show: true,
    },
    {
      icon: <RiDeleteBin5Fill />,
      text: "ছবি ডিলিট করুন",
      type: "button",
      onClick: removeImage,
      show: Boolean(cropData),
    },
  ];

  return (
    <>
      <div
        onClick={handleEdit}
        className={`top-0 bottom-0 left-0 right-0 bg-black  z-40  transition-opacity ${
          edit ? "fixed opacity-40" : "hidden opacity-0"
        }`}
      ></div>
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-xl transition-transform ${
          edit ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className={`w-10 h-1 bg-accent rounded-full mx-auto mt-2`}></div>
        <div className="py-7 flex flex-col gap-2">
          {options.map(
            ({ icon, text, type, onChange, onClick, show }, index) =>
              show && (
                <EditOption
                  key={index}
                  icon={icon}
                  text={text}
                  type={type}
                  onChange={onChange}
                  onClick={onClick}
                  show={show}
                />
              )
          )}
        </div>
      </div>
    </>
  );
};
