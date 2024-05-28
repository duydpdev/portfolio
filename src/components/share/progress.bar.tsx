import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarCustom = ({ completed }: { completed: number }) => {
  return (
    <>
      <ProgressBar
        completed={completed}
        bgColor={"#333"}
        height="8px"
        isLabelVisible={false}
      />
    </>
  );
};

export { ProgressBarCustom as ProgressBar };
