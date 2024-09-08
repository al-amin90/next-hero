"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    console.log(res.data.meals);
    setMeals(res.data.meals);

  };

  const handler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };


  return (
    <div>
      <input
        className="p-4 outline-none border text-slate-900"
        type="text"
        onChange={handler}
        placeholder="search meal"
      />
      <button onClick={() => loadData()} className="bg-red-500 p-4 btn">Search</button>

      <div className="mt-12 grid grid-cols-3 gap-12">
        {meals?.map((meal) => (
            <div key={meal.idMeal} className="border-2 p-4">
                <Image src={meal.strMealThumb} width={500} height={500} alt={meal.strMealThumb}/>
                <h3>{meal.strMeal}</h3>
                <p>{meal.strInstructions}</p>
            </div>
        )) }
      </div>
    </div>
  );
};

export default Meals;
