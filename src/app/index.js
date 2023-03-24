import { Store, Effect } from "prixjs";

export default function Home() {
    const [count, setCount, updater] = Store(1, 2);

    Effect(() => {
      console.log(500);
    }, []);

    updater(() => {
      console.log('changed');
    });

    return `
      <ul>
        <h1>Counter: ${count}</h1>
      </ul>
      `
}