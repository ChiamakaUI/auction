
const Modal = ({ children, bgColor }) => {
  return (
    <div className={`z-50 w-full h-full ${bgColor} fixed top-0 left-0`}>
      {children}
    </div>
  );
};

export default Modal;
