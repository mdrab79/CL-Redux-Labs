# 1. Licznik z UI w React
Zaimplementuj prostą aplikację licznika. Aplikacja ma składać się z prostego reducera, który przechowuje liczbę. Niech wartością początkową będzie `0`.

Reducer powinien reagować na akcje: `INCREMENT` oraz `DECREMENT`. Zaimplementuj je w pliku `redux/actions.js`. Sam reducer powinien znaleźć się w pliku `redux/reducers.js`.

Plik `reducers.js` będzie nam potrzebny przy następnych zadaniach. Dlatego zamiast eksportować jeden reducer, wyeksportuj wynik łączenia reducerów używając funkcji `combineReducers`.

Reducer od licznika powinien znajdować się w polu `counter`.

Stwórz komponent prezentacyjny, w pliku `components/Counter`.  Ma on wyświetlać wartość licznika, przekazaną pod propsem `value` w tagu `h1`. 
Dodatkowo wyrendreduj dwa przyciski. Wpisz do nich odpowiedni tekst `+` - dla przycisku zwiększającego licznik, `-` - dla przycisku zmniejszającego licznik.
Powinny one wołać odpowienie metody `increment` oraz `decrement` przekazane jako props.

Następnie w pliku `containers/Counter` utwórz komponent kontenerowy. Przemapuj odpowiednio stan oraz `dispatch` na propsy tak aby odpowiadały API komponentu prezentacyjnego.

W pliku `apps/Counter` znajdziesz wrapper aplikacji. Aby ją przetestować wizualnie możesz w pliku `index.js` zamiast komponentu `Main` podpiąć ten z `apps/Counter`.

# 2. Filtrowanie artykułów
Zaimplementuj prostą aplikację do filtrowania artykułów. Aplikacja powinna składać się z elementu `<select>` w którym będzie można wybrać rodzaj filtra:

- all
- backend
- frontend

W pliku `redux/reducers.js` dodaj nowy reducer pod polem `articles`. Ustaw jego stan początkowy na:

```json
{
  filter: "all",
  list: [
    { title: "Pierwsze kroki z reduxem", category: "frontend" },
    { title: "JAVA to nie JavaScript", category: "backend" },
    { title: "CSS to moja pasja", category: "frontend" }
  ]
}
```

Reducer powinien reagować na akcję `CHANGE_FILTER`, którą zaimplementuj w pliku `redux/actions.js` wraz z kreatorem akcji, który jako parametr będzie przyjmował wartość filtra (all, frontend, backend).

Zaimplementuj komponent prezentacyjny w pliku `components/Articles`. Jego struktura powinna wyglądać następująco:
```html
<div>
    <select>
        <option>all</option>
        <option>backend</option>
        <option>frontend</option>
    </select>
    <ul>
        <li>Pierwsze kroki z reduxem</li>
        <li>JAVA to nie JavaScript</li>
        <li>CSS to moja pasja</li>
    </ul>
</div>
```

Oczywiście lista artykułów, pod `ul` powinna być dynamiczna i zmieniać się na podstawie zaznaczonego filtra.

W pliku `containers/Articles` zaimplementuj komponent kontenerowy. Tak zmapuj stan na propsy aby przekazać tylko odfiltrowane artykuły.
Dodatkowo w `mapDispatchToProps` przekaż funkcję, która zmieni stan filtra. Nazwij ją jako `changeFilter` i pod taką nazwą przekaż do komponentu prezentacyjnego.

Wizualny efekt swojej pracy możesz podejrzeć modyfikując plik `index.js` - podobnie jak w zadaniu 1. Podmień `Main` na `ArticlesFilter` z folderu `apps`.

# 3. Lista zakupów wraz z kolejnością
Zaimplementuj aplikację realizującą listę zakupów. Aplikacja powinna składać się:

- z elementu `input`, do którego możemy wpisać nazwę produktu.
- z przycisku "Dodaj produkt". Po jego naciśnięciu produkt ma zostać dodany do listy
- z listy produktów. Każdy produkt reprezentowany jest na liście poprzez jego nazwę oraz dwa przyciski `up` i `down` zmieniające kolejność elementu na liście.

Do realizacji zadania należy zaimplementować:

- reducer w pliku `redux/reducers.js`, pod polem `products`. Reducer powinien reagować na akcje `ADD_PRODUCT` i `CHANGE_ORDER`.
- akcje wraz z action creators w pliku `redux/actions.js`
- komponent prezentacyjny w pliku `components/ShoppingList`

Jego przykładowy output HTML:

```html
<div>
    <div>
        <input type="text">
        <button>Dodaj produkt</button>
    </div>
    <div>
        <ol>
            <li><button>up</button><button>down</button>jajka</li>
        </ol>
    </div>
</div>
```

Oczywiście lista `ol` powinna być dynamiczna i bazować na elementach znajdujących się w stanie.

Jego `propTypes` wyglądają następująco:

```json
{
 changeOrder: function,
 addProduct: function,
 production: array
}
```

Zaimplementuj komponent kontenerowy, tak aby spełniał on założenia z propTypes.

Wizualny efekt swojej pracy możesz podejrzeć modyfikując plik `index.js` - podobnie jak w zadaniu 1. Podmień `Main` na `ShoppingList` z folderu `apps`.

# 4. Router - łączymy w całość
W pliku `apps/Main.js` zaimplementuj router, który wyświetli poprzednio zaimplementowane aplikacje pod odpowiednimi ścieżkami:

- `/counter` - licznik
- `/articles` - filtrowanie artykułów
- `/list` - lista zakupów

Zaimplementuj menu nawigacji:

- Counter - powinien przekierować do aplikacji licznika
- Articles - aplikacja z artykułami
- Shopping List - aplikacja z listą zakupów

Dodatkowo zaimplementuj prosty komponent `Hello` w pliku `components/Hello`, w którym wyświetlisz wiadomość:

```html
<h1>Witaj! Wybierz aplikację</h1>
```

Zadbaj też o obsłużenie niepoprawnej ścieżki (404). Wyświetl wtedy komponent `components/NotFound` w którym wyświetlisz wiadomość:

```html
<h1>Nie znaleziono strony</h1>
```

W pliku `app.gif` możesz zobaczyć jak powinien wyglądać efekt końcowy.
