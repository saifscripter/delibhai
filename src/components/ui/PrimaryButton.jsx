// eslint-disable-next-line react/prop-types
export default function PrimaryButton({ value, icon, className, ...props }) {
  return (
    <button
      className={`bg-secondary text-white text-xl font-bold font-inter rounded-lg px-8 py-2 shadow flex justify-center items-center gap-5 ${className}`}
      {...props}>
      {value && <span>{value}</span>}
      <span className='text-2xl'>{icon}</span>
    </button>
  );
}
