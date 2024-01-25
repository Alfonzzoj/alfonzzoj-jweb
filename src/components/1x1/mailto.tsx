export const Mailto: React.FC = () => {
  return (
    <a
      // style="display: grid; place-items: center; height: 100%; width: 100%"
      className="widget x1_y1 mailto interactive"
      href="mailto:jesusalfonzo97@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width="1rem"
        height="1rem"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        className="href-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
      </svg>

      <svg
        className="small__icon"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
      </svg>
    </a>
  );
};
