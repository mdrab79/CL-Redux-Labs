import counter from "./counter";
import bankApp from "./bankApp";

// Tego pliku nie musisz modyfikować
// Po uruchomieniu skryptu `npm start` powinieneś zobaczyć w przeglądarce aplikację bankApp
// W konsoli natomiast powinny pojawić się komunikaty z aplikacji counterApp
counter();
bankApp.start(document.querySelector("#root"));
