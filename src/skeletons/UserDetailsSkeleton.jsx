const Skeleton = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 dark:bg-gray-700 ${className}`}
    ></div>
  );
};

export default Skeleton;
