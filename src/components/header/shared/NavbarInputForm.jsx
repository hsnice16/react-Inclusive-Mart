const NavbarInputForm = () => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
    }}
    className="navbar-form"
  >
    <input type="text" placeholder="search for product" />
    <button type="submit">
      <i className="fas fa-search"></i>
    </button>
  </form>
);

export { NavbarInputForm };
