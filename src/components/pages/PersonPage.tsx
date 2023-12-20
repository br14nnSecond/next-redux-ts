import { useState } from "react";

//utils
import { useAppDispatch, useAppSelector } from "@/utils/redux/hooks";
import {
  IPersonState,
  changeName,
  changeAge,
  changeGender,
} from "@/utils/redux/features/person/personSlice";

export default function PersonPage() {
  const person = useAppSelector((state) => state.person);
  const dispatch = useAppDispatch();

  const [personDetails, setPersonDetails] = useState<IPersonState>({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (name === "name") {
      return dispatch(changeName(value));
    }

    if (name === "age") {
      return dispatch(changeAge(Number(value)));
    }

    if (name === "gender") {
      return dispatch(changeGender(value as "Male" | "Female" | ""));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(person);

    setPersonDetails({
      ...person,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <form
        onSubmit={handleSubmit}
        className="flex h-fit w-fit flex-col gap-4 text-black"
      >
        <input
          className="px-3 py-1"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={person.name}
        />
        <input
          className="px-3 py-1"
          id="age"
          name="age"
          type="number"
          placeholder="Age"
          onChange={handleChange}
          value={person.age}
        />
        <div className="flex flex-row gap-8 text-white">
          <label className="flex flex-row gap-2">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            <span>Male</span>
          </label>

          <label className="flex flex-row gap-2">
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            <span>Female</span>
          </label>
        </div>

        <button
          className="rounded bg-green-500 px-4 py-2 font-bold text-white"
          type="submit"
        >
          Submit
        </button>
      </form>

      <p className="font-bold text-white">
        Name: <span className="font-normal">{personDetails.name}</span>
      </p>
      <p className="font-bold text-white">
        Age: <span className="font-normal">{personDetails.age}</span>
      </p>
      <p className="font-bold text-white">
        Gender: <span className="font-normal">{personDetails.gender}</span>
      </p>
    </main>
  );
}
