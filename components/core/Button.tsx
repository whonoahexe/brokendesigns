const Button = ({ type, isActive = true, text, disabled, classname, onClick }: ButtonProps) => {
  const activePrimary = `border-2 border-white-primary rounded-full px-6 py-3 bg-accent-primary ${classname}`;
  const inactive = `border-2 border-black rounded-full px-6 py-3 ${classname}`;

  const buttonClass = isActive ? activePrimary : inactive;

  return (
    <button type={type} disabled={disabled} className={`${buttonClass} hover:bg-opacity-75 transition-all duration-150 ease-in-out-def ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={onClick}>
        <span className="text-white-primary">{text}</span>
    </button>
  )
}
 
export default Button;
