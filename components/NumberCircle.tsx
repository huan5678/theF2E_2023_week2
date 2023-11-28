interface NumberCircleProps {
  number: number;
  className?: string;
}

const NumberCircle = ({number, className}: NumberCircleProps) => {
  return (
    <div
      className={`grid place-content-center h-6 w-6 py-1 px-1 rounded-[50%] text-white ${className}`}
    >
      {number}
    </div>
  );
};

export default NumberCircle;
