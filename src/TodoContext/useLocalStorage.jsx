import React from "react";

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: "Hacer los deberes de todos los dias", completed: true },
//   { text: "Los amigos", completed: false },
//   { text: "Leer", completed: true },
//   { text: "Vivir", completed: false },
//   { text: "Volver", completed: false },
//   { text: "Usar estados derivado", completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
        console.log("Holis");
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
