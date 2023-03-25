import { Store, Effect } from "prixjs";

export default function Home() {
    const [count, setCount, updater] = Store(1, 2);

    Effect(() => {
      console.log(500);
    }, []);

    updater(() => {
      console.log('changed');
    });

    return (
     `
      <div class="body">
        <div class="blob"></div>
        <h1 class="title">PrixJS</h1>
        <p class="description">Start with your project!</p>
        <p class="code">Edit src/app/index.js</p>
        <p class="description">Prix is currently in beta. Any bugs/suggestions are welcome on our GitHub.</p>
      </div>
    `)
}
