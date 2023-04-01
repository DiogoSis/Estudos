

const Form = ({ onSubmit }) => {
  const safeSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="h-full w-full px-5 pt-52 flex flex-col items-center gap-10 -mt-25 mx-5"
    >
   
      <input type="text" className="sete-input" required placeholder="Insira seu nome..." />
      <input type="email" className="sete-input" placeholder="Insira seu e-mail..." />
      <buttom
        type="submit"
        className="py-2 px-6 w-full max-w-sm bg-sete-100 dark:bg-dark-100 rounded-full text-dark-100 dark:text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black-100 cursor-pointer"
      >
        Seguir
      </buttom>
    </form>
  );
};

export default Form;
