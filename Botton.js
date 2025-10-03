const Botton = ({ onClick, children, ...props }) => (
  <button onClick={onClick} {...props}>
    {children}
  </button>
);

export default Botton;
