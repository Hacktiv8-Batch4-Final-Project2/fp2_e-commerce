import React from "react";

const Footer = () => {
 
  return (
    <footer className="bg-dark pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full px-4 font-medium text-slate-300 md:w-1/3">
            <h3 className="mb-2 text-2xl font-bold">RCTN-KM007</h3>
            <p>Mochammad Iqbal Saputra - 013</p>
            <p>Dani Rizky Zaelani - 020</p>
            <p>Dirham Triyadi - 021</p>
          </div>
          <div className="mb-12 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-white">Resource</h3>
            <ul className="text-slate-300">
              <li>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-base hover:text-primary">
                  NextJS
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-base hover:text-primary">
                  TailwindCSS
                </a>
                </li>
                <li>
                <a href="https://daisyui.com/" target="_blank" rel="noreferrer noopener" className="mb-3 inline-block text-base hover:text-primary">
                  DaisyUi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
