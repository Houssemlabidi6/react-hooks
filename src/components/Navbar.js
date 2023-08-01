import React from "react";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <button class="navbar-brand" href="#">
          <img
            src="https://i.pinimg.com/originals/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg"
            alt="..."
            height="36"
          />
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button class="nav-link active" aria-current="page" href="#">
                Home
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link" href="#">
                Link
              </button>
            </li>
            <li class="nav-item dropdown">
              <button
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <button class="dropdown-item" href="#">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" href="#">
                    Another action
                  </button>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <button class="dropdown-item" href="#">
                    Something else here
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
