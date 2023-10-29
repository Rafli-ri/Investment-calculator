import React, { useState } from "react";
import img from "../assets/img.svg";

const defaultValue = {
  "current-savings": 10000,
  "yearly-saving": 1200,
  "expected-interest": 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(defaultValue);

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(userInput);
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(userInput);
  };

  const inputChangeHandler = (input, value) => {
    // console.log(input, value);
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <>
      <div className="flex justify-center flex-col">
        <img src={img} alt="" className=" h-48 w-96 my-10 mx-auto" />
        <div className="w-full max-w-lg shadow-lg p-4  flex justify-center rounded-lg bg-white mx-auto">
          <h1 className=" text-blue-700 font-bold">Calculator Investment</h1>
        </div>
        <div className="w-full max-w-lg shadow-lg p-6 flex justify-center rounded-lg bg-white mx-auto">
          <form onSubmit={submitHandler}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="current-savings"
                >
                  Current Saving
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(event) =>
                    inputChangeHandler("current-savings", event.target.value)
                  }
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="current-savings"
                  type="number"
                  defaultValue={userInput["current-savings"]}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="yearly-saving"
                >
                  Yearly Saving
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(event) =>
                    inputChangeHandler("yearly-saving", event.target.value)
                  }
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="yearly-saving"
                  type="number"
                  defaultValue={userInput["yearly-saving"]}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="expected-interest"
                >
                  Expected Interest (%, per year)
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(event) =>
                    inputChangeHandler("expected-interest", event.target.value)
                  }
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="expected-interest"
                  type="number"
                  defaultValue={userInput["expected-interest"]}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="duration"
                >
                  Investment Duration (years)
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  onChange={(event) =>
                    inputChangeHandler("duration", event.target.value)
                  }
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="duration"
                  type="number"
                  defaultValue={userInput["duration"]}
                />
              </div>
            </div>

            <div className="flex content-end">
              <div className="md:w-1/3"></div>
              <button
                className="bg-indigo-600 text-[16px] text-white font-bold  px-6 hover:bg-indigo-800 py-2 rounded-md"
                type="submit"
              >
                Calculate
              </button>
              <button
                onClick={resetHandler}
                className="bg-transparent hover:bg-indigo-500 text-blue-dark font-semibold hover:text-white py-2 px-4 border border-indigo-500 mx-2 hover:border-transparent rounded-md"
                type="reset"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserInput;
