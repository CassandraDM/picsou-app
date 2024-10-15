import { useEffect, useState } from "react";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import ExpenseItem from "./components/expense/ExpenseItem";
import { ExpenseType } from "./types/expense";

const App = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [expenseInput, setExpenseInput] = useState<number | null>(null);

  useEffect(() => {
    console.log("Component mounted");
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const response = await fetch("expenses.json");
    const data = await response.json();
    console.log(data);
    setExpenses(data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expenseInput) return;
    console.log("form submitted");
    const expense = {
      amount: expenseInput,
      category: "default",
    };
    setExpenses([...expenses, expense]);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Exemple : 300€"
            className="mr-4"
            type="number"
            setValue={setExpenseInput}
          />
          <Input
            placeholder="Exemple : Alimentation"
            className="mr-4"
            type="text"
            setValue={setExpenseInput}
          />
          <Button text="Ajouter" type="submit" />
        </form>
      </div>
      <div>
        <ExpenseItem expenses={expenses} setExpenses={setExpenses} />
      </div>
    </>
  );
};

export default App;
