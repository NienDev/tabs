import { useState } from "react";
export default function Experience({ data }) {
  const log = console.log;
  const [order, setOrder] = useState(0);
  log(data);
  const companies = [...new Set(data.map((item) => item.company))];

  function handleClick(company) {
    setOrder(companies.indexOf(company));
  }
  return (
    <main className="bg-white p-8 rounded-xl shadow-xl container mx-auto text-center my-16">
      <div className="mb-12">
        <h2 className="font-bold">Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="flex flex-col lg:flex-row text-left justify-around">
        <div className="mb-12 lg:mb-0 flex flex-row lg:flex-col gap-6  lg:gap-6">
          {companies.map((company, i) =>
            i == order ? (
              <button className="active lg:w-full uppercase text-xl tracking-widest">
                {company}
              </button>
            ) : (
              <button
                onClick={() => handleClick(company)}
                className="lg:w-full uppercase text-xl tracking-widest"
              >
                {company}
              </button>
            )
          )}
        </div>
        <div className="max-w-4xl">
          <h3>{data[order].title}</h3>
          <div className="bg-gray w-fit px-4 rounded-sm uppercase font-bold text-color tracking-widest mb-2">
            {data[order].company}
          </div>
          <div className="text-lg spacing text-color mb-6">
            {data[order].dates}
          </div>
          {data[order].duties.map((duty) => (
            <div className="flex items-center gap-8 mb-6">
              <i class="fa-solid fa-angles-right text-primary"></i>
              <p className="mb-0">{duty}</p>
            </div>
          ))}
        </div>
      </div>
      <a
        href="#"
        className="text-xl font-semibold bg-primary text-light px-12 pb-2 rounded-md shadow-md"
      >
        More Info
      </a>
    </main>
  );
}
