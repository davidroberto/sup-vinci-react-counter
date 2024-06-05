import { useState } from "react";

const Faq = () => {
  const [hasClicked, setHasClicked] = useState(null);

  const handleQuestionClick = (e, id) => {
    setHasClicked(id);
  };

  return (
    <section>
      <div>
        <p onClick={(e) => handleQuestionClick(e, 1)}>Est ce le golf est intéressant à regarder ?</p>

        {hasClicked === 1 && <p>Bof</p>}
      </div>

      <div>
        <p onClick={(e) => handleQuestionClick(e, 2)}>Est ce le golf est intéressant à regarder ?</p>

        {hasClicked === 2 && <p>Bof</p>}
      </div>

      <div>
        <p onClick={(e) => handleQuestionClick(e, 3)}>Est ce le golf est intéressant à regarder ?</p>

        {hasClicked === 3 && <p>Bof</p>}
      </div>
    </section>
  );
};

export default Faq;
