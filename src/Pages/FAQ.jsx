import FaqLine from "../Components/Faq/FaqAnsewar";
import FaqAnsewar from "../Components/Faq/FaqAnsewar";

function FAQ() {
  return (
    <div className="w-screen flex  ">
      <div className="w-[45%] relative bg-black  ">
        <div className="  h-fit">
          <FaqLine
            text="عندي خلل في الشبكة "
            color="bg-indigo-300"
            status={false}
          />
          <FaqLine
            text="عندي خلل في الشبكة "
            color="bg-indigo-500"
            status={true}
          />
          <FaqLine
            text="عندي خلل في الشبكة "
            color="bg-indigo-300"
            status={false}
          />
          <FaqLine
            text="عندي خلل في الشبكة "
            color="bg-indigo-300"
            status={false}
          />
          <FaqLine
            text="عندي خلل في الشبكة "
            color="bg-indigo-300"
            status={false}
          />
        </div>
      </div>
      <div className="w-[45%] ">
        <FaqAnsewar />
      </div>
    </div>
  );
}

export default FAQ;
