import { ExpenseType } from "../../types/expense";
import Button from "../ui/Button";

type ExpenseItemProps = {
  expenses: ExpenseType[];
  setExpenses: (expenses: ExpenseType[]) => void;
};

const ExpenseItem = ({ expenses, setExpenses }: ExpenseItemProps) => {
  const handleDelete = (index: number) => {
    console.log("delete");
    expenses.splice(index, 1);
    setExpenses([...expenses]);
  };

  return (
    <div>
      {expenses.map((expense, index) => (
        <div key={index} className="bg-slate-100 p-4 rounded-md mb-1">
          {expense.amount}€
          <Button
            text="Delete"
            variant="danger"
            onClick={() => handleDelete(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default ExpenseItem;
