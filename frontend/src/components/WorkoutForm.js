import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [car, setCar] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const workout = { title, car, load, reps, price };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setCar("");
      setLoad("");
      setReps("");
      setPrice("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  let currentDate = new Date().toJSON().slice(0, 10);

  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a Carwash Plan</h3>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes("title") ? "error" : ""}
        />

        <label>Type of car:</label>
        <input
          type="text"
          onChange={(e) => setCar(e.target.value)}
          value={car}
          className={emptyFields.includes("car") ? "error" : ""}
        />
        <label>Wash Plan price you would like:</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className={emptyFields.includes("load") ? "error" : ""}
        />
        <label>Duration (in months):</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className={emptyFields.includes("reps") ? "error" : ""}
        />
        <br />
        {/* <h1>{price}</h1> */}
        <label>Choose a carwash plan:</label>
        <select
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={emptyFields.includes("price") ? "error" : ""}
        >
          <option></option>
          <option value="$25">$25 - Gold</option>
          <option value="$29">$29 - Platinum</option>
          <option value="$35">$35 - Elite</option>
          <option value="$40">$40 - Elite w/ Ceramic</option>
        </select>

        <br />
        <br />
        <button>Add Carwash</button>
        {error && <div className="error">{error}</div>}
        <p>Current date: {currentDate}</p>
      </form>
    </>
  );
};

export default WorkoutForm;
